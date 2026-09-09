"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { generateReport, ReportData } from "@/lib/report";
import { FileDown, Loader2, CheckCircle } from "lucide-react";
import TossCheckout from "@/components/TossCheckout";
import PortOneCheckout from "@/components/PortOneCheckout";

const PRICE = 2900;

function ReportPageInner() {
    const searchParams = useSearchParams();
    const tool = (searchParams.get("tool") ?? "baby") as "baby" | "english" | "brand";

    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [birthDate, setBirthDate] = useState("");
    const [birthTime, setBirthTime] = useState("12:00");
    const [loading, setLoading] = useState(false);
    const [paid, setPaid] = useState(false);
    const [report, setReport] = useState<ReportData | null>(null);
    const [showCheckout, setShowCheckout] = useState(false);

    // 결제 성공 후 돌아온 경우 (?paid=1&orderId=...) — 리포트 바로 생성
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("paid") === "1") {
            const saved = sessionStorage.getItem("reportForm");
            if (saved) {
                const f = JSON.parse(saved);
                setLastName(f.lastName || "");
                setGender(f.gender || "male");
                setBirthDate(f.birthDate || "");
                setBirthTime(f.birthTime || "12:00");
                const data = generateReport(f.lastName || "김", f.gender || "male", f.birthDate, f.birthTime || "12:00");
                setReport(data);
                setPaid(true);
                sessionStorage.removeItem("reportForm");
                history.replaceState(null, "", "/naming/report");
            }
        }
    }, []);

    function handlePay() {
        // 폼 저장 후 토스 결제위젯 표시 (위젯에서 requestPayment → success URL)
        sessionStorage.setItem("reportForm", JSON.stringify({ lastName, gender, birthDate, birthTime }));
        setShowCheckout(true);
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 px-5 py-8 pb-32 max-w-[480px] mx-auto w-full">
                <div className="mb-6 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mb-2">
                        Premium Report
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900">사주작명 상세 리포트</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        내 사주 오행에 맞는 이름 <strong>20개 + 심층 해설 5건 + PDF</strong>
                    </p>
                    <p className="mt-1 text-sm font-bold text-amber-600">
                        {PRICE.toLocaleString()}원{" "}
                        <span className="text-xs text-gray-400 line-through">3,900원</span>
                    </p>
                </div>

                {!paid && (
                    <div className="space-y-3 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <div>
                            <label className="text-xs font-bold text-gray-600 block mb-1">성</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="예: 김"
                                className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-600 block mb-1">성별</label>
                            <div className="grid grid-cols-2 gap-2">
                                {(["male", "female"] as const).map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setGender(g)}
                                        className={`rounded-xl py-2.5 text-sm font-bold border transition-colors ${
                                            gender === g
                                                ? "bg-amber-500 text-white border-amber-500"
                                                : "bg-white text-gray-500 border-gray-200"
                                        }`}
                                    >
                                        {g === "male" ? "남성" : "여성"}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-600 block mb-1">생년월일</label>
                            <input
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="w-full rounded-xl border border-gray-200 p-3"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-600 block mb-1">태어난 시간</label>
                            <input
                                type="time"
                                value={birthTime}
                                onChange={(e) => setBirthTime(e.target.value || "12:00")}
                                className="w-full rounded-xl border border-gray-200 p-3"
                            />
                            <p className="text-[10px] text-gray-400 mt-1">시간을 모르시면 12:00으로 두셔도 됩니다.</p>
                        </div>

                        {showCheckout ? (
                            process.env.NEXT_PUBLIC_PORTONE_STORE_ID ? (
                                <PortOneCheckout
                                    customerName={lastName + " 고객"}
                                    onApproved={() => {
                                        const params = new URLSearchParams(window.location.search);
                                        const f = JSON.parse(sessionStorage.getItem("reportForm") || "{}") || {};
                                        setLastName(f.lastName || "");
                                        setGender(f.gender || "male");
                                        setBirthDate(f.birthDate || "");
                                        setBirthTime(f.birthTime || "12:00");
                                        const data = generateReport(f.lastName || "김", f.gender || "male", f.birthDate, f.birthTime || "12:00");
                                        setReport(data);
                                        setPaid(true);
                                        setShowCheckout(false);
                                    }}
                                />
                            ) : (
                                <TossCheckout
                                    customerName={lastName + " 고객"}
                                    onApproved={() => setPaid(true)}
                                />
                            )
                        ) : (
                            <button
                                onClick={handlePay}
                                disabled={!birthDate || loading}
                                className="w-full rounded-xl bg-amber-500 p-4 font-bold text-white disabled:opacity-40 hover:bg-amber-600 transition-colors"
                            >
                                {loading ? (
                                    <Loader2 size={18} className="inline animate-spin" />
                                ) : null}
                                결제하기 ({PRICE.toLocaleString()}원)
                            </button>
                        )}
                        <p className="text-[10px] text-gray-400 text-center">
                            디지털 상품 특성상 결제 후 환불이 어렵습니다. · 본 리포트는 재미와 참고용입니다.
                        </p>
                    </div>
                )}

                {paid && report && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl p-3">
                            <CheckCircle size={16} className="text-green-600" />
                            <span className="text-sm font-bold text-green-700">결제 완료 — 리포트가 생성되었습니다</span>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-5">
                            <h2 className="font-bold text-gray-800">내 사주 요약</h2>
                            <p className="mt-1 text-sm text-gray-600">
                                {report.saju.year.ganKo}{report.saju.year.jiKo}년 · 일간 기준{" "}
                                <b>{report.recommendedKorean}</b> 보완형 · 균형도 {report.balanceScore}/100
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-bold text-gray-800 text-sm">🏆 추천 TOP 5 (심층 해설)</h3>
                            {report.top5.map((c) => (
                                <div key={c.name + c.hanja} className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-gray-900">{c.name}</span>
                                        <span className="text-amber-600 font-bold text-sm">{c.score}점</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-0.5">{c.hanja}</p>
                                    <p className="mt-2 text-xs text-gray-600 leading-relaxed">{c.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-gray-800 text-sm">전체 후보 20개</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {report.candidates.map((c, i) => (
                                    <div key={c.name + i} className="flex justify-between items-center rounded-lg border border-gray-100 bg-white px-3 py-2">
                                        <span className="text-xs font-medium text-gray-700 truncate">{c.name}</span>
                                        <span className="text-[10px] text-amber-600 font-bold">{c.score}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => window.print()}
                            className="w-full rounded-xl bg-gray-900 p-4 font-bold text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                        >
                            <FileDown size={18} /> PDF 저장하기
                        </button>
                        <p className="text-center text-[10px] text-gray-400">{report.disclaimer}</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default function ReportPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">로딩 중...</div>}>
            <ReportPageInner />
        </Suspense>
    );
}

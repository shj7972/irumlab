"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { generateReport, ReportData } from "@/lib/report";
import { FileDown, Loader2, CheckCircle } from "lucide-react";

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

    function handlePay() {
        // v1: 결제 SDK 없이 시뮬레이션 — TODO: 토스페이먼츠 위젯 연동
        // 실제 연동 시: loadTossPayments(NEXT_PUBLIC_TOSS_CLIENT_KEY) → requestPayment
        // → 성공 콜백에서 서버 승인 검증(토스 시크릿키) → 리포트 생성
        setLoading(true);
        setTimeout(() => {
            const data = generateReport(lastName || "김", gender, birthDate, birthTime);
            setReport(data);
            setPaid(true);
            setLoading(false);
        }, 800);
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

                        <button
                            onClick={handlePay}
                            disabled={!birthDate || loading}
                            className="w-full rounded-xl bg-amber-500 p-4 font-bold text-white disabled:opacity-40 hover:bg-amber-600 transition-colors"
                        >
                            {loading ? (
                                <Loader2 size={18} className="inline animate-spin" /> + " 처리 중..."
                            ) : (
                                `결제하고 리포트 받기 (${PRICE.toLocaleString()}원)`
                            )}
                        </button>
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

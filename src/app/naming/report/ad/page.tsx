"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import KakaoAdFit from "@/components/KakaoAdFit";
import { generateReport, ReportData } from "@/lib/report";
import { trackCtaClick } from "@/lib/analytics";
import { FileDown, CheckCircle, Sparkles } from "lucide-react";

/**
 * 광고 시청형 리포트 (무료) — 2026-09-09 현종님 제안 채택
 * 결제(PG 심사) 대신 광고 시청으로 리포트 잠금 해제:
 *   [1] 유료 결과 화면의 ReportCTA → [2] 이 페이지: 15초 카운트다운 + KakaoAdFit 노출
 *   → [3] 완료 후 리포트 전체 공개
 * 수익 모델: PG 수수료(2,900원의 3.4%) 대신 광고 노출 1회당 애드핏 수익
 */

const REQUIRED_SECONDS = 15;

function ReportAdInner() {
    const searchParams = useSearchParams();
    // 기존 /naming/report 폼에서 넘어온 정보 (쿼리 or sessionStorage)
    const lastName = searchParams.get("lastName") || sessionStorage.getItem("reportForm_lastName") || "김";
    const birthDate = searchParams.get("birthDate") || sessionStorage.getItem("reportForm_birthDate") || "";
    const birthTime = searchParams.get("birthTime") || sessionStorage.getItem("reportForm_birthTime") || "12:00";
    const gender = searchParams.get("gender") || sessionStorage.getItem("reportForm_gender") || "male";

    const [phase, setPhase] = useState<"ad" | "done" | "no-input">(birthDate ? "ad" : "no-input");
    const [remaining, setRemaining] = useState(REQUIRED_SECONDS);
    const [report, setReport] = useState<ReportData | null>(null);
    const adShownRef = useRef(false);

    // 카운트다운 — 15초 후 잠금 해제
    useEffect(() => {
        if (phase !== "ad") return;
        if (!adShownRef.current) {
            adShownRef.current = true;
            trackCtaClick("report_ad_unlock_start", "naming/report/ad");
        }
        const interval = setInterval(() => {
            setRemaining((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setPhase("done");
                    trackCtaClick("report_ad_unlock_complete", "naming/report/ad");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [phase]);

    // 완료 시 리포트 생성
    useEffect(() => {
        if (phase === "done" && !report) {
            setReport(generateReport(lastName || "김", gender, birthDate, birthTime));
        }
    }, [phase, report, lastName, gender, birthDate, birthTime]);

    if (phase === "no-input") {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="flex-1 px-5 py-16 max-w-[480px] mx-auto text-center">
                    <p className="text-sm text-gray-600 mb-4">생년월일 정보가 없습니다.</p>
                    <a href="/naming/report" className="inline-block rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white">
                        처음으로 돌아가기
                    </a>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 px-5 py-8 pb-32 max-w-[480px] mx-auto w-full">
                {phase === "ad" && (
                    <div className="text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold mb-2">
                            AD REPORT
                        </span>
                        <h1 className="text-2xl font-bold text-gray-900">광고 시청 후 리포트 열람</h1>
                        <p className="mt-2 text-sm text-gray-500">
                            아래 광고가 <strong>{REQUIRED_SECONDS}초</strong> 표시되면<br />
                            사주작명 리포트를 <strong>무료</strong>로 확인할 수 있습니다.
                        </p>

                        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <KakaoAdFit />
                            <div className="mt-6">
                                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-amber-500">
                                    <Sparkles size={28} className="text-amber-400" />
                                    {remaining}
                                    <span className="text-base text-gray-400 font-medium">초 남음</span>
                                </div>
                                <div className="mt-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-amber-500 transition-all duration-1000"
                                        style={{ width: `${((REQUIRED_SECONDS - remaining) / REQUIRED_SECONDS) * 100}%` }}
                                    />
                                </div>
                            </div>
                            <p className="mt-4 text-[10px] text-gray-400">
                                광고가 로드되지 않아도 시간이 지나면 열람됩니다.
                            </p>
                        </div>
                    </div>
                )}

                {phase === "done" && report && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl p-3">
                            <CheckCircle size={16} className="text-green-600" />
                            <span className="text-sm font-bold text-green-700">열람 완료 — 리포트가 준비되었습니다</span>
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

export default function ReportAdPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">로딩 중...</div>}>
            <ReportAdInner />
        </Suspense>
    );
}

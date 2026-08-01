"use client";

import { useState, useEffect, useRef } from "react";
import { Lock, RefreshCcw, CheckCircle } from "lucide-react";
import Link from "next/link";
import { NamingResult } from "@/lib/naming";
import { Saju, OhaengDistribution } from "@/lib/saju";
import PremiumAnalysis from "./PremiumAnalysis";
import ShareButtons from "./ShareButtons";
import ShareImageCard from "./ShareImageCard";
import { trackPremiumUnlockStart, trackPremiumUnlockComplete, trackNamingResultView } from "@/lib/analytics";

interface ResultContentProps {
    freeNames: NamingResult[];
    lockedNames: NamingResult[];
    saju: Saju;
    distribution: OhaengDistribution;
    recommendedElement: string;
    lastName?: string;
}

export default function ResultContent({ freeNames, lockedNames, saju, distribution, recommendedElement, lastName = "김" }: ResultContentProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isAdPlaying, setIsAdPlaying] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [tracked, setTracked] = useState(false);
    const adInsRef = useRef<HTMLElement | null>(null);

    // 광고 카운트다운 타이머
    useEffect(() => {
        if (!isAdPlaying) return;
        setCountdown(5);

        // KakaoAdFit 재실행 트리거 (페이지 내 동적 삽입된 ins 요소 처리)
        const timer = setTimeout(() => {
            try {
                const win = window as Window & { kakaoAdFit?: { reload: () => void } };
                if (win.kakaoAdFit) win.kakaoAdFit.reload();
            } catch { /* ignore */ }
        }, 100);

        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsAdPlaying(false);
                    setIsUnlocked(true);
                    trackPremiumUnlockComplete();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [isAdPlaying]);

    if (!tracked) {
        trackNamingResultView("baby");
        setTracked(true);
    }

    const handleUnlock = () => {
        trackPremiumUnlockStart();
        setIsAdPlaying(true);
    };

    return (
        <>
            <div className="px-5 mt-6">
                <h2 className="text-lg font-bold text-gray-800 flex items-center justify-between mb-4">
                    <span>추천 이름 TOP 3</span>
                    <span className="text-xs font-normal text-gray-400 bg-white px-2 py-1 rounded-full border border-gray-100 shadow-sm">
                        무료 공개
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {freeNames.map((result, idx) => (
                        <div key={`free-${idx}`} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all h-full flex flex-col">
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy" />

                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-1">
                                        {result.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light">
                                        {result.hanja}
                                    </p>
                                </div>
                                <div className="bg-gray-50 text-gray-500 text-xs px-2 py-1 rounded font-medium">
                                    추천 {idx + 1}
                                </div>
                            </div>

                            <div className="space-y-2 mb-4 flex-1">
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {result.meaning}
                                </p>
                                <p className="text-xs text-gray-400 bg-gray-50 p-2.5 rounded-lg leading-relaxed">
                                    💡 {result.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50 mt-auto">
                                {result.tags.map(tag => (
                                    <span key={tag} className="text-[10px] text-brand-navy bg-blue-50 px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LOCKED Names List */}
            <div className="px-5 mt-8 space-y-4">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    {isUnlocked ? <CheckCircle size={18} className="text-green-500" /> : <Lock size={18} className="text-brand-gold" />}
                    <span>프리미엄 추천 이름</span>
                    <span className="text-xs font-normal text-gray-500">
                        (+{lockedNames.length})
                    </span>
                </h2>

                <div className="relative">
                    {/* If Not Unlocked, show blur wrapper */}
                    {!isUnlocked && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-50 blur-sm select-none pointer-events-none" aria-hidden="true">
                            {lockedNames.map((result, idx) => (
                                // Mock Skeleton for blurred look
                                <div key={`locked-mock-${idx}`} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-40">
                                    <div className="h-8 w-24 bg-gray-200 rounded mb-2" />
                                    <div className="h-4 w-full bg-gray-100 rounded mb-1" />
                                    <div className="h-4 w-2/3 bg-gray-100 rounded" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Unlock CTA Overlay */}
                    {!isUnlocked && !isAdPlaying && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
                            <div className="bg-gray-900/90 text-white p-6 rounded-2xl text-center w-full max-w-sm shadow-2xl backdrop-blur-sm border border-gray-700">
                                <div className="w-12 h-12 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                                    <Lock size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-1">히든 이름 2개 더 보기</h3>
                                <p className="text-gray-300 text-xs mb-4">
                                    짧은 광고를 시청하면<br />
                                    <strong>숨겨진 프리미엄 이름</strong>과 <strong>상세 풀이</strong>가 공개됩니다.
                                </p>
                                <button
                                    onClick={handleUnlock}
                                    className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded-xl text-sm hover:bg-yellow-500 transition-colors shadow-lg active:scale-95 transform"
                                >
                                    광고 보고 무료로 확인하기
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Ad Playing Overlay — 실제 KakaoAdFit 배너 광고 표시 */}
                    {isAdPlaying && (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-sm rounded-2xl">
                            {/* 타이틀 */}
                            <div className="text-center mb-4">
                                <p className="text-white font-bold text-base mb-1">광고 시청 중</p>
                                <p className="text-gray-400 text-xs">프리미엄 이름을 무료로 확인할 수 있어요</p>
                            </div>

                            {/* KakaoAdFit 배너 — 320×100 */}
                            <div
                                className="w-full flex justify-center items-center bg-gray-900 rounded-xl overflow-hidden"
                                style={{ minHeight: 108 }}
                                aria-label="광고"
                            >
                                <ins
                                    ref={adInsRef as React.Ref<HTMLModElement>}
                                    className="kakao_ad_area"
                                    style={{ display: "none" }}
                                    data-ad-unit="DAN-49Y2jYXPDMcFaJr7"
                                    data-ad-width="320"
                                    data-ad-height="100"
                                />
                            </div>

                            {/* 광고주 표시 */}
                            <p className="text-gray-600 text-[10px] mt-1 mb-4">광고</p>

                            {/* 카운트다운 */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10">
                                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                                        <circle cx="18" cy="18" r="15" fill="none" stroke="#374151" strokeWidth="3" />
                                        <circle
                                            cx="18" cy="18" r="15"
                                            fill="none"
                                            stroke="#d4af37"
                                            strokeWidth="3"
                                            strokeDasharray={`${(countdown / 5) * 94.2} 94.2`}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                                        {countdown}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    {countdown}초 후 자동 공개됩니다
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Actual Content (Revealed when unlocked) */}
                    {isUnlocked && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {lockedNames.map((result, idx) => (
                                <div key={`locked-${idx}`} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 relative overflow-hidden group hover:shadow-md transition-shadow ring-2 ring-brand-gold/20 flex flex-col h-full">
                                    <div className="absolute top-0 right-0 px-3 py-1 bg-brand-gold text-white text-xs font-bold rounded-bl-xl">
                                        Premium
                                    </div>
                                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />

                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-1">
                                                {result.name}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-light">
                                                {result.hanja}
                                            </p>
                                        </div>
                                        <div className="bg-orange-50 text-orange-600 text-xs px-2 py-1 rounded font-medium">
                                            히든 추천 {idx + 1}
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4 flex-1">
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                            {result.meaning}
                                        </p>
                                        <p className="text-xs text-gray-400 bg-gray-50 p-2.5 rounded-lg leading-relaxed">
                                            💡 {result.description}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 pt-2 mt-auto border-t border-gray-50 hidden md:flex">
                                        {result.tags.map(tag => (
                                            <span key={tag} className="text-[10px] text-brand-navy bg-blue-50 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Premium Analysis Section (Unlocked Only) */}
            {isUnlocked && (
                <div className="px-5">
                    <PremiumAnalysis saju={saju} distribution={distribution} recommendedElement={recommendedElement} />
                </div>
            )}

            {/* Share & Action */}
            <div className="px-5 mt-10 mb-12 flex flex-col items-center gap-5">
                {/* 이미지 카드 공유 */}
                {freeNames.length > 0 && (
                    <ShareImageCard
                        data={{
                            type: "baby",
                            lastName,
                            name: freeNames[0].name.replace(lastName, ""),
                            hanja: freeNames[0].hanja,
                            meaning: freeNames[0].meaning,
                            element: recommendedElement,
                            tags: freeNames[0].tags,
                        }}
                    />
                )}

                {/* 링크 공유 */}
                <ShareButtons
                    title="AI 사주 작명 결과 - 이룸랩"
                    description="사주명리학 기반 AI가 추천한 최고의 이름을 확인해 보세요!"
                    type="naming"
                />
                <Link
                    href="/naming"
                    className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-gray-600 transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                >
                    <RefreshCcw size={14} />
                    <span>처음부터 다시하기</span>
                </Link>
            </div>
        </>
    );
}

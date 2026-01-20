"use client";

import { useState } from "react";
import { Lock, RefreshCcw, CheckCircle, Play } from "lucide-react";
import Link from "next/link";
import { NamingResult } from "@/lib/naming";
import { Saju, OhaengDistribution } from "@/lib/saju";
import PremiumAnalysis from "./PremiumAnalysis";

interface ResultContentProps {
    freeNames: NamingResult[];
    lockedNames: NamingResult[];
    saju: Saju;
    distribution: OhaengDistribution;
    recommendedElement: string;
}

export default function ResultContent({ freeNames, lockedNames, saju, distribution, recommendedElement }: ResultContentProps) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isAdPlaying, setIsAdPlaying] = useState(false);

    const handleUnlock = () => {
        setIsAdPlaying(true);

        // Simulate Ad Duration (3 seconds)
        setTimeout(() => {
            setIsAdPlaying(false);
            setIsUnlocked(true);
        }, 3000);
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

                    {/* Ad Playing Overlay */}
                    {isAdPlaying && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
                            <div className="bg-black text-white p-6 rounded-2xl text-center w-full h-full flex flex-col items-center justify-center backdrop-blur-lg bg-opacity-90">
                                <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin mb-4" />
                                <p className="text-lg font-bold mb-2">광고 재생 중...</p>
                                <p className="text-sm text-gray-400">잠시만 기다려주세요 (3초)</p>
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

            {/* Action */}
            <div className="px-5 mt-10 mb-12 text-center">
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

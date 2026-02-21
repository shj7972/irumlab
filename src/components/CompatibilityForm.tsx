"use client";

import { useState } from "react";
import { Heart, Sparkles, RotateCcw, ArrowRight } from "lucide-react";
import { analyzeCompatibility, CompatibilityResult } from "@/lib/compatibility";
import { trackCompatibilityCheck } from "@/lib/analytics";
import ShareButtons from "./ShareButtons";
import Link from "next/link";

const GRADE_COLORS: Record<string, { bg: string; text: string; ring: string }> = {
    SS: { bg: "bg-red-50", text: "text-red-600", ring: "ring-red-200" },
    S: { bg: "bg-pink-50", text: "text-pink-600", ring: "ring-pink-200" },
    A: { bg: "bg-orange-50", text: "text-orange-600", ring: "ring-orange-200" },
    B: { bg: "bg-yellow-50", text: "text-yellow-600", ring: "ring-yellow-200" },
    C: { bg: "bg-gray-50", text: "text-gray-600", ring: "ring-gray-200" },
};

const GRADE_LABELS: Record<string, string> = {
    SS: "천생연분",
    S: "최고의 궁합",
    A: "좋은 궁합",
    B: "보통 궁합",
    C: "노력형 궁합",
};

function ScoreBar({ label, value }: { label: string; value: number }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs">
                <span className="text-gray-500 font-medium">{label}</span>
                <span className="text-gray-800 font-bold">{value}점</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-pink-400 to-red-400 rounded-full transition-all duration-1000"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}

export default function CompatibilityForm() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [relation, setRelation] = useState("couple");
    const [result, setResult] = useState<CompatibilityResult | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name1.trim() || !name2.trim()) return;
        trackCompatibilityCheck();
        const analysis = analyzeCompatibility(name1.trim(), name2.trim());
        setResult(analysis);
    };

    const handleReset = () => {
        setName1("");
        setName2("");
        setResult(null);
    };

    if (result) {
        const colors = GRADE_COLORS[result.grade] || GRADE_COLORS.C;
        const gradeLabel = GRADE_LABELS[result.grade] || "궁합 분석";

        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Score Card */}
                <div className={`rounded-3xl p-8 text-center ${colors.bg} ring-1 ${colors.ring}`}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-lg font-bold text-gray-900">{name1}</span>
                        <Heart size={20} className="text-red-400 fill-red-400" />
                        <span className="text-lg font-bold text-gray-900">{name2}</span>
                    </div>

                    <div className={`text-6xl font-bold ${colors.text} mb-2`}>
                        {result.score}
                        <span className="text-2xl">점</span>
                    </div>

                    <div className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-bold ring-1 ${colors.ring}`}>
                        {result.grade} - {gradeLabel}
                    </div>
                </div>

                {/* Score Details */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <h3 className="font-bold text-gray-900 text-sm">상세 분석</h3>
                    <ScoreBar label="획수 조화" value={result.strokeScore} />
                    <ScoreBar label="음운오행 조화" value={result.phoneticScore} />
                </div>

                {/* Harmony / Conflict */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                        <h4 className="text-xs font-bold text-green-700 mb-2">상생 관계</h4>
                        {result.harmonies.length > 0 ? (
                            <ul className="space-y-1">
                                {result.harmonies.map((h, i) => (
                                    <li key={i} className="text-xs text-green-600">{h}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-xs text-green-500">-</p>
                        )}
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                        <h4 className="text-xs font-bold text-red-700 mb-2">상극 관계</h4>
                        {result.conflicts.length > 0 ? (
                            <ul className="space-y-1">
                                {result.conflicts.map((c, i) => (
                                    <li key={i} className="text-xs text-red-600">{c}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-xs text-red-400">없음</p>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        {result.description}
                    </p>
                    <p className="text-sm text-brand-navy font-medium leading-relaxed">
                        {result.advice}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-4 pt-4">
                    <ShareButtons
                        title={`${name1} ❤️ ${name2} 이름 궁합: ${result.score}점!`}
                        description={`${gradeLabel}! 나도 이름 궁합 테스트 해보기`}
                        type="naming"
                    />
                    <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-gray-600 transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                    >
                        <RotateCcw size={14} />
                        <span>다시 하기</span>
                    </button>
                </div>

                {/* Cross-sell */}
                <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-2xl p-5 text-center text-white">
                    <p className="text-sm text-blue-200 mb-2">이름이 마음에 안 드시나요?</p>
                    <Link
                        href="/naming"
                        className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-yellow-400 transition-colors"
                    >
                        <Sparkles size={14} />
                        <span>AI로 새 이름 짓기</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Relation Type */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">관계</label>
                <div className="grid grid-cols-3 gap-2">
                    {[
                        { value: "couple", label: "연인/부부" },
                        { value: "parent", label: "부모-자녀" },
                        { value: "friend", label: "친구/동료" },
                    ].map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => setRelation(opt.value)}
                            className={`py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                                relation === opt.value
                                    ? "border-pink-400 bg-pink-50 text-pink-700"
                                    : "border-gray-100 text-gray-400 hover:border-gray-200"
                            }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Name 1 */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">
                    첫 번째 이름
                </label>
                <input
                    type="text"
                    required
                    placeholder="예: 김서준"
                    className="w-full text-lg border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pink-400 transition-colors placeholder:text-gray-300 bg-transparent"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                />
            </div>

            {/* Heart Divider */}
            <div className="flex items-center justify-center py-2">
                <Heart size={24} className="text-pink-300" />
            </div>

            {/* Name 2 */}
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-800">
                    두 번째 이름
                </label>
                <input
                    type="text"
                    required
                    placeholder="예: 이하윤"
                    className="w-full text-lg border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pink-400 transition-colors placeholder:text-gray-300 bg-transparent"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-pink-200 hover:shadow-xl transition-all active:scale-[0.98] mt-4"
            >
                <span className="flex items-center justify-center gap-2">
                    <Heart size={20} className="fill-white" />
                    궁합 분석하기
                </span>
            </button>
        </form>
    );
}

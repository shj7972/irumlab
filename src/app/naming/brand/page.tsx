"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Rocket, ShoppingBag, Coffee, Laptop, Sparkles, User, Briefcase, Zap, Store, ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INDUSTRIES = [
    { id: "tech", label: "IT / 테크", icon: Laptop },
    { id: "cafe", label: "카페 / 요식업", icon: Coffee },
    { id: "fashion", label: "패션 / 뷰티", icon: ShoppingBag },
    { id: "general", label: "기타 / 일반", icon: Store },
];

const TARGETS = [
    { id: "teens", label: "10대" },
    { id: "2030f", label: "2030 여성" },
    { id: "2030m", label: "2030 남성" },
    { id: "40plus", label: "40대 이상" },
    { id: "all", label: "전연령" },
];

export default function BrandNamingPage() {
    const router = useRouter();

    // Essential
    const [industry, setIndustry] = useState("tech");
    const [keywords, setKeywords] = useState("");
    const [target, setTarget] = useState("2030f");

    // Optional (Detailed)
    const [showDetails, setShowDetails] = useState(false);

    // Saju Info
    const [birthDate, setBirthDate] = useState("");
    const [birthTime, setBirthTime] = useState("");

    // Preferences
    const [langPref, setLangPref] = useState("mix"); // kor, eng, mix
    const [vibePref, setVibePref] = useState("modern"); // modern, friendly, luxury

    const handleSubmit = () => {
        const query = new URLSearchParams({
            industry,
            keywords,
            target,
            birthDate,
            birthTime,
            langPref,
            vibePref
        }).toString();

        router.push(`/naming/brand/result?${query}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col px-6 py-8 pb-32 max-w-[480px] mx-auto w-full">
                <div className="mb-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-2">
                        Premium Branding
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900 leading-snug">
                        성공을 부르는<br />
                        <span className="text-indigo-600">브랜드 네이밍</span>
                    </h1>
                    <p className="text-gray-500 text-sm mt-2">
                        비즈니스의 성공은 이름에서 시작됩니다.<br />
                        AI가 정밀 분석하여 최적의 이름을 제안합니다.
                    </p>
                </div>

                {/* Industry Section */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Briefcase size={16} />
                        업종 선택 <span className="text-indigo-600">*</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {INDUSTRIES.map((item) => {
                            const Icon = item.icon;
                            const isSelected = industry === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setIndustry(item.id)}
                                    className={`p-4 rounded-xl flex items-center gap-3 transition-all ${isSelected
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                                            : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="font-bold text-sm">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Keywords Section */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Zap size={16} />
                        핵심 키워드 <span className="text-indigo-600">*</span>
                    </h2>
                    <input
                        type="text"
                        placeholder="예: 커피, 힐링, 바다 (쉼표 구분)"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
                    />
                </section>

                {/* Target Audience */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <User size={16} />
                        주 타겟 고객층 <span className="text-indigo-600">*</span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {TARGETS.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTarget(t.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${target === t.id
                                        ? "bg-indigo-100 text-indigo-700 ring-1 ring-indigo-500"
                                        : "bg-white text-gray-500 border border-gray-200"
                                    }`}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Advanced Options Accordion */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="flex items-center justify-between w-full py-2 group"
                    >
                        <span className="font-bold text-gray-800 flex items-center gap-2">
                            ✨ 상세 옵션 (선택)
                        </span>
                        <ChevronDown size={20} className={`transform transition-transform text-gray-400 group-hover:text-indigo-600 ${showDetails ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                        {showDetails && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 space-y-6 pb-2">
                                    {/* 1. Founder Saju */}
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="bg-yellow-100 text-yellow-700 p-1 rounded">📅</span>
                                            <span className="font-bold text-sm text-gray-700">대표자 생년월일 (사주 매칭)</span>
                                        </div>
                                        <p className="text-xs text-gray-400 mb-3 leading-relaxed">
                                            대표자의 사주 기운을 분석하여 부족한 오행을 채워주는 이름을 제안합니다. (사업운 상승)
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <input
                                                type="date"
                                                value={birthDate}
                                                onChange={(e) => setBirthDate(e.target.value)}
                                                className="p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
                                            />
                                            <input
                                                type="time"
                                                value={birthTime}
                                                onChange={(e) => setBirthTime(e.target.value)}
                                                className="p-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    {/* 2. Language & Vibe */}
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="bg-purple-100 text-purple-700 p-1 rounded">🎨</span>
                                            <span className="font-bold text-sm text-gray-700">스타일 설정</span>
                                        </div>

                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-xs text-gray-500 block mb-1.5 font-medium">언어 선호도</label>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {[{ id: 'kor', l: '한글' }, { id: 'eng', l: '영어' }, { id: 'mix', l: '혼합' }].map(o => (
                                                        <button key={o.id} onClick={() => setLangPref(o.id)}
                                                            className={`py-2 text-xs rounded border ${langPref === o.id ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-bold' : 'bg-gray-50 border-transparent text-gray-500'}`}
                                                        >
                                                            {o.l}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-xs text-gray-500 block mb-1.5 font-medium">분위기</label>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {[{ id: 'modern', l: '모던/세련' }, { id: 'friendly', l: '친근/따뜻' }, { id: 'luxury', l: '고급/프리미엄' }].map(o => (
                                                        <button key={o.id} onClick={() => setVibePref(o.id)}
                                                            className={`py-2 text-xs rounded border ${vibePref === o.id ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-bold' : 'bg-gray-50 border-transparent text-gray-500'}`}
                                                        >
                                                            {o.l}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-md border-t border-gray-100 max-w-[480px] mx-auto z-10">
                <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl font-bold text-lg shadow-lg bg-indigo-600 text-white shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    <Sparkles size={20} className="text-indigo-200" />
                    <span>AI 고급 분석 시작하기</span>
                </button>
            </div>
        </div>
    );
}

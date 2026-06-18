"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { Youtube, Sparkles, Zap, Heart, Hash, ChevronRight } from "lucide-react";

const CONTENT_TYPES = [
    { id: "gaming", label: "게임/방송", icon: Zap, examples: ["PixelKing", "StreamerAce", "PlayZone", "GGMaster", "LevelUp"] },
    { id: "vlog", label: "브이로그/일상", icon: Heart, examples: ["DailyLuna", "VibeMood", "LifeLog", "Wanderer", "BloomDays"] },
    { id: "info", label: "정보/교육", icon: Sparkles, examples: ["KnowItAll", "BrainWave", "InfoByte", "LearnHub", "MindBox"] },
    { id: "unique", label: "개성/유니크", icon: Hash, examples: ["ChaosCat", "ZoomPop", "GlitchTV", "NoodleTV", "WarpZone"] },
];

const CHANNEL_TIPS = [
    { title: "검색에 강한 채널명", desc: "2~3음절의 짧고 간결한 이름이 유튜브 검색과 입소문에 유리합니다. 'TV', 'Tube', 'Lab' 등을 붙이면 채널임을 직관적으로 알릴 수 있습니다." },
    { title: "확장성 있는 이름", desc: "너무 특정 콘텐츠에 한정된 이름은 나중에 콘텐츠 방향이 바뀔 때 불편합니다. 조금 넓은 개념의 이름을 선택하세요." },
    { title: "SNS와 통일", desc: "인스타그램, X(트위터) 계정명과 같은 이름을 사용하면 팬들이 쉽게 찾을 수 있습니다. 채널명 확정 전 다른 플랫폼 가용 여부를 확인하세요." },
];

export default function YoutubeEnglishNamingPage() {
    const router = useRouter();
    const [contentType, setContentType] = useState("gaming");
    const [keywords, setKeywords] = useState("");

    const handleGenerate = () => {
        const query = new URLSearchParams({
            platform: "youtube",
            gender: "neutral",
            styles: contentType,
            keywords,
        }).toString();
        router.push(`/naming/english/result?${query}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 px-5 py-8 pb-36 max-w-[520px] mx-auto w-full">

                {/* Hero */}
                <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-6 mb-8 text-white text-center shadow-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3 py-1 text-xs font-bold text-white mb-4">
                        <Youtube size={12} />
                        YouTube Channel Name Creator
                    </div>
                    <h1 className="text-2xl font-bold leading-snug mb-3">
                        유튜브 채널명 추천<br />
                        <span className="text-yellow-300">구독자가 기억하는</span> 이름
                    </h1>
                    <p className="text-red-100 text-sm leading-relaxed">
                        검색이 잘 되고 팬들이 기억하기 쉬운<br />
                        나만의 유튜브 채널명을 AI로 만들어보세요.
                    </p>
                </div>

                {/* 콘텐츠 유형 선택 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">채널 콘텐츠 유형 선택</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {CONTENT_TYPES.map((type) => {
                            const Icon = type.icon;
                            const isSelected = contentType === type.id;
                            return (
                                <button
                                    key={type.id}
                                    onClick={() => setContentType(type.id)}
                                    className={`p-4 rounded-xl text-left transition-all border ${isSelected
                                        ? "bg-red-600 text-white border-transparent shadow-lg"
                                        : "bg-white text-gray-600 border-gray-100 hover:border-red-200"}`}
                                >
                                    <Icon size={20} className={`mb-2 ${isSelected ? "text-red-200" : "text-gray-400"}`} />
                                    <div className="font-bold text-sm">{type.label}</div>
                                    <div className={`text-[10px] mt-1 font-mono ${isSelected ? "text-red-200" : "text-gray-400"}`}>
                                        예: {type.examples[0]}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* 예시 채널명 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">채널명 예시</h2>
                    <div className="flex flex-wrap gap-2">
                        {CONTENT_TYPES.find(t => t.id === contentType)?.examples.map(name => (
                            <span key={name} className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                                {name}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 키워드 입력 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">키워드 입력 (선택)</h2>
                    <input
                        type="text"
                        placeholder="예: 요리, 여행, 공부 (한글/영어 가능)"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white shadow-sm font-medium"
                    />
                </section>

                {/* 채널명 팁 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">좋은 유튜브 채널명의 조건</h2>
                    <div className="space-y-3">
                        {CHANNEL_TIPS.map((tip) => (
                            <div key={tip.title} className="bg-white rounded-xl p-4 border border-gray-100">
                                <div className="font-bold text-sm text-gray-800 mb-1">{tip.title}</div>
                                <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SEO 텍스트 */}
                <section className="mb-7 bg-gray-50 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed space-y-3">
                    <h2 className="font-bold text-gray-800">유튜브 채널명 추천이란?</h2>
                    <p>유튜브 채널명은 콘텐츠의 첫인상이자 브랜드입니다. 기억하기 쉽고 검색이 잘 되는 영어 채널명은 구독자 확보에 직접적인 영향을 미칩니다. 이룸랩 AI가 콘텐츠 유형과 키워드를 분석해 나만의 유일한 유튜브 채널명을 즉시 추천해 드립니다.</p>
                </section>

                {/* 관련 링크 */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">관련 서비스</h2>
                    <div className="space-y-2">
                        <Link href="/naming/english" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-red-200 transition-all group">
                            <span className="text-sm font-bold text-gray-700 group-hover:text-red-500">전체 영어 닉네임 제조기</span>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-red-400" />
                        </Link>
                        <Link href="/naming/brand" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-red-200 transition-all group">
                            <span className="text-sm font-bold text-gray-700 group-hover:text-red-500">브랜드 네이밍 서비스</span>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-red-400" />
                        </Link>
                    </div>
                </section>
            </main>

            {/* Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-md border-t border-gray-100 max-w-[520px] mx-auto z-10">
                <button
                    onClick={handleGenerate}
                    className="w-full py-4 rounded-xl font-bold text-lg shadow-lg bg-red-600 text-white hover:bg-red-700 transition-all active:scale-[0.98]"
                >
                    채널명 생성하기 ▶
                </button>
            </div>
        </div>
    );
}

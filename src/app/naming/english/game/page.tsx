"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { Gamepad2, Zap, Shield, Swords, ChevronRight, Sparkles } from "lucide-react";

const GAME_STYLES = [
    { id: "cool", label: "강렬한/다크", icon: Zap, examples: ["ShadowViper", "DarkWolf", "VoidWalker", "IronGhost", "StormRider"] },
    { id: "mythic", label: "신화/역사", icon: Shield, examples: ["Ares77", "Thor99", "Fenrir0", "Odin", "Valkyrie"] },
    { id: "tactical", label: "전술/군사", icon: Swords, examples: ["Ghost", "Bravo", "Delta", "Recon", "Ranger"] },
    { id: "aesthetic", label: "감성/유니크", icon: Sparkles, examples: ["Eclipse", "Phantom", "Nemesis", "Wraith", "Cipher"] },
];

const GENRE_TIPS = [
    { genre: "MOBA (롤, 도타2)", tip: "전략과 실력을 강조하는 단어. Viper, Shadow, Phantom 같은 단일 강한 단어가 인기.", color: "bg-blue-50 border-blue-200 text-blue-800" },
    { genre: "배틀로얄 (배그, 에이펙스)", tip: "생존과 사냥을 연상시키는 단어. Hunter, Apex, Predator, Sniper, Reaper 계열.", color: "bg-green-50 border-green-200 text-green-800" },
    { genre: "FPS (발로란트, CS2)", tip: "빠른 반응과 정밀함을 강조. Flash, Blitz, Swift, Zero, Null, Cipher 스타일.", color: "bg-orange-50 border-orange-200 text-orange-800" },
];

export default function GameEnglishNamingPage() {
    const router = useRouter();
    const [keywords, setKeywords] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("cool");

    const handleGenerate = () => {
        const query = new URLSearchParams({
            platform: "game",
            gender: "neutral",
            styles: selectedStyle,
            keywords,
        }).toString();
        router.push(`/naming/english/result?${query}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 px-5 py-8 pb-36 max-w-[520px] mx-auto w-full">

                {/* Hero */}
                <div className="bg-gradient-to-br from-gray-900 to-purple-950 rounded-3xl p-6 mb-8 text-white text-center shadow-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-bold text-purple-300 mb-4">
                        <Gamepad2 size={12} />
                        Game Nickname Creator
                    </div>
                    <h1 className="text-2xl font-bold leading-snug mb-3">
                        게임 영어 닉네임<br />
                        <span className="text-purple-300">AI가 즉시 제조</span>해 드립니다
                    </h1>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        롤, 배그, 발로란트, 오버워치 등<br />
                        장르별 최강 닉네임을 무료로 생성하세요.
                    </p>
                </div>

                {/* Style Selection */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">닉네임 스타일 선택</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {GAME_STYLES.map((style) => {
                            const Icon = style.icon;
                            const isSelected = selectedStyle === style.id;
                            return (
                                <button
                                    key={style.id}
                                    onClick={() => setSelectedStyle(style.id)}
                                    className={`p-4 rounded-xl text-left transition-all border ${isSelected
                                        ? "bg-gray-900 text-white border-gray-700 shadow-lg"
                                        : "bg-white text-gray-600 border-gray-100 hover:border-gray-300"}`}
                                >
                                    <Icon size={20} className={`mb-2 ${isSelected ? "text-purple-400" : "text-gray-400"}`} />
                                    <div className="font-bold text-sm">{style.label}</div>
                                    <div className={`text-[10px] mt-1 font-mono ${isSelected ? "text-purple-300" : "text-gray-400"}`}>
                                        예: {style.examples[0]}, {style.examples[1]}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* 예시 닉네임 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">선택한 스타일 예시</h2>
                    <div className="flex flex-wrap gap-2">
                        {GAME_STYLES.find(s => s.id === selectedStyle)?.examples.map(name => (
                            <span key={name} className="px-3 py-1.5 rounded-lg bg-gray-900 text-purple-300 text-sm font-mono font-medium shadow-sm">
                                {name}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Keyword Input */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">좋아하는 키워드 (선택)</h2>
                    <input
                        type="text"
                        placeholder="예: 늑대, 어둠, 불꽃 (한글/영어 가능)"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm font-medium"
                    />
                </section>

                {/* 장르별 팁 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">장르별 게임 닉네임 추천 스타일</h2>
                    <div className="space-y-3">
                        {GENRE_TIPS.map((tip) => (
                            <div key={tip.genre} className={`rounded-xl p-4 border ${tip.color}`}>
                                <div className="font-bold text-xs mb-1">{tip.genre}</div>
                                <p className="text-xs leading-relaxed">{tip.tip}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SEO 텍스트 */}
                <section className="mb-7 bg-gray-50 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed space-y-3">
                    <h2 className="font-bold text-gray-800">게임 영어 닉네임 제조기란?</h2>
                    <p>게임에서 닉네임은 첫인상입니다. 강렬하고 독창적인 게임 영어 닉네임은 상대에게 심리적 압박을 주고, 팀원에게 신뢰감을 줍니다. 이룸랩의 AI 게임 닉네임 제조기는 장르별 특성과 원하는 분위기를 분석해 롤, 배그, 발로란트에 어울리는 최적의 영어 닉네임을 즉시 생성합니다.</p>
                    <h2 className="font-bold text-gray-800">좋은 게임 닉네임 공식</h2>
                    <ul className="space-y-1 list-disc list-inside text-xs">
                        <li>[형용사] + [명사]: DarkWolf, SilentBlade, IronGhost</li>
                        <li>[신화 이름] + 숫자: Ares77, Thor99, Fenrir0</li>
                        <li>단일 강한 단어: Phantom, Viper, Eclipse, Nemesis</li>
                        <li>컨셉 기반 조합: NightReaper, VoidWalker, StormRider</li>
                    </ul>
                </section>

                {/* 관련 링크 */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">관련 서비스</h2>
                    <div className="space-y-2">
                        <Link href="/naming/english" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-purple-200 transition-all group">
                            <span className="text-sm font-bold text-gray-700 group-hover:text-purple-600">전체 영어 닉네임 제조기 (모든 플랫폼)</span>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-500" />
                        </Link>
                        <Link href="/blog/game-english-nickname-ideas" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-purple-200 transition-all group">
                            <span className="text-sm font-bold text-gray-700 group-hover:text-purple-600">게임 영어 닉네임 200선 블로그</span>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-500" />
                        </Link>
                    </div>
                </section>
            </main>

            {/* Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-md border-t border-gray-100 max-w-[520px] mx-auto z-10">
                <button
                    onClick={handleGenerate}
                    className="w-full py-4 rounded-xl font-bold text-lg shadow-lg bg-gray-900 text-white hover:bg-gray-800 transition-all active:scale-[0.98]"
                >
                    게임 닉네임 생성하기 ⚡
                </button>
            </div>
        </div>
    );
}

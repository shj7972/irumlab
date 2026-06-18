"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { Instagram, Sparkles, Heart, Sun, ChevronRight } from "lucide-react";

const INSTA_VIBES = [
    {
        id: "aesthetic",
        label: "감성/무드",
        icon: Sparkles,
        examples: ["LunaAura", "VelvetMist", "CelesteDew", "AuroraBell", "IvyBloom"],
        desc: "분위기 있는 감성 계정",
    },
    {
        id: "nature",
        label: "자연 영감",
        icon: Sun,
        examples: ["FernGlow", "WillowDusk", "RiverStone", "EmberBloom", "CedarLeaf"],
        desc: "자연에서 영감받은 이름",
    },
    {
        id: "cute",
        label: "귀여운/친근",
        icon: Heart,
        examples: ["PeachyGlow", "MochiBell", "CottonDew", "HoneyPop", "DaisyBun"],
        desc: "따뜻하고 친근한 이미지",
    },
    {
        id: "minimal",
        label: "미니멀/쿨한",
        icon: Instagram,
        examples: ["Ash", "Nox", "Zen", "Rye", "Dax"],
        desc: "짧고 강렬한 한 단어",
    },
];

const INSTA_TIPS = [
    { tip: "계정 콘셉트와 일치시키세요 — 일상 계정이라면 친근한 이름, 사진 계정이라면 감성적인 이름이 좋습니다." },
    { tip: "2~3음절이 가장 기억하기 좋습니다. 긴 닉네임은 기억에서 빨리 사라집니다." },
    { tip: "숫자 사용은 최소화하세요. 뒤에 숫자나 _를 붙이면 기억하기 어렵습니다." },
    { tip: "구글에 검색해 동명의 유명인이나 브랜드가 없는지 확인하세요." },
];

export default function InstagramEnglishNamingPage() {
    const router = useRouter();
    const [selectedVibe, setSelectedVibe] = useState("aesthetic");
    const [keywords, setKeywords] = useState("");

    const handleGenerate = () => {
        const query = new URLSearchParams({
            platform: "instagram",
            gender: "neutral",
            styles: selectedVibe,
            keywords,
        }).toString();
        router.push(`/naming/english/result?${query}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 px-5 py-8 pb-36 max-w-[520px] mx-auto w-full">

                {/* Hero */}
                <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-6 mb-8 text-white text-center shadow-2xl">
                    <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3 py-1 text-xs font-bold text-white mb-4">
                        <Instagram size={12} />
                        Instagram Nickname Creator
                    </div>
                    <h1 className="text-2xl font-bold leading-snug mb-3">
                        인스타그램 영어 닉네임<br />
                        <span className="text-yellow-200">AI가 감성적으로</span> 추천
                    </h1>
                    <p className="text-pink-100 text-sm leading-relaxed">
                        팔로워를 끌어당기는 세련되고 감성적인<br />
                        나만의 영어 이름을 무료로 만들어보세요.
                    </p>
                </div>

                {/* 분위기 선택 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">계정 분위기 선택</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {INSTA_VIBES.map((vibe) => {
                            const Icon = vibe.icon;
                            const isSelected = selectedVibe === vibe.id;
                            return (
                                <button
                                    key={vibe.id}
                                    onClick={() => setSelectedVibe(vibe.id)}
                                    className={`p-4 rounded-xl text-left transition-all border ${isSelected
                                        ? "bg-gradient-to-br from-pink-500 to-purple-500 text-white border-transparent shadow-lg"
                                        : "bg-white text-gray-600 border-gray-100 hover:border-pink-200"}`}
                                >
                                    <Icon size={20} className={`mb-2 ${isSelected ? "text-pink-200" : "text-gray-400"}`} />
                                    <div className="font-bold text-sm">{vibe.label}</div>
                                    <div className={`text-[10px] mt-1 ${isSelected ? "text-pink-200" : "text-gray-400"}`}>
                                        {vibe.desc}
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
                        {INSTA_VIBES.find(v => v.id === selectedVibe)?.examples.map(name => (
                            <span key={name} className="px-3 py-1.5 rounded-lg bg-pink-50 border border-pink-200 text-pink-700 text-sm font-medium">
                                {name}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 키워드 입력 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">좋아하는 키워드 (선택)</h2>
                    <input
                        type="text"
                        placeholder="예: 달빛, 꽃, 여행 (한글/영어 가능)"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white shadow-sm font-medium"
                    />
                </section>

                {/* 팁 */}
                <section className="mb-7">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">인스타그램 닉네임 만들기 팁</h2>
                    <ul className="space-y-2">
                        {INSTA_TIPS.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                                <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.tip}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* SEO 텍스트 */}
                <section className="mb-7 bg-gray-50 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed space-y-3">
                    <h2 className="font-bold text-gray-800">인스타그램에 어울리는 영어 닉네임</h2>
                    <p>인스타그램은 감성과 심미성이 중요한 플랫폼입니다. 게임용 강렬한 닉네임보다 부드럽고 기억에 남으며 세련된 영어 이름이 팔로워에게 더 좋은 인상을 줍니다. 좋은 인스타그램 영어 닉네임은 계정의 분위기를 결정하는 퍼스널 브랜딩이기도 합니다.</p>
                    <h2 className="font-bold text-gray-800">감성 영어 닉네임 추천 단어</h2>
                    <p className="text-xs">Luna, Lyra, Aurora, Celeste, Iris, Aura, Haze, Mist, Velvet, Serene, Fern, Ivy, Sage, Willow, Bloom, Petal, Frost, Dawn, Dusk...</p>
                </section>

                {/* 관련 링크 */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3">관련 서비스</h2>
                    <div className="space-y-2">
                        <Link href="/naming/english" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-pink-200 transition-all group">
                            <span className="text-sm font-bold text-gray-700 group-hover:text-pink-500">전체 영어 닉네임 제조기 (모든 플랫폼)</span>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-pink-400" />
                        </Link>
                        <Link href="/blog/instagram-english-nickname-ideas" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-pink-200 transition-all group">
                            <span className="text-sm font-bold text-gray-700 group-hover:text-pink-500">인스타그램 영어 닉네임 모음 블로그</span>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-pink-400" />
                        </Link>
                    </div>
                </section>
            </main>

            {/* Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-md border-t border-gray-100 max-w-[520px] mx-auto z-10">
                <button
                    onClick={handleGenerate}
                    className="w-full py-4 rounded-xl font-bold text-lg shadow-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-all active:scale-[0.98]"
                >
                    감성 닉네임 생성하기 ✨
                </button>
            </div>
        </div>
    );
}

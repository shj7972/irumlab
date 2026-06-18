"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { User, Sparkles, Gamepad2, Instagram, Youtube, Hash, Zap, Heart, Monitor, BookOpen, ChevronRight, TrendingUp } from "lucide-react";

const PLATFORMS = [
    { id: "game", label: "게임", icon: Gamepad2, desc: "롤, 배그, 발로란트 등" },
    { id: "instagram", label: "인스타그램", icon: Instagram, desc: "감성, 일상, 부계정" },
    { id: "youtube", label: "유튜브/방송", icon: Youtube, desc: "기억하기 쉬운 채널명" },
    { id: "general", label: "일반/기타", icon: User, desc: "영어 이름, 메신저 등" },
];

const STYLES = [
    { id: "cool", label: "강렬한/쿨한", icon: Zap },
    { id: "aesthetic", label: "감성적인", icon: Sparkles },
    { id: "cute", label: "귀여운/친근한", icon: Heart },
    { id: "funny", label: "재미/유니크", icon: Hash },
];

// 스타일별 예시 닉네임
const EXAMPLE_NICKNAMES: Record<string, { label: string; names: string[] }> = {
    cool: {
        label: "강렬한/쿨한",
        names: ["ShadowViper", "NightReaper", "DarkWolf", "IronGhost", "VoidWalker",
                "StormRider", "Phantom", "Eclipse", "Nemesis", "Wraith"],
    },
    aesthetic: {
        label: "감성적인",
        names: ["LunaAura", "VelvetMist", "CelesteDew", "AuroraBell", "IvyBloom",
                "FernGlow", "MellowRise", "SoleilHaze", "WillowDusk", "PetalDrift"],
    },
    cute: {
        label: "귀여운/친근한",
        names: ["MochiBun", "CottonCloud", "BubblePop", "HoneyBee", "PuffyPaw",
                "CandyBell", "MapleSprout", "TofuPuff", "DaisyPop", "PeachyGlow"],
    },
    funny: {
        label: "재미/유니크",
        names: ["ChaosCookie", "GlitchMaster", "PixelWizard", "NoodleKnight", "ByteBandit",
                "CrispyLord", "WackyFox", "LazyBoss", "SnackyPro", "ZoomZap"],
    },
};

export default function EnglishNamingPage() {
    const router = useRouter();
    const [platform, setPlatform] = useState("game");
    const [gender, setGender] = useState("neutral");
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [keywords, setKeywords] = useState("");
    const [exampleTab, setExampleTab] = useState("cool");

    const toggleStyle = (id: string) => {
        if (selectedStyles.includes(id)) {
            setSelectedStyles(prev => prev.filter(s => s !== id));
        } else {
            if (selectedStyles.length < 2) {
                setSelectedStyles(prev => [...prev, id]);
            }
        }
    };

    const handleSubmit = () => {
        const query = new URLSearchParams({
            platform,
            gender,
            styles: selectedStyles.join(","),
            keywords
        }).toString();
        router.push(`/naming/english/result?${query}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col px-6 py-8 pb-32 max-w-[480px] mx-auto w-full">
                {/* 소셜 증거 배너 */}
                <div className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-xl px-4 py-2.5 mb-6">
                    <TrendingUp size={15} className="text-purple-500 shrink-0" />
                    <p className="text-xs text-purple-700 font-medium">
                        오늘 <span className="font-bold">1,200명 이상</span>이 영어 닉네임을 만들었어요 🔥
                    </p>
                </div>

                <div className="mb-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-2">
                        Advanced Creator
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900 leading-snug">
                        나만의 <span className="text-purple-600">영어 닉네임</span><br />
                        어디서 쓰실 건가요?
                    </h1>
                </div>

                {/* Platform Section */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Monitor size={16} />
                        사용 플랫폼 (필수)
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {PLATFORMS.map((p) => {
                            const Icon = p.icon;
                            const isSelected = platform === p.id;
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => setPlatform(p.id)}
                                    className={`p-4 rounded-xl flex flex-col items-start gap-2 transition-all text-left ${isSelected
                                            ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                                            : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
                                        }`}
                                >
                                    <Icon size={24} className={isSelected ? "text-purple-200" : "text-gray-400"} />
                                    <div>
                                        <span className="font-bold text-sm block">{p.label}</span>
                                        <span className={`text-[10px] ${isSelected ? "text-purple-200" : "text-gray-400"}`}>{p.desc}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Keywords Section */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Hash size={16} />
                        좋아하는 키워드 (선택)
                    </h2>
                    <input
                        type="text"
                        placeholder="예: 고양이, 밤, 힙합 (한글/영어 가능)"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm font-medium"
                    />
                    <p className="text-xs text-gray-400 mt-2 ml-1">
                        * 입력한 키워드를 분석하여 닉네임에 반영합니다.
                    </p>
                </section>

                {/* Style Section */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Sparkles size={16} />
                        선호 스타일 (최대 2개)
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {STYLES.map((style) => {
                            const Icon = style.icon;
                            const isSelected = selectedStyles.includes(style.id);
                            return (
                                <button
                                    key={style.id}
                                    onClick={() => toggleStyle(style.id)}
                                    className={`p-3 rounded-xl flex items-center gap-3 transition-all ${isSelected
                                            ? "bg-purple-50 ring-2 ring-purple-500 text-purple-900"
                                            : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? "bg-purple-200" : "bg-gray-100"}`}>
                                        <Icon size={16} className={isSelected ? "text-purple-700" : "text-gray-500"} />
                                    </div>
                                    <div className="font-bold text-sm">{style.label}</div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Gender Section */}
                <section className="mb-8 opacity-70 hover:opacity-100 transition-opacity">
                    <h2 className="text-sm font-bold text-gray-500 mb-3 flex items-center gap-2">
                        <User size={16} />
                        성별 (선택)
                    </h2>
                    <div className="flex gap-2">
                        {["male", "female", "neutral"].map((g) => (
                            <button
                                key={g}
                                onClick={() => setGender(g)}
                                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${gender === g
                                        ? "bg-gray-800 text-white"
                                        : "bg-white text-gray-400 border border-gray-200"
                                    }`}
                            >
                                {g === "male" ? "남성" : g === "female" ? "여성" : "무관"}
                            </button>
                        ))}
                    </div>
                </section>

                {/* 닉네임 예시 갤러리 */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <Sparkles size={16} />
                        스타일별 닉네임 예시 미리보기
                    </h2>
                    <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                        {Object.entries(EXAMPLE_NICKNAMES).map(([key, val]) => (
                            <button
                                key={key}
                                onClick={() => setExampleTab(key)}
                                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${exampleTab === key
                                    ? "bg-purple-600 text-white"
                                    : "bg-white border border-gray-200 text-gray-500"}`}
                            >
                                {val.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {EXAMPLE_NICKNAMES[exampleTab].names.map((name) => (
                            <span
                                key={name}
                                className="px-3 py-1.5 rounded-lg bg-white border border-purple-100 text-purple-700 text-sm font-mono font-medium shadow-sm"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                    <p className="text-[11px] text-gray-400 mt-2 ml-1">* AI가 생성하는 결과는 매번 새로운 조합으로 달라집니다.</p>
                </section>

                {/* SEO Content Section */}
                <section className="mb-8 mt-4 px-1">
                    <div className="bg-gray-50 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed space-y-4">
                        <div>
                            <h2 className="font-bold text-gray-800 mb-2">영어 닉네임 제조기란?</h2>
                            <p>
                                AI가 나의 성격, 분위기, 플랫폼 용도에 맞는 영어 닉네임을 즉시 만들어주는 무료 서비스입니다.
                                게임용 강렬한 닉네임부터 인스타그램·유튜브용 감성 영어 이름까지, 원하는 스타일로 제조할 수 있습니다.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-bold text-gray-800 mb-2">플랫폼별 영어 닉네임 추천 스타일</h2>
                            <ul className="space-y-1 list-none">
                                <li><span className="font-semibold text-purple-700">게임 닉네임</span> — 롤(LoL), 배틀그라운드(배그), 발로란트 등에서 강렬하고 기억에 남는 영어 닉네임이 유리합니다. Shadow, Void, Storm 계열의 강한 단어가 인기입니다.</li>
                                <li><span className="font-semibold text-pink-600">인스타그램 닉네임</span> — 감성적이고 세련된 영어 이름이 팔로워에게 좋은 인상을 줍니다. Luna, Aura, Velvet 같은 심미적 단어가 잘 어울립니다.</li>
                                <li><span className="font-semibold text-red-500">유튜브/방송 닉네임</span> — 기억하기 쉽고 검색이 잘 되는 2~3음절 영어 닉네임을 추천합니다.</li>
                                <li><span className="font-semibold text-gray-700">영어 이름/메신저</span> — 실제 영어 이름처럼 자연스럽게 쓸 수 있는 닉네임으로, 글로벌 소통에 활용됩니다.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-gray-800 mb-2">좋은 영어 닉네임의 조건</h2>
                            <ul className="space-y-1 list-disc list-inside">
                                <li>발음하기 쉽고 기억에 남는 2~3음절</li>
                                <li>나의 개성과 분위기를 담은 단어 선택</li>
                                <li>플랫폼 규칙에 맞는 글자 수와 특수문자 여부 확인</li>
                                <li>이미 많이 사용된 닉네임은 피하고 독창성 추구</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 관련 블로그 포스트 */}
                <section className="mb-8">
                    <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <BookOpen size={16} />
                        관련 글 더 읽기
                    </h2>
                    <div className="space-y-2">
                        <Link href="/blog/game-english-nickname-ideas" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-purple-200 transition-all group">
                            <div>
                                <span className="text-[10px] font-bold text-purple-600 block mb-0.5">게임 닉네임</span>
                                <span className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors">게임 영어 닉네임 제조기로 만드는 강렬한 닉네임 200선</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-500 shrink-0 ml-2" />
                        </Link>
                        <Link href="/blog/instagram-english-nickname-ideas" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 hover:border-pink-200 transition-all group">
                            <div>
                                <span className="text-[10px] font-bold text-pink-500 block mb-0.5">인스타그램 닉네임</span>
                                <span className="text-sm font-bold text-gray-800 group-hover:text-pink-500 transition-colors">인스타그램 영어 닉네임 추천: 감성적이고 세련된 영어 이름 모음</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-pink-400 shrink-0 ml-2" />
                        </Link>
                    </div>
                </section>
            </main>

            {/* Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-md border-t border-gray-100 max-w-[480px] mx-auto z-10">
                <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl font-bold text-lg shadow-lg bg-purple-600 text-white shadow-purple-200 hover:bg-purple-700 transition-all active:scale-[0.98]"
                >
                    닉네임 생성하기
                </button>
            </div>
        </div>
    );
}

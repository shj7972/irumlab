"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { User, Sparkles, Gamepad2, Instagram, Youtube, Hash, Zap, Heart, Monitor } from "lucide-react";

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

export default function EnglishNamingPage() {
    const router = useRouter();
    const [platform, setPlatform] = useState("game");
    const [gender, setGender] = useState("neutral");
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
    const [keywords, setKeywords] = useState("");

    // Toggle style selection (max 2)
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

                {/* Gender Section (Minor) */}
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

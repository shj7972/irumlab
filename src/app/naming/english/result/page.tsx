
import Header from "@/components/Header";
import Link from "next/link";
import { generateAdvancedEnglishNames } from "@/lib/english-naming-advanced";
import { RefreshCcw, Copy, Gamepad2, Instagram, Youtube, User, Star, Check } from "lucide-react";

interface PageProps {
    searchParams: Promise<{
        platform?: string;
        gender?: string;
        styles?: string;
        keywords?: string;
    }>;
}

const PLATFORM_ICONS: Record<string, any> = {
    game: Gamepad2,
    instagram: Instagram,
    youtube: Youtube,
    general: User
};

const PLATFORM_NAMES: Record<string, string> = {
    game: "Game ID",
    instagram: "Insta ID",
    youtube: "Channel Name",
    general: "Nickname"
};

export default async function AdvancedEnglishResultPage(props: PageProps) {
    const params = await props.searchParams;
    const input = {
        platform: params.platform || "game",
        gender: params.gender || "neutral",
        styles: params.styles ? params.styles.split(",") : [],
        keywords: params.keywords || ""
    };

    const names = generateAdvancedEnglishNames(input);
    const Icon = PLATFORM_ICONS[input.platform] || User;
    const platformLabel = PLATFORM_NAMES[input.platform] || "Nickname";

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 px-5 py-8 pb-32 max-w-[480px] mx-auto w-full">
                <div className="mb-8 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2 ${input.platform === 'instagram' ? 'bg-pink-100 text-pink-700' :
                            input.platform === 'game' ? 'bg-gray-800 text-gray-200' :
                                input.platform === 'youtube' ? 'bg-red-100 text-red-700' :
                                    'bg-purple-100 text-purple-700'
                        }`}>
                        <Icon size={12} />
                        {platformLabel} Generated
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900 leading-snug">
                        당신을 위한<br />
                        <span className="text-purple-600">Best Nicknames</span>
                    </h1>
                    <p className="text-gray-500 text-sm mt-2">
                        선택하신 플랫폼 트렌드와 키워드를 분석해<br />최적의 닉네임을 생성했습니다.
                    </p>
                </div>

                <div className="space-y-4">
                    {names.map((result, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden ring-1 ring-gray-100 hover:ring-purple-200 transition-all group">

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                                    {result.name}
                                </h3>
                                {/* Score Badge */}
                                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-bold text-yellow-700">{result.availability.score}</span>
                                </div>
                            </div>

                            <p className="text-purple-600 font-medium text-sm mb-3">
                                {result.meaning}
                            </p>

                            <p className="text-gray-500 text-xs leading-relaxed mb-4 bg-gray-50 p-3 rounded-lg">
                                "{result.story}"
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2">
                                    {result.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 rounded bg-gray-100 text-gray-500 text-[10px] font-bold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="p-2 -mr-2 text-gray-400 hover:text-purple-600 transition-colors" title="이름 복사">
                                    <Copy size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/naming/english"
                        className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-purple-600 transition-colors bg-white px-5 py-3 rounded-full border border-gray-200 shadow-sm"
                    >
                        <RefreshCcw size={14} />
                        <span>조건 변경하여 다시 생성</span>
                    </Link>
                </div>
            </main>
        </div>
    );
}

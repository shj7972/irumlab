import type { Metadata } from "next";
import Header from "@/components/Header";
import CompatibilityForm from "@/components/CompatibilityForm";

export const metadata: Metadata = {
    title: "이름 궁합 분석 - AI 오행 궁합 테스트",
    description: "두 사람의 이름으로 알아보는 궁합 분석. 음운오행과 획수를 기반으로 이름의 조화를 분석합니다. 커플, 부모-자녀, 친구 궁합을 확인해 보세요.",
    openGraph: {
        title: "이름 궁합 분석 - AI 오행 궁합 테스트 | 이룸랩",
        description: "두 사람의 이름으로 알아보는 궁합 분석. 음운오행과 획수 기반 이름 궁합을 확인해 보세요.",
    },
};

export default function CompatibilityPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 px-6 py-8 max-w-[480px] mx-auto w-full">
                <div className="mb-8 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold mb-3">
                        Name Compatibility
                    </span>
                    <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                        이름 궁합 분석
                    </h1>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        두 이름의 음운오행과 획수를 분석하여<br />
                        이름의 조화도를 알려드립니다.
                    </p>
                </div>

                <CompatibilityForm />
            </main>
        </div>
    );
}

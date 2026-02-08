import type { Metadata } from "next";
import Header from "@/components/Header";
import NamingForm from "@/components/NamingForm";

export const metadata: Metadata = {
    title: "AI 아기 작명 - 사주 기반 무료 이름 짓기",
    description:
        "사주팔자 분석으로 오행의 균형을 맞추는 정통 작명. 생년월일과 시간만 입력하면 AI가 최적의 아기 이름을 추천합니다.",
    openGraph: {
        title: "AI 아기 작명 - 사주 기반 무료 이름 짓기",
        description:
            "사주팔자 분석으로 오행의 균형을 맞추는 정통 작명. 생년월일과 시간만 입력하면 AI가 최적의 아기 이름을 추천합니다.",
    },
};

export default function NamingPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                        기본 정보 입력
                    </h1>
                    <p className="text-sm text-gray-500">
                        정확한 사주 분석을 위해<br />
                        태어난 날짜와 시간을 정확히 입력해주세요.
                    </p>
                </div>

                <NamingForm />
            </main>
        </div>
    );
}

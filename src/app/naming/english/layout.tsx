import type { Metadata } from "next";
import { EnglishNamingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "영어 닉네임 제조기·생성기 - 게임, SNS, 유튜브용 영어 이름",
    description:
        "나만의 영어 닉네임을 AI가 즉시 만들어 드립니다. 게임(롤, 배그, 발로란트), 인스타그램, 유튜브 등 플랫폼별 맞춤 영어 닉네임을 무료로 제조하세요.",
    keywords: ["영어 닉네임 제조기", "영어 닉네임 생성기", "게임 영어 닉네임 제조기", "영어 이름 생성기", "게임 닉네임", "인스타그램 영어 닉네임", "유튜브 닉네임"],
    openGraph: {
        title: "영어 닉네임 제조기·생성기 - 게임, SNS, 유튜브용 영어 이름",
        description:
            "나만의 영어 닉네임을 AI가 즉시 만들어 드립니다. 게임, 인스타그램, 유튜브 등 플랫폼별 맞춤 닉네임 무료 제조.",
    },
};

export default function EnglishNamingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <EnglishNamingJsonLd />
            {children}
        </>
    );
}

import type { Metadata } from "next";
import { EnglishNamingJsonLd, HowToJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "영어 닉네임 제조기 무료 - AI가 즉시 만들어주는 게임·인스타·유튜브 닉네임",
    description:
        "나만의 영어 닉네임을 AI가 즉시 만들어 드립니다. 게임(롤, 배그, 발로란트), 인스타그램, 유튜브 등 플랫폼별 맞춤 영어 닉네임을 무료로 제조하세요. 남자·여자·귀여운·멋있는 닉네임 모두 OK.",
    keywords: [
        // 핵심 키워드
        "영어 닉네임 제조기", "영어 닉네임 생성기", "영어 닉네임 추천", "영어 닉네임 모음",
        // 게임 관련
        "게임 영어 닉네임 제조기", "게임 닉네임 추천", "롤 영어 닉네임", "배그 영어 닉네임",
        "발로란트 닉네임", "오버워치 닉네임", "게임 닉네임 생성기", "강렬한 게임 닉네임",
        // SNS 관련
        "인스타그램 영어 닉네임", "인스타 닉네임 추천", "감성 영어 닉네임",
        "유튜브 닉네임", "유튜브 채널명 추천", "유튜브 영어 이름",
        // 성별 관련
        "남자 영어 닉네임", "여자 영어 닉네임", "귀여운 영어 닉네임",
        "멋있는 영어 닉네임", "예쁜 영어 닉네임",
        // 영어 이름 관련
        "영어 이름 생성기", "영어 이름 만들기", "영어 이름 추천",
        "영어 닉네임 무료", "AI 영어 닉네임",
        // 롱테일
        "게임 닉네임 영어로", "영어로 된 닉네임", "영어 닉네임 아이디어",
        "영어 닉네임 짓기", "영어 닉네임 뭐가 좋을까",
    ],
    alternates: {
        canonical: "https://irumlab.com/naming/english",
    },
    openGraph: {
        title: "영어 닉네임 제조기 무료 - AI가 즉시 만들어주는 게임·인스타·유튜브 닉네임",
        description:
            "나만의 영어 닉네임을 AI가 즉시 만들어 드립니다. 게임, 인스타그램, 유튜브 등 플랫폼별 맞춤 닉네임 무료 제조. 남자·여자·귀여운·멋있는 닉네임 모두 OK.",
        url: "https://irumlab.com/naming/english",
        type: "website",
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
            <HowToJsonLd />
            <BreadcrumbJsonLd
                items={[
                    { name: "홈", url: "https://irumlab.com" },
                    { name: "작명 서비스", url: "https://irumlab.com/naming" },
                    { name: "영어 닉네임 제조기", url: "https://irumlab.com/naming/english" },
                ]}
            />
            {children}
        </>
    );
}

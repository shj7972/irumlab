import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "유튜브 채널명 추천 - 기억에 남는 영어 유튜브 닉네임 AI 생성기",
    description:
        "유튜브 채널명을 AI가 즉시 추천해 드립니다. 검색이 잘 되고 구독자가 기억하기 쉬운 영어 유튜브 닉네임 생성기 무료 사용.",
    keywords: [
        "유튜브 채널명 추천", "유튜브 닉네임", "유튜브 영어 닉네임", "유튜브 이름 추천",
        "유튜버 닉네임", "방송 닉네임", "유튜브 채널 이름 만들기", "유튜브 영어 이름",
        "유튜브 채널명 생성기", "기억하기 쉬운 채널명", "유튜브 브랜딩", "크리에이터 닉네임",
        "유튜버 이름 추천", "유튜브 이름 짓기",
    ],
    alternates: {
        canonical: "https://irumlab.com/naming/english/youtube",
    },
    openGraph: {
        title: "유튜브 채널명 추천 - 기억에 남는 영어 유튜브 닉네임 AI 생성기",
        description:
            "유튜브 채널명을 AI가 즉시 추천. 검색이 잘 되고 구독자가 기억하기 쉬운 영어 유튜브 닉네임 무료 생성.",
        url: "https://irumlab.com/naming/english/youtube",
        type: "website",
    },
};

export default function YoutubeNamingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

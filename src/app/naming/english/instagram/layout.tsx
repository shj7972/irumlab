import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "인스타그램 영어 닉네임 추천 - 감성적이고 예쁜 영어 이름 AI 생성기",
    description:
        "인스타그램에 딱 맞는 감성적인 영어 닉네임을 AI가 즉시 추천해 드립니다. Luna, Velvet, Aurora 스타일의 예쁜 영어 닉네임 생성기 무료 사용.",
    keywords: [
        "인스타그램 영어 닉네임", "인스타 영어 이름", "인스타그램 닉네임 추천", "감성 영어 닉네임",
        "예쁜 영어 닉네임", "여자 영어 닉네임", "SNS 닉네임 추천", "인스타 닉네임 생성기",
        "인스타 영어 이름 추천", "감성 닉네임", "세련된 영어 닉네임", "영어 닉네임 생성기",
        "인스타그램 이름 추천", "인스타 아이디 추천", "영어 이름 예쁜 것",
    ],
    alternates: {
        canonical: "https://irumlab.com/naming/english/instagram",
    },
    openGraph: {
        title: "인스타그램 영어 닉네임 추천 - 감성적이고 예쁜 영어 이름 AI 생성기",
        description:
            "인스타그램에 딱 맞는 감성적인 영어 닉네임을 AI가 즉시 추천. Luna, Velvet, Aurora 스타일의 예쁜 영어 이름 무료 생성.",
        url: "https://irumlab.com/naming/english/instagram",
        type: "website",
    },
};

export default function InstagramNamingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

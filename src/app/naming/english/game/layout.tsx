import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "게임 영어 닉네임 제조기 무료 - 롤, 배그, 발로란트용 강렬한 닉네임 AI 생성",
    description:
        "롤(LoL), 배그, 발로란트, 오버워치 등 게임용 강렬한 영어 닉네임을 AI가 즉시 만들어 드립니다. 게임 닉네임 제조기 무료 사용 — Shadow, Void, Storm 스타일 맞춤 생성.",
    keywords: [
        "게임 영어 닉네임 제조기", "게임 닉네임 추천", "롤 영어 닉네임", "배그 영어 닉네임",
        "발로란트 닉네임", "오버워치 닉네임", "강렬한 게임 닉네임", "게임 닉네임 생성기",
        "롤 닉네임 추천", "FPS 닉네임", "배틀로얄 닉네임", "MOBA 닉네임", "멋있는 게임 닉네임",
        "게임 닉네임 영어로", "게임 영어 아이디", "게임 이름 추천",
    ],
    alternates: {
        canonical: "https://irumlab.com/naming/english/game",
    },
    openGraph: {
        title: "게임 영어 닉네임 제조기 무료 - 롤, 배그, 발로란트용 강렬한 닉네임",
        description:
            "롤, 배그, 발로란트 등 게임용 강렬한 영어 닉네임을 AI가 즉시 만들어 드립니다. 무료로 지금 바로 제조하세요.",
        url: "https://irumlab.com/naming/english/game",
        type: "website",
    },
};

export default function GameNamingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

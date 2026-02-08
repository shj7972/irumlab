import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "영어 닉네임 생성기 - 게임, SNS, 유튜브용 영어 이름",
    description:
        "나의 분위기와 성격에 맞는 영어 닉네임을 AI가 추천합니다. 게임, 인스타그램, 유튜브 등 플랫폼별 맞춤 닉네임을 무료로 만들어 보세요.",
    openGraph: {
        title: "영어 닉네임 생성기 - 게임, SNS, 유튜브용 영어 이름",
        description:
            "나의 분위기와 성격에 맞는 영어 닉네임을 AI가 추천합니다. 플랫폼별 맞춤 닉네임을 무료로 만들어 보세요.",
    },
};

export default function EnglishNamingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

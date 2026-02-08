import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "브랜드 네이밍 - AI 업종별 맞춤 브랜드 이름 추천",
    description:
        "창업 아이템에 딱 맞는 브랜드 이름을 AI가 제안합니다. IT, 카페, 패션 등 업종별 맞춤 네이밍과 도메인·상표 검증까지 한 번에.",
    openGraph: {
        title: "브랜드 네이밍 - AI 업종별 맞춤 브랜드 이름 추천",
        description:
            "창업 아이템에 딱 맞는 브랜드 이름을 AI가 제안합니다. 업종별 맞춤 네이밍과 도메인·상표 검증까지 한 번에.",
    },
};

export default function BrandNamingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

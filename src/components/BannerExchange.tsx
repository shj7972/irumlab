"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Banner = {
    id: number;
    url: string;
    imgSrc: string;
    alt: string;
};

const BANNERS: Banner[] = [
    {
        id: 1,
        url: "https://stock-insight.app",
        imgSrc: "https://stock-insight.app/static/banner_link_234x60.png",
        alt: "내 주식, 살까 팔까? Stock Insight AI 분석 결과 보기",
    },
    {
        id: 2,
        url: "https://unsedam.kr",
        imgSrc: "https://unsedam.kr/static/images/banner_link_234x60.png",
        alt: "운세담 - 2026 무료 토정비결 & AI 사주",
    },
    {
        id: 3,
        url: "https://vibecheck.page",
        imgSrc: "https://vibecheck.page/images/vibecheck_banner_234x60.png",
        alt: "VibeCheck - 나를 찾는 트렌디한 심리테스트",
    },
    {
        id: 4,
        url: "https://promptgenie.kr",
        imgSrc: "https://promptgenie.kr/images/banner_link_new_234x60.png",
        alt: "PromptGenie - AI Prompt Library",
    },
];

export default function BannerExchange() {
    const [randomBanners, setRandomBanners] = useState<Banner[]>([]);

    useEffect(() => {
        // Shuffle array and take first 3
        const shuffled = [...BANNERS].sort(() => 0.5 - Math.random());
        setRandomBanners(shuffled.slice(0, 3));
    }, []);

    if (randomBanners.length === 0) return null;

    return (
        <div className="w-full bg-gray-50 py-6 mt-8 border-t border-gray-100">
            <div className="max-w-screen-lg mx-auto px-4">
                <p className="text-xs text-gray-400 mb-3 text-center">Sponsored Partners</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {randomBanners.map((banner) => (
                        <a
                            key={banner.id}
                            href={banner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-opacity hover:opacity-80"
                        >
                            {/* Using standard img tag for external external banners to avoid Next.js Image config requirement for multiple domains */}
                            <img
                                src={banner.imgSrc}
                                alt={banner.alt}
                                width={234}
                                height={60}
                                className="rounded-md border border-gray-100"
                                style={{ width: "234px", height: "60px", objectFit: "cover" }}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

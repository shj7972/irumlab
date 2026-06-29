import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irumlab.com"),
  title: {
    default: "이룸랩 (Irum Lab) - AI 사주 작명소",
    template: "%s | 이룸랩 (Irum Lab)",
  },
  description: "사주명리학 기반 정통 작명과 AI 브랜딩을 한 번에. 3분 만에 평생 불릴 최고의 이름을 만나보세요.",
  keywords: ["작명", "개명", "AI작명", "영어이름", "브랜드네이밍", "사주작명", "무료작명", "이름궁합"],
  manifest: "/manifest.json",
  openGraph: {
    title: "이룸랩 (Irum Lab) - AI 사주 작명소",
    description: "사주명리학과 AI가 만드는 최고의 이름. 3분 만에 확인하세요.",
    url: "https://irumlab.com",
    siteName: "이룸랩 (Irum Lab)",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이룸랩 (Irum Lab) - AI 사주 작명소",
    description: "사주명리학과 AI가 만드는 최고의 이름. 3분 만에 확인하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "c4a380f4e2975968e4b350fb5d74599fd711b42a",
    },
  },
};

import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import BannerExchange from "@/components/BannerExchange";
import KakaoAdFit from "@/components/KakaoAdFit";
import KakaoAdFitSticky from "@/components/KakaoAdFitSticky";
import KakaoAdFitSidebarPC from "@/components/KakaoAdFitSidebarPC";
import Footer from "@/components/Footer";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${notoSansKr.className} ${notoSerifKr.variable} antialiased bg-gray-100 min-h-screen flex justify-center items-start py-0 md:py-10`}
      >
        <GoogleAnalytics gaId="G-8CL9TDVEHJ" />
        <ServiceWorkerRegistration />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2947913248390883"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* 애드핏 SDK: lazyOnload로 1회 로드 → 페이지 로드 후 모든 <ins> 요소를 한 번에 처리 */}
        <Script
          src="//t1.kakaocdn.net/kas/static/ba.min.js"
          strategy="lazyOnload"
        />
        {/* 콘텐츠 + PC 사이드바 래퍼 */}
        <div className="flex items-start gap-4 w-full justify-center">
          {/* 메인 콘텐츠 */}
          <div className="w-full md:max-w-screen-lg bg-white min-h-screen md:min-h-[calc(100vh-80px)] shadow-2xl relative md:rounded-[2.5rem] overflow-hidden flex flex-col shrink-0">
            <div className="flex-grow pb-[108px] md:pb-0">
              {children}
            </div>
            <KakaoAdFit />
            <BannerExchange />
            <Footer />
          </div>
          {/* PC 전용 우측 사이드바 광고 (2xl: 1536px 이상에서만 표시) */}
          <aside className="hidden 2xl:flex flex-col gap-4 shrink-0 w-[316px] sticky top-24 self-start">
            <KakaoAdFitSidebarPC
              adUnit="DAN-VO1F14uCGwl5bwdp"
              adWidth="300"
              adHeight="250"
            />
          </aside>
        </div>
        {/* 모바일 하단 고정 광고 배너 (320x100) */}
        <KakaoAdFitSticky adUnit="DAN-49Y2jYXPDMcFaJr7" adWidth="320" adHeight="100" />
      </body>
    </html>
  );
}

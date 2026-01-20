import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irumlab.com"),
  title: {
    default: "이룸랩 (Irum Lab) - AI 사주 작명소",
    template: "%s | 이룸랩 (Irum Lab)",
  },
  description: "사주명리학 기반 정통 작명과 AI 브랜딩을 한 번에. 3분 만에 평생 불릴 최고의 이름을 만나보세요.",
  keywords: ["작명", "개명", "AI작명", "영어이름", "브랜드네이밍", "사주작명", "무료작명"],
  openGraph: {
    title: "이룸랩 (Irum Lab) - AI 사주 작명소",
    description: "사주명리학과 AI가 만드는 최고의 이름. 3분 만에 확인하세요.",
    url: "https://irumlab.com",
    siteName: "이룸랩 (Irum Lab)",
    locale: "ko_KR",
    type: "website",
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

import GoogleAnalytics from "@/components/GoogleAnalytics";
import BannerExchange from "@/components/BannerExchange";
import AdSense from "@/components/AdSense";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.className} ${notoSerifKr.variable} antialiased bg-gray-100 min-h-screen flex justify-center py-0 md:py-10`}
      >
        <AdSense />
        <GoogleAnalytics gaId="G-8CL9TDVEHJ" />
        <div className="w-full md:max-w-screen-lg bg-white min-h-screen md:min-h-[calc(100vh-80px)] shadow-2xl relative md:rounded-[2.5rem] overflow-hidden flex flex-col">
          <div className="flex-grow">
            {children}
          </div>
          <BannerExchange />
          <Footer />
        </div>
      </body>
    </html>
  );
}

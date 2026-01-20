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
  title: "AI 정통 작명소 - 사주명리학 기반",
  description: "사주명리학 기반 정통 작명 서비스를 AI로 경험해보세요.",
};

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
        <div className="w-full md:max-w-screen-lg bg-white min-h-screen md:min-h-[calc(100vh-80px)] shadow-2xl relative md:rounded-[2.5rem] overflow-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

interface KakaoAdFitStickyProps {
    adUnit: string;
    adWidth?: string;
    adHeight?: string;
}

/**
 * KakaoAdFitSticky
 * 모바일에서만 화면 하단에 고정(sticky) 표시되는 애드핏 배너
 * PC(768px 이상)에서는 렌더링하지 않음
 */
export default function KakaoAdFitSticky({
    adUnit,
    adWidth = "320",
    adHeight = "100",
}: KakaoAdFitStickyProps) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        if (!isMobile) return;
        if (!adRef.current) return;

        adRef.current.innerHTML = "";

        const ins = document.createElement("ins");
        ins.className = "kakao_ad_area";
        ins.style.display = "none"; // AdFit 공식 스펙
        ins.setAttribute("data-ad-unit", adUnit);
        ins.setAttribute("data-ad-width", adWidth);
        ins.setAttribute("data-ad-height", adHeight);

        // ✅ <ins>와 <script>를 함께 추가: SDK가 실행 시 이 <ins>를 바로 처리
        const scr = document.createElement("script");
        scr.async = true;
        scr.type = "text/javascript";
        scr.src = "//t1.kakaocdn.net/kas/static/ba.min.js";
        scr.charset = "utf-8";

        adRef.current.appendChild(ins);
        adRef.current.appendChild(scr);
    }, [isMobile, adUnit, adWidth, adHeight]);

    // Only render on mobile
    if (isMobile === false) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-40 flex justify-center items-center bg-white border-t border-gray-200 shadow-lg md:hidden"
            style={{ minHeight: `${parseInt(adHeight) + 8}px` }}
            aria-label="광고"
        >
            <div ref={adRef} />
        </div>
    );
}

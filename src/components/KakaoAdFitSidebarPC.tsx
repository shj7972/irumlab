"use client";

import { useEffect, useRef } from "react";

interface KakaoAdFitSidebarPCProps {
    /** 애드핏 PC 사이드바 광고 유닛 ID (300x250 직사각형) */
    adUnit: string;
    adWidth?: string;
    adHeight?: string;
}

/**
 * KakaoAdFitSidebarPC
 * PC(2xl, 1536px+) 화면에서 우측 사이드바에 고정 표시되는 애드핏 배너
 * 모바일/태블릿에서는 렌더링하지 않음 (CSS hidden)
 */
export default function KakaoAdFitSidebarPC({
    adUnit,
    adWidth = "300",
    adHeight = "250",
}: KakaoAdFitSidebarPCProps) {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!adRef.current) return;

        adRef.current.innerHTML = "";

        const ins = document.createElement("ins");
        ins.className = "kakao_ad_area";
        ins.style.display = "none"; // AdFit 공식 스펙: SDK가 광고 로드 시 직접 변경
        ins.setAttribute("data-ad-unit", adUnit);
        ins.setAttribute("data-ad-width", adWidth);
        ins.setAttribute("data-ad-height", adHeight);

        // ✅ <ins>와 <script>를 항상 함께 추가해야 SDK가 새 광고 단위를 인식함
        const scr = document.createElement("script");
        scr.async = true;
        scr.type = "text/javascript";
        scr.src = "//t1.kakaocdn.net/kas/static/ba.min.js";
        scr.charset = "utf-8";

        adRef.current.appendChild(ins);
        adRef.current.appendChild(scr);
    }, [adUnit, adWidth, adHeight]);

    return (
        <div
            className="flex justify-center items-center p-3 bg-white rounded-2xl shadow-sm border border-gray-100"
            aria-label="광고"
        >
            <div ref={adRef} />
        </div>
    );
}

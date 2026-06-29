"use client";

import { useEffect, useRef, useState } from "react";
import { injectAdFitScript } from "@/lib/adfit";

interface KakaoAdFitStickyProps {
    /** 애드핏 모바일 광고 유닛 ID */
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
        // ✅ display:none is required per AdFit official spec — the SDK changes it to visible when an ad loads
        ins.style.display = "none";
        ins.setAttribute("data-ad-unit", adUnit);
        ins.setAttribute("data-ad-width", adWidth);
        ins.setAttribute("data-ad-height", adHeight);

        adRef.current.appendChild(ins);

        // Inject SDK script once globally
        injectAdFitScript();
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

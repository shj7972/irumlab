"use client";

import { useEffect, useRef, useState } from "react";
import { injectAdFitScript } from "@/lib/adfit";

export default function KakaoAdFit() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile === null) return;
        if (!adRef.current) return;

        // Clear previous ad to prevent duplication on resize
        adRef.current.innerHTML = "";

        const ins = document.createElement("ins");
        ins.className = "kakao_ad_area";
        // ✅ display:none is required per AdFit official spec — the SDK changes it to visible when an ad loads
        ins.style.display = "none";

        if (isMobile) {
            // Mobile 320x50
            ins.setAttribute("data-ad-unit", "DAN-lcWZfmL0690w78rB");
            ins.setAttribute("data-ad-width", "320");
            ins.setAttribute("data-ad-height", "50");
        } else {
            // PC 728x90
            ins.setAttribute("data-ad-unit", "DAN-gjHydf0ik26ozOSr");
            ins.setAttribute("data-ad-width", "728");
            ins.setAttribute("data-ad-height", "90");
        }

        adRef.current.appendChild(ins);

        // Inject SDK script once globally
        injectAdFitScript();
    }, [isMobile]);

    return (
        <div
            className="w-full flex justify-center items-center py-2 bg-white border-t border-gray-100 overflow-hidden min-h-[58px] md:min-h-[98px]"
            aria-label="광고"
        >
            <div ref={adRef} />
        </div>
    );
}

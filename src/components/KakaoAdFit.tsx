"use client";

import { useEffect, useRef, useState } from "react";

export default function KakaoAdFit() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Detect screen width on mount
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();

        // Optional: listen for resize if screen crosses mobile/PC boundary
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile === null) return;
        if (!adRef.current) return;

        // Clear previous ad contents to prevent duplicate rendering
        adRef.current.innerHTML = "";

        const ins = document.createElement("ins");
        const scr = document.createElement("script");

        ins.className = "kakao_ad_area";
        ins.style.display = "none";

        if (isMobile) {
            // Mobile (320x50)
            ins.setAttribute("data-ad-unit", "DAN-lcWZfmL0690w78rB");
            ins.setAttribute("data-ad-width", "320");
            ins.setAttribute("data-ad-height", "50");
        } else {
            // PC (728x90)
            ins.setAttribute("data-ad-unit", "DAN-gjHydf0ik26ozOSr");
            ins.setAttribute("data-ad-width", "728");
            ins.setAttribute("data-ad-height", "90");
        }

        scr.async = true;
        scr.type = "text/javascript";
        scr.src = "//t1.kakaocdn.net/kas/static/ba.min.js";

        adRef.current.appendChild(ins);
        adRef.current.appendChild(scr);
    }, [isMobile]);

    return (
        <div className="w-full flex justify-center items-center py-4 bg-white border-t border-gray-100 overflow-hidden min-h-[82px] md:min-h-[122px]">
            <div ref={adRef} />
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";

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

        // 이전 광고 제거
        adRef.current.innerHTML = "";

        const ins = document.createElement("ins");
        ins.className = "kakao_ad_area";
        ins.style.display = "none"; // AdFit 공식 스펙: SDK가 광고 로드 시 직접 변경

        if (isMobile) {
            ins.setAttribute("data-ad-unit", "DAN-lcWZfmL0690w78rB");
            ins.setAttribute("data-ad-width", "320");
            ins.setAttribute("data-ad-height", "50");
        } else {
            ins.setAttribute("data-ad-unit", "DAN-gjHydf0ik26ozOSr");
            ins.setAttribute("data-ad-width", "728");
            ins.setAttribute("data-ad-height", "90");
        }

        // ✅ 핵심: <ins>와 <script>를 항상 함께 추가해야 SDK가 새 광고 단위를 인식함
        // <script>가 새로 실행될 때마다 DOM의 kakao_ad_area ins 요소를 스캔하므로
        // document.head에 한 번만 주입하면 동적으로 추가된 <ins>를 처리하지 못함
        const scr = document.createElement("script");
        scr.async = true;
        scr.type = "text/javascript";
        scr.src = "//t1.kakaocdn.net/kas/static/ba.min.js";
        scr.charset = "utf-8";

        adRef.current.appendChild(ins);
        adRef.current.appendChild(scr);
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

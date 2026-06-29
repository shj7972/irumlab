/**
 * AdFit SDK 스크립트를 페이지당 1회만 <head>에 주입하는 유틸리티
 */
let injected = false;

export function injectAdFitScript(): void {
    if (injected || typeof document === "undefined") return;
    injected = true;

    const scr = document.createElement("script");
    scr.async = true;
    scr.type = "text/javascript";
    scr.src = "//t1.kakaocdn.net/kas/static/ba.min.js";
    scr.charset = "utf-8";
    document.head.appendChild(scr);
}

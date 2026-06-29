/**
 * KakaoAdFitSidebarPC - PC 우측 사이드바 광고 (300x250)
 * 2xl(1536px) 이상에서만 표시 (layout.tsx의 aside에서 제어).
 *
 * <ins> 요소를 정적 HTML로 렌더링.
 * ba.min.js가 lazyOnload로 실행될 때 이 <ins>를 찾아 광고를 처리함.
 */
interface KakaoAdFitSidebarPCProps {
    adUnit: string;
    adWidth?: string;
    adHeight?: string;
}

export default function KakaoAdFitSidebarPC({
    adUnit,
    adWidth = "300",
    adHeight = "250",
}: KakaoAdFitSidebarPCProps) {
    return (
        <div
            className="flex justify-center items-center p-3 bg-white rounded-2xl shadow-sm border border-gray-100"
            aria-label="광고"
        >
            <ins
                className="kakao_ad_area"
                style={{ display: "none" }}
                data-ad-unit={adUnit}
                data-ad-width={adWidth}
                data-ad-height={adHeight}
            />
        </div>
    );
}

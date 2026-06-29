/**
 * KakaoAdFitSticky - 모바일 하단 고정 배너
 * md(768px) 이상 PC에서는 md:hidden으로 자동 숨김.
 *
 * <ins> 요소를 정적 HTML로 렌더링.
 * ba.min.js가 lazyOnload로 실행될 때 이 <ins>를 찾아 광고를 처리함.
 */
interface KakaoAdFitStickyProps {
    adUnit: string;
    adWidth?: string;
    adHeight?: string;
}

export default function KakaoAdFitSticky({
    adUnit,
    adWidth = "320",
    adHeight = "100",
}: KakaoAdFitStickyProps) {
    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-40 flex justify-center items-center bg-white border-t border-gray-200 shadow-lg md:hidden"
            style={{ minHeight: `${parseInt(adHeight) + 8}px` }}
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

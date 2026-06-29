/**
 * KakaoAdFit - 반응형 하단 배너
 * - Mobile: 320x50 (DAN-lcWZfmL0690w78rB)
 * - PC: 728x90 (DAN-gjHydf0ik26ozOSr)
 *
 * <ins> 요소를 정적 HTML로 렌더링.
 * ba.min.js는 layout.tsx에서 lazyOnload로 1회 로드되며,
 * 실행 시점에 이 <ins>를 찾아 광고를 처리함.
 */
export default function KakaoAdFit() {
    return (
        <div
            className="w-full flex justify-center items-center py-2 bg-white border-t border-gray-100 overflow-hidden min-h-[58px] md:min-h-[98px]"
            aria-label="광고"
        >
            {/* 모바일 전용 (md 미만) */}
            <div className="md:hidden">
                <ins
                    className="kakao_ad_area"
                    style={{ display: "none" }}
                    data-ad-unit="DAN-lcWZfmL0690w78rB"
                    data-ad-width="320"
                    data-ad-height="50"
                />
            </div>
            {/* PC 전용 (md 이상) */}
            <div className="hidden md:block">
                <ins
                    className="kakao_ad_area"
                    style={{ display: "none" }}
                    data-ad-unit="DAN-gjHydf0ik26ozOSr"
                    data-ad-width="728"
                    data-ad-height="90"
                />
            </div>
        </div>
    );
}

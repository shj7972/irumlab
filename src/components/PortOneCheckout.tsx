"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

/**
 * 포트원(PortOne) browser-sdk v2 결제 컴포넌트
 * - storeId / channelKey: 포트원 콘솔 > 결제 연동에서 확인 (NEXT_PUBLIC_PORTONE_STORE_ID, NEXT_PUBLIC_PORTONE_CHANNEL_KEY)
 * - 테스트 모드: 포트원 콘솔에서 채널을 "테스트"로 생성하면 실결제 없이 결제창 동작
 * - 승인 검증: 포트원 웹훅(netlify/functions/portone-webhook.js) + 클라이언트 승인 후 서버 조회 이중 확인
 *   (static export라 redirect URL 방식 대신 위젯 내 완료 → paymentId로 서버 검증 구조)
 */

const STORE_ID = process.env.NEXT_PUBLIC_PORTONE_STORE_ID || "";
const CHANNEL_KEY = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY || "";
const AMOUNT = 2900;

interface PortOneCheckoutProps {
    customerName: string;
    onApproved: (paymentId: string) => void;
}

declare global {
    interface Window {
        PortOne?: any;
    }
}

export default function PortOneCheckout({ customerName, onApproved }: PortOneCheckoutProps) {
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    async function loadSDK(): Promise<void> {
        if (window.PortOne) return;
        await new Promise<void>((resolve, reject) => {
            const s = document.createElement("script");
            s.src = "https://cdn.portone.io/v2/browser-sdk.js";
            s.onload = () => resolve();
            s.onerror = () => reject(new Error("SDK 로드 실패"));
            document.head.appendChild(s);
        });
    }

    async function requestPayment() {
        setBusy(true);
        setError("");
        try {
            await loadSDK();
            const paymentId = `report_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
            const response = await window.PortOne.requestPayment({
                storeId: STORE_ID,
                channelKey: CHANNEL_KEY,
                paymentId,
                orderName: "사주작명 상세 리포트",
                totalAmount: AMOUNT,
                currency: "CURRENCY_KRW",
                payMethod: "CARD",
                customer: {
                    fullName: customerName || "고객",
                },
                redirectUrl: `${window.location.origin}/naming/report/success`,
            });

            if (response?.code != null) {
                // 결제창 취소/실패
                setError(response.message || "결제가 취소되었습니다.");
                return;
            }

            // 승인 성공 — 서버 검증 후 리포트 생성
            const res = await fetch("/.netlify/functions/portone-verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ paymentId: response.paymentId }),
            });
            const data = await res.json();
            if (res.ok && data.verified) {
                onApproved(response.paymentId);
            } else {
                setError("결제 승인 검증 실패: " + (data.message || "다시 시도해주세요."));
            }
        } catch (e: any) {
            setError(e?.message ?? "결제 요청 실패");
        } finally {
            setBusy(false);
        }
    }

    return (
        <div className="space-y-3">
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
                onClick={requestPayment}
                disabled={busy || !STORE_ID || !CHANNEL_KEY}
                className="w-full rounded-xl bg-amber-500 p-4 font-bold text-white disabled:opacity-40 hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
                {busy ? <Loader2 size={18} className="animate-spin" /> : null}
                {STORE_ID && CHANNEL_KEY ? `결제하기 (${AMOUNT.toLocaleString()}원)` : "포트원 키 미설정 (Netlify 환경변수 등록 필요)"}
            </button>
            <p className="text-[10px] text-gray-400 text-center">
                디지털 상품 특성상 결제 후 환불이 어렵습니다. · 본 리포트는 재미와 참고용입니다.
            </p>
        </div>
    );
}

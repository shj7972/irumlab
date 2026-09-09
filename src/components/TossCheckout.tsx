"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

// 토스페이먼츠 결제위젯 SDK 연동
// - 테스트 키: test_ck_... (공개 키, 노출 가능) — 라이브 키는 NEXT_PUBLIC_TOSS_CLIENT_KEY 로 교체
const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "test_gck_docs_O6A8zWa0nPrqBAz1Xrb65Wqz3v2Dlzq7oNzY2zY1gPwEX5aj";
const AMOUNT = 2900;

interface TossCheckoutProps {
    /** 주문 정보 — 고객 식별용 */
    customerName: string;
    /** 결제 성공 시 호출 (리포트 생성 트리거) */
    onApproved: (orderId: string) => void;
}

declare global {
    interface Window {
        TossPayments?: (clientKey: string) => any;
    }
}

/**
 * v1: 결제위젯(Anonymized) 방식 — 카드/간편결제 자동 포함
 * 결제 성공 시 /naming/report?payment=success&orderId=... 로 리다이렉트되어
 * confirm API(Netlify Function)를 거쳐 리포트가 생성된다.
 */
export default function TossCheckout({ customerName, onApproved }: TossCheckoutProps) {
    const paymentRef = useRef<HTMLDivElement>(null);
    const agreementRef = useRef<HTMLDivElement>(null);
    const widgetsRef = useRef<any>(null);
    const [ready, setReady] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    const orderId = `report_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    useEffect(() => {
        (async () => {
            // SDK 로드
            if (!window.TossPayments) {
                await new Promise<void>((resolve) => {
                    const s = document.createElement("script");
                    s.src = "https://js.tosspayments.com/v2/standard";
                    s.onload = () => resolve();
                    document.head.appendChild(s);
                });
            }
            const tossPayments = window.TossPayments!(CLIENT_KEY);
            // 회원 비식별 결제위젯
            const widgets = tossPayments.widgets({ customerKey: "ANONYMOUS_ANONYMOUS" });
            widgetsRef.current = widgets;
            await widgets.setAmount({ currency: "KRW", value: AMOUNT });
            await widgets.renderPaymentMethods({ selector: paymentRef.current! });
            await widgets.renderAgreement({ selector: agreementRef.current! });
            setReady(true);
        })().catch((e) => setError("결제 위젯 로딩 실패: " + (e?.message ?? e)));
    }, []);

    async function requestPayment() {
        if (!widgetsRef.current) return;
        setBusy(true);
        try {
            await widgetsRef.current.requestPayment({
                orderId,
                orderName: "사주작명 상세 리포트",
                customerName: customerName || "고객",
                successUrl: `${window.location.origin}/naming/report/success`,
                failUrl: `${window.location.origin}/naming/report?payment=fail`,
            });
        } catch (e: any) {
            setError(e?.message ?? "결제 요청 실패");
        } finally {
            setBusy(false);
        }
    }

    return (
        <div className="space-y-3">
            <div ref={paymentRef} />
            <div ref={agreementRef} />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
                onClick={requestPayment}
                disabled={!ready || busy}
                className="w-full rounded-xl bg-amber-500 p-4 font-bold text-white disabled:opacity-40 hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
                {busy ? <Loader2 size={18} className="animate-spin" /> : null}
                {ready ? `결제하기 (${AMOUNT.toLocaleString()}원)` : "결제창 로딩 중..."}
            </button>
            <p className="text-[10px] text-gray-400 text-center">
                디지털 상품 특성상 결제 후 환불이 어렵습니다. · 본 리포트는 재미와 참고용입니다.
            </p>
        </div>
    );
}

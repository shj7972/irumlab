"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

/**
 * 결제 성공 리다이렉트 페이지
 * URL: /naming/report/success?paymentKey=...&orderId=...&amount=...
 * confirm API(Netlify Function) 호출 → 승인 성공 시 리포트 생성 폼으로 진행
 */

function SuccessInner() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [status, setStatus] = useState<"confirming" | "done" | "fail">("confirming");
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        const paymentKey = searchParams.get("paymentKey");
        const oid = searchParams.get("orderId");
        const amount = searchParams.get("amount");
        setOrderId(oid ?? "");

        // 기존 폼 정보 복원 (report 폼 데이터는 sessionStorage에 임시 저장됨)
        if (!paymentKey || !oid || !amount) {
            setStatus("fail");
            return;
        }
        fetch("/.netlify/functions/confirm-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentKey, orderId: oid, amount }),
        })
            .then(async (res) => {
                if (res.ok) {
                    setStatus("done");
                } else {
                    setStatus("fail");
                }
            })
            .catch(() => setStatus("fail"));
    }, [searchParams]);

    if (status === "confirming") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-3">
                <Loader2 className="animate-spin text-amber-500" size={36} />
                <p className="text-sm text-gray-500">결제 승인 확인 중...</p>
            </div>
        );
    }

    if (status === "done") {
        // 리포트 페이지로 결과 전달 후 자동 이동
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-3">
                <CheckCircle className="text-green-500" size={48} />
                <p className="text-base font-bold text-gray-800">결제 완료!</p>
                <button
                    onClick={() => router.replace(`/naming/report?paid=1&orderId=${orderId}`)}
                    className="mt-3 rounded-xl bg-amber-500 px-6 py-3 font-bold text-white hover:bg-amber-600"
                >
                    리포트 보기
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-3 px-6 text-center">
            <XCircle className="text-red-500" size={48} />
            <p className="text-base font-bold text-gray-800">결제 승인 실패</p>
            <p className="text-sm text-gray-500">문제가 지속되면 고객문의 부탁드립니다.</p>
            <button
                onClick={() => router.replace("/naming/report")}
                className="mt-3 rounded-xl bg-gray-900 px-6 py-3 font-bold text-white"
            >
                돌아가기
            </button>
        </div>
    );
}

export default function ReportSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <Suspense fallback={<div className="flex justify-center py-20"><Loader2 className="animate-spin" /></div>}>
                <SuccessInner />
            </Suspense>
        </div>
    );
}

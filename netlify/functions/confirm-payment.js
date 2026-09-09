// 토스페이먼츠 결제 승인 API (Netlify Function)
// 환경변수 TOSS_SECRET_KEY 설정 필수 (테스트: test_gsk_..., 라이브: live_gsk_...)
// static export 사이트라 승인 요청은 이 함수가 대행한다.

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 204, headers };
    }
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: JSON.stringify({ message: "method not allowed" }) };
    }

    const secret = process.env.TOSS_SECRET_KEY;
    if (!secret) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: "TOSS_SECRET_KEY 미설정 — Netlify 환경변수를 확인하세요" }),
        };
    }

    try {
        const { paymentKey, orderId, amount } = JSON.parse(event.body || "{}");
        if (!paymentKey || !orderId || !amount) {
            return { statusCode: 400, headers, body: JSON.stringify({ message: "paymentKey/orderId/amount 필수" }) };
        }

        const auth = Buffer.from(secret + ":").toString("base64");
        const res = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
            method: "POST",
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ paymentKey, orderId, amount: Number(amount) }),
        });
        const data = await res.json();

        if (!res.ok) {
            return { statusCode: res.status, headers, body: JSON.stringify(data) };
        }

        // 승인 성공 — v1: 최소 검증(orderId/amount 일치는 토스가 수행). v2: 중복 승인 방지 + 매출 기록 저장
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true, method: data.method, approvedAt: data.approvedAt }) };
    } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: "internal error" }) };
    }
};

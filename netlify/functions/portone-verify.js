// 포트원 결제 검증 API (Netlify Function)
// 클라이언트가 전달한 paymentId를 포트원 Payment API로 서버 조회하여
// 실제 지불 완료 + 금액 일치를 검증한다.
// 환경변수: PORTONE_API_SECRET (포트원 콘솔 > 설정 > API v2 시크릿 키)

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const EXPECTED_AMOUNT = Number(process.env.REPORT_PRICE_KRW || 2900);

exports.handler = async (event) => {
    if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers };
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: JSON.stringify({ message: "method not allowed" }) };
    }

    const secret = process.env.PORTONE_API_SECRET;
    if (!secret) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: "PORTONE_API_SECRET 미설정" }) };
    }

    try {
        const { paymentId } = JSON.parse(event.body || "{}");
        if (!paymentId) {
            return { statusCode: 400, headers, body: JSON.stringify({ message: "paymentId 필수" }) };
        }

        const res = await fetch(
            `https://api.portone.io/payments/${encodeURIComponent(paymentId)}`,
            { headers: { Authorization: `PortOne ${secret}` } },
        );
        const payment = await res.json();

        if (!res.ok) {
            return { statusCode: 404, headers, body: JSON.stringify({ message: payment.message || "결제 조회 실패" }) };
        }

        const isPaid = payment.status === "PAID" || payment.status === "VIRTUAL_ACCOUNT_ISSUED";
        const paidAmount = payment.amount?.paid ?? payment.amount?.total ?? 0;

        if (!isPaid) {
            return { statusCode: 400, headers, body: JSON.stringify({ verified: false, message: `결제 상태: ${payment.status}` }) };
        }
        if (paidAmount < EXPECTED_AMOUNT) {
            return { statusCode: 400, headers, body: JSON.stringify({ verified: false, message: `금액 불일치 (${paidAmount}/${EXPECTED_AMOUNT})` }) };
        }

        // v2 TODO: 매출 기록 저장(구글시트/DB) + 중복 paymentId 방지
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                verified: true,
                method: payment.method?.type,
                approvedAt: payment.approvedAt,
                amount: paidAmount,
            }),
        };
    } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: "internal error" }) };
    }
};

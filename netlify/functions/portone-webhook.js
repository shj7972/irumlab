// 포트원 웹훅 수신 (Netlify Function)
// 포트원 콘솔 > 알림 설정 웹훅 URL에 이 엔드포인트 등록:
//   https://irumlab.com/.netlify/functions/portone-webhook
// 역할: 결제 상태 변경 이벤트 수신 + 서버사이드 이중 검증 (클라이언트 verify 보완)
// v1: 로그 기록만. v2: 검증 서명 확인 후 매출 기록 적재

const headers = { "Content-Type": "application/json" };

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, headers, body: JSON.stringify({ message: "method not allowed" }) };
    }
    try {
        const body = JSON.parse(event.body || "{}");
        // v2 TODO: PortOne 서명 검증(webhook signing secret) 후 PAID 상태면 기록
        console.log("[portone-webhook]", body.type || "unknown", body.data?.paymentId || "");
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    } catch {
        return { statusCode: 400, headers, body: JSON.stringify({ ok: false }) };
    }
};

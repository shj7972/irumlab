import React from 'react';

export default function TermsPage() {
    return (
        <main className="max-w-screen-md mx-auto px-6 py-12 prose prose-sm">
            <h1 className="text-2xl font-bold mb-6">이용약관</h1>

            <h3 className="text-xl font-bold mt-6 mb-2">1. 목적</h3>
            <p>본 약관은 이룸랩(Irum Lab)이 제공하는 모든 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>

            <h3 className="text-xl font-bold mt-6 mb-2">2. 서비스의 내용</h3>
            <p>이룸랩은 사주명리학 기반의 작명 및 이름 분석, 영어 닉네임 생성, 브랜드 네이밍 서비스를 무료로 제공합니다.</p>

            <h3 className="text-xl font-bold mt-6 mb-2">3. 책임의 한계</h3>
            <p>본 서비스가 제공하는 명리학적 분석 결과는 통계와 이론에 기반한 것이며, 절대적인 운명을 보장하지 않습니다. 작명 결과의 선택과 사용에 대한 최종 책임은 사용자 본인에게 있습니다.</p>

            <h3 className="text-xl font-bold mt-6 mb-2">4. 유료 서비스 및 환불</h3>
            <p>
                이룸랩은 상세 리포트 등 유료 서비스를 제공합니다. 유료 서비스는 디지털 콘텐츠의 특성상 결제 즉시 생성 및 제공되므로,
                <strong>구매 완료 후 환불이 불가</strong>합니다. 구매 전 상품 설명을 충분히 확인하시기 바랍니다.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">5. 서비스 변경 및 중단</h3>
            <p>회사는 운영상 필요에 따라 서비스의 내용을 변경하거나 중단할 수 있습니다.</p>

            <p className="mt-8 text-gray-500">시행일자: 2026년 9월 9일</p>
        </main>
    );
}

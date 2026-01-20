import React from 'react';

export default function PrivacyPage() {
    return (
        <main className="max-w-screen-md mx-auto px-6 py-12 prose prose-sm">
            <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>
            <p>이룸랩(Irum Lab)은 사용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.</p>

            <h3 className="text-xl font-bold mt-6 mb-2">1. 수집하는 개인정보 항목</h3>
            <p>본 서비스는 별도의 회원가입 없이 이용 가능하며, 서비스 제공을 위해 입력하신 사주 정보(생년월일시)는 결과 분석 용도로만 일시적으로 사용되며 서버에 영구 저장되지 않습니다.</p>

            <h3 className="text-xl font-bold mt-6 mb-2">2. 쿠키 및 광고 식별자</h3>
            <p>본 사이트는 서비스 개선 및 맞춤형 광고 제공을 위해 쿠키(Cookie) 및 구글 애드센스(Google AdSense), 구글 애널리틱스(Google Analytics)를 사용합니다.</p>
            <ul className="list-disc pl-5">
                <li>구글 등 제3자 공급업체는 쿠키를 사용하여 사용자의 과거 해당 웹사이트 또는 다른 웹사이트 방문 기록을 바탕으로 광고를 게재합니다.</li>
                <li>사용자는 광고 설정을 통해 맞춤형 광고를 관리할 수 있습니다.</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">3. 개인정보의 보호</h3>
            <p>이룸랩은 사용자의 정보를 철저히 보호하며 제3자에게 제공하거나 판매하지 않습니다.</p>

            <p className="mt-8 text-gray-500">시행일자: 2026년 1월 20일</p>
        </main>
    );
}

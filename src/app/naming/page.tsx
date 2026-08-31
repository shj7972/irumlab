import type { Metadata } from "next";
import Header from "@/components/Header";
import NamingForm from "@/components/NamingForm";

export const metadata: Metadata = {
    title: "AI 아기 작명 - 사주 기반 무료 이름 짓기",
    description:
        "사주팔자 분석으로 오행의 균형을 맞추는 정통 작명. 생년월일과 시간만 입력하면 AI가 최적의 아기 이름을 추천합니다.",
    openGraph: {
        title: "AI 아기 작명 - 사주 기반 무료 이름 짓기",
        description:
            "사주팔자 분석으로 오행의 균형을 맞추는 정통 작명. 생년월일과 시간만 입력하면 AI가 최적의 아기 이름을 추천합니다.",
    },
};

export default function NamingPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                        기본 정보 입력
                    </h1>
                    <p className="text-sm text-gray-500">
                        정확한 사주 분석을 위해<br />
                        태어난 날짜와 시간을 정확히 입력해주세요.
                    </p>
                </div>

                <NamingForm />

                {/* SEO 콘텐츠 */}
                <section className="mt-10 bg-gray-50 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed space-y-3">
                    <h2 className="font-bold text-gray-800">AI 아기 작명의 원리</h2>
                    <p>이룸랩의 AI 작명은 <strong>생년월일시 기반 사주 분석</strong>으로 태어날 때의 오행(목화토금수) 균형을 파악하고, 부족한 기운(용신)을 보완하는 이름을 지어드립니다. 수십 년 경력 작명가의 성명학 공식을 알고리즘화해 만세력 계산 오류 없이 몇 초 만에 최적 조합을 찾아냅니다.</p>

                    <h2 className="font-bold text-gray-800">좋은 이름의 3요소</h2>
                    <ul className="space-y-1 list-disc list-inside text-xs">
                        <li><strong>자원오행</strong>: 한자에 담긴 뜻과 기운이 사주에 도움이 되어야 합니다</li>
                        <li><strong>음령오행</strong>: 소리의 파장이 길함과 조화를 이루어야 합니다</li>
                        <li><strong>수리성명학</strong>: 이름 획수(원형이정)가 길수를 이루어야 합니다</li>
                    </ul>

                    <h2 className="font-bold text-gray-800">이런 분들이 이용하고 있습니다</h2>
                    <ul className="space-y-1 list-disc list-inside text-xs">
                        <li>태어난 아기의 사주에 맞는 이름을 짓고 싶은 부모님</li>
                        <li>개명을 고민하며 새 이름 후보를 찾는 분 — <a href="/blog/how-to-change-name" className="text-brand-navy underline">개명 절차 가이드</a>도 참고하세요</li>
                        <li>이름 궁합이 궁금한 예비 부부나 커플 — <a href="/naming/compatibility" className="text-brand-navy underline">이름 궁합 분석</a> 바로가기</li>
                    </ul>

                    <h2 className="font-bold text-gray-800">자주 묻는 질문</h2>
                    <p className="text-xs"><strong>Q. 태어난 시간을 모르는 경우에도 작명이 가능한가요?</strong><br />네, 가능합니다. 시간을 모르면 일주 기준으로 사주를 분석해 그에 맞는 이름을 추천합니다. 정확한 시간을 아시면 더 정밀한 분석이 가능합니다.</p>
                    <p className="text-xs"><strong>Q. 이름은 몇 개까지 추천되나요?</strong><br />입력 후 사주 오행 분석 결과를 바탕으로 획수·음령 모두 좋은 이름이 여러 개 추천됩니다.</p>
                </section>

            </main>
        </div>
    );
}

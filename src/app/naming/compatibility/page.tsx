import type { Metadata } from "next";
import Header from "@/components/Header";
import CompatibilityForm from "@/components/CompatibilityForm";

export const metadata: Metadata = {
    title: "이름 궁합 분석 - AI 오행 궁합 테스트",
    description: "두 사람의 이름으로 알아보는 궁합 분석. 음운오행과 획수를 기반으로 이름의 조화를 분석합니다. 커플, 부모-자녀, 친구 궁합을 확인해 보세요.",
    openGraph: {
        title: "이름 궁합 분석 - AI 오행 궁합 테스트 | 이룸랩",
        description: "두 사람의 이름으로 알아보는 궁합 분석. 음운오행과 획수 기반 이름 궁합을 확인해 보세요.",
    },
};

export default function CompatibilityPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 px-6 py-8 max-w-[480px] mx-auto w-full">
                <div className="mb-8 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold mb-3">
                        Name Compatibility
                    </span>
                    <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                        이름 궁합 분석
                    </h1>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        두 이름의 음운오행과 획수를 분석하여<br />
                        이름의 조화도를 알려드립니다.
                    </p>
                </div>

                <CompatibilityForm />

                {/* SEO 콘텐츠 */}
                <section className="mt-10 mb-8 bg-gray-50 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed space-y-3">
                    <h2 className="font-bold text-gray-800">이름 궁합 분석이란?</h2>
                    <p>이름 궁합 분석은 두 사람의 이름에 담긴 <strong>음운오행(발음의 기운)</strong>과 <strong>획수 조화</strong>를 바탕으로 두 사람의 케미스토리를 살펴보는 전통 명리학 기반 분석입니다. 커플 궁합, 부모-자녀 궁합, 친구·동료 궁합 등 관계의 조화를 재미있게 확인할 수 있습니다.</p>

                    <h2 className="font-bold text-gray-800">이름 궁합은 어떻게 보나요?</h2>
                    <ul className="space-y-1 list-disc list-inside text-xs">
                        <li><strong>음운오행</strong>: 이름 발음에 담긴 물(수)·화(화)·목·금·토 기운의 균형 분석</li>
                        <li><strong>획수 원형이정</strong>: 이름의 총획수가 길흉을 나타내는 수리성명학 원리</li>
                        <li><strong>음의 조화</strong>: 두 이름을 함께 불렀을 때 부드러운지, 부딪히는지 분석</li>
                    </ul>

                    <h2 className="font-bold text-gray-800">자주 묻는 질문</h2>
                    <p className="text-xs"><strong>Q. 이름 궁합은 정확한가요?</strong><br />전통 성명학 이론을 알고리즘화한 결과로, 재미와 참고용으로 활용하시면 좋습니다. 계산 오류가 없어 사람이 계산하는 것보다 일관성 있습니다.</p>
                    <p className="text-xs"><strong>Q. 궁합이 나쁘게 나오면 어떻게 하죠?</strong><br />궁합은 관계의 하나의 참고 지표일 뿐입니다. 다만 이름을 새로 짓는다면 오행 균형을 고려한 <a href="/naming" className="text-pink-600 underline">AI 작명</a>으로 개선할 수 있습니다.</p>
                    <p className="text-xs"><strong>Q. 커플 말고 다른 관계도 볼 수 있나요?</strong><br />네, 부모-자녀, 형제, 친구, 사비 관계 등 어떤 두 이름이든 분석 가능합니다.</p>
                </section>

            </main>
        </div>
    );
}

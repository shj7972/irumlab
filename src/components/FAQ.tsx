"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "이 서비스는 정말 무료인가요?",
        answer: "네, 기본적인 작명 추천과 사주 분석은 무료로 제공됩니다. 누구나 부담 없이 아이의 이름이나 자신의 이름을 지어볼 수 있도록 돕고 있습니다. 복잡한 가입 절차 없이 필수 정보만 입력하면 바로 결과를 확인하실 수 있습니다."
    },
    {
        question: "어떤 성명학 이론을 기반으로 하나요?",
        answer: "정통 성명학의 3대 요소인 자원오행(한자의 뜻과 부족한 기운 보완), 음령오행(발음의 조화), 수리성명학(획수의 길흉)을 모두 종합적으로 분석합니다. 단순히 획수만 맞추는 것이 아니라, 사주(四柱)를 정밀 분석하여 균형을 맞추는 용신(用神) 성명학을 따릅니다."
    },
    {
        question: "AI 작명은 믿을 수 있나요?",
        answer: "수십 년 경력의 작명가들이 사용하는 공식과 이론을 그대로 알고리즘화했습니다. 오히려 사람이 범할 수 있는 계산 실수(만세력 오류, 획수 계산 착오)가 없으며, 수천 개의 한자 조합 중 최적의 결과를 몇 초 만에 찾아냅니다."
    },
    {
        question: "개명 절차는 어떻게 되나요?",
        answer: "여기서 선택하신 좋은 이름으로 확정하셨다면, 관할 가정법원에 '개명 허가 신청서'를 제출해야 합니다. 성인의 경우 신용 불량이나 범죄 경력이 없다면 보통 2~3개월 내에 허가가 나옵니다. 최근에는 인터넷(대한민국 법원 전자소송)을 통해서도 비대면으로 간편하게 신청이 가능합니다."
    },
    {
        question: "추천된 이름의 한자는 어떤 기준인가요?",
        answer: "대법원에서 지정한 '인명용 한자' 8,000여 자 중에서 불용문자(이름에 쓰면 안 되는 한자)를 제외하고, 뜻이 좋고 사주에 도움이 되는 글자만을 엄선하여 추천해 드립니다."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
                        <HelpCircle className="w-6 h-6 text-brand-navy" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">
                        자주 묻는 질문 (FAQ)
                    </h2>
                    <p className="text-gray-500">
                        성명학 및 서비스 이용과 관련하여 가장 많이 궁금해하시는 내용입니다.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-brand-gold/50 bg-blue-50/30' : 'hover:border-gray-300'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-navy' : 'text-gray-700'}`}>
                                    Q. {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Header from "@/components/Header";
import { CheckCircle } from "lucide-react";
import { calculateSaju, calculateOhaengDistribution, findRecommendedElement, OHAENG_KOREAN } from "@/lib/saju";
import { generateNames } from "@/lib/naming";
import ResultContent from "@/components/ResultContent";

interface PageProps {
    searchParams: Promise<{
        lastName?: string;
        gender?: string;
        birthDate?: string;
        birthTime?: string;
    }>;
}

export default async function ResultPage(props: PageProps) {
    const params = await props.searchParams;
    const { lastName = "김", gender = "male", birthDate = "2024-01-01", birthTime = "12:00" } = params;

    // 1. Calculate Saju (Server Side)
    const saju = calculateSaju(birthDate, birthTime);
    const distribution = calculateOhaengDistribution(saju);
    const recommendedElement = findRecommendedElement(distribution);

    // 2. Generate Names (Target 5)
    const names = generateNames(lastName, gender, recommendedElement, saju);

    const freeNames = names.slice(0, 3);
    const lockedNames = names.slice(3, 5);

    const recommendedKorean = OHAENG_KOREAN[recommendedElement];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 pb-10">
                {/* Analysis Summary */}
                <div className="bg-brand-navy text-white px-6 py-8 rounded-b-3xl shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
                            <CheckCircle size={14} />
                            <span>사주 분석 완료</span>
                        </div>
                        <h1 className="text-2xl font-bold font-serif leading-relaxed mb-4">
                            {lastName}씨 가문의<br />
                            소중한 아이를 위한 작명
                        </h1>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-sm border border-white/10">
                            <p className="text-blue-100 mb-2">사주 요약</p>
                            <div className="flex justify-between items-center font-medium">
                                <div className="flex gap-2">
                                    <span className="opacity-75">{saju.year.gan}{saju.year.ji}({saju.year.ganKo}{saju.year.jiKo})년</span>
                                    <span className="opacity-75">{saju.month.gan}{saju.month.ji}월</span>
                                    <span className="opacity-75">{saju.day.gan}{saju.day.ji}일</span>
                                </div>
                                <div className="px-2 py-1 bg-brand-gold text-brand-navy text-xs font-bold rounded">
                                    {recommendedKorean} 기운 보완
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl -ml-5 -mb-5" />
                </div>

                {/* Client Interactive Area */}
                <ResultContent
                    freeNames={freeNames}
                    lockedNames={lockedNames}
                    saju={saju} // Pass Saju Data
                    distribution={distribution} // Pass Ohaeng Data
                    recommendedElement={recommendedElement}
                />
            </main>
        </div>
    );
}

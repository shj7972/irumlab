import { Saju, OhaengDistribution } from "@/lib/saju";
import OhaengChart from "./OhaengChart";
import SajuTable from "./SajuTable";

interface PremiumAnalysisProps {
    saju: Saju;
    distribution: OhaengDistribution;
    recommendedElement: string;
}

export default function PremiumAnalysis({ saju, distribution, recommendedElement }: PremiumAnalysisProps) {
    return (
        <div className="mt-8 bg-white rounded-3xl p-6 shadow-xl border border-brand-gold/30 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-2 mb-6">
                <span className="bg-brand-gold text-brand-navy px-3 py-1 rounded-full text-xs font-bold">PREMIUM</span>
                <h2 className="text-xl font-bold text-brand-navy">상세 운세 분석</h2>
            </div>

            <div className="space-y-8 divide-y divide-gray-100">
                {/* 1. Saju Table */}
                <div className="pt-2">
                    <SajuTable saju={saju} />
                </div>

                {/* 2. Ohaeng Chart */}
                <div className="pt-8">
                    <OhaengChart distribution={distribution} />
                </div>

                {/* 3. Detailed Text Logic */}
                <div className="pt-8 space-y-4">
                    <h3 className="font-bold text-gray-800 text-lg">용신/희신 상세 풀이</h3>
                    <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 leading-relaxed space-y-2">
                        <p>
                            귀하의 사주는 <strong>{Object.entries(distribution).sort((a, b) => b[1] - a[1])[0][0] === "wood" ? "목(Wood)" : "특정"} 기운</strong>이 강하고
                            상대적으로 <strong>{recommendedElement === "wood" ? "목(Wood)" : recommendedElement === "fire" ? "화(Fire)" : "특정"} 기운</strong>이 부족합니다.
                        </p>
                        <p>
                            따라서 인생의 균형을 맞추기 위해 <strong>용신(필요한 기운)</strong>으로
                            <span className="text-brand-navy font-bold"> {recommendedElement}</span>을(를) 사용해야 합니다.
                            이름에 이 기운을 넣으면 살아가면서 만나는 어려움을 중화시키고 복을 부를 수 있습니다.
                        </p>
                    </div>
                </div>

                {/* 4. Stroke Analysis (Mock for MVP) */}
                <div className="pt-8 space-y-4">
                    <h3 className="font-bold text-gray-800 text-lg">성명학 획수 분석</h3>
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-blue-50 p-3 rounded-xl">
                            <div className="text-xs text-gray-400 mb-1">초년운</div>
                            <div className="text-lg font-bold text-brand-navy">大吉 (대길)</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-xl">
                            <div className="text-xs text-gray-400 mb-1">청년운</div>
                            <div className="text-lg font-bold text-brand-navy">吉 (길)</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-xl">
                            <div className="text-xs text-gray-400 mb-1">말년운</div>
                            <div className="text-lg font-bold text-brand-navy">大吉 (대길)</div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">
                        * 제공된 이름들은 모두 획수 음양 조화가 맞춰진 이름입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

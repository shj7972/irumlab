
import Header from "@/components/Header";
import Link from "next/link";
import { generateAdvancedBrandNames } from "@/lib/brand-naming-advanced";
import { RefreshCcw, CheckCircle, AlertTriangle, XCircle, Search, Palette, BarChart } from "lucide-react";

interface PageProps {
    searchParams: Promise<{
        industry?: string;
        keywords?: string;
        target?: string;
        birthDate?: string;
        birthTime?: string;
        langPref?: string;
        vibePref?: string;
    }>;
}

export default async function AdvancedBrandResultPage(props: PageProps) {
    const params = await props.searchParams;

    // Fallback defaults
    const input = {
        industry: params.industry || "general",
        keywords: params.keywords || "Brand",
        target: params.target || "all",
        birthDate: params.birthDate,
        birthTime: params.birthTime,
        langPref: params.langPref,
        vibePref: params.vibePref
    };

    const results = generateAdvancedBrandNames(input);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1 px-5 py-8 pb-32 max-w-[480px] mx-auto w-full">
                <div className="mb-8 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-2">
                        Premium Analysis
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900 leading-snug">
                        AI 정밀 분석 결과
                    </h1>
                    <p className="text-gray-500 text-sm mt-2">
                        마케팅 적합도와 상표권 가능성까지<br />종합적으로 분석했습니다.
                    </p>
                </div>

                <div className="space-y-6">
                    {results.map((result, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-0 shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden ring-1 ring-gray-50">
                            {/* Header Stripe */}
                            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

                            <div className="p-6 pb-4">
                                {/* Name Section */}
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-3xl font-bold text-gray-900 tracking-tight font-sans">
                                        {result.name}
                                    </h3>
                                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-mono">
                                        No.{idx + 1}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm font-medium mb-4">
                                    {result.englishName}
                                </p>

                                <div className="bg-indigo-50/50 rounded-xl p-3 mb-6 border border-indigo-50 text-indigo-800 text-sm font-medium text-center italic">
                                    "{result.tagline}"
                                </div>

                                {/* Analysis Grid */}
                                <div className="space-y-4">
                                    {/* 1. Meaning */}
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                            <Search size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-500 mb-1">브랜드 의미</h4>
                                            <p className="text-sm text-gray-800 leading-relaxed">
                                                {result.meaning}
                                            </p>
                                        </div>
                                    </div>

                                    {/* 2. Marketing */}
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                            <BarChart size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-500 mb-1">마케팅 포인트</h4>
                                            <p className="text-sm text-gray-800 leading-relaxed">
                                                {result.marketingPoint}
                                            </p>
                                        </div>
                                    </div>

                                    {/* 3. Visual */}
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                            <Palette size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-500 mb-1">추천 컬러</h4>
                                            <div className="flex items-center gap-2 text-sm text-gray-800">
                                                <span className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border border-gray-100"></span>
                                                {result.colorRecommendation}
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4. Saju Match (Conditional) */}
                                    {result.sajuMatch && (
                                        <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-100 flex gap-3 items-start">
                                            <span className="text-lg">🔮</span>
                                            <div>
                                                <h4 className="text-xs font-bold text-yellow-800 mb-0.5">대표자 사주 매칭</h4>
                                                <p className="text-xs text-yellow-700 leading-snug">
                                                    {result.sajuMatch.desc}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Verification Footer */}
                            <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-between">
                                <VerificationItem
                                    label="도메인"
                                    status={result.verification.domain.available}
                                    warning={result.verification.domain.reason}
                                />
                                <div className="h-8 w-px bg-gray-200"></div>
                                <VerificationItem
                                    label="상표권"
                                    status={result.verification.trademark.available}
                                    warning={result.verification.trademark.reason}
                                />
                                <div className="h-8 w-px bg-gray-200"></div>
                                <VerificationItem
                                    label="SNS"
                                    status={result.verification.sns.available}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/naming/brand"
                        className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-indigo-600 transition-colors bg-white px-5 py-3 rounded-full border border-gray-200 shadow-sm"
                    >
                        <RefreshCcw size={14} />
                        <span>조건 변경하여 다시 생성</span>
                    </Link>
                </div>
            </main>
        </div>
    );
}

function VerificationItem({ label, status, warning }: { label: string, status: boolean, warning?: string }) {
    return (
        <div className="flex flex-col items-center flex-1 px-2 text-center">
            <span className="text-[10px] text-gray-400 mb-1 font-medium">{label}</span>
            {status ? (
                <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    <CheckCircle size={10} strokeWidth={3} />
                    <span className="text-[10px] font-bold">가능</span>
                </div>
            ) : (
                <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full" title={warning}>
                    <AlertTriangle size={10} strokeWidth={3} />
                    <span className="text-[10px] font-bold">주의</span>
                </div>
            )}
        </div>
    );
}

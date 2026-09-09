import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import KakaoAdFit from "@/components/KakaoAdFit";
import { LONGTAIL_PAGES, getLongtailPage, STYLE_LABELS, PLATFORM_LABELS } from "@/lib/english-longtail";
import { EXAMPLES_BY_STYLE } from "./examples";
import ReportCTA from "@/components/ReportCTA";
import { Sparkles, RefreshCcw, ChevronRight } from "lucide-react";

export const dynamicParams = false;
export const generateStaticParams = () => LONGTAIL_PAGES.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const page = getLongtailPage(slug);
    if (!page) return {};
    return {
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        alternates: { canonical: `https://irumlab.com/naming/english/guide/${page.slug}` },
        openGraph: {
            title: page.title,
            description: page.description,
            url: `https://irumlab.com/naming/english/guide/${page.slug}`,
            type: "website",
        },
    };
}

export default async function LongtailGuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = getLongtailPage(slug);
    if (!page) notFound();

    const styleLabel = STYLE_LABELS[page.styleId];
    const examples = EXAMPLES_BY_STYLE[page.styleId] || [];
    const toolQuery = new URLSearchParams({ platform: page.platform, gender: "neutral", styles: page.styleId });

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="px-5 py-10 max-w-[720px] mx-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-3">
                    {PLATFORM_LABELS[page.platform]} · {styleLabel} 스타일
                </span>
                <h1 className="text-2xl font-bold text-gray-900 leading-snug">{page.h1}</h1>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{page.intro}</p>

                {/* 예시 닉네임 10선 */}
                <section className="mt-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">{styleLabel} 닉네임 예시 10선</h2>
                    <div className="grid grid-cols-2 gap-2">
                        {examples.map((ex) => (
                            <div key={ex} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 text-center shadow-sm">
                                {ex}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 툴 CTA */}
                <section className="mt-10 rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 text-center">
                    <Sparkles className="inline text-purple-500" size={20} />
                    <h2 className="mt-2 text-lg font-bold text-gray-900">AI가 내 취향으로 만들어 드릴까요?</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        키워드 입력 → {styleLabel} 스타일 자동 적용 → 5초 안에 5개 생성
                    </p>
                    <Link
                        href={`/naming/english/result?platform=${page.platform}&gender=neutral&styles=${page.styleId}&keywords=`}
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-bold text-white hover:bg-purple-700 transition-colors"
                    >
                        <RefreshCcw size={14} /> 무료로 생성하기
                    </Link>
                </section>

                {/* 리포트 CTA (광고 열람) */}
                <div className="mt-6">
                    <ReportCTA tool="english" contextLabel="닉네임" />
                </div>

                {/* 관련 페이지 */}
                <section className="mt-10">
                    <h2 className="text-base font-bold text-gray-800 mb-3">다른 스타일 닉네임 보기</h2>
                    <div className="grid gap-2">
                        {LONGTAIL_PAGES.filter((p) => p.slug !== page.slug).map((p) => (
                            <Link
                                key={p.slug}
                                href={`/naming/english/guide/${p.slug}`}
                                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 hover:border-purple-300 transition-colors"
                            >
                                {p.h1}
                                <ChevronRight size={14} className="text-gray-400" />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

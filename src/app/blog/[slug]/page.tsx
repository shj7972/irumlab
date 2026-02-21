import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { Calendar, Clock, ArrowLeft, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return getAllPosts().map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        keywords: post.tags,
        openGraph: {
            title: `${post.title} | 이룸랩`,
            description: post.description,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const allPosts = getAllPosts().filter(p => p.slug !== slug).slice(0, 2);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Article Header */}
                <section className="bg-brand-navy text-white px-6 py-10 rounded-b-3xl">
                    <div className="max-w-2xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-1 text-blue-200 text-xs mb-4 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={12} />
                            <span>블로그 목록</span>
                        </Link>

                        <span className="inline-block px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-brand-gold text-[10px] font-bold mb-3">
                            {post.category}
                        </span>

                        <h1 className="text-2xl font-serif font-bold leading-snug mb-4">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 text-blue-200 text-xs">
                            <div className="flex items-center gap-1">
                                <Calendar size={12} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={12} />
                                <span>{post.readingTime}분 읽기</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="px-5 py-8 max-w-2xl mx-auto">
                    <div
                        className="prose prose-sm max-w-none
                            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:font-serif
                            [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-6 [&_h3]:mb-3
                            [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-sm
                            [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:pl-5
                            [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:pl-5
                            [&_li]:text-sm [&_li]:text-gray-600 [&_li]:leading-relaxed
                            [&_strong]:text-gray-900
                            [&_a]:text-brand-navy [&_a]:underline
                        "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 bg-gradient-to-br from-brand-navy to-blue-900 text-white rounded-2xl p-6 text-center">
                        <Sparkles size={24} className="mx-auto mb-3 text-brand-gold" />
                        <h3 className="font-bold text-lg mb-2">AI로 이름 지어보기</h3>
                        <p className="text-blue-200 text-sm mb-4">
                            사주 분석부터 트렌디한 이름 추천까지, 3초 만에 확인하세요.
                        </p>
                        <Link
                            href="/naming"
                            className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold py-3 px-6 rounded-xl text-sm hover:bg-yellow-400 transition-colors"
                        >
                            <Sparkles size={16} />
                            <span>무료로 작명하기</span>
                        </Link>
                    </div>

                    {/* Related Posts */}
                    {allPosts.length > 0 && (
                        <div className="mt-10">
                            <h3 className="font-bold text-gray-900 mb-4">관련 글</h3>
                            <div className="space-y-3">
                                {allPosts.map(p => (
                                    <Link
                                        key={p.slug}
                                        href={`/blog/${p.slug}`}
                                        className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-brand-navy/20 transition-all"
                                    >
                                        <span className="text-[10px] text-brand-navy font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                                            {p.category}
                                        </span>
                                        <h4 className="font-bold text-gray-900 text-sm mt-2 leading-snug">
                                            {p.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </main>
        </div>
    );
}

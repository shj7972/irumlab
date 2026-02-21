import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { getAllPosts } from "@/lib/blog-data";
import { Calendar, Clock, ChevronRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "작명 블로그 - 이름 짓기 꿀팁과 트렌드",
    description: "아기 이름 트렌드, 사주오행 작명법, 브랜드 네이밍 전략까지. 이름에 관한 모든 것을 알려드립니다.",
    openGraph: {
        title: "작명 블로그 - 이름 짓기 꿀팁과 트렌드 | 이룸랩",
        description: "아기 이름 트렌드, 사주오행 작명법, 브랜드 네이밍 전략까지.",
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-brand-navy text-white px-6 py-12 rounded-b-3xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs font-bold mb-4">
                            <BookOpen size={12} />
                            <span>Naming Blog</span>
                        </div>
                        <h1 className="text-3xl font-serif font-bold mb-3">작명 블로그</h1>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            이름 짓기의 모든 것 - 트렌드, 이론, 실전 팁
                        </p>
                    </div>
                </section>

                {/* Posts */}
                <section className="px-5 py-8 max-w-2xl mx-auto">
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-navy/20 transition-all group"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-brand-navy text-[10px] font-bold">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                                        <Calendar size={10} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                                        <Clock size={10} />
                                        <span>{post.readingTime}분</span>
                                    </div>
                                </div>

                                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-navy transition-colors leading-snug">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                                    {post.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-1.5">
                                        {post.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-navy transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

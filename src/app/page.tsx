import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { Sparkles, Globe, Rocket, ChevronRight, Star, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section - Baby Naming Main */}
      <section className="relative overflow-hidden bg-brand-navy text-white pt-12 pb-20 px-6 text-center rounded-b-[2.5rem] shadow-2xl">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute top-20 -left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold text-xs font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={12} />
            <span>AI 정통 성명학</span>
          </div>

          <h1 className="text-4xl font-serif font-bold leading-tight mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            소중한 아이에게<br />
            <span className="text-brand-gold">최고의 이름</span>을<br />
            선물하세요
          </h1>

          <p className="text-blue-100 text-sm leading-relaxed mb-8 opacity-90 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            사주팔자의 부족한 기운은 채우고<br />
            트렌디한 감각을 더해 평생 빛날 이름을 짓습니다.
          </p>

          <Link
            href="/naming"
            className="inline-flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-navy font-bold text-lg py-4 rounded-xl shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:bg-yellow-400 transition-all active:scale-[0.98] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
          >
            <Sparkles size={20} />
            <span>무료로 아기 이름 짓기</span>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 -mt-10 relative z-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* English Naming Card */}
          <Link href="/naming/english" className="block bg-white p-5 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-purple-200 transition-all group">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                <Globe size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-purple-600 font-bold mb-0.5">Global Naming</div>
                <div className="font-bold text-gray-900 text-lg">영어 닉네임</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <ChevronRight size={16} />
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              나의 분위기와 성격에 딱 맞는<br />세련된 영어 이름을 찾아보세요.
            </p>
          </Link>

          {/* Brand Naming Card */}
          <Link href="/naming/brand" className="block bg-white p-5 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-indigo-200 transition-all group">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                <Rocket size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-indigo-600 font-bold mb-0.5">Startup Branding</div>
                <div className="font-bold text-gray-900 text-lg">브랜드 네이밍</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <ChevronRight size={16} />
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              성공을 부르는 창업 아이템 이름,<br />업종별 맞춤형으로 제안합니다.
            </p>
          </Link>

          {/* Saju Info Cards - Hidden on mobile, shown on desktop or adjusted */}
          <div className="bg-gray-50 p-4 rounded-2xl text-center flex flex-col justify-center">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-sm font-bold text-gray-800">정통 만세력</div>
            <div className="text-xs text-gray-400">정확한 사주 분석</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl text-center flex flex-col justify-center">
            <div className="text-2xl mb-2">⚖️</div>
            <div className="text-sm font-bold text-gray-800">오행 균형</div>
            <div className="text-xs text-gray-400">부족한 기운 보완</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 pb-16">
        <h2 className="text-center font-bold text-gray-900 mb-8 flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-gray-300"></div>
          <span>Why AI 작명소?</span>
          <div className="h-px w-8 bg-gray-300"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex md:flex-col md:items-center md:text-center items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">정통 성명학 기반</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                단순한 단어 조합이 아닌, 사주 명리학의 오행과 음양 조화를 고려한 정통 작명법을 따릅니다.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col md:items-center md:text-center items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
              <Star size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">트렌드 AI 분석</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                최근 5년간의 인기 이름 데이터를 분석하여 촌스럽지 않고 세련된 이름을 추천합니다.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col md:items-center md:text-center items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">3초 만에 결과 확인</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                복잡한 절차 없이 필수 정보만 입력하면 AI가 즉시 분석하여 최적의 결과를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Naming Science Guide */}
      <section style={{ backgroundColor: '#f9fafb', padding: '40px 20px', marginTop: '60px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>
          <h3 style={{ color: '#374151', fontWeight: '700', fontSize: '1rem', marginBottom: '12px' }}>
            성명학(姓名學) 가이드: 운명을 바꾸는 이름의 힘
          </h3>
          <p style={{ marginBottom: '10px' }}>
            사주(四柱)가 태어날 때 정해지는 '선천적인 그릇'이라면, 이름은 그 그릇에 무엇을 담을지 결정하는 '후천적인 노력'입니다.
            성명학은 단순한 통계가 아닌, <strong>소리의 파장(음령오행)</strong>, <strong>한자의 뜻(자원오행)</strong>,
            그리고 <strong>수리적인 조화(원형이정)</strong>를 통해 사주의 불균형을 조절하는 학문입니다.
          </p>
          <p>
            본 서비스는 정통 성명학 이론인 <strong>자원오행(변화하는 기운)</strong>과 <strong>음령오행(소리의 기운)</strong>,
            <strong>수리성명학(획수의 길흉)</strong>을 모두 분석합니다. AI 알고리즘을 통해 당신의 사주에서
            가장 부족한 오행(용신)을 정확히 찾아내어, 인생의 흐름을 순탄하게 돕는 최적의 이름을 추천해 드립니다.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}

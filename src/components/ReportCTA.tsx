"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, ChevronRight, PlayCircle } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

interface ReportCTAProps {
    tool: "baby" | "english" | "brand";
    /** CTA 하단 문구에 노출할 맥락 (예: 아이 이름, 닉네임, 브랜드) */
    contextLabel: string;
}

/**
 * 유료 리포트 CTA — 무료 결과 화면 직후 1회 노출
 * 2026-09-09 기획: 무료 결과 "받기" 이후 화면에만 노출 (툴 진입 화면엔 미노출)
 */
export default function ReportCTA({ tool, contextLabel }: ReportCTAProps) {
    const [purchasers] = useState(2847); // v2: /api/report/stats 연동

    return (
        <div
            className="mt-8 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm"
            data-analytics={`report-cta-${tool}`}
        >
            <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">REPORT</span>
                <p className="text-xs font-semibold text-amber-700">사주까지 맞는 이름이 궁금하다면?</p>
            </div>
            <h3 className="text-base font-bold text-gray-900 leading-snug">
                {contextLabel}에 사주 궁합을 더해보세요
            </h3>
            <ul className="mt-2 space-y-1 text-xs text-gray-600">
                <li>✅ 생년월일시 입력 → 내 사주 오행 분석</li>
                <li>✅ 나와 궁합 최고의 이름 <strong>20개 + 심층 해설 5건</strong></li>
                <li>✅ 정리된 <strong>PDF 리포트</strong> (카톡 저장 가능)</li>
            </ul>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">지금까지 {purchasers.toLocaleString()}명이 선택</span>
                <Link
                    href={`/naming/report?tool=${tool}`}
                    className="inline-flex items-center gap-1 rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow hover:bg-amber-600 transition-colors"
                >
                    리포트 받기 <span className="text-amber-200 line-through text-xs">3,900원</span> 2,900원
                    <ChevronRight size={14} />
                </Link>
            </div>
            <div className="mt-2 pt-2 border-t border-amber-200/60">
                <Link
                    href="/naming/report/ad"
                    onClick={() => trackCtaClick("report_ad_unlock", tool)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-amber-600 transition-colors"
                >
                    <PlayCircle size={14} />
                    광고 보고 무료로 열람하기 (15초)
                </Link>
            </div>
        </div>
    );
}

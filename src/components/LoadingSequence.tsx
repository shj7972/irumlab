"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Activity, Search, FileText, Sparkles, ScrollText } from "lucide-react";
import { useRouter } from "next/navigation";

const STEPS = [
    {
        id: 1,
        message: "생년월일시를 간지(干支)로 변환하는 중...",
        sub: "정통 만세력 계산",
        icon: ScrollText,
        duration: 2000,
    },
    {
        id: 2,
        message: "사주팔자 오행(五行) 분석 중...",
        sub: "목·화·토·금·수 밸런스 측정",
        icon: Scale,
        duration: 2500,
    },
    {
        id: 3,
        message: "부족한 기운과 용신(用神) 도출 중...",
        sub: "운명을 보완할 핵심 기운 파악",
        icon: Activity,
        duration: 2500,
    },
    {
        id: 4,
        message: "최적의 한자 조합 탐색 중...",
        sub: "대법원 인명용 8,142자 스캔",
        icon: Search,
        duration: 3000,
    },
    {
        id: 5,
        message: "성명학적 획수와 음양 조화 검증...",
        sub: "길흉화복 정밀 분석",
        icon: FileText,
        duration: 2000,
    },
    {
        id: 6,
        message: "평생 불릴 최고의 이름 생성 완료!",
        sub: "결과 리포트 작성 중",
        icon: Sparkles,
        duration: 1500,
    },
];

import { useSearchParams } from "next/navigation";

export default function LoadingSequence() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const currentStep = STEPS[currentStepIndex];

        if (currentStepIndex < STEPS.length) {
            // Progress incrementer
            const progressInterval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) return 100;
                    return prev + (100 / (STEPS.length * 10)); // Rough approximation
                });
            }, 100);

            // Step transition
            timeout = setTimeout(() => {
                if (currentStepIndex < STEPS.length - 1) {
                    setCurrentStepIndex((prev) => prev + 1);
                } else {
                    // Finished
                    clearInterval(progressInterval);
                    setProgress(100);
                    setTimeout(() => {
                        console.log("Analysis Complete");
                        // Preserve query params
                        const query = searchParams.toString();
                        router.replace(`/naming/result?${query}`);
                    }, 1000);
                }
            }, currentStep.duration);

            return () => {
                clearTimeout(timeout);
                clearInterval(progressInterval);
            };
        }
    }, [currentStepIndex, router, searchParams]);

    const CurrentIcon = STEPS[currentStepIndex].icon;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[60vh]">
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                {/* Pulse Effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-brand-gold/20 rounded-full"
                />

                {/* Icon Transition */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStepIndex}
                        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 text-brand-navy p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
                    >
                        <CurrentIcon size={40} strokeWidth={1.5} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Text Transition */}
            <div className="text-center h-20 mb-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStepIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                            {STEPS[currentStepIndex].message}
                        </h2>
                        <p className="text-sm text-gray-500 font-medium">
                            {STEPS[currentStepIndex].sub}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden relative">
                <motion.div
                    className="absolute left-0 top-0 bottom-0 bg-brand-navy"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentStepIndex + 1) / STEPS.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>
            <p className="text-xs text-gray-300 mt-2 font-mono">
                {Math.round(((currentStepIndex + 1) / STEPS.length) * 100)}%
            </p>
        </div>
    );
}

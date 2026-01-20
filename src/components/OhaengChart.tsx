"use client";

import { motion } from "framer-motion";

type OhaengDistribution = {
    wood: number;
    fire: number;
    earth: number;
    metal: number;
    water: number;
};

const COLORS = {
    wood: "bg-green-500",
    fire: "bg-red-500",
    earth: "bg-yellow-500",
    metal: "bg-gray-400",
    water: "bg-blue-500"
};

const LABELS = {
    wood: "목(木)",
    fire: "화(火)",
    earth: "토(土)",
    metal: "금(金)",
    water: "수(水)"
};

export default function OhaengChart({ distribution }: { distribution: OhaengDistribution }) {
    const total = Object.values(distribution).reduce((a, b) => a + b, 0) || 1;
    const maxVal = Math.max(...Object.values(distribution));

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-lg">오행 밸런스 분석</h3>
            <div className="grid grid-cols-5 gap-2 h-40 items-end">
                {Object.entries(distribution).map(([elem, count], idx) => {
                    const height = `${(count / (maxVal || 1)) * 100}%`;
                    const color = COLORS[elem as keyof typeof COLORS];
                    const label = LABELS[elem as keyof typeof LABELS];

                    return (
                        <div key={elem} className="flex flex-col items-center gap-2 group">
                            <div className="relative w-full flex justify-center h-32 items-end">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: height }}
                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                    className={`w-full max-w-[40px] rounded-t-lg ${color} opacity-80 group-hover:opacity-100 transition-opacity relative min-h-[4px]`}
                                >
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-600">
                                        {count}
                                    </div>
                                </motion.div>
                            </div>
                            <span className="text-xs font-bold text-gray-600">{label}</span>
                        </div>
                    );
                })}
            </div>
            <p className="text-xs text-gray-400 text-center bg-gray-50 p-2 rounded">
                * 이상적인 사주는 오행이 골고루 분포된 상태입니다.
            </p>
        </div>
    );
}

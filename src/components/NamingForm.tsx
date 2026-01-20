"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

export default function NamingForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        lastName: "",
        gender: "male",
        birthDate: "",
        birthTime: "",
        isLunar: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate query string creation (in real app, use context or state manager)
        const query = new URLSearchParams(formData as any).toString();

        // Navigate to loading/analysis page
        router.push(`/naming/analysis?${query}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 py-4">

            {/* 1. 성 (Last Name) */}
            <div className="space-y-3">
                <label className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <User size={18} className="text-brand-navy" />
                    아이의 성(姓)을 입력해주세요
                </label>
                <div className="relative">
                    <input
                        type="text"
                        required
                        placeholder="예: 김 (Kim)"
                        className="w-full text-lg border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-navy transition-colors placeholder:text-gray-300 bg-transparent"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                </div>
            </div>

            {/* 2. 성별 (Gender) */}
            <div className="space-y-3">
                <label className="text-sm font-bold text-gray-800">성별</label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, gender: "male" })}
                        className={`py-4 rounded-xl border-2 transition-all font-medium ${formData.gender === "male"
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-gray-100 text-gray-400 hover:border-gray-200"
                            }`}
                    >
                        남자 아이 👦
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({ ...formData, gender: "female" })}
                        className={`py-4 rounded-xl border-2 transition-all font-medium ${formData.gender === "female"
                                ? "border-pink-500 bg-pink-50 text-pink-700"
                                : "border-gray-100 text-gray-400 hover:border-gray-200"
                            }`}
                    >
                        여자 아이 👧
                    </button>
                </div>
            </div>

            {/* 3. 생년월일 (Date & Time) */}
            <div className="space-y-4">
                <label className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <Calendar size={18} className="text-brand-navy" />
                    태어난 일시
                </label>

                <div className="space-y-3 bg-gray-50 p-5 rounded-2xl">
                    {/* 양력/음력 Toggle */}
                    <div className="flex bg-white p-1 rounded-lg w-fit shadow-sm border border-gray-100 mb-2">
                        <button
                            type="button"
                            onClick={() => setFormData({ ...formData, isLunar: false })}
                            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${!formData.isLunar ? 'bg-brand-navy text-white shadow-sm' : 'text-gray-400'}`}
                        >
                            양력
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormData({ ...formData, isLunar: true })}
                            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${formData.isLunar ? 'bg-brand-navy text-white shadow-sm' : 'text-gray-400'}`}
                        >
                            음력
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="w-full">
                            <label className="text-xs text-gray-500 mb-1 block">생년월일</label>
                            <input
                                type="date"
                                required
                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                                value={formData.birthDate}
                                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-xs text-gray-500 mb-1 block">태어난 시간 (모르면 비워두세요)</label>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-gray-400" />
                                <input
                                    type="time"
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                                    value={formData.birthTime}
                                    onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-brand-navy text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
            >
                {loading ? "분석 준비 중..." : "이름 짓기 시작"}
            </motion.button>
        </form>
    );
}

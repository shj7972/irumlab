"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronRight, Home, Sparkles, Globe, Rocket } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
    { label: "홈으로", href: "/", icon: Home },
    { label: "AI 아기 작명", href: "/naming", icon: Sparkles },
    { label: "영어 닉네임", href: "/naming/english", icon: Globe },
    { label: "브랜드 네이밍", href: "/naming/brand", icon: Rocket },
];

export default function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 -mr-2 text-gray-600 hover:text-brand-navy transition-colors active:scale-95"
            >
                <Menu size={24} />
            </button>

            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                                className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[101] flex flex-col"
                            >
                                <div className="p-5 flex justify-end border-b border-gray-100">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-gray-500 hover:text-gray-900 bg-gray-50 rounded-full"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto py-4">
                                    <nav className="px-4 space-y-2">
                                        {MENU_ITEMS.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 text-gray-700 hover:text-brand-navy transition-all group"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-white border border-transparent group-hover:border-gray-200 flex items-center justify-center text-gray-500 group-hover:text-brand-navy transition-colors">
                                                        <Icon size={16} />
                                                    </div>
                                                    <span className="font-medium flex-1">{item.label}</span>
                                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-gold" />
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </div>

                                <div className="p-6 bg-gray-50 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                                        © 2024 AI Naming Lab.<br />
                                        All rights reserved.
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}

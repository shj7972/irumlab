"use client";

import { useState } from "react";
import { Share2, Link2, Check } from "lucide-react";
import { trackShare } from "@/lib/analytics";

interface ShareButtonsProps {
    title: string;
    description: string;
    type: "naming" | "english" | "brand";
}

declare global {
    interface Window {
        Kakao?: {
            isInitialized: () => boolean;
            init: (key: string) => void;
            Share: {
                sendDefault: (options: Record<string, unknown>) => void;
            };
        };
    }
}

export default function ShareButtons({ title, description, type }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const getShareUrl = () => {
        if (typeof window === "undefined") return "https://irumlab.com";
        return window.location.href;
    };

    const getServiceUrl = () => {
        const map = {
            naming: "https://irumlab.com/naming",
            english: "https://irumlab.com/naming/english",
            brand: "https://irumlab.com/naming/brand",
        };
        return map[type];
    };

    const shareText = `${title}\n${description}\n\n나도 해보기 👉`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(getServiceUrl());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback
            const textarea = document.createElement("textarea");
            textarea.value = getServiceUrl();
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleKakaoShare = () => {
        if (typeof window === "undefined") return;
        trackShare("kakao", type);

        const shareUrl = getServiceUrl();

        if (window.Kakao && !window.Kakao.isInitialized()) {
            // Kakao SDK not initialized - fallback to share URL
        }

        if (window.Kakao?.Share) {
            window.Kakao.Share.sendDefault({
                objectType: "feed",
                content: {
                    title: title,
                    description: description,
                    imageUrl: "https://irumlab.com/og-image.png",
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl,
                    },
                },
                buttons: [
                    {
                        title: "나도 해보기",
                        link: {
                            mobileWebUrl: shareUrl,
                            webUrl: shareUrl,
                        },
                    },
                ],
            });
        } else {
            // Kakao SDK not available - open share via URL scheme
            const kakaoUrl = `https://story.kakao.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
            window.open(kakaoUrl, "_blank", "width=600,height=400");
        }
    };

    const handleTwitterShare = () => {
        trackShare("twitter", type);
        const url = getServiceUrl();
        const text = encodeURIComponent(shareText);
        window.open(
            `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`,
            "_blank",
            "width=600,height=400"
        );
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: description,
                    url: getServiceUrl(),
                });
            } catch {
                // User cancelled or error
            }
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={handleNativeShare}
                className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-blue-900 transition-colors shadow-lg active:scale-95 transform"
            >
                <Share2 size={16} />
                <span>결과 공유하기</span>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <p className="text-xs font-bold text-gray-500 mb-3 text-center">공유하기</p>
                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={handleKakaoShare}
                                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-yellow-50 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#FEE500] flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3C1E1E">
                                        <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.52 6.6-.2.74-.72 2.68-.82 3.1-.13.52.19.51.4.37.17-.1 2.62-1.78 3.68-2.5.7.1 1.44.15 2.22.15 5.52 0 10-3.58 10-7.92S17.52 3 12 3z" />
                                    </svg>
                                </div>
                                <span className="text-[10px] font-medium text-gray-600">카카오톡</span>
                            </button>

                            <button
                                onClick={handleTwitterShare}
                                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                <span className="text-[10px] font-medium text-gray-600">X</span>
                            </button>

                            <button
                                onClick={handleCopyLink}
                                className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-blue-50 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                                    {copied ? <Check size={18} className="text-green-500" /> : <Link2 size={18} />}
                                </div>
                                <span className="text-[10px] font-medium text-gray-600">
                                    {copied ? "복사됨!" : "링크 복사"}
                                </span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "이룸랩 - AI 사주 작명소";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: "absolute",
                        top: -40,
                        right: -40,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: "rgba(212, 175, 55, 0.15)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -60,
                        left: -60,
                        width: 250,
                        height: 250,
                        borderRadius: "50%",
                        background: "rgba(139, 92, 246, 0.12)",
                        display: "flex",
                    }}
                />

                {/* Logo icon */}
                <div
                    style={{
                        fontSize: 72,
                        color: "#d4af37",
                        marginBottom: 16,
                        display: "flex",
                    }}
                >
                    示
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: 56,
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: 12,
                        display: "flex",
                    }}
                >
                    이룸랩 (Irum Lab)
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        fontSize: 28,
                        color: "#d4af37",
                        marginBottom: 32,
                        display: "flex",
                    }}
                >
                    AI 사주 작명소
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: 22,
                        color: "#94a3b8",
                        textAlign: "center",
                        maxWidth: 700,
                        lineHeight: 1.5,
                        display: "flex",
                    }}
                >
                    사주명리학과 AI가 만드는 최고의 이름
                </div>

                {/* Service badges */}
                <div
                    style={{
                        display: "flex",
                        gap: 16,
                        marginTop: 40,
                    }}
                >
                    {["아기 작명", "영어 닉네임", "브랜드 네이밍"].map(
                        (label) => (
                            <div
                                key={label}
                                style={{
                                    padding: "10px 24px",
                                    borderRadius: 24,
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    color: "#e2e8f0",
                                    fontSize: 18,
                                    display: "flex",
                                }}
                            >
                                {label}
                            </div>
                        )
                    )}
                </div>
            </div>
        ),
        { ...size }
    );
}

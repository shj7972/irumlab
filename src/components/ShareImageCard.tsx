"use client";

import { useRef, useState } from "react";
import { Download, ImageDown, Loader2 } from "lucide-react";

// ─── 타입 정의 ───────────────────────────────────────────────────────────────

export interface BabyNameCardData {
  type: "baby";
  lastName: string;
  name: string;       // 이름만 (성 제외)
  hanja: string;
  meaning: string;
  element: string;    // "wood" | "fire" | "earth" | "metal" | "water"
  tags: string[];
}

export interface EnglishNameCardData {
  type: "english";
  name: string;
  meaning: string;
  story: string;
  platform: string;   // "game" | "instagram" | "youtube" | "general"
  tags: string[];
}

export type ShareCardData = BabyNameCardData | EnglishNameCardData;

// ─── 오행 한국어 / 이모지 매핑 ────────────────────────────────────────────────

const ELEMENT_KO: Record<string, string> = {
  wood: "목(木)",
  fire: "화(火)",
  earth: "토(土)",
  metal: "금(金)",
  water: "수(水)",
};

const ELEMENT_EMOJI: Record<string, string> = {
  wood: "🌿",
  fire: "🔥",
  earth: "🌏",
  metal: "✨",
  water: "💧",
};

const ELEMENT_COLOR: Record<string, string> = {
  wood: "#22c55e",
  fire: "#f97316",
  earth: "#eab308",
  metal: "#94a3b8",
  water: "#3b82f6",
};

const PLATFORM_LABEL: Record<string, string> = {
  game: "🎮 Game",
  instagram: "📸 Instagram",
  youtube: "▶ YouTube",
  general: "✨ Nickname",
};

// ─── 이미지 캡처 함수 ─────────────────────────────────────────────────────────

async function captureCard(el: HTMLElement, fileName: string): Promise<void> {
  // 동적 import로 번들 크기 최적화
  const html2canvas = (await import("html2canvas")).default;

  const canvas = await html2canvas(el, {
    scale: 3,           // 고해상도
    useCORS: true,
    backgroundColor: null,
    logging: false,
  });

  const dataUrl = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = fileName;
  link.click();
}

// ─── 아기 이름 카드 렌더러 ───────────────────────────────────────────────────

function BabyCard({ data }: { data: BabyNameCardData }) {
  const elemColor = ELEMENT_COLOR[data.element] ?? "#1e3a8a";
  const elemLabel = ELEMENT_KO[data.element] ?? data.element;
  const elemEmoji = ELEMENT_EMOJI[data.element] ?? "⭐";

  return (
    <div
      style={{
        width: 360,
        background: "linear-gradient(145deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)",
        borderRadius: 24,
        overflow: "hidden",
        fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif",
        position: "relative",
      }}
    >
      {/* 배경 데코 */}
      <div style={{
        position: "absolute", top: -40, right: -40,
        width: 160, height: 160,
        background: "rgba(212,175,55,0.15)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", bottom: -30, left: -30,
        width: 120, height: 120,
        background: "rgba(255,255,255,0.07)",
        borderRadius: "50%",
      }} />

      {/* 헤더 */}
      <div style={{
        padding: "20px 24px 16px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <span style={{ fontSize: 16 }}>✨</span>
        <span style={{
          color: "#d4af37",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: 0.5,
        }}>AI 사주 작명소 · 이룸랩</span>
      </div>

      {/* 이름 영역 */}
      <div style={{ padding: "28px 24px 20px", textAlign: "center", position: "relative" }}>
        <div style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: 12,
          marginBottom: 8,
          letterSpacing: 1,
        }}>추천 이름</div>

        <div style={{
          color: "#ffffff",
          fontSize: 52,
          fontWeight: 800,
          letterSpacing: 6,
          lineHeight: 1.1,
          marginBottom: 6,
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}>
          {data.lastName}{data.name}
        </div>

        {data.hanja && (
          <div style={{
            color: "#d4af37",
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: 4,
            marginBottom: 10,
          }}>
            {data.hanja}
          </div>
        )}

        <div style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: 13,
          lineHeight: 1.6,
        }}>
          {data.meaning}
        </div>
      </div>

      {/* 오행 뱃지 */}
      <div style={{
        margin: "0 24px 20px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: elemColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          flexShrink: 0,
        }}>
          {elemEmoji}
        </div>
        <div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, marginBottom: 2 }}>
            사주 오행 보완
          </div>
          <div style={{ color: "#ffffff", fontWeight: 700, fontSize: 13 }}>
            {elemLabel} 기운을 채워주는 이름
          </div>
        </div>
      </div>

      {/* 태그 */}
      <div style={{
        padding: "0 24px 20px",
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
      }}>
        {data.tags.map(tag => (
          <span key={tag} style={{
            background: "rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.8)",
            borderRadius: 20,
            padding: "4px 10px",
            fontSize: 11,
            fontWeight: 600,
          }}>{tag}</span>
        ))}
      </div>

      {/* 푸터 */}
      <div style={{
        background: "rgba(0,0,0,0.25)",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>
          irumlab.com
        </span>
        <span style={{
          color: "#d4af37",
          fontSize: 11,
          fontWeight: 600,
        }}>
          무료 AI 사주 작명 →
        </span>
      </div>
    </div>
  );
}

// ─── 영어 닉네임 카드 렌더러 ─────────────────────────────────────────────────

function EnglishCard({ data }: { data: EnglishNameCardData }) {
  const platformLabel = PLATFORM_LABEL[data.platform] ?? "✨ Nickname";

  const bgMap: Record<string, string> = {
    game: "linear-gradient(145deg, #111827 0%, #1f2937 100%)",
    instagram: "linear-gradient(145deg, #7c3aed 0%, #db2777 100%)",
    youtube: "linear-gradient(145deg, #dc2626 0%, #b91c1c 100%)",
    general: "linear-gradient(145deg, #4f46e5 0%, #7c3aed 100%)",
  };

  const bg = bgMap[data.platform] ?? bgMap.general;

  return (
    <div
      style={{
        width: 360,
        background: bg,
        borderRadius: 24,
        overflow: "hidden",
        fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
        position: "relative",
      }}
    >
      {/* 배경 데코 */}
      <div style={{
        position: "absolute", top: -50, right: -50,
        width: 180, height: 180,
        background: "rgba(255,255,255,0.08)",
        borderRadius: "50%",
      }} />

      {/* 헤더 */}
      <div style={{
        padding: "20px 24px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <span style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
        }}>AI NICKNAME GENERATOR</span>
        <span style={{
          background: "rgba(255,255,255,0.15)",
          color: "white",
          borderRadius: 20,
          padding: "3px 10px",
          fontSize: 11,
          fontWeight: 700,
        }}>{platformLabel}</span>
      </div>

      {/* 닉네임 */}
      <div style={{ padding: "32px 24px 24px", textAlign: "center", position: "relative" }}>
        <div style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: 11,
          letterSpacing: 2,
          marginBottom: 10,
          textTransform: "uppercase",
        }}>Your Nickname</div>

        <div style={{
          color: "#ffffff",
          fontSize: 46,
          fontWeight: 900,
          letterSpacing: -1,
          lineHeight: 1.1,
          marginBottom: 14,
          textShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}>
          {data.name}
        </div>

        <div style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 10,
        }}>
          {data.meaning}
        </div>

        {data.story && (
          <div style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 12,
            lineHeight: 1.6,
            padding: "10px 16px",
            background: "rgba(0,0,0,0.2)",
            borderRadius: 10,
            textAlign: "left",
          }}>
            "{data.story}"
          </div>
        )}
      </div>

      {/* 태그 */}
      <div style={{
        padding: "0 24px 20px",
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
      }}>
        {data.tags.map(tag => (
          <span key={tag} style={{
            background: "rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.85)",
            borderRadius: 20,
            padding: "4px 10px",
            fontSize: 11,
            fontWeight: 600,
          }}>{tag}</span>
        ))}
      </div>

      {/* 푸터 */}
      <div style={{
        background: "rgba(0,0,0,0.3)",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
          irumlab.com
        </span>
        <span style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: 11,
          fontWeight: 600,
        }}>
          무료 닉네임 생성 →
        </span>
      </div>
    </div>
  );
}

// ─── 메인 ShareImageCard 컴포넌트 ────────────────────────────────────────────

interface ShareImageCardProps {
  data: ShareCardData;
}

export default function ShareImageCard({ data }: ShareImageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current || isGenerating) return;
    setIsGenerating(true);
    try {
      const fileName =
        data.type === "baby"
          ? `이룸랩_${data.lastName}${data.name}_작명결과.png`
          : `이룸랩_${data.name}_닉네임.png`;
      await captureCard(cardRef.current, fileName);
    } catch (err) {
      console.error("이미지 생성 실패:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* 트리거 버튼 */}
      <button
        onClick={() => setShowPreview(v => !v)}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-navy to-blue-700 text-white font-bold py-3 px-6 rounded-xl text-sm hover:opacity-90 transition-all shadow-lg active:scale-95 transform"
      >
        <ImageDown size={16} />
        <span>이미지 카드 만들기</span>
      </button>

      {/* 카드 미리보기 + 다운로드 */}
      {showPreview && (
        <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* 미리보기 카드 (html2canvas 캡처 대상) */}
          <div
            ref={cardRef}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ display: "inline-block" }}
          >
            {data.type === "baby" ? (
              <BabyCard data={data} />
            ) : (
              <EnglishCard data={data} />
            )}
          </div>

          {/* 안내 텍스트 */}
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            카드를 다운로드해서 카카오톡·인스타그램에 공유해 보세요! 🎉
          </p>

          {/* 다운로드 버튼 */}
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold py-3 px-8 rounded-xl text-sm hover:bg-yellow-400 transition-all shadow-lg active:scale-95 transform disabled:opacity-60"
          >
            {isGenerating ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>이미지 생성 중...</span>
              </>
            ) : (
              <>
                <Download size={16} />
                <span>PNG 저장하기</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

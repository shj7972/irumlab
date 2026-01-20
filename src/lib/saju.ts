import lunisolar from "lunisolar";

// Define Types
export type Ganji = {
    gan: string; // Hanja
    ji: string;  // Hanja
    ganKo: string; // Korean
    jiKo: string;  // Korean
    ohaeng: {
        gan: string;
        ji: string;
    };
};

export type Saju = {
    year: Ganji;
    month: Ganji;
    day: Ganji;
    hour: Ganji;
};

export type OhaengDistribution = {
    wood: number;
    fire: number;
    earth: number;
    metal: number;
    water: number;
};

// Constants: Cheongan & Jiji (Korean)
const CHEONGAN_KO = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const JIJI_KO = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];

// Constants: Cheongan & Jiji (Hanja)
const CHEONGAN_HANJA = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const JIJI_HANJA = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

const OHAENG_MAP: Record<string, string> = {
    갑: "wood", 을: "wood",
    병: "fire", 정: "fire",
    무: "earth", 기: "earth",
    경: "metal", 신: "metal",
    임: "water", 계: "water",

    자: "water", 축: "earth",
    인: "wood", 묘: "wood",
    진: "earth", 사: "fire",
    오: "fire", 미: "earth",
    유: "metal",
    술: "earth", 해: "water",
};

/**
 * Calculates the Saju (Four Pillars) for a given date.
 */
export function calculateSaju(dateString: string, timeString: string): Saju {
    const date = new Date(`${dateString}T${timeString || "00:00"}:00`);
    const ls = lunisolar(date);

    // Helpers to get index safely
    const getYGanIdx = () => ls.char8.year.stem.value;
    const getYJiIdx = () => ls.char8.year.branch.value;
    const getMGanIdx = () => ls.char8.month.stem.value;
    const getMJiIdx = () => ls.char8.month.branch.value;
    const getDGanIdx = () => ls.char8.day.stem.value;
    const getDJiIdx = () => ls.char8.day.branch.value;
    const getHGanIdx = () => ls.char8.hour.stem.value;
    const getHJiIdx = () => ls.char8.hour.branch.value;

    return {
        year: createGanji(getYGanIdx(), getYJiIdx()),
        month: createGanji(getMGanIdx(), getMJiIdx()),
        day: createGanji(getDGanIdx(), getDJiIdx()),
        hour: createGanji(getHGanIdx(), getHJiIdx()),
    };
}

function createGanji(ganIdx: number, jiIdx: number): Ganji {
    const ganKo = CHEONGAN_KO[ganIdx];
    const jiKo = JIJI_KO[jiIdx];

    return {
        gan: CHEONGAN_HANJA[ganIdx],
        ji: JIJI_HANJA[jiIdx],
        ganKo: ganKo,
        jiKo: jiKo,
        ohaeng: {
            gan: OHAENG_MAP[ganKo],
            ji: OHAENG_MAP[jiKo],
        },
    };
}

/**
 * Calculates the distribution of Five Elements (Ohaeng) in the Saju.
 */
export function calculateOhaengDistribution(saju: Saju): OhaengDistribution {
    const distribution = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
    const pillars = [saju.year, saju.month, saju.day, saju.hour];

    pillars.forEach((p) => {
        distribution[p.ohaeng.gan as keyof OhaengDistribution] += 1;
        distribution[p.ohaeng.ji as keyof OhaengDistribution] += 1;
    });

    return distribution;
}

/**
 * Identifies the "Yongsin" (Beneficial Element)
 */
export function findRecommendedElement(distribution: OhaengDistribution): string {
    const missing = Object.entries(distribution).filter(([_, count]) => count === 0);
    if (missing.length > 0) return missing[0][0];

    const sorted = Object.entries(distribution).sort((a, b) => a[1] - b[1]);
    return sorted[0][0];
}

export const OHAENG_KOREAN: Record<string, string> = {
    wood: "목(木)",
    fire: "화(火)",
    earth: "토(土)",
    metal: "금(金)",
    water: "수(水)"
};

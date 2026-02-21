// Name Compatibility Analysis based on Korean naming traditions
// Uses stroke count numerology and phonetic harmony

const INITIAL_CONSONANTS = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
const MEDIAL_VOWELS = ["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"];
const FINAL_CONSONANTS = ["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

// Stroke counts for initial consonants (based on naming convention)
const INITIAL_STROKES: Record<string, number> = {
    "ㄱ": 2, "ㄲ": 4, "ㄴ": 2, "ㄷ": 3, "ㄸ": 6,
    "ㄹ": 5, "ㅁ": 4, "ㅂ": 4, "ㅃ": 8, "ㅅ": 2,
    "ㅆ": 4, "ㅇ": 1, "ㅈ": 3, "ㅉ": 6, "ㅊ": 4,
    "ㅋ": 3, "ㅌ": 4, "ㅍ": 4, "ㅎ": 3,
};

const VOWEL_STROKES: Record<string, number> = {
    "ㅏ": 2, "ㅐ": 3, "ㅑ": 3, "ㅒ": 4, "ㅓ": 2,
    "ㅔ": 3, "ㅕ": 3, "ㅖ": 4, "ㅗ": 2, "ㅘ": 4,
    "ㅙ": 5, "ㅚ": 3, "ㅛ": 3, "ㅜ": 2, "ㅝ": 4,
    "ㅞ": 5, "ㅟ": 3, "ㅠ": 3, "ㅡ": 1, "ㅢ": 2, "ㅣ": 1,
};

const FINAL_STROKES: Record<string, number> = {
    "": 0, "ㄱ": 2, "ㄲ": 4, "ㄳ": 4, "ㄴ": 2,
    "ㄵ": 5, "ㄶ": 5, "ㄷ": 3, "ㄹ": 5, "ㄺ": 7,
    "ㄻ": 9, "ㄼ": 9, "ㄽ": 7, "ㄾ": 9, "ㄿ": 9,
    "ㅀ": 8, "ㅁ": 4, "ㅂ": 4, "ㅄ": 6, "ㅅ": 2,
    "ㅆ": 4, "ㅇ": 1, "ㅈ": 3, "ㅊ": 4, "ㅋ": 3,
    "ㅌ": 4, "ㅍ": 4, "ㅎ": 3,
};

function decomposeKorean(char: string): { initial: string; medial: string; final: string } | null {
    const code = char.charCodeAt(0);
    if (code < 0xAC00 || code > 0xD7A3) return null;

    const offset = code - 0xAC00;
    const initialIdx = Math.floor(offset / (21 * 28));
    const medialIdx = Math.floor((offset % (21 * 28)) / 28);
    const finalIdx = offset % 28;

    return {
        initial: INITIAL_CONSONANTS[initialIdx],
        medial: MEDIAL_VOWELS[medialIdx],
        final: FINAL_CONSONANTS[finalIdx],
    };
}

function getStrokeCount(name: string): number {
    let total = 0;
    for (const char of name) {
        const decomposed = decomposeKorean(char);
        if (decomposed) {
            total += (INITIAL_STROKES[decomposed.initial] || 0);
            total += (VOWEL_STROKES[decomposed.medial] || 0);
            total += (FINAL_STROKES[decomposed.final] || 0);
        }
    }
    return total;
}

// Ohaeng element from phonetic
const PHONETIC_OHAENG: Record<string, string> = {
    "ㄱ": "wood", "ㄲ": "wood", "ㅋ": "wood",
    "ㄴ": "fire", "ㄷ": "fire", "ㄸ": "fire", "ㄹ": "fire", "ㅌ": "fire",
    "ㅇ": "earth", "ㅎ": "earth",
    "ㅅ": "metal", "ㅆ": "metal", "ㅈ": "metal", "ㅉ": "metal", "ㅊ": "metal",
    "ㅁ": "water", "ㅂ": "water", "ㅃ": "water", "ㅍ": "water",
};

function getPhoneticElements(name: string): string[] {
    const elements: string[] = [];
    for (const char of name) {
        const decomposed = decomposeKorean(char);
        if (decomposed) {
            const el = PHONETIC_OHAENG[decomposed.initial];
            if (el) elements.push(el);
        }
    }
    return elements;
}

// Ohaeng compatibility (상생/상극)
const HARMONY_PAIRS: [string, string][] = [
    ["wood", "fire"],   // 목생화
    ["fire", "earth"],  // 화생토
    ["earth", "metal"], // 토생금
    ["metal", "water"], // 금생수
    ["water", "wood"],  // 수생목
];

const CONFLICT_PAIRS: [string, string][] = [
    ["wood", "earth"],  // 목극토
    ["earth", "water"], // 토극수
    ["water", "fire"],  // 수극화
    ["fire", "metal"],  // 화극금
    ["metal", "wood"],  // 금극목
];

function checkHarmony(el1: string, el2: string): "harmony" | "conflict" | "neutral" {
    for (const [a, b] of HARMONY_PAIRS) {
        if ((el1 === a && el2 === b) || (el1 === b && el2 === a)) return "harmony";
    }
    for (const [a, b] of CONFLICT_PAIRS) {
        if ((el1 === a && el2 === b) || (el1 === b && el2 === a)) return "conflict";
    }
    if (el1 === el2) return "harmony";
    return "neutral";
}

const OHAENG_KO: Record<string, string> = {
    wood: "목(木)", fire: "화(火)", earth: "토(土)", metal: "금(金)", water: "수(水)",
};

export interface CompatibilityResult {
    score: number; // 0-100
    grade: string; // SS, S, A, B, C
    strokeScore: number;
    phoneticScore: number;
    harmonies: string[];
    conflicts: string[];
    description: string;
    advice: string;
}

export function analyzeCompatibility(name1: string, name2: string): CompatibilityResult {
    // 1. Stroke number harmony
    const strokes1 = getStrokeCount(name1);
    const strokes2 = getStrokeCount(name2);
    const strokeSum = strokes1 + strokes2;
    const strokeDiff = Math.abs(strokes1 - strokes2);

    // Lucky numbers in numerology: remainder when divided by 10
    const luckyRemainders = [1, 3, 5, 6, 8];
    const strokeRemainder = strokeSum % 10;
    const isStrokeLucky = luckyRemainders.includes(strokeRemainder);
    const strokeScore = isStrokeLucky ? 90 - strokeDiff : 60 - strokeDiff;

    // 2. Phonetic element harmony
    const elements1 = getPhoneticElements(name1);
    const elements2 = getPhoneticElements(name2);

    let harmonyCount = 0;
    let conflictCount = 0;
    const harmonies: string[] = [];
    const conflicts: string[] = [];

    for (const e1 of elements1) {
        for (const e2 of elements2) {
            const result = checkHarmony(e1, e2);
            if (result === "harmony") {
                harmonyCount++;
                const desc = `${OHAENG_KO[e1]} ↔ ${OHAENG_KO[e2]} 상생`;
                if (!harmonies.includes(desc)) harmonies.push(desc);
            } else if (result === "conflict") {
                conflictCount++;
                const desc = `${OHAENG_KO[e1]} ↔ ${OHAENG_KO[e2]} 상극`;
                if (!conflicts.includes(desc)) conflicts.push(desc);
            }
        }
    }

    const phoneticScore = Math.min(100, Math.max(20, 60 + harmonyCount * 15 - conflictCount * 20));

    // 3. Combined score
    const finalScore = Math.min(100, Math.max(10, Math.round(strokeScore * 0.4 + phoneticScore * 0.6)));

    // Grade
    let grade: string;
    if (finalScore >= 90) grade = "SS";
    else if (finalScore >= 80) grade = "S";
    else if (finalScore >= 65) grade = "A";
    else if (finalScore >= 50) grade = "B";
    else grade = "C";

    // Description
    let description: string;
    let advice: string;
    if (finalScore >= 85) {
        description = "두 이름의 음운과 획수가 매우 조화롭습니다. 오행의 상생 관계가 강하게 나타나며, 함께할 때 서로의 부족한 기운을 채워주는 최상의 조합입니다.";
        advice = "서로의 장점을 더욱 빛나게 해주는 관계입니다. 함께 하는 활동에서 시너지가 기대됩니다.";
    } else if (finalScore >= 70) {
        description = "전반적으로 좋은 궁합입니다. 음운의 조화가 안정적이며, 서로 보완하는 기운이 있습니다.";
        advice = "소통을 통해 더 깊은 유대감을 형성할 수 있습니다. 서로의 차이를 존중하면 더 좋은 관계로 발전합니다.";
    } else if (finalScore >= 55) {
        description = "보통 수준의 궁합입니다. 일부 상생과 상극이 섞여 있어 노력이 필요한 관계입니다.";
        advice = "서로의 다른 점을 이해하고 배려하면 충분히 좋은 관계를 만들 수 있습니다.";
    } else {
        description = "상극의 기운이 다소 강한 조합입니다. 하지만 이름의 궁합은 참고 사항일 뿐, 실제 관계는 서로의 노력으로 얼마든지 좋아질 수 있습니다.";
        advice = "서로의 장점에 집중하고, 갈등이 생길 때는 한 발짝 물러서는 여유를 가져보세요.";
    }

    return {
        score: finalScore,
        grade,
        strokeScore: Math.min(100, Math.max(10, strokeScore)),
        phoneticScore,
        harmonies,
        conflicts,
        description,
        advice,
    };
}

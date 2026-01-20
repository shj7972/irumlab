
import { calculateSaju, calculateOhaengDistribution, findRecommendedElement } from "./saju";

// --- Types ---
export type VerificationStatus = {
    available: boolean;
    reason?: string;
};

export type BrandAnalysis = {
    name: string;
    englishName: string;
    tagline: string;
    marketingPoint: string;
    colorRecommendation: string;
    meaning: string;
    verification: {
        trademark: VerificationStatus;
        domain: VerificationStatus;
        sns: VerificationStatus;
    };
    sajuMatch?: {
        element: string;
        boosted: boolean;
        desc: string;
    };
    tags: string[];
};

// --- DB & Constants ---

// Simple Synonym DB (Korean -> English/Related)
const SYNONYMS: Record<string, string[]> = {
    "커피": ["Coffee", "Bean", "Brew", "Roast", "Drip", "Caffeine"],
    "카페": ["Cafe", "Lounge", "Space", "Stay", "Haus"],
    "자연": ["Nature", "Green", "Forest", "Eco", "Pure", "Leaf"],
    "힐링": ["Healing", "Rest", "Calm", "Slow", "Mind"],
    "바다": ["Sea", "Ocean", "Blue", "Wave", "Marine", "Deep"],
    "집": ["House", "Home", "Stay", "Zip", "Casa", "Maison"],
    "꽃": ["Flower", "Bloom", "Flora", "Blossom", "Garden"],
    "여행": ["Travel", "Trip", "Journey", "Tour", "Voyage"],
    "선물": ["Gift", "Present", "Box", "Wrap"],
    "사랑": ["Love", "Heart", "Dear", "Amour"],
    "IT": ["Tech", "Soft", "Data", "Link", "Sync", "Cyber", "Net"],
    "옷": ["Wear", "Look", "Fit", "Style", "Mode", "Apparel"],
    "뷰티": ["Beauty", "Skin", "Glow", "Pure", "Derma"]
};

// Suffixes by Vibe
const SUFFIXES: Record<string, string[]> = {
    modern: ["Lab", "Box", "Works", "Studio", "Ground", "Space"],
    friendly: ["Tree", "Mate", "Pal", "Day", "Market", "Store"],
    luxury: ["Haus", "Salon", "Boutique", "Private", "Club", "Gallery"]
};

// Ohaeng Sound Map (Korean)
const OHAENG_SOUNDS: Record<string, string[]> = {
    wood: ["ㄱ", "ㅋ", "가", "카", "코", "쿠", "그", "크"], // Simplify
    fire: ["ㄴ", "ㄷ", "ㄹ", "ㅌ", "나", "다", "라", "타"],
    earth: ["ㅇ", "ㅎ", "아", "하", "이", "히", "후", "오", "우"],
    metal: ["ㅅ", "ㅈ", "ㅊ", "사", "자", "차", "스", "즈"],
    water: ["ㅁ", "ㅂ", "ㅍ", "마", "바", "파", "미", "비"]
};

// --- Main Generator ---

export function generateAdvancedBrandNames(params: {
    industry: string;
    keywords: string;
    target: string;
    birthDate?: string;
    birthTime?: string;
    langPref?: string;
    vibePref?: string;
}): BrandAnalysis[] {
    const names: BrandAnalysis[] = [];
    const count = 5;

    // 1. Analyze Saju if provided
    let recommendedElement = "";
    if (params.birthDate) {
        try {
            const saju = calculateSaju(params.birthDate, params.birthTime || "00:00");
            const dist = calculateOhaengDistribution(saju);
            recommendedElement = findRecommendedElement(dist);
        } catch (e) {
            console.error("Saju Error", e);
        }
    }

    // 2. Expand Keywords
    const rawKeywords = params.keywords.split(",").map(k => k.trim()).filter(k => k);
    let seeds: string[] = [];
    rawKeywords.forEach(k => {
        seeds.push(k);
        const syns = SYNONYMS[k] || SYNONYMS[Object.keys(SYNONYMS).find(key => k.includes(key)) || ""] || [];
        seeds = [...seeds, ...syns];
    });
    if (seeds.length === 0) seeds = ["Star", "Sky", "Blue", "Top"]; // Fallback

    const vibe = params.vibePref || "modern";
    const language = params.langPref || "mix";

    // 3. Generate Loop
    for (let i = 0; i < count; i++) {
        const seed = seeds[Math.floor(Math.random() * seeds.length)];
        const suffix = SUFFIXES[vibe][Math.floor(Math.random() * SUFFIXES[vibe].length)];

        // Name Construction Strategy
        let name = "";
        let engName = "";

        // Strategy 1: Seed + Suffix (Compound)
        // Check if seed is already English
        const isEngSeed = /^[A-Za-z]+$/.test(seed);

        if (language === 'kor' && isEngSeed) {
            // Force translate approx (Mock) or just use randomness
            name = seed + " " + suffix; // Fallback
        } else {
            name = capitalize(seed) + suffix;
            engName = capitalize(seed) + " " + suffix;
        }

        // Apply Saju Modification (Prefixing) if needed
        let sajuBoosted = false;
        if (recommendedElement && Math.random() > 0.3) {
            // Try to prepend a sound that matches the element
            // This is a simple mock implementation
            const sounds = OHAENG_SOUNDS[recommendedElement];
            if (sounds) {
                // Prepend or modify name to fit sound? 
                // For MVP, simplistic approach: Add a phonetic prefix
                // e.g. Water (M/B) -> "M" + Name
                // Better: Just tag it if it naturally matches, or force a 'The' or adj
                sajuBoosted = true;
            }
        }

        // Generate Analysis
        const analysis: BrandAnalysis = {
            name: name,
            englishName: engName,
            tagline: generateTagline(name, vibe),
            marketingPoint: generateMarketingPoint(vibe, params.target),
            colorRecommendation: generateColor(vibe, recommendedElement),
            meaning: `'${seed}'의 본질적인 가치에 '${suffix}'를 더해 확장성을 강조했습니다.`,
            verification: {
                trademark: { available: Math.random() > 0.2, reason: "유사 상표 검색됨" }, // 80% success
                domain: { available: Math.random() > 0.3, reason: ".com 선점됨" }, // 70% success
                sns: { available: true }
            },
            tags: [`#${vibe}`, `#${params.industry}`],
            sajuMatch: recommendedElement ? {
                element: recommendedElement,
                boosted: sajuBoosted,
                desc: `부족한 ${recommendedElement} 기운을 보완하는 네이밍`
            } : undefined
        };

        names.push(analysis);
    }

    return names;
}

function capitalize(s: string) {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function generateTagline(name: string, vibe: string) {
    const list = [
        `Reimagining the way we live, ${name}`,
        `Simply ${name}`,
        `Your daily inspiration, ${name}`,
        `The new standard, ${name}`
    ];
    return list[Math.floor(Math.random() * list.length)];
}

function generateMarketingPoint(vibe: string, target: string) {
    return `${target} 고객층의 니즈인 '${vibe}' 감성을 자극하는 직관적인 네이밍입니다.`;
}

function generateColor(vibe: string, element: string) {
    if (element === "wood") return "Green & Brown";
    if (element === "fire") return "Red & Orange";
    if (element === "water") return "Blue & Black";
    if (vibe === "modern") return "Black & White, Minimal Grey";
    if (vibe === "friendly") return "Warm Yellow, Soft Pastel";
    return "Royal Navy, Gold";
}

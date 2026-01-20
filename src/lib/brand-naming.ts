
export type BrandNameResult = {
    name: string;
    tagline: string;
    description: string;
    tags: string[];
};

const INDUSTRY_KEYWORDS: Record<string, string[]> = {
    tech: ["Soft", "Tech", "Sys", "Net", "Data", "Code", "Link", "Sync", "Cyber", "Flow"],
    cafe: ["Bean", "Brew", "Cup", "Roast", "Mug", "Mocha", "Latte", "Sip", "Tasty", "Aroma"],
    fashion: ["Style", "Look", "Wear", "Fit", "Mode", "Vogue", "Chic", "Trend", "Urban", "Silk"],
    general: ["Star", "Sky", "Blue", "Red", "One", "Top", "First", "Best", "Plus", "High"]
};

// Suffixes/Prefixes based on vibe
const VIBE_MODIFIERS: Record<string, { prefixes: string[], suffixes: string[] }> = {
    modern: {
        prefixes: ["Neo", "Pro", "X", "On", "Up", "Air"],
        suffixes: ["lab", "box", "ify", "ly", "io", "hub", "bit"]
    },
    friendly: {
        prefixes: ["My", "Hi", "Go", "Joy", "Dear", "Hello"],
        suffixes: ["mate", "pal", "bud", "zone", "day", "tree"]
    },
    luxury: {
        prefixes: ["Gold", "Royal", "Noble", "Grand", "The"],
        suffixes: ["stone", "ville", "house", "garden", "class"]
    },
    creative: {
        prefixes: ["Z", "Q", "Nu", "Ka", "Tri", "Pop"],
        suffixes: ["zoom", "pan", "mon", "tory", "works"]
    }
};

export function generateBrandNames(
    industry: string,
    vibe: string,
    userKeywords: string
): BrandNameResult[] {
    const results: BrandNameResult[] = [];
    const keywords = userKeywords
        ? userKeywords.split(",").map(k => k.trim()).filter(k => k.length > 0)
        : INDUSTRY_KEYWORDS[industry] || INDUSTRY_KEYWORDS["general"];

    const modifiers = VIBE_MODIFIERS[vibe] || VIBE_MODIFIERS["modern"];

    // Generate 5 names
    for (let i = 0; i < 5; i++) {
        // Pick a keyword (random or sequential)
        const base = keywords[Math.floor(Math.random() * keywords.length)];

        let generatedName = "";
        let strategy = ""; // 0: Prefix+Base, 1: Base+Suffix, 2: Portmanteau (simple)

        const r = Math.random();
        if (r < 0.45) {
            // Base + Suffix
            const suffix = modifiers.suffixes[Math.floor(Math.random() * modifiers.suffixes.length)];
            generatedName = capitalize(base) + suffix;
            strategy = "suffix";
        } else if (r < 0.9) {
            // Prefix + Base
            const prefix = modifiers.prefixes[Math.floor(Math.random() * modifiers.prefixes.length)];
            generatedName = prefix + capitalize(base);
            strategy = "prefix";
        } else {
            // Clean Compound (Base + Base) for Creative
            const base2 = keywords[Math.floor(Math.random() * keywords.length)];
            if (base !== base2) {
                generatedName = capitalize(base) + capitalize(base2);
            } else {
                generatedName = capitalize(base) + "Up";
            }
            strategy = "compound";
        }

        results.push({
            name: generatedName,
            tagline: generateTagline(generatedName, vibe, industry),
            description: describeBrand(strategy, vibe, industry, base),
            tags: [`#${industry}`, `#${vibe}`, `#${strategy === 'suffix' ? '심플한' : '감각적인'}`]
        });
    }

    // Deduplicate nicely
    return results;
}

function capitalize(s: string) {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function generateTagline(name: string, vibe: string, industry: string): string {
    const TAGLINES = [
        `The future of ${industry}.`,
        `Simply ${name}.`,
        `Experience difference with ${name}.`,
        `Your new favorite.`,
        `Redefining ${industry}.`,
        `${name}, for you.`
    ];
    return TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
}

function describeBrand(strategy: string, vibe: string, industry: string, keyword: string): string {
    if (strategy === "suffix") return `'${keyword}'라는 핵심 가치에 트렌디한 접미사를 더해 현대적이고 확장성 있는 느낌을 주었습니다.`;
    if (strategy === "prefix") return `강조의 의미를 담은 접두사를 사용하여 '${keyword}'의 이미지를 더욱 부각시킨 직관적인 네이밍입니다.`;
    return `두 가지 키워드를 감각적으로 결합하여 ${industry} 업계에서 독보적인 개성을 드러내는 이름입니다.`;
}

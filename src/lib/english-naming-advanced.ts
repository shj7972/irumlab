
// --- Types ---
export type EnglishNameResult = {
    name: string;
    meaning: string;
    story: string;
    tags: string[];
    platform: string;
    availability: {
        status: "available" | "taken" | "unknown";
        score: number; // 0-100 Pronunciation/Uniqueness score
    }
};

type AnalysisParams = {
    platform: string;
    gender: string;
    styles: string[];
    keywords: string;
};

// --- Dictionaries ---

// Game
const GAME_NOUNS = ["Shadow", "Storm", "Wolf", "Dragon", "Ghost", "Viper", "Soul", "Moon", "Rogue", "Slayer", "Titan", "Zero"];
const GAME_ADJ = ["Silent", "Dark", "Toxic", "Fatal", "Holy", "Mad", "Pro", "Hyper", "Epic", "Lost"];
const FANTASY_SYLLABLES_START = ["Zor", "Xyr", "Kael", "Thal", "Vel", "Syl", "Dra", "Mor"];
const FANTASY_SYLLABLES_END = ["ix", "on", "us", "ia", "yn", "or", "khan", "goth"];

// Aesthetic / Insta
const AESTHETIC_NOUNS = ["Cloud", "Moon", "Vibe", "Mood", "Dream", "Luv", "Soul", "Film", "Moments", "Day"];
const AESTHETIC_ADJ = ["Soft", "Pure", "Slow", "Cozy", "Warm", "Tiny", "Blue", "Pink", "Daily", "Real"];
const COLORS = ["Blue", "Pink", "Sage", "Beige", "Ivory", "Mint", "Lilac"];

// Korean Romanization Map (Simple)
const KOREAN_MAP: Record<string, string> = {
    "달": "Moon", "별": "Star", "꿈": "Dream", "봄": "Spring", "여름": "Summer", "가을": "Autumn", "겨울": "Winter",
    "하늘": "Sky", "바다": "Sea", "구름": "Cloud", "비": "Rain", "눈": "Snow", "꽃": "Flower",
    "사랑": "Love", "행복": "Happy", "친구": "Friend", "고양이": "Cat", "강아지": "Dog",
    "게임": "Game", "음악": "Music", "영화": "Movie", "책": "Book", "커피": "Coffee"
};
const KOREAN_ROMAN_MAP: Record<string, string> = {
    "달": "Dal", "별": "Byeol", "꿈": "Ggum", "봄": "Bom", "하늘": "Haneul", "바다": "Bada", "구름": "Gureum", "오늘": "Oneul", "하루": "Haru", "노을": "Noeul", "윤": "Yoon"
};

// YouTube / Streamer
const ANIMALS = ["Panda", "Fox", "Tiger", "Bear", "Cat", "Dog", "Bunny", "Lion", "Owl", "Wolf"];
const PERSONA_ADJ = ["Happy", "Crazy", "Lazy", "Busy", "Lucky", "Shy", "Bold", "Chill", "Smart"];
const SOUNDS = ["Zap", "Boom", "Bloop", "Click", "Pop", "Zoom", "Fizz"];

// --- Generators ---

function generateGameName(keywords: string[], style: string): Partial<EnglishNameResult> {
    const r = Math.random();
    let name = "";
    let desc = "";

    // 1. Keyword based (if exists)
    const keyword = keywords.length > 0 ? capitalize(keywords[0]) : "";

    if (keyword && r > 0.3) {
        // Keyword combo
        const adj = GAME_ADJ[Math.floor(Math.random() * GAME_ADJ.length)];
        const noun = GAME_NOUNS[Math.floor(Math.random() * GAME_NOUNS.length)];
        name = r > 0.6 ? `${adj}${keyword}` : `${keyword}${noun}`;
        desc = `키워드 '${keyword}'를 포함하여 강렬한 게임 아이디를 만들었습니다.`;
    } else if (r < 0.4) {
        // Power Combo
        const adj = GAME_ADJ[Math.floor(Math.random() * GAME_ADJ.length)];
        const noun = GAME_NOUNS[Math.floor(Math.random() * GAME_NOUNS.length)];
        name = `${adj}${noun}`;
        desc = "강렬한 형용사와 명사를 조합한 PvP 최적화 닉네임입니다.";
    } else if (r < 0.7) {
        // Fantasy
        const s1 = FANTASY_SYLLABLES_START[Math.floor(Math.random() * FANTASY_SYLLABLES_START.length)];
        const s2 = FANTASY_SYLLABLES_END[Math.floor(Math.random() * FANTASY_SYLLABLES_END.length)];
        name = `${s1}${s2}`;
        desc = "유니크한 판타지 풍의 이름으로, RPG나 MMORPG에 어울립니다.";
    } else {
        // Agent Number
        const noun = GAME_NOUNS[Math.floor(Math.random() * GAME_NOUNS.length)];
        const num = Math.floor(Math.random() * 90) + 10;
        name = `${noun}${num}`;
        desc = "클래식한 게이머 스타일로 숫자를 조합해 중복을 피했습니다.";
    }

    return { name, meaning: desc, tags: ["#Game", "#Strong", "#Cool"] };
}

function generateInstaName(keywords: string[], style: string): Partial<EnglishNameResult> {
    const r = Math.random();
    let name = "";
    let desc = "";

    // Keyword Processing
    const keyword = keywords.length > 0 ? keywords[0].toLowerCase() : "";

    if (keyword && r > 0.5) {
        // soft.keyword pattern
        const adj = AESTHETIC_ADJ[Math.floor(Math.random() * AESTHETIC_ADJ.length)].toLowerCase();
        name = `${adj}.${keyword}`;
        desc = `좋아하는 '${keyword}'에 감성 형용사를 더한 인스타 감성 ID입니다.`;
    } else if (r < 0.4) {
        // aesthetic pattern
        const color = COLORS[Math.floor(Math.random() * COLORS.length)].toLowerCase();
        const noun = AESTHETIC_NOUNS[Math.floor(Math.random() * AESTHETIC_NOUNS.length)].toLowerCase();
        name = `${color}.${noun}`;
        desc = "색상과 감성 명사를 조합하여 미니멀하고 예쁜 느낌을 줍니다.";
    } else if (r < 0.7) {
        // Korean Romanized (e.g. oneul.day)
        const keys = Object.keys(KOREAN_ROMAN_MAP);
        const k = keys[Math.floor(Math.random() * keys.length)];
        const eng = KOREAN_MAP[k] ? KOREAN_MAP[k].toLowerCase() : "day";
        const rom = KOREAN_ROMAN_MAP[k].toLowerCase();
        name = `${rom}.${eng}`;
        desc = `한국어 '${k}'의 발음과 뜻을 조합한 유니크한 감성 ID입니다.`;
    } else {
        // sandwich
        const noun = AESTHETIC_NOUNS[Math.floor(Math.random() * AESTHETIC_NOUNS.length)].toLowerCase();
        name = `_${noun}.vibe_`;
        desc = "언더바(_)를 활용하여 닉네임을 강조하는 트렌디한 스타일입니다.";
    }

    return { name, meaning: desc, tags: ["#Insta", "#Aesthetic", "#Emotional"] };
}

function generateYoutubeName(keywords: string[], style: string): Partial<EnglishNameResult> {
    const r = Math.random();
    let name = "";
    let desc = "";

    const keyword = keywords.length > 0 ? capitalize(keywords[0]) : "";

    if (keyword) {
        const adj = PERSONA_ADJ[Math.floor(Math.random() * PERSONA_ADJ.length)];
        name = `${adj}${keyword}`;
        desc = `키워드 '${keyword}'에 페르소나를 부여해 캐릭터성을 살렸습니다.`;
    } else if (r < 0.4) {
        // Persona + Animal
        const adj = PERSONA_ADJ[Math.floor(Math.random() * PERSONA_ADJ.length)];
        const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
        name = `${adj}${animal}`;
        desc = "친근한 동물과 성격을 조합하여 기억하기 쉬운 채널명입니다.";
    } else if (r < 0.7) {
        // Onomatopoeia
        const sound = SOUNDS[Math.floor(Math.random() * SOUNDS.length)];
        const noun = ["TV", "Log", "Tube", "World", "Play"][Math.floor(Math.random() * 5)];
        name = `${sound}${noun}`;
        desc = "톡톡 튀는 소리를 활용하여 에너지 넘치는 느낌을 줍니다.";
    } else {
        // Alliteration (Simple Mock)
        const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
        const firstChar = animal.charAt(0);
        // Find adj starting with same char (Mocking for common ones)
        let adj = "Big";
        if (firstChar === 'P') adj = "Pixel";
        if (firstChar === 'C') adj = "Chill";
        if (firstChar === 'B') adj = "Big";
        if (firstChar === 'T') adj = "Top";
        if (firstChar === 'L') adj = "Lucky";
        if (firstChar === 'S') adj = "Super";

        name = `${adj}${animal}`;
        desc = "같은 철자로 시작하는 단어를 조합해(두운법) 부르기 쉽고 중독성 있습니다.";
    }

    return { name, meaning: desc, tags: ["#Youtube", "#Creator", "#Catchy"] };
}


// --- Main Function ---

export function generateAdvancedEnglishNames(params: AnalysisParams): EnglishNameResult[] {
    const results: EnglishNameResult[] = [];
    const count = 5;

    // Process Keywords (Translate basic Korean to English)
    const processedKeywords = params.keywords.split(",").map(k => k.trim()).map(k => {
        // Basic translation lookup
        return KOREAN_MAP[k] || k; // Return translation or original (assumed English)
    });

    const generator =
        params.platform === "game" ? generateGameName :
            params.platform === "instagram" ? generateInstaName :
                params.platform === "youtube" ? generateYoutubeName :
                    generateGameName; // Default fallback

    for (let i = 0; i < count; i++) {
        const partial = generator(processedKeywords, params.styles[0] || "");

        let story = "";
        if (params.platform === "game") story = "전장에서 적들에게 공포를 심어줄 수 있는 이름입니다.";
        else if (params.platform === "instagram") story = "피드의 감성을 한층 더해줄 세련된 ID입니다.";
        else if (params.platform === "youtube") story = "구독자들의 기억에 오래 남을 브랜드 네임입니다.";

        results.push({
            name: partial.name || "Error",
            meaning: partial.meaning || "",
            story: story,
            tags: partial.tags || [],
            platform: params.platform,
            availability: {
                status: Math.random() > 0.3 ? "available" : "taken", // Mock check
                score: Math.floor(Math.random() * 30) + 70 // 70-100 score
            }
        });
    }

    return results;
}

function capitalize(s: string) {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

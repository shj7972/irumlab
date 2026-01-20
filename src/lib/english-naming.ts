
export type EnglishNameResult = {
    name: string;
    pronunciation: string;
    meaning: string;
    description: string;
    tags: string[];
};

type NameEntry = EnglishNameResult & {
    gender: "male" | "female" | "neutral";
    styles: string[]; // professional, friendly, creative, unique
};

const NAME_DB: NameEntry[] = [
    // --- Professional ---
    {
        name: "Arthur", pronunciation: "아서", meaning: "고귀한 곰",
        description: "전통적이고 신뢰감을 주는 리더십 있는 이름입니다.",
        tags: ["#클래식", "#리더", "#전문적인"],
        gender: "male", styles: ["professional", "unique"]
    },
    {
        name: "Victoria", pronunciation: "빅토리아", meaning: "승리",
        description: "우아하고 성공적인 커리어우먼의 이미지를 줍니다.",
        tags: ["#성공", "#우아한", "#전문적인"],
        gender: "female", styles: ["professional"]
    },
    {
        name: "James", pronunciation: "제임스", meaning: "따르는 자",
        description: "가장 대중적이면서도 비즈니스에서 신뢰받는 이름입니다.",
        tags: ["#신뢰", "#비즈니스", "#안정적인"],
        gender: "male", styles: ["professional", "friendly"]
    },
    {
        name: "Sarah", pronunciation: "사라", meaning: "공주",
        description: "깔끔하고 지적인 느낌을 주는 클래식한 이름입니다.",
        tags: ["#지적인", "#전문적인", "#깔끔한"],
        gender: "female", styles: ["professional", "friendly"]
    },

    // --- Friendly ---
    {
        name: "Liam", pronunciation: "리암", meaning: "강한 의지",
        description: "부드러운 발음과 친근한 이미지로 최근 가장 인기 있는 이름 중 하나입니다.",
        tags: ["#인기있는", "#부드러운", "#친근한"],
        gender: "male", styles: ["friendly", "creative"]
    },
    {
        name: "Mia", pronunciation: "미아", meaning: "사랑스러운",
        description: "짧고 부르기 쉬우며 사랑스러운 이미지를 줍니다.",
        tags: ["#사랑스러운", "#귀여운", "#친근한"],
        gender: "female", styles: ["friendly", "creative"]
    },
    {
        name: "Noah", pronunciation: "노아", meaning: "휴식, 위로",
        description: "따뜻하고 안정감을 주는 부드러운 이름입니다.",
        tags: ["#따뜻한", "#힐링", "#친근한"],
        gender: "neutral", styles: ["friendly"]
    },
    {
        name: "Charlie", pronunciation: "찰리", meaning: "자유로운 사람",
        description: "남녀 모두에게 쓰이며 쾌활하고 사교적인 느낌을 줍니다.",
        tags: ["#사교적인", "#쾌활한", "#중성적인"],
        gender: "neutral", styles: ["friendly", "unique"]
    },

    // --- Creative ---
    {
        name: "Luna", pronunciation: "루나", meaning: "달",
        description: "신비롭고 예술적인 감성을 가진 이름입니다.",
        tags: ["#신비로운", "#예술적인", "#감성"],
        gender: "female", styles: ["creative", "unique"]
    },
    {
        name: "Leo", pronunciation: "레오", meaning: "사자",
        description: "짧지만 강렬하고 열정적인 크리에이터의 느낌을 줍니다.",
        tags: ["#열정", "#짧은이름", "#크리에이티브"],
        gender: "male", styles: ["creative", "friendly"]
    },
    {
        name: "Nova", pronunciation: "노바", meaning: "새로운 별",
        description: "항상 새로운 것을 추구하는 창의적인 인재에게 어울립니다.",
        tags: ["#혁신", "#미래지향", "#유니크"],
        gender: "neutral", styles: ["creative", "unique"]
    },
    {
        name: "Aria", pronunciation: "아리아", meaning: "공기, 멜로디",
        description: "음악적이고 자유로운 영혼을 나타내는 아름다운 이름입니다.",
        tags: ["#예술", "#자유", "#우아한"],
        gender: "female", styles: ["creative"]
    },

    // --- Unique ---
    {
        name: "Kai", pronunciation: "카이", meaning: "바다 (하와이어)",
        description: "이국적이고 세련된 느낌을 주는 짧고 강한 이름입니다.",
        tags: ["#이국적", "#세련된", "#쿨한"],
        gender: "male", styles: ["unique", "creative"]
    },
    {
        name: "Zoe", pronunciation: "조이", meaning: "생명",
        description: "톡톡 튀는 에너지와 생동감이 느껴지는 유니크한 이름입니다.",
        tags: ["#에너지", "#생동감", "#개성"],
        gender: "female", styles: ["unique", "friendly"]
    },
    {
        name: "River", pronunciation: "리버", meaning: "강",
        description: "자연 친화적이고 평화로우면서도 힙한 느낌을 줍니다.",
        tags: ["#자연", "#힙한", "#중성적인"],
        gender: "neutral", styles: ["unique", "creative"]
    },
    {
        name: "Sage", pronunciation: "세이지", meaning: "현자, 허브",
        description: "지혜롭고 차분하며 중성적인 매력이 있는 독특한 이름입니다.",
        tags: ["#지혜", "#차분한", "#유니크"],
        gender: "neutral", styles: ["unique", "professional"]
    },
];

export function generateEnglishNames(
    gender: string, // male, female, neutral
    selectedStyles: string[]
): EnglishNameResult[] {
    // 1. Filter by Gender (Neutral fits all)
    let candidates = NAME_DB.filter(n => {
        if (gender === "neutral") return true;
        if (n.gender === "neutral") return true;
        return n.gender === gender;
    });

    // 2. Score by Style Match
    const scored = candidates.map(n => {
        let score = 0;
        n.styles.forEach(s => {
            if (selectedStyles.includes(s)) score += 1;
        });
        return { ...n, score };
    });

    // 3. Sort by Score (Desc) then Random
    scored.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return Math.random() - 0.5;
    });

    // 4. Return Top Results (Guaranteed 5 if possible) -> For MVP return top 3
    // Mix it up to avoid static order if scores are same
    return scored.slice(0, 5).map(item => ({
        name: item.name,
        pronunciation: item.pronunciation,
        meaning: item.meaning,
        description: item.description,
        tags: item.tags
    }));
}

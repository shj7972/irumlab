/**
 * 영어 닉네임 롱테일 랜딩 데이터 (배치5, 2026-09-09)
 * SCon 데이터 기반: "영어 닉네임 제조기" 834클릭의 파생 검색어(제조기/생성기/추천기/생성사이트/랜덤생성/짓기사이트)를
 * [플랫폼 x 스타일 x 유형] 조합 랜딩 페이지로 분할. 각 페이지는 전용 메타 + 10개 예시 + 툴 CTA로 구성.
 */

export interface LongtailPage {
    slug: string;
    platform: "game" | "instagram" | "youtube" | "general";
    styleId: string;
    title: string;
    description: string;
    h1: string;
    keywords: string[];
    intro: string;
}

export const STYLE_LABELS: Record<string, string> = {
    cool: "강렬한",
    aesthetic: "감성적인",
    cute: "귀여운",
    funny: "유니크한",
};

export const PLATFORM_LABELS: Record<string, string> = {
    game: "게임",
    instagram: "인스타그램",
    youtube: "유튜브",
    general: "닉네임",
};

/** SCon 실제 파생 검색어 기반 슬러그 (9/8 기록: 제조기 834클릭 파생) */
export const LONGTAIL_PAGES: LongtailPage[] = [
    // ── 게임 (파생 클릭 최다 영역) ──
    {
        slug: "cool-game-nickname",
        platform: "game",
        styleId: "cool",
        title: "강렬한 게임 닉네임 제조기 - 영어 닉네임 AI 무료 생성 (롤·배그·발로란트)",
        description: "롤, 배그, 발로란트에 어울리는 강렬한 영어 게임 닉네임을 AI 제조기로 즉시 생성. Shadow, Void, Storm 스타일 강렬한 닉네임 10선 예시와 무료 생성기 제공.",
        h1: "강렬한 게임 영어 닉네임",
        keywords: ["강렬한 게임 닉네임", "게임 닉네임 제조기", "롤 닉네임 영어", "배그 닉네임 추천", "발로란트 닉네임 생성기", "다크 게임 닉네임"],
        intro: "전장에서 눈에 띄는 강렬한 게임 닉네임. Shadow, Void, Storm 같은 다크 계열 단어가 PvP 승률(심리전)부터 올려줍니다.",
    },
    {
        slug: "random-game-nickname",
        platform: "game",
        styleId: "funny",
        title: "랜덤 게임 닉네임 생성기 - 누르면 바로 나오는 영어 아이디",
        description: "고민 없이 랜덤으로 게임 영어 닉네임을 뽑고 싶다면? AI 랜덤 생성기가 강렬한 게임 아이디를 즉시 만들어 드립니다. 랜덤 닉네임 예시 10선 무료 공개.",
        h1: "랜덤 게임 영어 닉네임 뽑기",
        keywords: ["랜덤 게임 닉네임", "랜덤 닉네임 생성기", "게임 닉네임 뽑기", "랜덤 영어 아이디", "닉네임 자동 생성", "게임 아이디 자동"],
        intro: "고민은 접어두고 뽑아보세요. 랜덤 생성 버튼 하나면 끝 — 마음에 드는 게 나올 때까지 무제한 재생성 가능합니다.",
    },
    // ── 인스타그램 ──
    {
        slug: "aesthetic-instagram-nickname",
        platform: "instagram",
        styleId: "aesthetic",
        title: "감성적인 인스타 영어 닉네임 제조기 - 무료 AI 생성기",
        description: "인스타그램 피드에 어울리는 감성적인 영어 닉네임을 AI가 즉시 제조. Luna, Velvet, Aurora 계열 감성 닉네임 예시 10선과 무료 생성기.",
        h1: "감성적인 인스타 영어 닉네임",
        keywords: ["감성 인스타 닉네임", "인스타 영어 닉네임 제조기", "인스타 닉네임 추천", "감성 영어 닉네임", "인스타 아이디 영어", "aesthetic 닉네임"],
        intro: "피드 무드와 어울리는 감성 닉네임. Luna, Velvet, Aurora 같은 부드러운 이미지의 단어가 프로필 완성도를 높입니다.",
    },
    {
        slug: "cute-nickname-generator",
        platform: "general",
        styleId: "cute",
        title: "귀여운 영어 닉네임 추천기 - 무료 AI 생성기 2026",
        description: "귀여운 영어 닉네임이 필요할 때. AI 추천기가 Mochi, Peachy, Cotton 계열 귀여운 닉네임을 즉시 생성. 카톡·게임·SNS 공용 예시 10선.",
        h1: "귀여운 영어 닉네임 모음 + 생성기",
        keywords: ["귀여운 영어 닉네임", "귀여운 닉네임 추천", "cute 닉네임", "영어 닉네임 추천기", "닉네임 생성기 무료", "귀여운 아이디"],
        intro: "카톡, 게임, 인스타 어디서든 쓰기 좋은 귀여운 닉네임. MochiBun, PeachyGlow처럼 부르기 귀여운 조합을 모았습니다.",
    },
    // ── 유튜브 ──
    {
        slug: "youtube-name-generator",
        platform: "youtube",
        styleId: "funny",
        title: "유튜브 채널 영어 이름 생성기 - 기억되는 채널명 AI 제조",
        description: "유튜브 채널명을 영어로 짓고 싶다면? 구독자가 기억하는 캐치한 채널 이름을 AI가 생성. 유튜브 영어 이름 예시 10선 + 무료 제조기.",
        h1: "유튜브 채널 영어 이름 제조기",
        keywords: ["유튜브 채널명 영어", "유튜브 이름 생성기", "youtube 채널명 추천", "유튜브 영어 이름", "채널 이름 짓기", "유튜브 브랜드명"],
        intro: "구독 버튼 눌리는 채널명. Catchy하고 짧은 영어 이름이 구독자 기억에 오래 남습니다.",
    },
    // ── 일반 (짓기 사이트 수요) ──
    {
        slug: "nickname-maker-site",
        platform: "general",
        styleId: "cool",
        title: "영어 닉네임 짓는 사이트 - 제조기·생성기·추천 무료 (AI)",
        description: "영어 닉네임 짓기 고민될 때 쓰는 무료 AI 사이트. 제조기, 생성기, 추천기 한 번에 — 게임·인스타·유튜브 어디든 쓰는 닉네임 즉시 생성.",
        h1: "영어 닉네임 짓는 사이트 — 무료 AI 제조기",
        keywords: ["영어 닉네임 짓는 사이트", "닉네임 제조기", "닉네임 생성 사이트", "영어 닉네임 추천 사이트", "닉네임 만들기", "영어 아이디 만들기"],
        intro: "제조기, 생성기, 추천기 — 부르는 이름은 다르지만 원하는 건 같죠. 잘 지어지는 닉네임. 이 페이지에서 한 번에 해결하세요.",
    },
];

export function getLongtailPage(slug: string): LongtailPage | undefined {
    return LONGTAIL_PAGES.find((p) => p.slug === slug);
}

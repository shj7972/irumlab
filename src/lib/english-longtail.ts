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

    // ── 2차 확장 (배치5-2, 2026-09-14: 9/8 파생 검색어 + 후보 키워드) ──
    {
        slug: "kakaotalk-english-name",
        platform: "general",
        styleId: "cute",
        title: "카톡 이름 영어로 짓기 - 귀여운·감성 카카오톡 닉네임 추천",
        description: "카톡 이름을 영어로 바꾸고 싶다면? 친구 목록에서 눈에 띄는 카카오톡 영어 닉네임 추천 10선 + AI 무료 생성기. 귀여운/감성 스타일 지원.",
        h1: "카톡 영어 이름 추천",
        keywords: ["카톡 이름 영어", "카카오톡 닉네임 영어", "카톡 영어 이름 추천", "카톡 닉네임 추천", "카톡 아이디 영어", "카톡 이름 추천"],
        intro: "카톡 대화방에서 친구 목록 위로 뜨는 영어 이름. 부르기 쉽고 귀여운 조합이 기억에 남습니다.",
    },
    {
        slug: "lol-nickname-english-cool",
        platform: "game",
        styleId: "cool",
        title: "롤 영어 닉네임 - 강렬한 챔피언 스타일 아이디 생성기",
        description: "롤(리그 오브 레전드) 영어 닉네임 고민? Shadow, Void, Wraith 계열 강렬한 아이디 예시 10선 + AI 무료 생성기. 소환사 명찰에 어울리는 닉네임.",
        h1: "롤 영어 닉네임 — 강렬한 스타일",
        keywords: ["롤 영어 닉네임", "롤 닉네임 영어 추천", "롤 소환사명 영어", "롤 닉네임 생성기", "영어 롤 아이디", "롤 닉 추천"],
        intro: "소환사 명찰에 어울리는 강렬한 영어 닉네임. 챔피언 픽 전에 닉네임부터 이기는 느낌으로.",
    },
    {
        slug: "battleground-english-nickname",
        platform: "game",
        styleId: "funny",
        title: "배그 영어 닉네임 - 유니크·재미 스타일 아이디 추천",
        description: "배그(배틀그라운드) 영어 닉네임 추천. 팀원이 기억하는 유니크한 아이디 예시 10선 + AI 무료 생성기. Kill 피드에 남는 닉네임.",
        h1: "배그 영어 닉네임 추천",
        keywords: ["배그 영어 닉네임", "배그 닉네임 추천", "배그 영어 아이디", "배그 닉네임 생성", "배그 유니크 닉네임", "배그 아이디 추천"],
        intro: "킬 피드에 남는 이름이 곧 브랜드입니다. 짧고 유니크한 영어 닉네임으로 존재감을 만드세요.",
    },
    {
        slug: "funny-instagram-nickname",
        platform: "instagram",
        styleId: "funny",
        title: "인스타 유머 영어 닉네임 - 재미있는 아이디 생성기",
        description: "웃긴 인스타 영어 닉네임 추천. ChaosCookie, NoodleKnight 계열 유머 아이디 예시 10선 + AI 무료 생성기. 부계정·밈 계정 추천.",
        h1: "인스타 웃긴 영어 닉네임",
        keywords: ["인스타 유머 닉네임", "웃긴 영어 닉네임", "인스타 재미있는 아이디", "funny 닉네임", "인스타 영어 아이디 추천", "유머 영어 이름"],
        intro: "프로필 태그부터 웃기게. 유머 계정이라면 이름부터 재미가 있어야 팔로우가 눌립니다.",
    },
    {
        slug: "company-english-name-generator",
        platform: "general",
        styleId: "cool",
        title: "회사 영문명 생성기 - 사업자 영문 이름 추천 AI",
        description: "사업자 영문 이름, 스타트업 영문 사명 고민? 발음 쉽고 도메인 잡기 좋은 회사 영문명 예시 10선 + AI 무료 생성기.",
        h1: "회사 영문명 제조기",
        keywords: ["회사 영문명", "사업자 영문 이름", "영문 상호 추천", "회사 이름 영어로", "영문 브랜드명", "스타트업 영어 이름"],
        intro: "사업자 등록부터 도메인까지 쓰이는 영문 사명. 짧고 발음 쉬운 이름이 글로벌 확장에 유리합니다.",
    },
    {
        slug: "aesthetic-cute-nickname",
        platform: "instagram",
        styleId: "aesthetic",
        title: "감성+귀여운 영어 닉네임 - 인스타 감성 아이디 추천 2026",
        description: "감성과 귀여움이 섞인 영어 닉네임 추천. 인스타·카톡 공용 예시 10선 + AI 무료 생성기. PeonyGlow, MomoVibe 계열.",
        h1: "감성·귀여운 영어 닉네임",
        keywords: ["감성 귀여운 닉네임", "인스타 감성 영어", "귀여운 감성 아이디", "영어 닉네임 감성", "aesthetic cute nickname", "인스타 닉네임 감성"],
        intro: "감성의 온도와 귀여운 장단이 같은 조합. 프로필 이미지와 어울리는 닉네임을 고르세요.",
    },

    // ── 3차 확장 (배치5-3, 2026-09-22: 플랫폼·성별·용도 미커버 조합) ──
    {
        slug: "valorant-english-nickname",
        platform: "game",
        styleId: "cool",
        title: "발로란트 영어 닉네임 - 에이전트 스타일 아이디 생성기",
        description: "발로란트 영어 닉네임 추천. 에이전트처럼 짧고 강렬한 아이디 예시 10선 + AI 무료 생성기. 라디오에서 부르기 쉬운 닉네임.",
        h1: "발로란트 영어 닉네임 추천",
        keywords: ["발로란트 닉네임", "발로 영어 닉네임", "발로란트 아이디 추천", "발로란트 닉네임 생성기", "val 닉네임 영어", "발로란트 이름 추천"],
        intro: "라디오에서 부르기 쉬운 짧은 이름이 에이전트답습니다. Jett, Phoenix처럼 한 박자에 끝나는 영어 닉네임으로.",
    },
    {
        slug: "minecraft-english-nickname",
        platform: "game",
        styleId: "funny",
        title: "마인크래프트 영어 닉네임 - 서버에서 눈에 띄는 아이디",
        description: "마인크래프트 영어 닉네임 추천. 서버 채팅에서 기억되는 유니크한 아이디 예시 10선 + AI 무료 생성기. 크리에이티브·서바이벌 공용.",
        h1: "마인크래프트 영어 닉네임",
        keywords: ["마인크래프트 닉네임", "마크 영어 닉네임", "마크 아이디 추천", "마인크래프트 닉네임 생성기", "마크 이름 추천", "minecraft 닉네임"],
        intro: "서버 채팅창에 계속 뜨는 이름. 픽셀 세계에서 어울리는 장난기 있는 영어 닉네임을 고르세요.",
    },
    {
        slug: "discord-english-name",
        platform: "game",
        styleId: "funny",
        title: "디스코드 이름 영어로 짓기 - 서버 닉네임 추천 생성기",
        description: "디스코드 닉네임을 영어로 바꾸고 싶다면? 서버에서 인싸처럼 보이는 영어 이름 예시 10선 + AI 무료 생성기. 게임·스터디 서버 공용.",
        h1: "디스코드 영어 이름 추천",
        keywords: ["디스코드 이름", "디스코드 영어 닉네임", "디스코드 닉네임 추천", "discord 이름 추천", "디스코드 아이디 영어", "디코 닉네임"],
        intro: "서버 멤버 목록에서 먼저 눈에 띄는 이름. 게임 서버든 스터디 서버든, 짧고 유니크한 영어 이름이 대화를 부릅니다.",
    },
    {
        slug: "couple-english-nickname",
        platform: "instagram",
        styleId: "aesthetic",
        title: "커플 영어 닉네임 - 커플 이름 짓기 추천 (짧은·귀여운)",
        description: "커플 이름 영어로 짓기. 커플 프로필·계정에 어울리는 짧고 귀여운 영어 닉네임 예시 10선 + AI 무료 생성기.",
        h1: "커플 영어 닉네임 추천",
        keywords: ["커플 이름 짓기", "커플 영어 닉네임", "커플 이름 추천", "커플 계정 이름", "커플 영어 이름", "커플 닉네임 추천"],
        intro: "둘의 이니셜과 분위기가 담긴 짧은 조합. 커플 계정 이름부터 프로필 문구까지 한 세트로 지어 보세요.",
    },
    {
        slug: "boy-english-nickname",
        platform: "general",
        styleId: "cool",
        title: "남자 영어 닉네임 - 남성스러운 아이디 추천 생성기",
        description: "남자가 쓰기 좋은 영어 닉네임 추천. 강렬하고 남성스러운 아이디 예시 10선 + AI 무료 생성기. 게임·SNS 공용.",
        h1: "남자 영어 닉네임 추천",
        keywords: ["남자 영어 닉네임", "남자 영어 이름 추천", "영어 남자 아이디", "남자 닉네임 추천", "영어 이름 남자 게임", "남성 영어 닉네임"],
        intro: "첫인상이 강렬한 이름. 게임에서도 SNS에서도 남성적인 톤이 필요할 때 — 짧고 무게감 있는 영어 닉네임으로 정리했습니다.",
    },
    {
        slug: "girl-english-nickname",
        platform: "general",
        styleId: "cute",
        title: "여자 영어 닉네임 - 귀여운·감성 여성 아이디 추천",
        description: "여자가 쓰기 좋은 영어 닉네임 추천. 귀여운 감성 아이디 예시 10선 + AI 무료 생성기. 카톡·인스타·게임 공용.",
        h1: "여자 영어 닉네임 추천",
        keywords: ["여자 영어 닉네임", "여자 영어 이름 추천", "여자 영어 아이디", "여자 닉네임 추천", "여성 영어 이름", "여자 영어 이름 귀여운"],
        intro: "부르는 순간 귀여운 조합. 카톡방에서도 게임에서도 어울리는 여성 톤 영어 닉네임을 모았습니다.",
    },
];

export function getLongtailPage(slug: string): LongtailPage | undefined {
    return LONGTAIL_PAGES.find((p) => p.slug === slug);
}

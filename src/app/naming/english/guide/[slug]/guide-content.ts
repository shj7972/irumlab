/**
 * 롱테일 가이드 페이지 확장 콘텐츠 (배치6, 2026-10-20)
 * 애드센스 "주의 필요" 대응: 가이드 페이지를 예시 10선만 나열하는 씬 콘텐츠에서
 * 실질 가이드(지을 법, 피해야 할 조합, FAQ, 플랫폼별 체크)로 확장.
 * 사실 주입 없이 일반 이름짓기 원칙 + 페이지 필드(슬러그/플랫폼/스타일/예시) 기반으로만 생성.
 */

export interface GuideBodySection {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
}

export interface GuideFaq {
    q: string;
    a: string;
}

const STYLE_WORD_TIP: Record<string, { words: string; direction: string }> = {
    cool: {
        words: "Shadow, Void, Storm, Reaper, Iron, Eclipse 같은 다크·금속 계열 단어",
        direction: "짧고 강한 자음이 들어간 단어일수록 존재감이 살아납니다. 두 단어를 붙일 때는 앞 단어를 형용사 계열, 뒷 단어를 사물·직업 계열로 두는 조합(AshHunter, FrostKing)이 리듬이 좋습니다.",
    },
    aesthetic: {
        words: "Luna, Velvet, Aurora, Ivy, Dusk, Mist 같은 자연·빛 계열 단어",
        direction: "부드러운 모음(l, s, w 발음)이 많은 단어를 고르면 소리 자체가 감성적으로 들립니다. 꽃·하늘·물과 관련된 단어를 조합하면 프로필 무드와 쉽게 어울립니다.",
    },
    cute: {
        words: "Mochi, Cotton, Candy, Peachy, Puffy 같은 발음이 둥근 단어",
        direction: "p, b, ch처럼 통 터지는 소리가 들어간 단어가 귀엽게 들립니다. 음식·작은 동물·구름류 단어에 -ie, -y 어미를 붙이는 조합(Cottony, PeachyBun)도 안정적입니다.",
    },
    funny: {
        words: "Chaos, Glitch, Noodle, Wacky, Zoom 같은 유머 감각의 단어",
        direction: "의미상 어울리지 않는 단어를 의도적으로 붙이는 밈식 조합(NoodleKnight, ChaosCookie)이 웃음 포인트가 됩니다. 다만 너무 유행어만 쓰면 시즌이 지나면 낡아 보입니다.",
    },
};

const PLATFORM_TIP: Record<string, { name: string; tips: string[] }> = {
    game: {
        name: "게임",
        tips: [
            "게임 내 채팅·전적 검색에 노출되므로 개인정보(실명·생년)가 유추되는 조합은 피하세요.",
            "파티 매칭에서 부르기 쉬운 발음(2~3음절)이면 팀원이 기억하기 좋습니다.",
            "일부 게임은 닉네임 변경 아이템이 유료입니다. 진입 전에 변경 정책을 확인하고, 바꿀 가능성이 있다면 3일 정도 써본 뒤 확정하는 방법도 있습니다.",
        ],
    },
    instagram: {
        name: "인스타그램",
        tips: [
            "프로필 검색 가능성을 고려해 띄어쓰기·특수문자 최소 조합이 유리합니다.",
            "계정 주제(일상·여행·뷰티)와 닉네임 무드가 맞으면 프로필 탐색에서의 첫인상이 좋아집니다.",
            "부계정이라면 본계정과 스타일을 완전히 다르게 두면 계정 구분이 쉽습니다.",
        ],
    },
    youtube: {
        name: "유튜브",
        tips: [
            "채널명은 자막·썸네일에도 쓰이므로 12자 내외로 짧게 유지하는 것이 읽기 좋습니다.",
            "구독자가 검색할 가능성을 생각하면 발음이 쉬운 표기(예: NiteVibe보다 NightVibe)가 유리할 수 있습니다.",
            "채널 변경은 주소·브랜딩 전체에 영향을 주므로, 콘텐츠 방향을 정한 뒤에 이름을 확정하는 순서를 권합니다.",
        ],
    },
    general: {
        name: "SNS",
        tips: [
            "카톡·인스타·게임 등 여러 곳에 같은 이름을 쓸 계획이라면, 각 서비스에서 길이 제한이 다른 점을 고려해 12자 이내가 안전합니다.",
            "특수문자·이모지는 서비스마다 허용 범위가 다르므로 순수 알파벳 조합이 이동성이 가장 좋습니다.",
        ],
    },
};

function buildBody(page: { styleId: string; platform: string }): GuideBodySection[] {
    const style = STYLE_WORD_TIP[page.styleId] ?? STYLE_WORD_TIP.cool;
    const platform = PLATFORM_TIP[page.platform] ?? PLATFORM_TIP.general;
    const styleLabel = ({ cool: "강렬한", aesthetic: "감성적인", cute: "귀여운", funny: "유니크한" } as Record<string, string>)[page.styleId] ?? "독특한";
    const platformName = platform.name;

    const sections: GuideBodySection[] = [];

    sections.push({
        heading: `${styleLabel} ${platformName} 닉네임, 어떻게 지어지나요?`,
        paragraphs: [
            `${styleLabel} 닉네임의 핵심 단어 소스는 ${style.words}입니다. ${style.direction}`,
            `이 페이지의 예시 10선은 모두 이 공식으로 조합했습니다. 예시 그대로 써도 좋고, 단어 한 개를 바꿔서 본인만의 조합으로 만들어도 좋습니다. 예시에서 단어를 뽑아 재조합하는 방식이 가장 빠르게 결과를 얻는 방법입니다.`,
            `AI 생성기를 쓰는 경우, 키워드 한두 개(좋아하는 사물·색·계절 등)를 입력하면 그 키워드와 ${styleLabel} 스타일이 조합된 후보가 나옵니다. 후보 중 발음이 쉬운 것을 남기는 흐름이면 충분합니다.`,
        ],
    });

    sections.push({
        heading: "좋은 닉네임의 체크 기준 5가지",
        paragraphs: [
            "어떤 닉네임이 좋은 닉네임인지 판단할 때, 감각만으로 고르기보다 기준으로 대조해 보는 실수가 적습니다. 아래 5가지를 순서대로 확인해 보세요.",
        ],
        bullets: [
            "발음: 소리 내서 3번 불렀을 때 혀에 걸리지 않는가",
            "길이: 12자 이내인가 (대부분 서비스 제한과 검색 편의를 동시에 만족)",
            "기억: 하루 뒤에도 다시 떠올릴 수 있는가 (고유명사·반복 리듬이 도움됨)",
            "안전: 실명·생년·회사·학교 같은 개인 식별 정보가 없는가",
            "지속: 한 달 뒤에도 부끄럽지 않은 조합인가 (밈 전용 조합은 시즌 리스크)",
        ],
    });

    sections.push({
        heading: "이런 닉네임은 피하세요",
        paragraphs: [
            "뽑힌 후보 중에도 실제 사용하면 후회하는 조합이 있습니다. 아래 패턴에 해당하면 다른 후보로 넘어가는 것이 안전합니다.",
        ],
        bullets: [
            "개인정보 조합: 실명+생년(예: Jihoon07) — 전적 검색·SNS 검색으로 이어지는 최악의 조합",
            "서비스 제약 조합: 일부 게임은 특수문자·숫자 조합이 아예 막혀 재생성을 강요당합니다",
            "과하지 않은 특수문자: xX_Jun_Xx 같은 구식 장식은 가독성을 해치고 오표기 문제를 만듭니다",
            "숫자 범벅: Jun12345처럼 숫자가 길어지면 중복 회피용 숫자 덩어리라는 느낌이 강해집니다",
            "타 브랜드 오용: 유명 게임·앱 브랜드명 그대로를 쓰면 운영 정책에 걸릴 수 있으니 피하는 것이 좋습니다",
        ],
    });

    sections.push({
        heading: `${platformName}에서 쓸 때 확인할 점`,
        paragraphs: [
            `같은 닉네임이라도 쓰는 곳이 ${platformName}인지, 다른 SNS인지에 따라 확인할 항목이 달라집니다.`,
        ],
        bullets: platform.tips,
    });

    sections.push({
        heading: "FAQ",
        paragraphs: [],
    });

    return sections;
}

const FAQ: Record<string, GuideFaq[]> = {
    common: [
        {
            q: "닉네임은 나중에 바꿀 수 있나요?",
            a: "서비스별로 다릅니다. 인스타그램·피지네임류는 자유롭게 변경이 가능하고, 일부 게임은 변경 아이템이 유료이거나 일정 기간 잠금이 있습니다. 바꿀 가능성이 있다면 확정 전에 임시로 몇 일 사용해 보는 방법도 있습니다.",
        },
        {
            q: "이미 있는 이름과 겹치면 어떻게 하나요?",
            a: "겹치는 것 자체는 문제가 없지만, 같은 서비스에서 정확히 동일한 이름은 사용할 수 없는 경우가 많습니다. 뒤에 단어를 한 개 더 붙이거나(Frost → FrostMist), 스타일 단어를 교체해 차별화하는 것이 숫자를 붙이는 것보다 자연스럽습니다.",
        },
        {
            q: "한글 닉네임과 영어 닉네임 중 어느 쪽이 좋나요?",
            a: "용도에 따라 다릅니다. 국내 커뮤니티·친구 방이라면 한글이 친근할 수 있고, 게임·글로벌 서비스·해외 노출을 생각하면 영어가 검색·표기 이슈가 적습니다. 인스타 프로필처럼 양쪽을 노출하는 공간에서는 영어 닉네임 + 한글 실명 해시태그 조합도 흔히 쓰입니다.",
        },
        {
            q: "닉네임 생성기는 무료인가요?",
            a: "이 페이지의 AI 닉네임 생성기는 무료입니다. 키워드 입력 후 몇 초 안에 여러 후보가 생성되며, 마음에 드는 결과가 나올 때까지 재시도할 수 있습니다.",
        },
    ],
};

export function getGuideBody(page: { styleId: string; platform: string }): GuideBodySection[] {
    return buildBody(page);
}

export function getGuideFaq(_page: { styleId: string; platform: string }): GuideFaq[] {
    return FAQ.common;
}
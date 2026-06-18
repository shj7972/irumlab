export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    content: string; // HTML content
    readingTime: number; // minutes
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "2026-baby-name-trends",
        title: "2026년 인기 아기 이름 트렌드 TOP 10",
        description: "2026년 출생아 이름 트렌드를 분석했습니다. 올해 가장 인기 있는 남아/여아 이름과 작명 시 참고할 포인트를 알아보세요.",
        date: "2026-02-20",
        category: "작명 트렌드",
        tags: ["아기이름", "2026트렌드", "인기이름", "작명"],
        readingTime: 5,
        content: `
<h2>2026년, 어떤 이름이 인기일까?</h2>
<p>매년 출생신고 통계를 보면 이름 트렌드가 확연히 달라지는 것을 알 수 있습니다. 2026년에는 <strong>짧고 부르기 좋으면서도 의미가 깊은 이름</strong>이 대세입니다.</p>

<h3>남아 인기 이름 TOP 5</h3>
<p>올해 남아 이름은 '준(俊)', '우(宇)', '호(浩)' 같은 글자가 여전히 강세입니다. 특히 두 글자 이름의 인기가 높아지고 있으며, 한자의 뜻을 중시하는 부모가 늘고 있습니다.</p>
<ol>
<li><strong>서준</strong> - 상서로울 서(瑞) + 준걸 준(俊)</li>
<li><strong>도윤</strong> - 길 도(道) + 윤택할 윤(潤)</li>
<li><strong>시우</strong> - 옳을 시(是) + 집 우(宇)</li>
<li><strong>하준</strong> - 여름 하(夏) + 준걸 준(俊)</li>
<li><strong>이안</strong> - 저 이(伊) + 편안 안(安)</li>
</ol>

<h3>여아 인기 이름 TOP 5</h3>
<p>여아 이름은 부드러운 발음과 현대적인 감각이 조화를 이루는 이름이 선호됩니다. '아', '윤', '서' 음절이 포함된 이름이 꾸준한 인기를 보이고 있습니다.</p>
<ol>
<li><strong>이서</strong> - 저 이(伊) + 상서로울 서(瑞)</li>
<li><strong>서아</strong> - 펼 서(舒) + 버금 아(亞)</li>
<li><strong>지아</strong> - 지혜 지(智) + 버금 아(亞)</li>
<li><strong>하윤</strong> - 여름 하(夏) + 윤택할 윤(潤)</li>
<li><strong>아린</strong> - 아름다울 아(雅) + 옥 린(璘)</li>
</ol>

<h3>2026년 작명 트렌드 키워드</h3>
<p>올해 작명에서 주목할 키워드는 다음과 같습니다:</p>
<ul>
<li><strong>자연 친화적 의미</strong> - 하늘, 바다, 빛 등 자연을 담은 이름</li>
<li><strong>젠더 뉴트럴</strong> - 남녀 구분 없이 사용 가능한 이름 증가</li>
<li><strong>글로벌 호환성</strong> - 영어로도 발음하기 쉬운 이름 선호</li>
<li><strong>사주 기반 작명</strong> - 오행의 균형을 고려한 전통 작명법 재조명</li>
</ul>

<h3>좋은 이름을 짓는 3가지 원칙</h3>
<p>트렌드를 따르되, 좋은 이름에는 변하지 않는 원칙이 있습니다:</p>
<ol>
<li><strong>발음의 조화</strong> - 성과 이름을 함께 불렀을 때 자연스러운지 확인하세요.</li>
<li><strong>한자의 의미</strong> - 같은 발음이라도 한자에 따라 뜻이 완전히 달라집니다.</li>
<li><strong>오행의 균형</strong> - 사주에 부족한 기운을 이름으로 보완하면 인생의 흐름이 순탄해진다고 합니다.</li>
</ol>

<p>이룸랩의 AI 작명 서비스를 이용하면 사주 분석부터 트렌디한 이름 추천까지 3초 만에 확인할 수 있습니다.</p>
`
    },
    {
        slug: "saju-ohaeng-naming-guide",
        title: "사주오행으로 보는 좋은 이름 짓기 완벽 가이드",
        description: "사주명리학의 오행(목화토금수)이 이름에 어떤 영향을 미치는지, 내 아이에게 맞는 오행의 이름을 찾는 방법을 상세히 알려드립니다.",
        date: "2026-02-18",
        category: "작명 이론",
        tags: ["사주", "오행", "성명학", "작명이론", "용신"],
        readingTime: 7,
        content: `
<h2>사주오행이란?</h2>
<p>사주(四柱)는 태어난 연, 월, 일, 시를 기준으로 한 네 개의 기둥을 말합니다. 각 기둥에는 <strong>천간(天干)</strong>과 <strong>지지(地支)</strong>가 있으며, 이들은 모두 오행(五行)의 기운을 갖고 있습니다.</p>

<h3>오행의 5가지 기운</h3>
<p>오행은 우주 만물을 구성하는 다섯 가지 기본 원소입니다:</p>
<ul>
<li><strong>목(木)</strong> - 나무의 기운. 성장, 인자함, 봄의 에너지</li>
<li><strong>화(火)</strong> - 불의 기운. 열정, 예의, 여름의 에너지</li>
<li><strong>토(土)</strong> - 흙의 기운. 신뢰, 중용, 환절기의 에너지</li>
<li><strong>금(金)</strong> - 쇠의 기운. 결단력, 의리, 가을의 에너지</li>
<li><strong>수(水)</strong> - 물의 기운. 지혜, 유연함, 겨울의 에너지</li>
</ul>

<h3>왜 이름에 오행이 중요한가?</h3>
<p>사주가 태어날 때 정해지는 '선천적인 운명'이라면, 이름은 그 운명을 보완하는 '후천적인 노력'입니다. 사주에 특정 오행이 부족하면 성격이나 건강, 대인관계에 불균형이 생길 수 있습니다.</p>
<p>예를 들어 사주에 <strong>수(水) 기운이 부족한</strong> 사람은 지혜와 유연함이 약할 수 있는데, 이름에 수 기운의 한자(예: 浩, 海, 潤)를 넣어 보완할 수 있습니다.</p>

<h3>용신(用神)이란?</h3>
<p>용신은 사주에서 <strong>가장 필요한 오행</strong>을 말합니다. 사주 팔자의 8글자를 분석하여 부족하거나 약한 오행을 찾아내고, 그 기운을 보완해주는 것이 좋은 작명의 핵심입니다.</p>

<h3>오행별 대표 한자</h3>
<p>각 오행에 해당하는 대표적인 작명용 한자를 소개합니다:</p>
<ul>
<li><strong>목(木)</strong>: 建(건), 敬(경), 佳(가), 可(가), 茶(다)</li>
<li><strong>화(火)</strong>: 道(도), 智(지), 炫(현), 夏(하), 娜(나)</li>
<li><strong>토(土)</strong>: 俊(준), 宇(우), 恩(은), 允(윤), 瑛(영)</li>
<li><strong>금(金)</strong>: 瑞(서), 正(정), 眞(진), 宣(선), 誠(성)</li>
<li><strong>수(水)</strong>: 浩(호), 潤(윤), 賢(현), 慧(혜), 希(희)</li>
</ul>

<h3>실전: 내 아이의 용신 찾기</h3>
<p>사주 분석은 전문 지식이 필요하지만, 기본 원리는 간단합니다:</p>
<ol>
<li>태어난 연월일시를 만세력으로 변환합니다.</li>
<li>8개 글자의 오행 분포를 확인합니다.</li>
<li>가장 부족한 오행이 용신입니다.</li>
<li>이름에 해당 오행의 한자를 배치합니다.</li>
</ol>
<p>이 과정을 AI가 자동으로 분석해주는 이룸랩의 작명 서비스를 활용하면, 정확한 사주 분석과 함께 최적의 이름을 추천받을 수 있습니다.</p>

<h3>주의할 점</h3>
<p>오행만으로 이름을 짓는 것은 불완전합니다. 좋은 이름은 <strong>자원오행(한자의 뜻)</strong>, <strong>음령오행(소리의 기운)</strong>, <strong>수리성명학(획수의 길흉)</strong>을 모두 고려해야 합니다. 세 가지 요소가 조화를 이룰 때 비로소 운명을 돕는 좋은 이름이 됩니다.</p>
`
    },
    {
        slug: "game-english-nickname-ideas",
        title: "게임 영어 닉네임 제조기로 만드는 강렬한 닉네임 200선",
        description: "롤, 배그, 발로란트, 오버워치 등 게임별 최강 영어 닉네임 아이디어와 AI 제조기 활용법. 강렬하고 기억에 남는 게임 닉네임을 골라보세요.",
        date: "2026-03-10",
        category: "영어 닉네임",
        tags: ["게임닉네임", "영어닉네임제조기", "롤닉네임", "배그닉네임", "발로란트닉네임"],
        readingTime: 6,
        content: `
<h2>게임 영어 닉네임, 왜 중요한가?</h2>
<p>게임에서 닉네임은 나의 첫인상입니다. 강렬하고 독창적인 영어 닉네임은 상대방에게 심리적 압박감을 주고, 팀원에게 신뢰감을 줍니다. 프로게이머들의 닉네임을 보면 짧고 강한 단어, 또는 독특한 조합을 사용하는 경우가 많습니다.</p>

<h3>장르별 게임 영어 닉네임 스타일</h3>

<h4>MOBA (롤, 도타2)</h4>
<p>전략과 실력을 강조하는 닉네임이 인기입니다. 단일 강한 단어나 신화·역사 속 인물명을 활용합니다.</p>
<ul>
<li><strong>강렬한 단어형</strong>: Viper, Shadow, Phantom, Wraith, Nemesis</li>
<li><strong>신화 기반</strong>: Ares, Odin, Thor, Hades, Fenrir</li>
<li><strong>공포/어둠 계열</strong>: Abyssal, Void, Dusk, Eclipse, Raven</li>
</ul>

<h4>배틀로얄 (배그, 에이펙스, 포트나이트)</h4>
<p>생존과 사냥을 연상시키는 단어가 잘 어울립니다.</p>
<ul>
<li><strong>사냥꾼 스타일</strong>: Hunter, Apex, Predator, Sniper, Reaper</li>
<li><strong>자연/동물</strong>: Wolf, Eagle, Hawk, Cobra, Lynx</li>
<li><strong>군사 계열</strong>: Ghost, Bravo, Delta, Recon, Ranger</li>
</ul>

<h4>FPS (발로란트, 오버워치, CS2)</h4>
<p>빠른 반응과 정밀함을 강조하는 닉네임이 선호됩니다.</p>
<ul>
<li><strong>속도/정밀</strong>: Flash, Blitz, Swift, Pixel, Ace</li>
<li><strong>냉혹한 이미지</strong>: Frost, Zero, Null, Static, Cipher</li>
</ul>

<h3>좋은 게임 닉네임 제조 공식</h3>
<p>기억에 남는 게임 영어 닉네임을 만드는 공식이 있습니다:</p>
<ol>
<li><strong>[형용사] + [명사]</strong>: DarkWolf, SilentBlade, IronGhost</li>
<li><strong>[신화/역사 이름] + 숫자</strong>: Ares77, Thor99, Fenrir0</li>
<li><strong>단일 강한 단어</strong>: Phantom, Viper, Eclipse, Nemesis</li>
<li><strong>컨셉 기반 조합</strong>: NightReaper, VoidWalker, StormRider</li>
</ol>

<h3>피해야 할 게임 닉네임 패턴</h3>
<ul>
<li>너무 흔한 단어 (King, Pro, Best, Master) — 이미 수백만 명이 사용 중</li>
<li>발음하기 어려운 철자 조합 — 팀원이 콜하기 어려움</li>
<li>너무 긴 닉네임 — 채팅창에서 잘림, 기억하기 어려움</li>
</ul>

<h3>AI 영어 닉네임 제조기 활용법</h3>
<p>이룸랩의 AI 영어 닉네임 제조기를 활용하면 플랫폼(게임 종류), 원하는 분위기(강렬한/감성적/귀여운), 좋아하는 키워드를 입력해 나만의 독창적인 영어 닉네임을 즉시 제조할 수 있습니다. 수천 가지 조합 중 나에게 딱 맞는 닉네임을 찾아보세요.</p>
`
    },
    {
        slug: "instagram-english-nickname-ideas",
        title: "인스타그램 영어 닉네임 추천: 감성적이고 세련된 영어 이름 모음",
        description: "인스타그램 감성에 맞는 영어 닉네임 아이디어 총정리. 팔로워를 끌어당기는 세련된 영어 이름 스타일과 AI 영어 닉네임 생성기 활용 팁을 공유합니다.",
        date: "2026-03-05",
        category: "영어 닉네임",
        tags: ["인스타그램닉네임", "영어닉네임", "영어이름생성기", "SNS닉네임", "감성닉네임"],
        readingTime: 5,
        content: `
<h2>인스타그램에 어울리는 영어 닉네임이 따로 있다</h2>
<p>인스타그램은 감성과 심미성이 중요한 플랫폼입니다. 게임용 강렬한 닉네임보다는 <strong>부드럽고 기억에 남으며 세련된</strong> 영어 이름이 팔로워에게 더 좋은 인상을 줍니다. 좋은 인스타그램 영어 닉네임은 계정의 분위기를 결정하는 브랜딩이기도 합니다.</p>

<h3>인스타그램 영어 닉네임 스타일별 추천</h3>

<h4>감성/무드 계열</h4>
<p>감정과 분위기를 담은 단어들은 팔로워에게 깊은 인상을 남깁니다.</p>
<ul>
<li>Luna, Lyra, Aurora, Celeste, Iris</li>
<li>Aura, Haze, Mist, Dew, Soleil</li>
<li>Velvet, Linen, Satin, Mellow, Serene</li>
</ul>

<h4>자연 영감 계열</h4>
<p>자연물에서 따온 이름은 트렌디하고 유니크합니다.</p>
<ul>
<li>Fern, Ivy, Sage, Willow, Cedar</li>
<li>River, Stone, Cliff, Ember, Flint</li>
<li>Bloom, Petal, Frost, Dawn, Dusk</li>
</ul>

<h4>미니멀/쿨한 계열</h4>
<p>짧고 강렬한 단어 하나로 개성을 표현합니다.</p>
<ul>
<li>Zen, Ash, Rex, Nox, Rye</li>
<li>Ace, Bay, Cay, Dax, Fox</li>
</ul>

<h4>부계정/익명 계열</h4>
<p>본계정과 분위기를 다르게 가져가고 싶을 때 사용하는 스타일입니다.</p>
<ul>
<li>Ghost, Echo, Mirror, Alias, Anon</li>
<li>Blank, Void, Static, Glitch, Flux</li>
</ul>

<h3>인스타그램 닉네임 만들기 팁</h3>
<ol>
<li><strong>계정 콘셉트와 일치</strong>시키세요 — 일상 계정이라면 친근한 이름, 사진 계정이라면 감성적인 이름</li>
<li><strong>2~3음절</strong>이 가장 기억하기 좋습니다</li>
<li><strong>숫자 사용은 최소화</strong> — 뒤에 _나 숫자를 붙이면 기억하기 어려워집니다</li>
<li><strong>구글에 검색</strong>해서 동명의 유명인이나 브랜드가 없는지 확인하세요</li>
</ol>

<h3>AI 영어 닉네임 생성기로 나만의 이름 찾기</h3>
<p>이룸랩의 영어 닉네임 생성기는 인스타그램 플랫폼을 선택하고 원하는 분위기(감성적/귀여운/쿨한)와 좋아하는 키워드를 입력하면 AI가 나에게 딱 맞는 영어 닉네임을 즉시 추천해 드립니다. 수백 가지 조합 중 나만의 고유한 영어 이름을 찾아보세요.</p>
`
    },
    {
        slug: "brand-naming-success-tips",
        title: "성공하는 브랜드 이름 짓기: 5가지 핵심 전략",
        description: "매출을 올리는 브랜드 네이밍의 비밀. 기억하기 쉽고 검색에 강한 브랜드 이름을 만드는 실전 전략을 공유합니다.",
        date: "2026-02-15",
        category: "브랜드 네이밍",
        tags: ["브랜드네이밍", "창업", "마케팅", "상표등록"],
        readingTime: 6,
        content: `
<h2>브랜드 이름이 중요한 이유</h2>
<p>브랜드 이름은 고객이 가장 먼저 접하는 정보입니다. 좋은 브랜드 이름은 그 자체로 마케팅이 되고, 나쁜 이름은 아무리 좋은 제품도 묻히게 만듭니다.</p>

<h3>전략 1: 짧고 발음하기 쉬운 이름</h3>
<p>성공한 브랜드의 공통점은 이름이 <strong>3음절 이내</strong>라는 것입니다. 짧은 이름은 기억하기 쉽고, 입소문을 통한 바이럴에 유리합니다.</p>
<p>좋은 예시로 국내외 유명 브랜드들을 보면, 대부분 2~3음절의 간결한 이름을 사용하고 있습니다. 이름을 지을 때는 직접 여러 번 소리 내어 읽어보며 발음의 편안함을 확인하세요.</p>

<h3>전략 2: 도메인과 SNS ID 동시 확보</h3>
<p>아무리 좋은 이름이라도 <strong>.com 도메인</strong>이나 <strong>인스타그램 ID</strong>를 사용할 수 없다면 온라인 마케팅에 큰 장애가 됩니다. 이름을 확정하기 전에 반드시 확인해야 할 것들:</p>
<ul>
<li>.com, .kr, .co.kr 도메인 가용 여부</li>
<li>인스타그램, 유튜브, X(트위터) 계정명</li>
<li>네이버, 구글 검색 시 동일 이름의 경쟁자 존재 여부</li>
</ul>

<h3>전략 3: 업종의 특성을 암시하되 한정짓지 않기</h3>
<p>좋은 브랜드명은 무엇을 하는 회사인지 <strong>은유적으로 암시</strong>하면서도, 사업 확장의 여지를 남깁니다. 너무 직접적인 이름(예: "서울김치찌개집")은 메뉴를 바꾸거나 사업을 확장할 때 걸림돌이 됩니다.</p>

<h3>전략 4: 상표등록 가능 여부 사전 확인</h3>
<p>브랜드 이름을 정했다면 <strong>특허청 KIPRIS</strong>에서 상표 검색을 해보세요. 이미 등록된 상표와 동일하거나 유사한 이름은 법적 분쟁의 소지가 있습니다.</p>
<p>상표등록 시 주의할 점:</p>
<ul>
<li>동일 업종 내 유사 상표 검색 필수</li>
<li>일반적인 단어는 상표 등록이 거절될 수 있음</li>
<li>영문/한글 각각 별도 등록 권장</li>
</ul>

<h3>전략 5: 타겟 고객의 언어로 말하기</h3>
<p>20대를 타겟으로 하는 브랜드와 50대를 타겟으로 하는 브랜드의 이름은 달라야 합니다. 타겟 고객층이 자주 쓰는 어휘, 선호하는 톤앤매너를 반영한 이름이 공감을 얻습니다.</p>

<h3>AI로 브랜드 이름 짓기</h3>
<p>이룸랩의 AI 브랜드 네이밍 서비스는 업종, 키워드, 타겟 고객을 입력하면 도메인 가용성, 상표권 가능성, SNS 사용 가능 여부까지 한번에 분석하여 최적의 브랜드 이름을 추천해 드립니다. 창업자의 사주까지 반영하여 성공을 부르는 이름을 지어보세요.</p>
`
    },
    {
        slug: "nickname-for-boys",
        title: "남자 영어 닉네임 200선: 멋있고 강렬한 영어 이름 모음",
        description: "게임, 인스타그램, 유튜브에서 쓸 수 있는 남자 영어 닉네임 200개 총정리. 강렬한 스타일부터 쿨하고 멋있는 남성 영어 닉네임 추천 모음입니다.",
        date: "2026-04-05",
        category: "영어 닉네임",
        tags: ["남자영어닉네임", "남성닉네임추천", "게임닉네임", "멋있는닉네임", "영어닉네임모음"],
        readingTime: 7,
        content: `
<h2>남자 영어 닉네임, 어떤 스타일이 있을까?</h2>
<p>남자 영어 닉네임은 크게 <strong>강렬한/다크 계열</strong>, <strong>신화/영웅 계열</strong>, <strong>자연/동물 계열</strong>, <strong>쿨하고 미니멀한 계열</strong>로 나눌 수 있습니다. 사용 목적(게임, SNS, 메신저)에 따라 어울리는 스타일이 다릅니다.</p>

<h3>강렬한/다크 계열 남자 영어 닉네임 50선</h3>
<p>게임, 방송에서 강한 인상을 주고 싶다면 이 스타일이 좋습니다.</p>
<ul>
<li>ShadowViper, DarkWolf, VoidWalker, NightReaper, IronGhost</li>
<li>StormRider, BlackHawk, DeathBlade, SilentKiller, FrostBite</li>
<li>Phantom, Eclipse, Nemesis, Wraith, Cipher</li>
<li>AbyssalLord, VoidKnight, DarkSoul, ShadowReaper, NightWalker</li>
<li>ChaosLord, DoomBringer, Devastator, Annihilator, Obliterator</li>
<li>BloodMoon, IronFang, SteelWrath, CrimsonBlade, ObsidianEdge</li>
<li>NightmareFuel, SilentGhost, DarkMatter, Shadowstep, Voidborn</li>
<li>Blackout, Lockdown, Deadshot, Ironside, Rampage</li>
<li>GrimReaper, SoulCrusher, BoneCracker, MindBreaker, SpineChiller</li>
<li>Executioner, Terminator, Eliminator, Liquidator, Exterminator</li>
</ul>

<h3>신화/영웅 계열 남자 영어 닉네임 50선</h3>
<p>역사적 인물이나 신화 속 캐릭터에서 영감을 받은 강렬한 남성 닉네임입니다.</p>
<ul>
<li>Ares, Zeus, Thor, Odin, Loki</li>
<li>Fenrir, Ragnar, Achilles, Leonidas, Caesar</li>
<li>Hercules, Spartacus, Maximus, Gladiator, Centurion</li>
<li>Valkyrie, Berserker, Viking, Warlord, Chieftain</li>
<li>Titan, Colossus, Goliath, Atlas, Kronos</li>
<li>Artemis (성별 중립), Apollo, Hermes, Hephaestus, Dionysus</li>
<li>Anubis, Osiris, Ra, Horus, Seth</li>
<li>Merlin, Excalibur, Galahad, Lancelot, Arthur</li>
<li>Samurai, Shogun, Ronin, Kensei, Bushido</li>
<li>Vanguard, Sentinel, Paladin, Crusader, Templar</li>
</ul>

<h3>자연/동물 계열 남자 영어 닉네임 50선</h3>
<p>자연과 동물에서 따온 남성적인 영어 닉네임입니다.</p>
<ul>
<li>Wolf, Eagle, Hawk, Cobra, Lynx</li>
<li>Bear, Lion, Tiger, Panther, Jaguar</li>
<li>Falcon, Raven, Condor, Phoenix, Dragon</li>
<li>Thunder, Lightning, Storm, Blizzard, Tornado</li>
<li>Glacier, Volcano, Avalanche, Earthquake, Tsunami</li>
<li>WildWolf, SilverFox, BlackBear, GoldenEagle, IronHawk</li>
<li>MountainLion, DesertFox, ArcticWolf, JungleCat, OceanShark</li>
<li>NightRaven, DawnEagle, StormHawk, SilentWolf, ShadowPanther</li>
<li>Viper, Mamba, Anaconda, Python, Rattler</li>
<li>Shark, Barracuda, Swordfish, Marlin, Orca</li>
</ul>

<h3>쿨하고 미니멀한 남자 영어 닉네임 50선</h3>
<p>짧고 강한 단어로 개성을 표현하는 현대적인 남성 닉네임입니다.</p>
<ul>
<li>Ace, Rex, Dax, Fox, Jax</li>
<li>Blaze, Knox, Cruz, Ryze, Zen</li>
<li>Ash, Bay, Cay, Finn, Gus</li>
<li>Hex, Ink, Jet, Lex, Max</li>
<li>Nero, Orion, Pixel, Quill, Ridge</li>
<li>Sage, Trek, Vex, Wick, Yule</li>
<li>Zero, Zion, Axel, Blake, Cole</li>
<li>Dean, Evan, Flynn, Grant, Hugo</li>
<li>Ivan, Jake, Kane, Lars, Marc</li>
<li>Nash, Owen, Penn, Quade, Reid</li>
</ul>

<h3>AI로 나만의 남자 영어 닉네임 만들기</h3>
<p>위에서 마음에 드는 스타일을 찾았나요? 이룸랩의 <a href="/naming/english">영어 닉네임 제조기</a>를 이용하면 내가 원하는 스타일과 키워드를 입력하여 세상에 없는 나만의 남자 영어 닉네임을 즉시 생성할 수 있습니다.</p>

<div style="background: #f3f0ff; border-radius: 12px; padding: 16px; margin-top: 20px; text-align: center;">
<p style="font-weight: bold; color: #6d28d9; margin: 0 0 8px;">🎮 지금 바로 나만의 남자 영어 닉네임 만들기</p>
<a href="/naming/english" style="display: inline-block; background: #7c3aed; color: white; padding: 10px 24px; border-radius: 8px; font-weight: bold; text-decoration: none;">무료로 만들기 →</a>
</div>
`
    },
    {
        slug: "nickname-for-girls",
        title: "여자 영어 닉네임 200선: 예쁘고 감성적인 영어 이름 모음",
        description: "인스타그램, 게임, SNS에서 쓸 수 있는 여자 영어 닉네임 200개 총정리. 예쁘고 감성적인 여성 영어 닉네임 추천 모음입니다.",
        date: "2026-04-10",
        category: "영어 닉네임",
        tags: ["여자영어닉네임", "여성닉네임추천", "예쁜영어닉네임", "감성닉네임", "인스타닉네임"],
        readingTime: 7,
        content: `
<h2>여자 영어 닉네임, 어떤 스타일이 어울릴까?</h2>
<p>여자 영어 닉네임은 <strong>감성/무드 계열</strong>, <strong>자연 영감 계열</strong>, <strong>귀엽고 친근한 계열</strong>, <strong>미니멀/쿨한 계열</strong>로 나눌 수 있습니다. 인스타그램 감성 계정에는 Luna, Velvet 스타일이, 게임에서는 좀 더 강렬한 이름이 잘 어울립니다.</p>

<h3>감성/무드 계열 여자 영어 닉네임 50선</h3>
<p>분위기 있는 계정, 감성 사진, 여행 계정에 잘 어울리는 영어 닉네임입니다.</p>
<ul>
<li>Luna, Lyra, Aurora, Celeste, Iris</li>
<li>Aura, Haze, Mist, Dew, Soleil</li>
<li>Velvet, Linen, Satin, Mellow, Serene</li>
<li>LunaAura, VelvetMist, CelesteDew, AuroraBell, IvyBloom</li>
<li>FernGlow, MellowRise, SoleilHaze, WillowDusk, PetalDrift</li>
<li>MidnightBelle, StarDust, MoonGlow, NightBloom, DuskRose</li>
<li>SilverMoon, GoldenDawn, CrimsonSky, VioletHaze, IndigoMist</li>
<li>DreamWeaver, CloudNine, SkyDancer, StarChaser, MoonWatcher</li>
<li>Ethereal, Luminous, Radiant, Iridescent, Translucent</li>
<li>Seraphina, Celestia, Elara, Lyria, Zephyrine</li>
</ul>

<h3>자연 영감 계열 여자 영어 닉네임 50선</h3>
<p>자연에서 영감을 받은 트렌디하고 유니크한 여성 닉네임입니다.</p>
<ul>
<li>Fern, Ivy, Sage, Willow, Cedar</li>
<li>River, Stone, Cliff, Ember, Flint</li>
<li>Bloom, Petal, Frost, Dawn, Dusk</li>
<li>Meadow, Prairie, Forest, Ocean, Horizon</li>
<li>Blossom, Clover, Heather, Jasmine, Lavender</li>
<li>Coral, Pearl, Amber, Opal, Ruby</li>
<li>Aspen, Birch, Maple, Olive, Hazel</li>
<li>Sparrow, Robin, Wren, Dove, Finch</li>
<li>Brook, Creek, Lake, Rain, Snow</li>
<li>Solstice, Equinox, Zenith, Nadir, Aurora</li>
</ul>

<h3>귀엽고 친근한 여자 영어 닉네임 50선</h3>
<p>밝고 긍정적인 에너지를 담은 귀여운 여성 영어 닉네임입니다.</p>
<ul>
<li>MochiBun, CottonCloud, BubblePop, HoneyBee, PuffyPaw</li>
<li>CandyBell, MapleSprout, TofuPuff, DaisyPop, PeachyGlow</li>
<li>SugarPlum, HoneyDew, CherryBomb, LemonDrop, BerryBliss</li>
<li>PixieDust, FairyTale, TwinkleStar, GlitterGirl, SparklePop</li>
<li>PinkCloud, PastePuff, SoftBell, WarmGlow, GentleBreeze</li>
<li>BunnyHop, PuppyLove, KittenSoft, LambChop, TeddyPuff</li>
<li>SweetPea, HoneyPot, SugarCoat, CandyFloss, JellyBean</li>
<li>Cinnamon, Nutmeg, Vanilla, Caramel, Butterscotch</li>
<li>Poppet, Cupcake, Muffin, Cookie, Brownie</li>
<li>Twirl, Swirl, Spin, Bounce, Skip</li>
</ul>

<h3>미니멀/쿨한 여자 영어 닉네임 50선</h3>
<p>짧고 세련된 단어로 강한 개성을 표현하는 현대적인 여성 닉네임입니다.</p>
<ul>
<li>Zen, Ash, Nox, Rye, Faye</li>
<li>Ace, Bay, Cay, Dee, Eve</li>
<li>Joy, Kay, Lee, Mae, Noa</li>
<li>Pax, Quinn, Ray, Sky, Tae</li>
<li>Uma, Viv, Wren, Xia, Yuki</li>
<li>Zoe, Ari, Bea, Clio, Drew</li>
<li>Elle, Flo, Gal, Hana, Ida</li>
<li>Juno, Kira, Lila, Mira, Nova</li>
<li>Ora, Pia, Rae, Sia, Tia</li>
<li>Uma, Vee, Wren, Xo, Yara</li>
</ul>

<h3>AI로 나만의 여자 영어 닉네임 만들기</h3>
<p>이룸랩의 <a href="/naming/english">영어 닉네임 제조기</a>에서 인스타그램 플랫폼을 선택하고 감성적/귀여운 스타일로 설정하면, 위 예시보다 훨씬 다양한 여자 영어 닉네임을 즉시 추천받을 수 있습니다.</p>

<div style="background: #fdf2f8; border-radius: 12px; padding: 16px; margin-top: 20px; text-align: center;">
<p style="font-weight: bold; color: #db2777; margin: 0 0 8px;">✨ 나만의 예쁜 영어 닉네임 지금 만들기</p>
<a href="/naming/english/instagram" style="display: inline-block; background: linear-gradient(to right, #ec4899, #8b5cf6); color: white; padding: 10px 24px; border-radius: 8px; font-weight: bold; text-decoration: none;">인스타 닉네임 만들기 →</a>
</div>
`
    },
    {
        slug: "korean-name-meaning",
        title: "내 이름 한자 뜻 풀이: 이름에 숨겨진 의미 완벽 가이드",
        description: "내 이름의 한자 뜻을 알아보고 싶으신가요? 이름 한자 풀이 방법과 자주 쓰이는 작명 한자의 의미를 총정리했습니다. 이름에 담긴 부모님의 소망을 찾아보세요.",
        date: "2026-04-20",
        category: "작명 이론",
        tags: ["이름뜻", "이름한자", "한자풀이", "이름의미", "작명한자"],
        readingTime: 8,
        content: `
<h2>내 이름의 한자, 왜 중요한가?</h2>
<p>한국의 이름은 대부분 한자(漢字)를 기반으로 지어집니다. 같은 발음 '준'이라도 俊(준걸 준), 準(기준 준), 濬(깊을 준) 등 수십 가지 한자가 있으며, 어떤 한자를 선택했느냐에 따라 이름의 의미가 완전히 달라집니다. 부모님이 어떤 마음으로 이름을 지었는지 알고 싶다면 한자 풀이가 필수입니다.</p>

<h3>자주 쓰이는 이름 한자 — 남자</h3>
<p>남자 이름에 자주 등장하는 한자와 그 의미입니다:</p>
<ul>
<li><strong>俊(준)</strong> — 준걸, 뛰어난 인물. 리더십과 탁월함을 의미합니다.</li>
<li><strong>宇(우)</strong> — 하늘, 우주. 넓은 포용력과 큰 뜻을 담습니다.</li>
<li><strong>浩(호)</strong> — 크고 넓음. 수(水) 오행으로 지혜와 유연함을 상징합니다.</li>
<li><strong>建(건)</strong> — 세우다, 건강. 목(木) 오행으로 성장과 발전을 뜻합니다.</li>
<li><strong>瑞(서)</strong> — 상서로움, 길한 징조. 금(金) 오행으로 귀하고 복된 이름자입니다.</li>
<li><strong>道(도)</strong> — 길, 도리. 화(火) 오행으로 올바른 방향을 의미합니다.</li>
<li><strong>賢(현)</strong> — 어질고 현명함. 수(水) 오행으로 지혜를 상징합니다.</li>
<li><strong>正(정)</strong> — 바르고 정직함. 금(金) 오행으로 의리와 결단력을 뜻합니다.</li>
</ul>

<h3>자주 쓰이는 이름 한자 — 여자</h3>
<p>여자 이름에 자주 등장하는 한자와 그 의미입니다:</p>
<ul>
<li><strong>恩(은)</strong> — 은혜, 고마움. 토(土) 오행으로 신뢰와 중용을 상징합니다.</li>
<li><strong>智(지)</strong> — 지혜, 슬기로움. 화(火) 오행으로 밝은 미래를 뜻합니다.</li>
<li><strong>慧(혜)</strong> — 지혜롭고 영리함. 수(水) 오행으로 총명함을 상징합니다.</li>
<li><strong>雅(아)</strong> — 우아하고 품위 있음. 아름다운 여성성을 담습니다.</li>
<li><strong>璘(린)</strong> — 옥이 빛나는 모양. 귀하고 아름다운 존재를 뜻합니다.</li>
<li><strong>娜(나)</strong> — 아름답고 우아함. 화(火) 오행으로 밝은 에너지를 담습니다.</li>
<li><strong>瑛(영)</strong> — 옥의 빛. 토(土) 오행으로 안정과 조화를 상징합니다.</li>
<li><strong>舒(서)</strong> — 펼치다, 여유롭다. 삶이 풍요롭기를 바라는 마음을 담습니다.</li>
</ul>

<h3>이름 한자 풀이 방법</h3>
<ol>
<li><strong>주민등록증 확인</strong> — 주민등록증에는 한자 이름이 병기되어 있습니다.</li>
<li><strong>호적 서류 확인</strong> — 가족관계증명서에 한자 이름이 기재됩니다.</li>
<li><strong>부모님께 여쭤보기</strong> — 직접 여쭤보면 부모님의 뜻을 가장 정확히 알 수 있습니다.</li>
<li><strong>온라인 한자 사전 활용</strong> — 네이버 한자사전에서 발음으로 검색하면 해당 한자의 뜻을 확인할 수 있습니다.</li>
</ol>

<h3>이름 한자가 없는 경우</h3>
<p>최근에는 '한글 이름'으로 출생신고를 하는 경우도 많습니다. 순우리말 이름(예: 하늘, 바다, 아람, 다솜)은 한자 풀이가 없지만, 우리말 자체의 아름다운 의미를 갖습니다.</p>

<h3>새 이름을 짓고 싶다면?</h3>
<p>현재 이름이 마음에 들지 않거나 개명을 고려 중이라면, 이룸랩의 <a href="/naming">AI 사주 작명 서비스</a>를 이용해보세요. 사주를 분석하고 오행의 균형에 맞는 좋은 한자 이름을 추천해 드립니다.</p>

<div style="background: #eff6ff; border-radius: 12px; padding: 16px; margin-top: 20px; text-align: center;">
<p style="font-weight: bold; color: #1d4ed8; margin: 0 0 8px;">📝 사주에 맞는 새 이름 짓기</p>
<a href="/naming" style="display: inline-block; background: #1e3a8a; color: white; padding: 10px 24px; border-radius: 8px; font-weight: bold; text-decoration: none;">AI 작명 시작하기 →</a>
</div>
`
    },
    {
        slug: "baby-name-2026-boy",
        title: "2026년 남자 아기 이름 추천 100선: 뜻이 좋고 세련된 이름 총정리",
        description: "2026년 트렌드에 맞는 남자 아기 이름 100가지를 추천합니다. 사주오행 기반의 뜻이 좋은 남아 이름과 최신 작명 트렌드를 함께 알아보세요.",
        date: "2026-04-25",
        category: "작명 트렌드",
        tags: ["남자아기이름", "2026남아이름", "남아작명", "아기이름추천", "남자이름"],
        readingTime: 8,
        content: `
<h2>2026년 남자 아기 이름 트렌드</h2>
<p>2026년 남자 아기 이름 트렌드의 핵심 키워드는 <strong>짧고 강한 이름</strong>, <strong>글로벌 발음 가능</strong>, <strong>깊은 한자 의미</strong>입니다. 두 글자 이름이 주류를 이루며, 영어로도 자연스럽게 발음할 수 있는 이름이 선호됩니다.</p>

<h3>인기 남자 아기 이름 TOP 20 (2026년 기준)</h3>
<ol>
<li><strong>서준(瑞俊)</strong> — 상서로울 서 + 준걸 준. 귀하고 뛰어난 아이</li>
<li><strong>도윤(道潤)</strong> — 길 도 + 윤택할 윤. 올바른 길로 풍요롭게</li>
<li><strong>시우(是宇)</strong> — 옳을 시 + 집 우. 바르고 포용력 있는 아이</li>
<li><strong>하준(夏俊)</strong> — 여름 하 + 준걸 준. 활기차고 뛰어난 아이</li>
<li><strong>이안(伊安)</strong> — 저 이 + 편안 안. 편안하고 여유로운 삶</li>
<li><strong>준서(俊瑞)</strong> — 준걸 준 + 상서로울 서. 뛰어나고 복된 아이</li>
<li><strong>지호(智浩)</strong> — 지혜 지 + 넓을 호. 지혜롭고 포용력 있는 아이</li>
<li><strong>주원(周元)</strong> — 두루 주 + 으뜸 원. 두루 살피고 으뜸인 아이</li>
<li><strong>건우(建宇)</strong> — 세울 건 + 우주 우. 큰 뜻을 세우는 아이</li>
<li><strong>현우(賢宇)</strong> — 어질 현 + 우주 우. 어질고 넓은 포용력</li>
<li><strong>지훈(志勳)</strong> — 뜻 지 + 공훈 훈. 뜻한 바를 이루는 아이</li>
<li><strong>우진(宇振)</strong> — 우주 우 + 떨칠 진. 세상에 이름을 떨칠 아이</li>
<li><strong>민준(敏俊)</strong> — 민첩할 민 + 준걸 준. 영리하고 뛰어난 아이</li>
<li><strong>재원(在源)</strong> — 있을 재 + 근원 원. 근본이 바른 아이</li>
<li><strong>승우(承宇)</strong> — 이을 승 + 우주 우. 좋은 전통을 이어가는 아이</li>
<li><strong>태민(泰敏)</strong> — 클 태 + 민첩할 민. 크게 영리한 아이</li>
<li><strong>정우(正宇)</strong> — 바를 정 + 우주 우. 바르고 포용력 있는 아이</li>
<li><strong>재희(在熙)</strong> — 있을 재 + 빛날 희. 빛나는 존재로 살아가는 아이</li>
<li><strong>시훈(時勳)</strong> — 때 시 + 공훈 훈. 때를 알고 공을 세우는 아이</li>
<li><strong>은우(殷宇)</strong> — 성할 은 + 우주 우. 성대하고 넓은 포용력</li>
</ol>

<h3>오행별 남자 아기 이름 추천</h3>
<p>사주에 부족한 오행에 따라 이름을 선택하면 아이의 기운을 보완할 수 있습니다:</p>
<ul>
<li><strong>목(木) 기운 보완</strong>: 건(建), 재(材), 수(樹) — 성장과 인자함</li>
<li><strong>화(火) 기운 보완</strong>: 혁(赫), 훈(勳), 빛나는 글자 — 열정과 예의</li>
<li><strong>토(土) 기운 보완</strong>: 준(俊), 우(宇), 원(元) — 신뢰와 중용</li>
<li><strong>금(金) 기운 보완</strong>: 서(瑞), 정(正), 진(眞) — 결단력과 의리</li>
<li><strong>수(水) 기운 보완</strong>: 호(浩), 윤(潤), 현(賢) — 지혜와 유연함</li>
</ul>

<h3>좋은 남자 아기 이름 짓는 방법</h3>
<ol>
<li>성과 합쳤을 때 발음이 자연스러운지 확인</li>
<li>한자의 뜻이 긍정적이고 좋은 의미를 담았는지 확인</li>
<li>사주오행의 균형을 고려한 한자 선택</li>
<li>수리성명학으로 획수의 길흉 확인</li>
<li>유행을 타지 않으면서도 세련된 이름 선택</li>
</ol>

<div style="background: #eff6ff; border-radius: 12px; padding: 16px; margin-top: 20px; text-align: center;">
<p style="font-weight: bold; color: #1d4ed8; margin: 0 0 8px;">👶 사주에 맞는 남자 아기 이름 AI로 찾기</p>
<a href="/naming" style="display: inline-block; background: #1e3a8a; color: white; padding: 10px 24px; border-radius: 8px; font-weight: bold; text-decoration: none;">무료 AI 작명 시작하기 →</a>
</div>
`
    },
    {
        slug: "how-to-change-name",
        title: "이름 개명 절차 완벽 가이드: 개명 신청부터 완료까지",
        description: "이름 개명 방법을 단계별로 알려드립니다. 법원 개명 신청 절차, 준비 서류, 예상 기간, 비용까지 개명에 관한 모든 것을 총정리했습니다.",
        date: "2026-05-01",
        category: "작명 가이드",
        tags: ["개명방법", "개명신청", "이름바꾸기", "개명절차", "법원개명"],
        readingTime: 9,
        content: `
<h2>개명, 생각보다 어렵지 않습니다</h2>
<p>많은 분들이 이름 때문에 스트레스를 받으면서도 '개명이 너무 복잡하지 않을까?'하는 걱정에 포기하는 경우가 많습니다. 하지만 최근에는 온라인 신청도 가능해지는 등 개명 절차가 많이 간소화되었습니다. 이 가이드에서 개명의 모든 것을 알려드립니다.</p>

<h3>1단계: 개명 사유 확인</h3>
<p>법원은 개명 신청 시 <strong>정당한 사유</strong>가 있어야 허가합니다. 인정되는 주요 사유는 다음과 같습니다:</p>
<ul>
<li>이름이 너무 예스럽거나 시대에 맞지 않는 경우</li>
<li>이름 때문에 사회생활에서 불편함을 겪는 경우</li>
<li>이름이 부르기 어렵거나 부정적 의미를 가진 경우</li>
<li>동명이인으로 인한 혼란이 큰 경우</li>
<li>종교적, 문화적 이유</li>
<li>성전환 후 성별에 맞는 이름으로 변경</li>
</ul>
<p>단, <strong>범죄를 숨기려는 목적</strong>이나 <strong>채무를 회피하려는 목적</strong>은 허가되지 않습니다.</p>

<h3>2단계: 새 이름 결정</h3>
<p>개명 신청 전 새 이름을 미리 정해야 합니다. 이 단계에서 이룸랩의 <a href="/naming">AI 작명 서비스</a>를 활용하면 사주에 맞는 최적의 새 이름을 추천받을 수 있습니다.</p>
<p>새 이름 선택 시 주의사항:</p>
<ul>
<li>대법원 인명용 한자 범위 내의 한자만 사용 가능 (약 8,000자)</li>
<li>불용문자(이름에 쓰면 안 되는 한자) 제외</li>
<li>성명학적으로 좋은 획수와 오행 확인</li>
</ul>

<h3>3단계: 서류 준비</h3>
<p>개명 허가 신청에 필요한 서류입니다:</p>
<ul>
<li>개명 허가 신청서 (법원 홈페이지 또는 법원 민원실에서 취득)</li>
<li>기본증명서 또는 가족관계증명서 (최근 3개월 이내 발급본)</li>
<li>주민등록등본</li>
<li>개명 사유를 증명하는 자료 (선택사항이나 제출하면 허가율 상승)</li>
</ul>

<h3>4단계: 법원 신청</h3>
<p>개명은 <strong>주소지 관할 가정법원</strong>에 신청합니다. 방법은 두 가지입니다:</p>

<h4>방법 1: 직접 방문 신청</h4>
<ul>
<li>주소지 관할 가정법원 또는 지방법원 민원실 방문</li>
<li>신청서와 서류 제출</li>
<li>인지대 납부 (1,000원)</li>
<li>송달료 납부 (우편 송달 비용, 약 3,000~5,000원)</li>
</ul>

<h4>방법 2: 온라인 신청 (전자소송)</h4>
<ul>
<li>대한민국 법원 전자소송 홈페이지 (ecfs.go.kr) 접속</li>
<li>공인인증서(공동인증서) 로그인</li>
<li>비송 → 개명 허가 신청 메뉴 선택</li>
<li>온라인으로 서류 제출 및 비용 납부</li>
</ul>

<h3>5단계: 심사 및 결정</h3>
<p>법원에서 신청서를 검토하며, 보통 <strong>2~3개월</strong> 내에 결정이 납니다. 특별한 문제가 없는 성인의 경우(신용불량, 범죄경력 없음) 대부분 허가됩니다. 필요에 따라 법원이 심문기일을 잡아 당사자를 출석시킬 수 있습니다.</p>

<h3>6단계: 이름 변경 완료</h3>
<p>법원에서 개명 허가 결정문을 받은 후 <strong>1개월 이내</strong>에 시/군/구청 가족관계등록과에 이름 변경 신고를 해야 합니다. 이후 주민등록증, 여권, 각종 서류의 이름을 순차적으로 변경합니다.</p>

<h3>개명 관련 자주 묻는 질문</h3>
<p><strong>Q: 미성년자도 개명할 수 있나요?</strong><br />A: 네, 가능합니다. 다만 미성년자는 법정대리인(부모)이 신청해야 합니다.</p>

<p><strong>Q: 개명이 거절되면 어떻게 하나요?</strong><br />A: 즉시항고를 통해 상급법원에 다시 신청할 수 있습니다. 사유를 보완하여 재신청도 가능합니다.</p>

<p><strong>Q: 개명 후 취업, 금융 등에 문제가 없나요?</strong><br />A: 개명 후 주민등록이 변경되므로 취업, 금융 등에서 이전 이름 기록 조회에 제한이 있을 수 있습니다. 하지만 본인임이 확인되면 문제없습니다.</p>

<h3>개명 전 새 이름 찾기</h3>
<p>개명을 결심했다면 먼저 사주에 맞는 좋은 이름부터 결정하세요. 이룸랩의 AI 작명 서비스는 사주팔자를 분석하고 오행의 균형을 맞추는 새 이름을 무료로 추천해 드립니다.</p>

<div style="background: #eff6ff; border-radius: 12px; padding: 16px; margin-top: 20px; text-align: center;">
<p style="font-weight: bold; color: #1d4ed8; margin: 0 0 8px;">✏️ 개명할 새 이름, AI로 찾아보세요</p>
<a href="/naming" style="display: inline-block; background: #1e3a8a; color: white; padding: 10px 24px; border-radius: 8px; font-weight: bold; text-decoration: none;">무료 AI 작명 시작하기 →</a>
</div>
`
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(p => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
    return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

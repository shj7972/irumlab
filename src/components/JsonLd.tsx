export function EnglishNamingJsonLd() {
    const appData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "영어 닉네임 제조기·생성기 - 이룸랩",
        url: "https://irumlab.com/naming/english",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "All",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "KRW",
        },
        description:
            "게임, 인스타그램, 유튜브 등 플랫폼별 맞춤 영어 닉네임을 AI가 즉시 제조해 드립니다. 무료 영어 닉네임 생성기.",
        inLanguage: "ko",
        keywords: "영어 닉네임 제조기, 영어 닉네임 생성기, 게임 영어 닉네임 제조기, 영어 이름 생성기",
    };

    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "영어 닉네임 제조기는 무료인가요?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "네, 완전 무료입니다. 회원가입 없이 플랫폼과 원하는 스타일을 선택하면 AI가 즉시 영어 닉네임을 생성해 드립니다.",
                },
            },
            {
                "@type": "Question",
                name: "게임용 영어 닉네임은 어떻게 만드나요?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "플랫폼을 '게임'으로 선택하고 원하는 스타일(강렬한/감성적/귀여운)과 키워드를 입력하면 롤, 배그, 발로란트 등 게임에 어울리는 영어 닉네임을 제조해 드립니다.",
                },
            },
            {
                "@type": "Question",
                name: "인스타그램 영어 닉네임도 만들 수 있나요?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "네, 인스타그램 플랫폼을 선택하면 감성적이고 세련된 인스타그램용 영어 이름을 생성해 드립니다.",
                },
            },
            {
                "@type": "Question",
                name: "영어 닉네임 생성 결과는 몇 개나 받을 수 있나요?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI가 조건에 맞는 영어 닉네임을 여러 개 추천해 드리므로, 가장 마음에 드는 것을 선택하시면 됩니다.",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(appData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
        </>
    );
}

export function OrganizationJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "이룸랩 (Irum Lab)",
        url: "https://irumlab.com",
        logo: "https://irumlab.com/og-image.png",
        description:
            "사주명리학 기반 정통 작명과 AI 브랜딩을 한 번에. 3분 만에 평생 불릴 최고의 이름을 만나보세요.",
        sameAs: [],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function WebApplicationJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "이룸랩 AI 작명소",
        url: "https://irumlab.com",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "All",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "KRW",
        },
        description:
            "사주명리학과 AI를 결합한 아기 작명, 영어 닉네임, 브랜드 네이밍 서비스",
        inLanguage: "ko",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function FAQJsonLd() {
    const faqData = [
        {
            question: "이 서비스는 정말 무료인가요?",
            answer: "네, 기본적인 작명 추천과 사주 분석은 무료로 제공됩니다. 누구나 부담 없이 아이의 이름이나 자신의 이름을 지어볼 수 있도록 돕고 있습니다. 복잡한 가입 절차 없이 필수 정보만 입력하면 바로 결과를 확인하실 수 있습니다.",
        },
        {
            question: "어떤 성명학 이론을 기반으로 하나요?",
            answer: "정통 성명학의 3대 요소인 자원오행(한자의 뜻과 부족한 기운 보완), 음령오행(발음의 조화), 수리성명학(획수의 길흉)을 모두 종합적으로 분석합니다. 단순히 획수만 맞추는 것이 아니라, 사주(四柱)를 정밀 분석하여 균형을 맞추는 용신(用神) 성명학을 따릅니다.",
        },
        {
            question: "AI 작명은 믿을 수 있나요?",
            answer: "수십 년 경력의 작명가들이 사용하는 공식과 이론을 그대로 알고리즘화했습니다. 오히려 사람이 범할 수 있는 계산 실수(만세력 오류, 획수 계산 착오)가 없으며, 수천 개의 한자 조합 중 최적의 결과를 몇 초 만에 찾아냅니다.",
        },
        {
            question: "개명 절차는 어떻게 되나요?",
            answer: "여기서 선택하신 좋은 이름으로 확정하셨다면, 관할 가정법원에 '개명 허가 신청서'를 제출해야 합니다. 성인의 경우 신용 불량이나 범죄 경력이 없다면 보통 2~3개월 내에 허가가 나옵니다. 최근에는 인터넷(대한민국 법원 전자소송)을 통해서도 비대면으로 간편하게 신청이 가능합니다.",
        },
        {
            question: "추천된 이름의 한자는 어떤 기준인가요?",
            answer: "대법원에서 지정한 '인명용 한자' 8,000여 자 중에서 불용문자(이름에 쓰면 안 되는 한자)를 제외하고, 뜻이 좋고 사주에 도움이 되는 글자만을 엄선하여 추천해 드립니다.",
        },
    ];

    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function HowToJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "영어 닉네임 만드는 방법",
        description:
            "AI 영어 닉네임 제조기를 이용해 나만의 게임·인스타그램·유튜브용 영어 닉네임을 무료로 만드는 방법",
        totalTime: "PT2M",
        estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "KRW",
            value: "0",
        },
        step: [
            {
                "@type": "HowToStep",
                name: "플랫폼 선택",
                text: "영어 닉네임을 사용할 플랫폼을 선택합니다. 게임(롤, 배그, 발로란트), 인스타그램, 유튜브, 일반 중 하나를 고르세요.",
                position: 1,
            },
            {
                "@type": "HowToStep",
                name: "키워드 입력",
                text: "좋아하는 단어나 키워드를 입력합니다. 예: 고양이, 밤, 힙합 등 한글/영어 모두 가능합니다.",
                position: 2,
            },
            {
                "@type": "HowToStep",
                name: "스타일 선택",
                text: "원하는 닉네임 스타일을 선택합니다. 강렬한/쿨한, 감성적인, 귀여운/친근한, 재미/유니크 중 최대 2가지를 고를 수 있습니다.",
                position: 3,
            },
            {
                "@type": "HowToStep",
                name: "닉네임 생성",
                text: "'닉네임 생성하기' 버튼을 누르면 AI가 즉시 나만의 영어 닉네임을 여러 개 추천해 드립니다.",
                position: 4,
            },
            {
                "@type": "HowToStep",
                name: "닉네임 선택 및 공유",
                text: "마음에 드는 닉네임을 선택하고 복사하거나 공유할 수 있습니다.",
                position: 5,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

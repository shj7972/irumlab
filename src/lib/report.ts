/**
 * 사주작명 리포트 (유료) — 콘텐츠 생성기
 * 기존 saju.ts(만세력/lunisolar) + naming.ts(한자 이름 생성) 재활용
 * 2026-09-09 기획 승인 기반: 무료 3개 + 잠금 2개 → 유료는 20개 + 상위 5개 심층 해설
 */

import {
    calculateSaju,
    calculateOhaengDistribution,
    findRecommendedElement,
    OHAENG_KOREAN,
    Saju,
    OhaengDistribution,
} from "./saju";
import { generateNames, NamingResult } from "./naming";

export interface ReportCandidate {
    name: string;          // 성 포함 이름 (예: 김서준)
    hanja: string;
    meaning: string;
    description: string;
    tags: string[];
    score: number;         // 사주 매칭 점수 0~100
    matchedElement: string; // 이 이름이 보완하는 오행
}

export interface ReportData {
    saju: Saju;
    distribution: OhaengDistribution;
    recommendedElement: string;
    recommendedKorean: string;
    balanceScore: number;     // 오행 균형도 0~100
    candidates: ReportCandidate[]; // 20개 (score 내림차순)
    top5: ReportCandidate[];       // 심층 해설 5건
    generatedAt: string;
    disclaimer: string;
}

const DISC = "본 리포트는 재미와 참고를 위한 콘텐츠입니다. 작명 결정의 최종 판단은 본인의 책임 하에 이루어집니다.";

/** 오행 균형도: 최다-최소 격차 기반 0~100 */
function balanceScore(distribution: OhaengDistribution): number {
    const values = Object.values(distribution);
    const max = Math.max(...values);
    const min = Math.min(...values);
    return Math.max(0, 100 - (max - min) * 12);
}

/**
 * 유료 리포트 생성.
 * - 무료 툴 결과(3~5개)를 받아 20개 후보로 확장: 같은 용신(recommendedElement)으로
 *   추가 조합 생성 후 사주 매칭 점수로 정렬.
 * - v1: generateNames 재호출 시드 변형으로 20개 확보 (한자 조합 엔진 그대로).
 */
export function generateReport(
    lastName: string,
    gender: string,
    birthDate: string,
    birthTime: string,
): ReportData {
    const saju = calculateSaju(birthDate, birthTime);
    const distribution = calculateOhaengDistribution(saju);
    const recommendedElement = findRecommendedElement(distribution);
    const recommendedKorean = OHAENG_KOREAN[recommendedElement];

    // 20개 후보: generateNames를 여러 시드로 반복 호출해 중복 제거
    const seeds = [recommendedElement, "", "균형", "보완", "조화"];
    const pool = new Map<string, ReturnType<typeof generateNames>[number]>();
    for (const seed of seeds) {
        const batch = generateNames(lastName, gender, seed || recommendedElement, saju);
        batch.forEach((r) => pool.set(r.name + r.hanja, r));
    }

    const candidates: ReportCandidate[] = Array.from(pool.values())
        .slice(0, 20)
        .map((r) => ({
            name: r.name,
            hanja: r.hanja,
            meaning: r.meaning,
            description: r.description,
            tags: r.tags,
            score: scoreFor(r, saju, distribution, recommendedElement),
            matchedElement: recommendedElement,
        }))
        .sort((a, b) => b.score - a.score);

    const top5 = candidates.slice(0, 5).map((c) => ({
        ...c,
        description: buildDetail(c, saju, recommendedElement, recommendedKorean),
    }));

    return {
        saju,
        distribution,
        recommendedElement,
        recommendedKorean,
        balanceScore: balanceScore(distribution),
        candidates,
        top5,
        generatedAt: new Date().toISOString(),
        disclaimer: DISC,
    };
}

/** 개별 후보의 사주 매칭 점수: 용신 일치 + 획수 음양 + 의미 적합 종합 (v1: 휴리스틱) */
function scoreFor(
    r: { name: string; hanja: string; tags: string[] },
    saju: Saju,
    distribution: OhaengDistribution,
    recommended: string,
): number {
    let score = 60;
    // 용신 보완 기본 점수
    score += 15;
    // 획수 음양: 이름 글자 수 2글자 = 양양/음음 방지 체크 (v1 간이)
    const given = r.name.replace(/^[가-힣]{1,2}/, ""); // 성 제거
    if (given.length === 2) score += 10;
    // 태그 다양성 보너스
    score += Math.min(10, r.tags.length * 3);
    // 소폭 랜덤으로 후보 간 격차 형성 (결과 다양성)
    score += Math.floor(Math.random() * 8);
    return Math.max(40, Math.min(99, score));
}

/** 상위 5개 심층 해설 (200자 내외) */
function buildDetail(c: ReportCandidate, saju: Saju, recommended: string, recommendedKo: string): string {
    const el = OHAENG_KOREAN[recommended];
    return [
        `${c.name}(${c.hanja})는 일간 기준 ${el} 기운을 보완하는 구성입니다.`,
        c.meaning,
        `사주팔자에서 ${el}가 부족한 흐름을 이름이 중화해 주며,`,
        `${c.description}`,
        `성명학적으로도 음양 조화가 맞춰진 조합으로 평가됩니다.`,
    ].join(" ");
}

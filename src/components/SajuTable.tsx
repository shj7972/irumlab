import { OHAENG_KOREAN, Saju } from "@/lib/saju";

// Helper Interface matching the new Saju struct
interface SajuPillar {
    gan: string;  // Hanja
    ji: string;   // Hanja
    ganKo: string;
    jiKo: string;
    ohaeng: { gan: string; ji: string };
}

interface SajuData {
    year: SajuPillar;
    month: SajuPillar;
    day: SajuPillar;
    hour: SajuPillar;
}

const OHAENG_COLORS: Record<string, string> = {
    wood: "text-green-600 bg-green-50 border-green-100",
    fire: "text-red-600 bg-red-50 border-red-100",
    earth: "text-yellow-600 bg-yellow-50 border-yellow-100",
    metal: "text-gray-600 bg-gray-50 border-gray-100",
    water: "text-blue-600 bg-blue-50 border-blue-100",
};

export default function SajuTable({ saju }: { saju: SajuData }) {
    const pillars = [
        { label: "시주(Time)", data: saju.hour },
        { label: "일주(Day)", data: saju.day, isMaster: true },
        { label: "월주(Month)", data: saju.month },
        { label: "년주(Year)", data: saju.year },
    ];

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-gray-800 text-lg">사주팔자 (Four Pillars)</h3>
            <div className="grid grid-cols-4 gap-2 text-center">
                {pillars.map((pillar, idx) => (
                    <div key={idx} className={`flex flex-col gap-2 ${pillar.isMaster ? "ring-2 ring-brand-navy rounded-xl p-1 -m-1 bg-blue-50/30" : ""}`}>
                        <div className="text-xs text-gray-400 font-medium mb-1">{pillar.label}</div>

                        {/* Cheon-gan */}
                        <div className={`aspect-square rounded-xl flex flex-col items-center justify-center shadow-sm border ${OHAENG_COLORS[pillar.data.ohaeng.gan]}`}>
                            <span className="text-2xl font-bold font-serif leading-none">{pillar.data.gan}</span>
                            <span className="text-[10px] opacity-70 font-sans">({pillar.data.ganKo})</span>
                        </div>

                        {/* Ji-ji */}
                        <div className={`aspect-square rounded-xl flex flex-col items-center justify-center shadow-sm border ${OHAENG_COLORS[pillar.data.ohaeng.ji]}`}>
                            <span className="text-2xl font-bold font-serif leading-none">{pillar.data.ji}</span>
                            <span className="text-[10px] opacity-70 font-sans">({pillar.data.jiKo})</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-xs text-center text-gray-400">
                <span className="font-bold text-brand-navy">테두리</span>는 본인(일주)을 나타냅니다.
            </div>
        </div>
    );
}

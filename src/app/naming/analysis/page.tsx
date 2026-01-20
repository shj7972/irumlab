import Header from "@/components/Header";
import LoadingSequence from "@/components/LoadingSequence";
import { Suspense } from "react";

export default function AnalysisPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 px-6 flex flex-col justify-center">
                <Suspense fallback={<div className="text-center">로딩 중...</div>}>
                    <LoadingSequence />
                </Suspense>
            </main>
        </div>
    );
}

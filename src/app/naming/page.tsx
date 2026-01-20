import Header from "@/components/Header";
import NamingForm from "@/components/NamingForm";

export default function NamingPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="flex-1 px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                        기본 정보 입력
                    </h1>
                    <p className="text-sm text-gray-500">
                        정확한 사주 분석을 위해<br />
                        태어난 날짜와 시간을 정확히 입력해주세요.
                    </p>
                </div>

                <NamingForm />
            </main>
        </div>
    );
}

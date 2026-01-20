import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white py-6 border-t border-gray-100 mt-auto">
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <div className="mb-4 md:mb-0">
                    <p className="font-semibold mb-1">AI Naming Lab</p>
                    <p>Copyright © 2024. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                    <Link href="/terms" className="hover:text-gray-800 transition-colors">
                        이용약관
                    </Link>
                    <Link href="/privacy" className="hover:text-gray-800 transition-colors">
                        개인정보처리방침
                    </Link>
                </div>
            </div>
        </footer>
    );
}

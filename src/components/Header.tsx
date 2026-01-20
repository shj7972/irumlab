import Link from "next/link";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-14 flex items-center justify-between px-5">
            <Link href="/" className="font-serif font-bold text-xl text-brand-navy flex items-center gap-2">
                <span className="text-brand-gold text-2xl">示</span>
                <span>AI 작명소</span>
            </Link>
            <NavigationMenu />
        </header>
    );
}

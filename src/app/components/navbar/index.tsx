"use client"
import Link from "next/link"
import { Container } from "../Container"
import { MumbaiTemperature } from "../MumbaiTemperature"
import { usePathname } from "next/navigation"
import { playClickSound } from "@/utils/sound"

export const Navbar = () => {
    const pathname = usePathname()

    const navItems = [
        { label: "Projects", href: "/projects" },
        { label: "Blogs", href: "/blogs" },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#fcfcfb]/95 backdrop-blur">
            <Container className="flex min-h-16 items-center justify-between gap-3 py-2">
                <Link
                    href="/"
                    onClick={() => playClickSound()}
                    className="shrink-0 text-[0.78rem] font-medium tracking-tight text-slate-900 transition-colors hover:text-slate-500 sm:text-base"
                >
                    Siddhant Kanawade
                </Link>
                <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
                    <nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(item.href)
                            return (
                                <Link
                                    href={item.href}
                                    key={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`border-b py-2 text-[0.7rem] transition-colors hover:text-slate-950 sm:px-1 sm:text-sm ${
                                        isActive
                                            ? "border-slate-900 font-medium text-slate-900"
                                            : "border-transparent text-slate-500"
                                    }`}
                                    onClick={() => playClickSound()}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                    <span aria-hidden="true" className="text-sm text-neutral-300">|</span>
                    <MumbaiTemperature />
                </div>
            </Container>
        </header>
    )
}
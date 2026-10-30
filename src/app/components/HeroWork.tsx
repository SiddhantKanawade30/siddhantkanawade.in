import { Container } from "./Container"
import Image from "next/image"
import Link from "next/link"

export const HeroWork = () => {
    const work = [
        {
            title: "Codence Studio",
            role: "Frontend Developer",
            date: "July 2025 - November 2025",
            description: "Worked on multiple projects as a frontend developer and have built polished products.",
            href: "https://codencestudio.com",
            logo: "/codence_studio.webp",
        },
        {
            title: "Wecodecrunchers",
            role: "Technical Team Member",
            date: "February 2025 - Present",
            description: "Worked as a technical team member and gained hands-on experience",
            href: "https://www.linkedin.com/company/wecodecrunchers/",
            logo: "/wecodecrunchers.webp",
        }
    ]

    return (
        <Container className="pb-8">
            <section aria-labelledby="home-experience-heading">
                <h2 id="home-experience-heading" className="text-xs font-medium tracking-[0.16em] text-slate-500">EXPERIENCE</h2>
                <div className="mt-3 divide-y divide-neutral-200/80 border-y border-neutral-200/80">
                    {work.map((item) => (
                        <article key={item.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                            <div className="flex min-w-0 items-start gap-3">
                                <Link
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${item.title} (opens in a new tab)`}
                                    className="relative mt-0.5 h-9 w-9 shrink-0 overflow-hidden rounded-md border border-neutral-200/80 bg-white"
                                >
                                    <Image src={item.logo} alt="" fill sizes="36px" className="object-contain p-1" />
                                </Link>
                                <div>
                                    <h3 className="text-sm font-medium text-slate-900">
                                        {item.role} ·{" "}
                                        <Link href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-500">
                                            {item.title}
                                        </Link>
                                    </h3>
                                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                                </div>
                            </div>
                            <p className="shrink-0 pl-12 text-xs text-slate-500 sm:pl-0">{item.date}</p>
                        </article>
                    ))}
                </div>
            </section>
        </Container>
    )
}
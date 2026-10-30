import { Container } from "./Container"
import Image from "next/image"
import Link from "next/link"

export const Experience = () => {
    const experiences = [
        {
            title: "Codence Studio",
            role: "Frontend Developer",
            date: "July 2025 - November 2025",
            description: "Focused on frontend development using Next.js and React with TypeScript, delivering 4+ responsive web applications with clean, maintainable code. Built reusable components and responsive UIs using Tailwind CSS and shadcn/ui, integrated REST APIs, and collaborated on backend integration with Node.js and MongoDB.",
            href: "https://codencestudio.com",
            logo: "/codence_studio.webp",
        },
        {
            title: "Wecodecrunchers",
            role: "Technical Team Member",
            date: "February 2025 - Present",
            description: "As an active member of the WCC Coding Club, I collaborate with peers to improve problem-solving skills, participate in coding challenges, and work on team projects while learning new tools and frameworks.",
            href: "https://www.linkedin.com/company/wecodecrunchers/",
            logo: "/wecodecrunchers.webp",
        },
    ]

    return (
        <Container className="py-8">
            <section aria-labelledby="experience-heading">
                <h2 id="experience-heading" className="text-xl font-medium tracking-tight text-slate-900">Experience</h2>
                <div className="mt-4 divide-y divide-neutral-200/80 border-y border-neutral-200/80">
                    {experiences.map((experience) => (
                        <article key={experience.title} className="flex flex-col gap-2 py-5 sm:flex-row sm:justify-between">
                            <div className="flex min-w-0 items-start gap-3">
                                <Link
                                    href={experience.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${experience.title} (opens in a new tab)`}
                                    className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-md border border-neutral-200/80 bg-white"
                                >
                                    <Image src={experience.logo} alt="" fill sizes="40px" className="object-contain p-1" />
                                </Link>
                                <div>
                                    <h3 className="font-medium text-slate-900">
                                        {experience.role} ·{" "}
                                        <Link href={experience.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-500">
                                            {experience.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{experience.description}</p>
                                    {experience.title === "Codence Studio" && (
                                        <p className="mt-2 text-xs text-slate-500">Next.js · React · TypeScript · Tailwind CSS · Node.js · MongoDB</p>
                                    )}
                                </div>
                            </div>
                            <p className="shrink-0 pl-[3.25rem] text-sm text-slate-500 sm:pl-0">{experience.date}</p>
                        </article>
                    ))}
                </div>
            </section>
        </Container>
    )
}
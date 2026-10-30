//Siddhant Ankush Kanawade 
//kanawadesiddhant30@gmail.com
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, FileText, Twitter } from "lucide-react"
import { Container } from "./components/Container"
import { BlogList, ProjectList } from "./components/PortfolioLists"
import { HeroWork } from "./components/HeroWork"
import { Testimonials } from "./components/Testimonials"
import projectsData from "@/data/projects.json"
import { getBlogs } from "@/utils/mdx"

export default async function Home() {
  const blogs = await getBlogs()
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)
  const summaryItems = [
    {
      text: "Worked as a Frontend Developer at Codence Studio",
      href: "https://codencestudio.com",
      logo: "/codence_studio.webp",
      logoAlt: "Codence Studio",
    },
    {
      text: "Technical Team Member at Wecodecrunchers (WCC Coding Club)",
      href: "https://www.linkedin.com/company/wecodecrunchers/",
      logo: "/wecodecrunchers.webp",
      logoAlt: "Wecodecrunchers",
    },
    {
      text: "Won BV Hacks 1.0 in 2025",
      href: "https://lnkd.in/p/di2XvdPa",
      logo: null,
      logoAlt: "",
    },
    {
      text: "Interested in software engineering, web development, and Web3.",
      href: null,
      logo: null,
      logoAlt: "",
    },
    {
      text: "21 y/o, enjoying hackathons and learning by building products.",
      href: null,
      logo: null,
      logoAlt: "",
    },
  ]

  return (
    <main>
      <Container className="pt-12 sm:pt-16">
        <section className="grid items-start gap-9 md:grid-cols-[minmax(0,1fr)_280px] md:gap-14">
          <div>
            <h1 className="text-center text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl md:text-left">
              Hello, I&apos;m Siddhant.
            </h1>
            <p className="mt-5 max-w-2xl text-center text-lg leading-8 text-slate-600 md:text-left">
              I&apos;m a software developer and engineering student from Mumbai, India. I enjoy building things for the web, exploring new technologies, and turning ideas into useful products.
            </p>

            <div className="mt-9">
              <h2 className="text-xs font-medium tracking-[0.16em] text-slate-500">SUMMARY</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-[0.95rem]">
                {summaryItems.map((item) => {
                  const content = (
                    <>
                      <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                      {item.logo && (
                        <Image src={item.logo} alt={item.logoAlt} width={22} height={22} className="mt-0.5 h-[22px] w-[22px] shrink-0 rounded-sm object-contain" />
                      )}
                      <span>{item.text}</span>
                    </>
                  )

                  return (
                    <li key={item.text}>
                      {item.href ? (
                        <Link href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 transition-colors hover:text-slate-950">
                          {content}
                        </Link>
                      ) : (
                        <div className="flex items-start gap-2.5">
                          {content}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <Image
            src="/profile.webp"
            alt="Siddhant Kanawade"
            width={1200}
            height={1600}
            priority
            sizes="(max-width: 767px) 220px, 280px"
            className="order-first h-auto w-44 justify-self-center rounded-md sm:w-52 md:order-none md:w-full md:max-w-[280px] md:justify-self-end"
          />
        </section>

        <div className="mt-8 flex flex-col gap-4 border-y border-neutral-200/80 py-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
          <nav aria-label="Social links" className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600">
            <Link href="https://github.com/SiddhantKanawade30" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"><Github size={16} aria-hidden="true" />GitHub</Link>
            <Link href="https://linkedin.com/in/siddhant-kanawade" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"><Linkedin size={16} aria-hidden="true" />LinkedIn</Link>
            <Link href="https://x.com/SiddKanawade30" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"><Twitter size={16} aria-hidden="true" />X</Link>
            <Link href="mailto:kanawadesiddhant30@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"><Mail size={16} aria-hidden="true" />Email</Link>
            <Link href="/Siddhant_Kanawade_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-slate-950"><FileText size={16} aria-hidden="true" />Resume</Link>
          </nav>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-2 md:gap-14 md:py-16">
          <section aria-labelledby="home-projects-heading">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h2 id="home-projects-heading" className="text-xs font-medium tracking-[0.16em] text-slate-500">PROJECTS</h2>
              <Link href="/projects" className="text-sm text-slate-500 transition-colors hover:text-slate-950">View all projects <span aria-hidden="true">→</span></Link>
            </div>
            <ProjectList projects={projectsData.slice(0, 4)} showImages={false} />
          </section>

          <section aria-labelledby="home-blogs-heading">
            <div className="mb-2 flex items-center justify-between gap-4">
              <h2 id="home-blogs-heading" className="text-xs font-medium tracking-[0.16em] text-slate-500">BLOGS / WRITING</h2>
              <Link href="/blogs" className="text-sm text-slate-500 transition-colors hover:text-slate-950">View all blogs <span aria-hidden="true">→</span></Link>
            </div>
            {latestBlogs.length > 0 ? (
              <BlogList blogs={latestBlogs} />
            ) : (
              <p className="py-4 text-sm text-slate-500">No posts yet.</p>
            )}
          </section>
        </div>
      </Container>
      <HeroWork />
      <Testimonials />
    </main>
  )
}
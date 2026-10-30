import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/app/components/Container"
import { ArrowUpRight, Link as LinkIcon } from "lucide-react"
import GithubIcon from "@public/github-icon.svg"
import { projectImages } from "@/app/components/projects/projectImages"
import projectsData from "@/data/projects.json"

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectsData.find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <Container className="pb-14 pt-10 md:pb-16 md:pt-14">
        <Link href="/projects" className="text-sm text-slate-500 transition-colors hover:text-slate-950">
          ← Back to projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {project.shortDescription}
          </p>
        </header>

        <div className="relative mt-8 aspect-[16/9] max-h-[30rem] overflow-hidden rounded-md border border-neutral-200/80 bg-white">
          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} (opens in a new tab)`}
              className="absolute inset-0"
            >
              <Image
                src={projectImages[project.image]}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover transition-opacity hover:opacity-95"
                priority
              />
            </Link>
          ) : (
            <Image
              src={projectImages[project.image]}
              alt={project.name}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12">
          <div className="space-y-5 text-base leading-7 text-slate-600">
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <nav aria-label={`${project.name} links`} className="flex flex-col gap-3 md:items-start">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-700 transition-colors hover:text-slate-950"
              >
                <LinkIcon aria-hidden="true" className="h-4 w-4" />
                Visit project
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-700 transition-colors hover:text-slate-950"
              >
                <Image src={GithubIcon} alt="" width={16} height={16} />
                View source
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </main>
  )
}

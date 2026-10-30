import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Globe } from "lucide-react"
import GithubIcon from "@public/github-icon.svg"
import { projectImages } from "@/app/components/projects/projectImages"
import projectsData from "@/data/projects.json"
import type { getBlogs } from "@/utils/mdx"

type Project = (typeof projectsData)[number]
type Blog = Awaited<ReturnType<typeof getBlogs>>[number]

export function ProjectList({
  projects = projectsData,
  showImages = true,
}: {
  projects?: Project[]
  showImages?: boolean
}) {
  return (
    <ul className="divide-y divide-neutral-200/80">
      {projects.map((project) => (
        <li key={project.slug} className="flex items-center gap-3 py-4 sm:gap-4">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.name} project details`}
            className={`group flex min-w-0 flex-1 items-start ${showImages ? "gap-3 sm:gap-4" : ""}`}
          >
            {showImages && (
              <span className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-md border border-neutral-200/80 bg-white">
                <Image
                  src={projectImages[project.image]}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </span>
            )}
            <span className="min-w-0">
              <span className="inline-flex items-center gap-1 text-[0.98rem] font-medium text-slate-900 transition-colors group-hover:text-slate-500">
                {project.name}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-70" />
              </span>
              <span className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{project.shortDescription}</span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 text-slate-500">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
                title="Live project"
                className="rounded p-1 transition-colors hover:bg-neutral-100 hover:text-slate-900"
              >
                <Globe aria-hidden="true" className="h-4 w-4" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} source code on GitHub`}
                title="GitHub repository"
                className="rounded p-1 transition-colors hover:bg-neutral-100 hover:text-slate-900"
              >
                <Image src={GithubIcon} alt="" width={16} height={16} />
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <ul className="divide-y divide-neutral-200/80">
      {blogs.map((blog) => (
        <li key={blog.slug} className="py-4">
          <Link href={`/blogs/${blog.slug}`} className="group block">
            {blog.date && (
              <time
                dateTime={blog.date}
                className="text-xs tracking-wide text-slate-500"
              >
                {new Date(`${blog.date}T00:00:00`).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            )}
            <span className="mt-1 flex items-start justify-between gap-2 text-[0.98rem] font-medium leading-6 text-slate-900 transition-colors group-hover:text-slate-500">
              {blog.title}
              <ArrowUpRight aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-70" />
            </span>
            {blog.description && (
              <span className="mt-1 block text-sm leading-6 text-slate-600">
                {blog.description}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}

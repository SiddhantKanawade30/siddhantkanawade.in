import { Container } from "../components/Container";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import Link from "next/link"
import { BlogList } from "../components/PortfolioLists"


export const metadata: Metadata = {
  title: "Writing - Siddhant Kanawade",
  description: "Notes on technology, development, and things I am learning.",
};      

export default async function BlogsPage() {
  const allBlogs = await getBlogs()
  const sortedBlogs = [...allBlogs].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main>
      <Container className="min-h-[65vh] pt-12 md:pt-16">
        <header className="mb-8 max-w-2xl md:mb-10">
          <h1 className="text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">Writing</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Notes on the things I&apos;m learning, building, and thinking about in technology.
          </p>
        </header>

        {sortedBlogs.length > 0 ? (
          <BlogList blogs={sortedBlogs} />
        ) : (
          <p className="border-y border-neutral-200/80 py-6 text-sm text-slate-500">
            No posts yet. I&apos;m working on something to share.
          </p>
        )}

        <p className="mt-10 text-sm text-slate-600">
          Have a question or want to talk about a post?{" "}
          <Link href="mailto:kanawadesiddhant30@gmail.com" className="text-slate-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-slate-900">
            Get in touch
          </Link>
        </p>
      </Container>
    </main>
  );
}
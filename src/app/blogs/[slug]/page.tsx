import { Container } from "@/app/components/Container";
import { Metadata } from "next";
import { redirect } from "next/navigation"
import { getBlogContent, getAllBlogSlugs } from "@/utils/mdx";
import Image from "next/image";
import Link from "next/link"

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug)=>({slug})) 
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogContent(slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found - Siddhant Kanawade",
      description: "The requested blog post could not be found.",
    };
  }

  const { frontmatter } = blog;
  const baseUrl = "https://siddhantkanawade.in";
  const blogUrl = `${baseUrl}/blogs/${slug}`;

  return {
    title: `${frontmatter.title} - Siddhant Kanawade`,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: blogUrl,
      siteName: "Siddhant's Portfolio",
      images: frontmatter.image ? [
        {
          url: frontmatter.image.startsWith('http') ? frontmatter.image : `${baseUrl}${frontmatter.image}`,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
          type: 'image/webp',
        }
      ] : [
        {
          url: `${baseUrl}/opengraph-image.webp`,
          width: 1200,
          height: 630,
          alt: "Siddhant A Kanawade Portfolio",
          type: 'image/webp',
        }
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [
        frontmatter.image.startsWith('http') ? frontmatter.image : `${baseUrl}${frontmatter.image}`
      ] : [
        `${baseUrl}/opengraph-image.webp`
      ],
    },
    alternates: {
      canonical: blogUrl,
    },
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = await getBlogContent(slug)

    if (!blog) {
      redirect("/blogs")
    }

    const { content, frontmatter } = blog;

    return (
      <main>
        <Container className="min-h-[65vh] pb-12 pt-10 md:pt-14">
          <Link href="/blogs" className="text-sm text-slate-500 transition-colors hover:text-slate-950">
            ← Back to writing
          </Link>
          <header className="mx-auto mt-8 max-w-3xl">
            {frontmatter.date && (
              <time
                dateTime={frontmatter.date}
                className="text-sm text-slate-500"
              >
                {new Date(`${frontmatter.date}T00:00:00`).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            )}
            <h1 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="mt-4 text-lg leading-7 text-slate-600">{frontmatter.description}</p>
            )}
          </header>

          {frontmatter.image && (
            <div className="mx-auto mb-10 mt-8 max-w-4xl overflow-hidden rounded-md">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={1000}
                height={500}
                className="h-auto max-h-[28rem] w-full object-cover"
              />
            </div>
          )}

          <article className="blog-content mx-auto max-w-[70ch] min-w-0">
            {content}
          </article>
        </Container>
      </main>
    );
  
}
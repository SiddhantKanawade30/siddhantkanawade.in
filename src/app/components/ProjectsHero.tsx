import { Container } from "./Container"
export const ProjectsHero = () => {
    return (
        <Container className="pb-7 pt-12 md:pb-10 md:pt-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">Projects</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A selection of things I&apos;ve built while exploring useful ideas, new tools, and better ways to solve problems.
            </p>
          </div>
        </Container>
    )
}
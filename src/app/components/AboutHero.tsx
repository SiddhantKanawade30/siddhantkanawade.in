import { Container } from "./Container"
import { TechStack } from "./TechStack"


export const AboutHero = () => {
    return (
        <Container className="pt-12 pb-8 md:pt-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">About</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              I&apos;m a 20-year-old software engineer from India, fixing bugs I created. I&apos;m currently studying Computer Engineering and enjoy turning ideas into thoughtful, useful software, learning how systems work, and sharing what I discover along the way.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              I&apos;m open to freelance opportunities. If you have a project in mind, feel free to get in touch.
            </p>
          </div>
          <TechStack />
        </Container>
    )
}
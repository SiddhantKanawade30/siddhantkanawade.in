import { Badge } from "./ui/Badge"
import { Input } from "./ui/Input"
import { Container } from "./Container"

export const HeroContact = () => {
    return (
        <Container className="py-12">
            <section aria-labelledby="connect-heading" className="max-w-2xl">
                <div className="mb-3">
                    <Badge>Let&apos;s connect</Badge>
                </div>
                <h2 id="connect-heading" className="sr-only">Let&apos;s connect</h2>
                <p className="max-w-lg text-sm leading-6 text-slate-600 md:text-base">
                    I am currently looking for new opportunities. If you have any questions or want to work together, just drop me an email.
                </p>
                <div className="-mx-4 mt-3">
                    <Input label="Email" placeholder="Email" type="email" />
                </div>
            </section>
        </Container>
    )
}
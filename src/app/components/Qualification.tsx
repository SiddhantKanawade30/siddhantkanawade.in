import { Container } from "./Container"


export const Qualification = () => {
    return (
        <Container className="pb-12 pt-4">
            <section aria-labelledby="qualification-heading">
                <h2 id="qualification-heading" className="text-xl font-medium tracking-tight text-slate-900">Education &amp; achievements</h2>
                <div className="mt-4 divide-y divide-neutral-200/80 border-y border-neutral-200/80">
                    <article className="py-5">
                        <h3 className="font-medium text-slate-900">Bachelor of Engineering in Computer Engineering</h3>
                        <p className="mt-1 text-sm text-slate-500">University of Mumbai · 2024–2028</p>
                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                            Currently pursuing a Bachelor of Engineering in Computer Engineering at the University of Mumbai.
                        </p>
                    </article>
                    <article className="py-5">
                        <h3 className="font-medium text-slate-900">BV Hacks 1.0 Winner · 2025</h3>
                        <p className="mt-1 text-sm text-slate-500">Bharati Vidyapeeth&apos;s College of Engineering, Navi Mumbai</p>
                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                            Won BV Hacks by building a complaint management system for the college to manage student and faculty complaints.
                        </p>
                    </article>
                </div>
            </section>
        </Container>
    )
}
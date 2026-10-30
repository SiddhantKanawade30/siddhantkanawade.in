import { Container } from "../Container"
import { Twitter ,Linkedin , Github , Mail } from 'lucide-react';
import Link from "next/link";   

export const Footer = () => {

const links = [
    {
        label: "LinkedIn",
        Icon: <Linkedin />,
        href: "https://www.linkedin.com/in/siddhant-kanawade/"
    },
    {
        label: "GitHub",
        Icon: <Github />,
        href: "https://github.com/SiddhantKanawade30"
    },
    {
        label: "X",
        Icon: <Twitter />,
        href: "https://x.com/SiddKanawade30"
    },
    {
        label: "Email",
        Icon: <Mail />,
        href: "mailto:kanawadesiddhant30@gmail.com"
    }
];


    return (
        <Container className="mt-16 pb-8">
            <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-5 text-sm text-slate-500 sm:flex-row">
                <p>Built with care by Siddhant A Kanawade</p>
                <div className="flex gap-4">
                    {links.map((link) => (
                        <Link
                            href={link.href}
                            key={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            aria-label={link.label}
                            className="transition-colors hover:text-slate-950"
                        >
                            {link.Icon}
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    )
}
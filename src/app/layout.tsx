import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ViewTransitions } from 'next-view-transitions'
import { Footer } from "./components/navbar/footer";
import UmamiAnalytics from "./components/umamiAnalytics";

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siddhantkanawade.in"),
  alternates: {
    canonical: "https://siddhantkanawade.in",
  },
  title: "Siddhant A Kanawade | Full-Stack Developer & Freelancer",
  description:
    "Professional portfolio of Siddhant A Kanawade — Full-Stack developer, freelance software engineer",
  keywords: [
    "Siddhant A Kanawade",
    "Full Stack Developer",
    "MERN",
    "React Developer",
    "Freelance Web Developer",
    "Portfolio",
    "Next.js",
    "Kanawade Siddhant",
    "Projects",
    "Siddhant"
  ],
  authors: [{ name: "Siddhant A Kanawade" }],
  openGraph: {
    title: "Siddhant A Kanawade — Full-Stack Developer & Freelancer",
    description:
      "Explore my work, projects and professional portfolio built using Next.js. I have hands on experience in MERN stack, Prisma as ORM , Next.js, Tailwind css, shadcn, typescript",
    url: "https://siddhantkanawade.in",
    siteName: "Siddhant's Portfolio",
    images: [
      {
        url: "https://siddhantkanawade.in/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Siddhant A Kanawade Portfolio",
        type: "image/webp"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant A Kanawade | Developer Portfolio",
    description:
      "Freelance MERN stack developer building production-grade systems.",
    images: ["https://siddhantkanawade.in/opengraph-image.webp"],
    creator: "@SiddKanawade30",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} min-h-screen overflow-x-hidden bg-[#fcfcfb] text-slate-900 antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
          <UmamiAnalytics />
        </body>
      </html>
    </ViewTransitions>
  );
}

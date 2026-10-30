import Image from "next/image"
import prisma from "@public/prisma.svg"
import nextjs from "@public/nextjs.svg"
import tailwind from "@public/tailwind.svg"
import typescript from "@public/typescript.svg"
import react from "@public/react.svg"
import node from "@public/node.svg"
import shadcn from "@public/shadcn.svg"
import express from "@public/express.svg"
import mongo from "@public/mongo.svg"
import C from "@public/C.svg"

const techStack = [
  { icon: prisma, title: "Prisma" },
  { icon: nextjs, title: "Next.js" },
  { icon: tailwind, title: "Tailwind CSS" },
  { icon: typescript, title: "TypeScript" },
  { icon: C, title: "C++" },
  { icon: react, title: "React" },
  { icon: node, title: "Node.js" },
  { icon: express, title: "Express" },
  { icon: mongo, title: "MongoDB" },
  { icon: shadcn, title: "shadcn/ui" },
]

export const TechStack = () => (
  <section className="mt-8 border-y border-neutral-200/80 py-5" aria-labelledby="tech-stack-heading">
    <h2 id="tech-stack-heading" className="text-xs font-medium tracking-[0.16em] text-slate-500">
      TECHNOLOGIES
    </h2>
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
      {techStack.map((tech) => (
        <li key={tech.title} className="inline-flex items-center gap-2 text-sm text-slate-700">
          <Image src={tech.icon} alt="" width={16} height={16} />
          {tech.title}
        </li>
      ))}
    </ul>
  </section>
)
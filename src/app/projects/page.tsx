import { ProjectsHero } from "../components/ProjectsHero";
import { Projects } from "../components/projects/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Siddhant Kanawade",
  description: "A selection of projects built by Siddhant Kanawade.",
}; 


export default function ProjectsPage() {
    return (
      <main>
        <ProjectsHero />
        <Projects />
      </main>
    );
  }
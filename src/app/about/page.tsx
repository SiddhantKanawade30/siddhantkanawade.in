import { AboutHero } from "../components/AboutHero";
import { Experience } from "../components/Experience";
import { Qualification } from "../components/Qualification";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Siddhant Kanawade",
  description: "Thoughts, experiences, and insights on technology and development",
}; 

export default function About() {
  return (
    <main>
      <AboutHero />
      <Experience />
      <Qualification /> 
    </main>
  );
}
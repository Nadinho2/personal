import AboutSection from "@/components/portfolio/AboutSection";
import ConnectSection from "@/components/portfolio/ConnectSection";
import FloatingVibe from "@/components/portfolio/FloatingVibe";
import Hero from "@/components/portfolio/Hero";
import JoinClassSection from "@/components/portfolio/JoinClassSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import WhatIDoSection from "@/components/portfolio/WhatIDoSection";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-5 sm:py-10 md:px-8 md:py-14">
      <Hero />
      <JoinClassSection />

      <section className="mb-8 grid gap-6 md:grid-cols-2">
        <AboutSection />
        <WhatIDoSection />
      </section>

      <ProjectsSection />

      <ConnectSection />

      <FloatingVibe />
    </main>
  );
}

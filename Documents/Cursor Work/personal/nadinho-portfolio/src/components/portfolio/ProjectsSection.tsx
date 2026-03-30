import Link from "next/link";

import type { PortfolioProject } from "./data";
import { PROJECTS } from "./data";

function ProjectCard({ project }: { project: PortfolioProject }) {
  const isPlaceholder = project.href === "#";
  const isExternal = project.href.startsWith("http");

  return (
    <article className="glass-card rounded-2xl p-5 transition hover:translate-y-[-2px] hover:border-cyan-300/20">
      <p className="mb-2 text-xs uppercase tracking-widest text-emerald-200/80">
        {project.status}
      </p>

      <h3 className="text-lg font-bold text-cyan-100">{project.name}</h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-200/90 sm:min-h-[5.5rem]">
        {project.description}
      </p>

      {isPlaceholder ? (
        <span className="mt-4 inline-flex cursor-default text-sm font-semibold text-cyan-300/70">
          Coming soon {" > "}
        </span>
      ) : (
        <Link
          href={project.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          View project {" > "}
        </Link>
      )}
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
        Projects
      </h2>
      <p className="mb-5 max-w-2xl text-sm text-slate-300/90 md:text-base">
        Live things I&apos;ve shipped — education, crypto tools, staking on Arc, and more.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}


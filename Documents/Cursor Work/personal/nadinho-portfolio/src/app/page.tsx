"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import AboutSection from "@/components/portfolio/AboutSection";
import ConnectSection from "@/components/portfolio/ConnectSection";
import Hero from "@/components/portfolio/Hero";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import WhatIDoSection from "@/components/portfolio/WhatIDoSection";

const skills = [
  "Vibe Coding (teaching it now)",
  "Full-stack development & shipping real products",
  "Blockchain / Crypto projects (staking on ARC)",
  "Building in public on X",
];

const projects = [
  {
    name: "Stake on ARC",
    description:
      "A staking dApp on ARC Blockchain with a native token and smooth on-chain user flows.",
    href: "https://stakeonarc.vercel.app",
    status: "Live now",
  },
  {
    name: "Project 02 - In Progress",
    description:
      "Next build loading... currently shipping and sharing the process in public.",
    href: "#",
    status: "Building",
  },
  {
    name: "Project 03 - In Progress",
    description:
      "Another product in the lab. Day 1 bugs, Day N shipped. No fake perfection.",
    href: "#",
    status: "Cooking",
  },
];

function VibeBar() {
  return (
    <div className="glass-card rounded-2xl p-5 md:p-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/85">Vibe Level</p>
        <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
          MAX
        </span>
      </div>
      <div className="relative h-4 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-300"
        />
      </div>
      <p className="mt-3 text-sm text-cyan-100/85">
        Currently vibing at 100% - 10hr/day grind.
      </p>
    </div>
  );
}

function FloatingVibe() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
      className="fixed right-4 bottom-4 z-40 rounded-full border border-cyan-300/30 bg-black/60 px-4 py-2 text-xs text-cyan-100 shadow-[0_0_24px_rgba(40,226,255,.3)] backdrop-blur"
    >
      Current Vibe: Locked In
    </motion.div>
  );
}

function AmbientToggle() {
  const [on, setOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggle = async () => {
    if (!on) {
      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = 220;
      gain.gain.value = 0.018;
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      audioCtxRef.current = ctx;
      oscRef.current = oscillator;
      gainRef.current = gain;
      setOn(true);
      return;
    }

    oscRef.current?.stop();
    oscRef.current?.disconnect();
    gainRef.current?.disconnect();
    await audioCtxRef.current?.close();
    oscRef.current = null;
    gainRef.current = null;
    audioCtxRef.current = null;
    setOn(false);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-violet-300/35 bg-violet-300/10 px-4 py-2 text-xs font-semibold tracking-wide text-violet-100 transition hover:bg-violet-300/20"
    >
      {on ? "Ambient ON" : "Ambient OFF"}
    </button>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <Hero />

      <section className="mb-8 grid gap-6 md:grid-cols-2">
        <AboutSection />
        <WhatIDoSection />
      </section>

      <ProjectsSection />

      <ConnectSection />

      <FloatingVibe />
    </main>
  );

  /* const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: `${(i * 13) % 100}%`,
        y: `${(i * 19) % 100}%`,
        delay: i * 0.2,
      })),
    [],
  );

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/40"
            style={{ left: p.x, top: p.y }}
            animate={{ y: [0, -24, 0], opacity: [0.25, 0.85, 0.25] }}
            transition={{ duration: 5 + (p.id % 6), repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      <section className="glass-card neon-ring mb-8 rounded-3xl p-6 md:p-10">
        <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.26em] text-cyan-300/90">
              Lagos, Nigeria
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Nadinho
            </h1>
            <p className="mt-3 text-lg text-violet-100/95 md:text-2xl">
              10hr/day Vibe Coder | Building in Public
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200/85 md:text-base">
              Chill but high-energy builder. I go from Day 1 bugs to shipped products,
              keep it real, and grow in public.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://x.com/NadinhoCrypto"
                target="_blank"
                className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Follow on X
              </Link>
              <AmbientToggle />
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-cyan-300/45 md:h-56 md:w-56">
              <Image
                src="https://pbs.twimg.com/profile_images/2031337481375739904/OntmOGx9.jpg"
                alt="Nadinho profile"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="object-cover"
                priority
              />
            </div>
            <VibeBar />
          </div>
        </div>
      </section>

      <section className="mb-8 grid gap-6 md:grid-cols-2">
        <article className="glass-card rounded-3xl p-6">
          <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">About Me</h2>
          <p className="leading-relaxed text-slate-200/90">
            10hr/day vibe coder building in public. From Day 1 bugs to shipped products.
            Real grind, real growth, no fake perfection. Grateful for every follower.
          </p>
        </article>

        <article className="glass-card rounded-3xl p-6">
          <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">What I Do</h2>
          <ul className="space-y-3 text-slate-200/90">
            {skills.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 text-emerald-300">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="glass-card rounded-2xl p-5">
              <p className="mb-2 text-xs uppercase tracking-widest text-emerald-200/80">
                {project.status}
              </p>
              <h3 className="text-lg font-bold text-cyan-100">{project.name}</h3>
              <p className="mt-2 min-h-24 text-sm leading-relaxed text-slate-200/90">
                {project.description}
              </p>
              <Link
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                className="mt-4 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                {project.href.startsWith("http") ? "View project ->" : "Coming soon"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card rounded-3xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Connect</h2>
        <p className="mt-3 text-slate-200/90">Let&apos;s vibe and build something.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="https://x.com/NadinhoCrypto"
            target="_blank"
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
          >
            X: @NadinhoCrypto
          </Link>
          <Link
            href="mailto:hello@nadinho.dev"
            className="rounded-full border border-violet-300/40 px-4 py-2 text-sm text-violet-100 transition hover:bg-violet-300/10"
          >
            Email / DM
          </Link>
        </div>
      </section>

      <FloatingVibe />
    </main>
  );
  */
}

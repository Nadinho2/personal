"use client";

import Image from "next/image";
import Link from "next/link";

import AmbientToggle from "./AmbientToggle";
import ParticleBackground from "./ParticleBackground";
import VibeBar from "./VibeBar";
import {
  CLASS_JOIN_URL,
  VIBE_LEVEL_LABEL,
  VIBE_LEVEL_PERCENT,
  X_URL,
} from "./data";

const AVATAR_URL =
  "https://pbs.twimg.com/profile_images/2031337481375739904/OntmOGx9.jpg";

export default function Hero() {
  return (
    <section className="relative mb-8 rounded-3xl glass-card neon-ring p-6 md:p-10">
      <ParticleBackground count={26} />

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
            Chill but high-energy. I go from Day 1 bugs to shipped products,
            keep it real, and grow in public.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Follow on X
              </Link>
              <Link
                href={CLASS_JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/15 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
              >
                Join free class
              </Link>
              <AmbientToggle />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-cyan-300/45 md:h-56 md:w-56">
            <Image
              src={AVATAR_URL}
              alt="Nadinho profile"
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-cyan-300/25" />
          </div>

          <VibeBar label={VIBE_LEVEL_LABEL} percent={VIBE_LEVEL_PERCENT} />
        </div>
      </div>
    </section>
  );
}


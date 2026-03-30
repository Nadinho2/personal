"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { CLASS_JOIN_URL, STUDENT_HYPE } from "./data";

export default function JoinClassSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="mb-8 rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/15 via-violet-600/10 to-cyan-500/15 p-5 shadow-[0_0_40px_rgba(16,185,129,0.12)] sm:p-7 md:p-8"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/90">
            Free class · Vibe Coding
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Join the class — start building for real
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200/95 sm:text-base">
            {STUDENT_HYPE}
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:min-w-[220px]">
          <Link
            href={CLASS_JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3.5 text-center text-base font-bold text-black shadow-lg shadow-emerald-500/25 transition hover:brightness-110 active:scale-[0.98] sm:min-h-[52px] sm:text-lg"
          >
            Join on WhatsApp
          </Link>
          <p className="text-center text-[11px] text-slate-400/90 sm:text-xs">
            Tap to open the group — mobile friendly
          </p>
        </div>
      </div>
    </motion.section>
  );
}

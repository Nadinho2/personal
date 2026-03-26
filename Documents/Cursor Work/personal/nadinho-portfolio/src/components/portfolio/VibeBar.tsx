"use client";

import { motion } from "framer-motion";

type VibeBarProps = {
  label: string;
  percent: number;
};

export default function VibeBar({ label, percent }: VibeBarProps) {
  return (
    <div className="glass-card rounded-2xl p-5 md:p-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/85">
          Vibe Level
        </p>
        <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
          {label}
        </span>
      </div>

      <div className="relative h-4 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-300"
        />
      </div>

      <p className="mt-3 text-sm text-cyan-100/85">
        Currently vibing at {percent}% - 10hr/day grind.
      </p>
    </div>
  );
}


"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type ParticleBackgroundProps = {
  count?: number;
};

export default function ParticleBackground({
  count = 20,
}: ParticleBackgroundProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: `${(i * 13) % 100}%`,
        y: `${(i * 19) % 100}%`,
        delay: i * 0.2,
      })),
    [count],
  );

  return (
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
  );
}


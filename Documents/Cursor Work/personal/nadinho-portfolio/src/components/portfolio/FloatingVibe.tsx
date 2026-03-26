"use client";

import { motion } from "framer-motion";

export default function FloatingVibe() {
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


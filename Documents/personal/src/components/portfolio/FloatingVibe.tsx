"use client";

import { motion } from "framer-motion";

export default function FloatingVibe() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
      className="fixed right-3 bottom-[max(1rem,env(safe-area-inset-bottom))] left-3 z-40 mx-auto w-fit max-w-[calc(100%-1.5rem)] rounded-full border border-cyan-300/30 bg-black/70 px-3 py-2 text-center text-[11px] text-cyan-100 shadow-[0_0_24px_rgba(40,226,255,.3)] backdrop-blur sm:left-auto sm:right-4 sm:mx-0 sm:max-w-none sm:px-4 sm:text-xs"
    >
      Current Vibe: Locked In
    </motion.div>
  );
}


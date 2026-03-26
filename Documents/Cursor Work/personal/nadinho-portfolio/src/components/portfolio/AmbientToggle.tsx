"use client";

import { useRef, useState } from "react";

export default function AmbientToggle() {
  const [on, setOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggle = async () => {
    if (!on) {
      // Creates the audio only after a user click (browser autoplay rules).
      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "triangle";
      oscillator.frequency.value = 220;
      gain.gain.value = 0.018; // keep it subtle

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start();

      audioCtxRef.current = ctx;
      oscRef.current = oscillator;
      gainRef.current = gain;
      setOn(true);
      return;
    }

    // Stop & cleanup oscillator graph.
    try {
      oscRef.current?.stop();
    } catch {
      // ignore stop errors
    }
    oscRef.current?.disconnect();
    gainRef.current?.disconnect();

    // Closing is async; ignore errors because some browsers reject close timing.
    try {
      await audioCtxRef.current?.close();
    } catch {
      // ignore close errors
    }

    audioCtxRef.current = null;
    oscRef.current = null;
    gainRef.current = null;
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


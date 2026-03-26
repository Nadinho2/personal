import { SKILLS } from "./data";

export default function WhatIDoSection() {
  return (
    <article className="glass-card rounded-3xl p-6 md:p-7">
      <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">What I Do</h2>
      <ul className="space-y-3 text-slate-200/90">
        {SKILLS.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 text-emerald-300">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}


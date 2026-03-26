import { ABOUT_BIO } from "./data";

export default function AboutSection() {
  return (
    <article className="glass-card rounded-3xl p-6 md:p-7">
      <h2 className="mb-3 text-xl font-bold text-white md:text-2xl">About Me</h2>
      <p className="leading-relaxed text-slate-200/90">{ABOUT_BIO}</p>
    </article>
  );
}


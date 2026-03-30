import Link from "next/link";

import { CLASS_JOIN_URL, X_HANDLE, X_URL } from "./data";

export default function ConnectSection() {
  return (
    <section className="glass-card rounded-3xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-white md:text-3xl">Connect</h2>
      <p className="mt-3 text-slate-200/90">Let's vibe and build something.</p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href={CLASS_JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-emerald-400/45 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
        >
          Join class (WhatsApp)
        </Link>
        <Link
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-cyan-300/40 px-5 py-2.5 text-sm text-cyan-100 transition hover:bg-cyan-300/10"
        >
          X: @{X_HANDLE}
        </Link>

        <Link
          href="mailto:nnamdiamuchie@gmail.com"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-violet-300/40 px-5 py-2.5 text-sm text-violet-100 transition hover:bg-violet-300/10"
        >
          Email
        </Link>
      </div>

      <div className="mt-6 text-xs text-slate-300/70">
        Tip: copy ideas, ship fast, learn faster. No fake perfection.
      </div>
    </section>
  );
}


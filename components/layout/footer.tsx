import { Sparkles, Code2, ExternalLink } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(135deg,#6366f1,#a855f7)]">
              <Sparkles size={18} className="text-white" />
            </span>
            <span className="font-semibold">Data Science Roadmap 2026</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            An interactive learning experience, restructured from the “Beginner
            Data Science Roadmap for 2026” handbook. From zero to AI Engineer —
            with official, free resources.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-ink">Explore</h4>
          <ul className="grid gap-2 text-sm text-ink-soft">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-ink">Top resources</h4>
          <ul className="grid gap-2 text-sm text-ink-soft">
            {[
              ["DeepLearning.AI", "https://www.deeplearning.ai/"],
              ["Kaggle Learn", "https://www.kaggle.com/learn"],
              ["Google ML Crash Course", "https://developers.google.com/machine-learning/crash-course"],
              ["roadmap.sh", "https://roadmap.sh/"],
            ].map(([label, url]) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-ink"
                >
                  {label}
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* dedication */}
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-sm font-medium sm:px-8">
          <span className="text-ink-muted">Made with </span>
          <span className="text-rose">♥</span>
          <span className="text-ink-muted"> · For </span>
          <span className="text-gradient font-semibold">Diệu Vy</span>
          <span className="text-rose"> 💜</span>
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-ink-muted sm:flex-row sm:px-8">
          <p>© 2026 DS Roadmap. Happy learning & get job-ready 🚀</p>
          <div className="flex items-center gap-4">
            <span>Foundations first · AI later</span>
            <Code2 size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
}

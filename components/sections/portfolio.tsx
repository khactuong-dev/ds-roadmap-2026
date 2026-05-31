"use client";

import { motion } from "motion/react";
import { Database, PackageCheck, ArrowUpRight, Wrench, Star } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { trackVars } from "@/lib/colors";
import { Section, SectionHeading, DifficultyBadge } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";

/** GitHub mark (lucide v1 dropped the brand icon). */
function GitHubMark({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

export function Portfolio() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Portfolio Projects"
        title={<>6 real-world <span className="text-gradient">projects</span></>}
        description="2026 rule: 3-4 polished projects beat 10 half-finished notebooks. Each project comes with a real dataset + a popular (high-star) GitHub repo in the right stack so you can learn real implementations."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((proj, i) => (
          <motion.article
            key={proj.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            style={trackVars(proj.color)}
            className="group glass relative flex flex-col overflow-hidden rounded-[var(--radius-card)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            {/* thumbnail */}
            <div
              className="relative flex h-32 items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, var(--c-soft), transparent)" }}
            >
              <div
                className="absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-30 blur-2xl"
                style={{ background: "var(--c-grad)" }}
              />
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--c-grad)" }}
              >
                <Icon name={proj.icon} size={30} />
              </span>
              <span className="absolute left-4 top-4 font-mono text-xs text-ink-muted">
                Project {proj.number.toString().padStart(2, "0")}
              </span>
              <span className="absolute right-4 top-4">
                <DifficultyBadge level={proj.difficulty} />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold tracking-tight">{proj.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{proj.objective}</p>

              {/* skills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {proj.skills.map((s) => (
                  <span key={s} className="rounded-md px-1.5 py-0.5 text-[11px]" style={{ background: "var(--c-soft)", color: "var(--c)" }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* tech */}
              <div className="mt-4 flex items-start gap-2 text-xs text-ink-muted">
                <Wrench size={13} className="mt-0.5 shrink-0" />
                <span>{proj.tech.join(" · ")}</span>
              </div>

              {/* deliverables */}
              <div className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
                {proj.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-ink-soft">
                    <PackageCheck size={13} style={{ color: "var(--c)" }} /> {d}
                  </div>
                ))}
              </div>

              {/* footer links: featured repo + dataset */}
              <div className="mt-auto space-y-2 pt-4">
                <a
                  href={proj.repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Featured reference repo: ${proj.repo.name}`}
                  className="group/repo flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs transition-colors hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <GitHubMark size={15} />
                  <span className="min-w-0 flex-1 truncate font-medium text-ink-soft group-hover/repo:text-ink">
                    {proj.repo.name}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-amber/10 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-amber">
                    <Star size={10} className="fill-amber" />
                    {proj.repo.stars}
                  </span>
                  <ArrowUpRight size={13} className="shrink-0 text-ink-muted transition-transform group-hover/repo:translate-x-0.5" />
                </a>

                <a
                  href={proj.dataset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: "var(--c)" }}
                >
                  <Database size={13} /> Dataset: {proj.dataset.label}
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

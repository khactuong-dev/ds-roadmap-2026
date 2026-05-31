"use client";

import { motion } from "motion/react";
import { Database, PackageCheck, ArrowUpRight, Wrench } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { trackVars } from "@/lib/colors";
import { Section, SectionHeading, DifficultyBadge } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";

export function Portfolio() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Portfolio Projects"
        title={<>6 dự án <span className="text-gradient">thực chiến</span></>}
        description="Quy tắc 2026: 3-4 project hoàn thiện > 10 notebook dở dang. Mỗi project cần problem statement, data provenance, baseline, evaluation, limitations và hướng dẫn tái lập."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((proj, i) => (
          <motion.article
            key={proj.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
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

              <a
                href={proj.dataset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold transition-colors"
                style={{ color: "var(--c)" }}
              >
                <Database size={13} /> Dataset: {proj.dataset.label}
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

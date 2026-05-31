"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Clock, GitBranch, ListTree, Lock, ChevronRight, CheckCircle2 } from "lucide-react";
import { PHASES } from "@/lib/phases";
import type { Phase } from "@/lib/types";
import { TRACK, trackVars } from "@/lib/colors";
import { useProgress } from "@/lib/use-progress";
import { Section, SectionHeading, DifficultyBadge } from "@/components/ui/primitives";
import { PhaseDetail } from "./phase-detail";
import { cn } from "@/lib/utils";

type View = "timeline" | "graph";

const TRACKS = [
  { name: "Core Computing", color: "emerald" as const },
  { name: "Math & Statistics", color: "blue" as const },
  { name: "Data Work", color: "amber" as const },
  { name: "Machine Learning", color: "purple" as const },
  { name: "Delivery", color: "rose" as const },
  { name: "Modern AI 2026", color: "pink" as const },
];

function PhaseNode({
  phase,
  percent,
  onClick,
  align = "left",
}: {
  phase: Phase;
  percent: number;
  onClick: () => void;
  align?: "left" | "right";
}) {
  const done = percent === 100;
  return (
    <button
      onClick={onClick}
      style={trackVars(phase.color)}
      className={cn(
        "group glass relative w-full overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_60px_-24px_var(--c-ring)]",
        align === "right" && "md:text-right",
      )}
    >
      <span
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: "var(--c-grad)" }}
      />
      <div className={cn("flex items-start gap-3", align === "right" && "md:flex-row-reverse")}>
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-base font-bold text-white shadow-lg"
          style={{ background: "var(--c-grad)" }}
        >
          {done ? <CheckCircle2 size={22} /> : phase.number}
        </span>
        <div className="min-w-0 flex-1">
          <div className={cn("flex items-center gap-2", align === "right" && "md:flex-row-reverse")}>
            <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--c)" }}>
              {phase.track}
            </span>
            {phase.advanced && (
              <Lock size={12} className="text-rose" />
            )}
          </div>
          <h3 className="mt-0.5 text-lg font-bold leading-tight">{phase.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{phase.tagline}</p>
        </div>
      </div>

      <div className={cn("mt-4 flex flex-wrap items-center gap-2", align === "right" && "md:justify-end")}>
        <DifficultyBadge level={phase.difficulty} />
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-ink-soft">
          <Clock size={11} /> {phase.duration}
        </span>
      </div>

      <div className={cn("mt-3 flex flex-wrap gap-1.5", align === "right" && "md:justify-end")}>
        {phase.skills.slice(0, 4).map((s) => (
          <span key={s} className="rounded-md px-1.5 py-0.5 text-[11px]" style={{ background: "var(--c-soft)", color: "var(--c)" }}>
            {s}
          </span>
        ))}
      </div>

      {/* progress line */}
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full transition-[width] duration-700"
          style={{ width: `${percent}%`, background: "var(--c-grad)" }}
        />
      </div>
      <div className={cn("mt-2 flex items-center gap-1 text-xs font-semibold", align === "right" && "md:justify-end")} style={{ color: "var(--c)" }}>
        Xem chi tiết
        <ChevronRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </div>
    </button>
  );
}

export function Roadmap() {
  const [view, setView] = useState<View>("timeline");
  const [active, setActive] = useState<Phase | null>(null);
  const progress = useProgress();

  return (
    <Section id="roadmap">
      <SectionHeading
        eyebrow="Interactive Roadmap"
        title={<>Lộ trình <span className="text-gradient">10 phase</span> · Beginner → AI Engineer</>}
        description="Học theo thứ tự xếp tầng. Click vào bất kỳ phase nào để xem mục tiêu, kỹ năng, công cụ, khóa học và checklist tương tác."
      />

      {/* view toggle */}
      <div className="mb-12 flex justify-center">
        <div className="glass inline-flex rounded-full p-1">
          {([
            ["timeline", "Timeline", ListTree],
            ["graph", "Graph", GitBranch],
          ] as const).map(([key, label, Ico]) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                view === key ? "bg-white/10 text-ink shadow-sm" : "text-ink-muted hover:text-ink",
              )}
            >
              <Ico size={15} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {view === "timeline" ? (
        <div className="relative mx-auto max-w-5xl">
          {/* center spine (desktop) */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald/40 via-purple/40 to-pink/40 md:left-1/2 md:block" />
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-emerald/40 via-purple/40 to-pink/40 md:hidden" />

          <ul className="space-y-6 md:space-y-10">
            {PHASES.map((phase, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
                >
                  {/* node dot */}
                  <span
                    className="absolute left-5 top-6 z-10 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full ring-4 ring-[#0b0f19] md:left-1/2"
                    style={{ background: TRACK[phase.color].gradient }}
                  >
                    <span className="h-2 w-2 rounded-full bg-white/90" />
                  </span>

                  {left ? (
                    <>
                      <div className="md:pr-2">
                        <PhaseNode phase={phase} percent={progress.phasePercent(phase.id)} onClick={() => setActive(phase)} align="right" />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-2">
                        <PhaseNode phase={phase} percent={progress.phasePercent(phase.id)} onClick={() => setActive(phase)} />
                      </div>
                    </>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      ) : (
        /* Graph / lane view — grouped by track */
        <div className="space-y-5">
          {TRACKS.map((track) => {
            const phases = PHASES.filter((p) => p.track === track.name);
            return (
              <div
                key={track.name}
                style={trackVars(track.color)}
                className="glass rounded-2xl p-4 sm:p-5"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="h-3 w-3 rounded-full" style={{ background: "var(--c-grad)" }} />
                  <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--c)" }}>
                    {track.name}
                  </h3>
                  <span className="text-xs text-ink-muted">· {phases.length} phase</span>
                </div>
                <div className="flex flex-wrap items-stretch gap-3">
                  {phases.map((phase, idx) => (
                    <div key={phase.id} className="flex items-center gap-3">
                      <button
                        onClick={() => setActive(phase)}
                        className="group glass min-w-[200px] flex-1 rounded-xl p-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-white/25"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold text-white" style={{ background: "var(--c-grad)" }}>
                            {progress.phasePercent(phase.id) === 100 ? <CheckCircle2 size={16} /> : phase.number}
                          </span>
                          <div className="min-w-0">
                            <h4 className="truncate text-sm font-semibold">{phase.title}</h4>
                            <p className="text-[11px] text-ink-muted">{phase.duration}</p>
                          </div>
                        </div>
                        <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.07]">
                          <div className="h-full rounded-full" style={{ width: `${progress.phasePercent(phase.id)}%`, background: "var(--c-grad)" }} />
                        </div>
                      </button>
                      {idx < phases.length - 1 && (
                        <ChevronRight size={16} className="hidden shrink-0 text-ink-muted sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <PhaseDetail
        phase={active}
        onClose={() => setActive(null)}
        isChecked={progress.isChecked}
        toggle={progress.toggle}
        percent={active ? progress.phasePercent(active.id) : 0}
      />
    </Section>
  );
}

"use client";

import { motion } from "motion/react";
import { RotateCcw, Trophy, Flame, CheckCheck, Target } from "lucide-react";
import { PHASES } from "@/lib/phases";
import { TRACK } from "@/lib/colors";
import { useProgress } from "@/lib/use-progress";
import { Section, SectionHeading, ProgressBar } from "@/components/ui/primitives";

function Ring({ percent }: { percent: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <div className="relative grid h-36 w-36 place-items-center">
      <svg className="h-36 w-36 -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold tracking-tight">{percent}%</div>
        <div className="text-[11px] text-ink-muted">completed</div>
      </div>
    </div>
  );
}

export function Dashboard() {
  const p = useProgress();

  return (
    <Section id="dashboard">
      <SectionHeading
        eyebrow="Learning Dashboard"
        title={<>Track your <span className="text-gradient">progress</span></>}
        description="Tick the checklist inside each phase to update. Your progress is saved right in your browser — no login needed."
      />

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        {/* overall card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col items-center rounded-[var(--radius-card)] p-7 text-center"
        >
          <Ring percent={p.hydrated ? p.overallPercent : 0} />
          <div className="mt-6 grid w-full grid-cols-3 gap-3">
            <Stat icon={CheckCheck} value={p.hydrated ? p.doneItems : 0} label="Items done" />
            <Stat icon={Trophy} value={p.hydrated ? p.completedPhases : 0} label="Phases done" />
            <Stat icon={Target} value={PHASES.length} label="Total phases" />
          </div>
          <button
            onClick={p.reset}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-ink-soft transition-colors hover:border-rose/40 hover:text-rose"
          >
            <RotateCcw size={13} /> Reset progress
          </button>
        </motion.div>

        {/* per-phase bars */}
        <div className="glass rounded-[var(--radius-card)] p-6 sm:p-7">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-ink">
            <Flame size={16} className="text-amber" />
            Progress by phase
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PHASES.map((phase) => {
              const pct = p.hydrated ? p.phasePercent(phase.id) : 0;
              return (
                <li key={phase.id} className="min-w-0">
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <span className="flex min-w-0 items-center gap-2 text-sm">
                      <span
                        className="grid h-5 w-5 shrink-0 place-items-center rounded-md text-[10px] font-bold text-white"
                        style={{ background: TRACK[phase.color].gradient }}
                      >
                        {phase.number}
                      </span>
                      <span className="truncate text-ink-soft">{phase.title}</span>
                    </span>
                    <span className="shrink-0 font-mono text-xs text-ink-muted">{pct}%</span>
                  </div>
                  <ProgressBar value={pct} color={TRACK[phase.color].hex} height={6} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Stat({ icon: Ico, value, label }: { icon: React.ElementType; value: number; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] py-3">
      <Ico size={15} className="mx-auto mb-1 text-indigo" />
      <div className="text-lg font-bold">{value}</div>
      <div className="text-[10px] leading-tight text-ink-muted">{label}</div>
    </div>
  );
}

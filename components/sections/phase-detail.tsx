"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Target,
  HelpCircle,
  GraduationCap,
  Wrench,
  Clock,
  Gauge,
  PackageCheck,
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
} from "lucide-react";
import type { Phase } from "@/lib/types";
import { COURSE_BY_ID } from "@/lib/courses";
import { trackVars, TRACK } from "@/lib/colors";
import { DifficultyBadge, ProgressBar } from "@/components/ui/primitives";
import { CourseCard } from "@/components/ui/course-card";
import { cn } from "@/lib/utils";

function Block({
  icon: IconCmp,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
        <IconCmp size={16} style={{ color: "var(--c)" }} />
        {title}
      </div>
      {children}
    </div>
  );
}

export function PhaseDetail({
  phase,
  onClose,
  isChecked,
  toggle,
  percent,
}: {
  phase: Phase | null;
  onClose: () => void;
  isChecked: (phaseId: string, i: number) => boolean;
  toggle: (phaseId: string, i: number) => void;
  percent: number;
}) {
  useEffect(() => {
    if (phase) {
      document.body.style.overflow = "hidden";
      const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onEsc);
      };
    }
  }, [phase, onClose]);

  return (
    <AnimatePresence>
      {phase && (
        <div className="fixed inset-0 z-[60]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            style={trackVars(phase.color)}
            className="glass-strong absolute right-0 top-0 flex h-full w-full max-w-xl flex-col border-l border-white/10 shadow-2xl"
          >
            {/* header */}
            <div
              className="relative shrink-0 overflow-hidden px-6 pb-5 pt-6"
              style={{
                background: `linear-gradient(180deg, var(--c-soft), transparent)`,
              }}
            >
              <button
                onClick={onClose}
                aria-label="Đóng"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-ink-soft transition-colors hover:text-ink"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--c)" }}>
                <span
                  className="grid h-7 w-7 place-items-center rounded-lg text-xs font-bold text-white"
                  style={{ background: "var(--c-grad)" }}
                >
                  {phase.number}
                </span>
                {phase.track}
                {phase.advanced && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose/15 px-2 py-0.5 text-rose">
                    <Sparkles size={10} /> Advanced
                  </span>
                )}
              </div>

              <h2 className="mt-3 pr-10 text-2xl font-bold tracking-tight">{phase.title}</h2>
              <p className="mt-1.5 text-sm text-ink-soft">{phase.tagline}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <DifficultyBadge level={phase.difficulty} />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-ink-soft">
                  <Clock size={12} /> {phase.duration}
                </span>
              </div>

              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs text-ink-soft">
                  <span>Tiến độ của bạn</span>
                  <span className="font-mono">{percent}%</span>
                </div>
                <ProgressBar value={percent} color={TRACK[phase.color].hex} />
              </div>
            </div>

            {/* scrollable body */}
            <div className="hide-scrollbar flex-1 space-y-6 overflow-y-auto px-6 py-6">
              <Block icon={Target} title="Mục tiêu">
                <p className="text-sm leading-relaxed text-ink-soft">{phase.objective}</p>
              </Block>

              <Block icon={HelpCircle} title="Tại sao học phần này">
                <p
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm leading-relaxed text-ink-soft"
                  style={{ borderLeft: "3px solid var(--c)" }}
                >
                  {phase.why}
                </p>
              </Block>

              <Block icon={GraduationCap} title="Learning Objectives">
                <ul className="space-y-1.5">
                  {phase.learn.map((l) => (
                    <li key={l} className="flex gap-2 text-sm text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--c)" }} />
                      {l}
                    </li>
                  ))}
                </ul>
              </Block>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Block icon={Gauge} title="Skills">
                  <div className="flex flex-wrap gap-1.5">
                    {phase.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg px-2 py-1 text-xs font-medium"
                        style={{ background: "var(--c-soft)", color: "var(--c)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Block>
                <Block icon={Wrench} title="Tools">
                  <div className="flex flex-wrap gap-1.5">
                    {phase.tools.map((t) => (
                      <span key={t} className="rounded-lg bg-white/[0.05] px-2 py-1 text-xs text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </Block>
              </div>

              <Block icon={PackageCheck} title="Deliverables">
                <div className="flex flex-wrap gap-2">
                  {phase.deliverables.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-ink-soft"
                    >
                      <PackageCheck size={13} style={{ color: "var(--c)" }} /> {d}
                    </span>
                  ))}
                </div>
              </Block>

              {/* Checklist */}
              <Block icon={CheckCircle2} title="Checklist hoàn thành">
                <ul className="space-y-1">
                  {phase.checklist.map((item, i) => {
                    const checked = isChecked(phase.id, i);
                    return (
                      <li key={i}>
                        <button
                          onClick={() => toggle(phase.id, i)}
                          className={cn(
                            "flex w-full items-start gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors",
                            checked ? "bg-white/[0.04]" : "hover:bg-white/[0.04]",
                          )}
                        >
                          {checked ? (
                            <CheckCircle2 size={18} className="mt-px shrink-0" style={{ color: "var(--c)" }} />
                          ) : (
                            <Circle size={18} className="mt-px shrink-0 text-ink-muted" />
                          )}
                          <span className={cn(checked ? "text-ink-muted line-through" : "text-ink-soft")}>
                            {item}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Block>

              {/* Courses */}
              <Block icon={BookOpen} title={`Khóa học đề xuất (${phase.courseIds.length})`}>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {phase.courseIds.map((id) => {
                    const c = COURSE_BY_ID[id];
                    return c ? <CourseCard key={id} course={c} compact /> : null;
                  })}
                </div>
              </Block>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

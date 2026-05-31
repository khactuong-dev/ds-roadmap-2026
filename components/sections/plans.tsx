"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Users,
  Gauge,
  CheckCircle2,
  Circle,
  Trophy,
  FolderGit2,
  Star,
  RotateCcw,
  ArrowRight,
} from "lucide-react";
import { PLANS } from "@/lib/plans";
import { Section, SectionHeading, ProgressBar } from "@/components/ui/primitives";
import { usePlanProgress } from "@/lib/use-plan-progress";
import { cn } from "@/lib/utils";

export function Plans() {
  const [activeId, setActiveId] = useState<(typeof PLANS)[number]["id"]>("9");
  const active = PLANS.find((p) => p.id === activeId)!;
  const pp = usePlanProgress();

  const total = active.rows.length;
  const done = pp.hydrated ? pp.doneCount(active.id, total) : 0;
  const percent = Math.round((done / total) * 100);
  const next = pp.hydrated ? pp.nextIndex(active.id, total) : 0;

  return (
    <Section id="plans">
      <SectionHeading
        eyebrow="Study Plans"
        title={<>Chọn <span className="text-gradient">nhịp độ</span> của bạn</>}
        description="Ba kế hoạch, cùng một thứ tự — chỉ khác tốc độ. Tick từng mốc khi hoàn thành để theo dõi bạn đang đi tới đâu. Tiến độ được lưu trên trình duyệt."
      />

      {/* tabs */}
      <div className="mb-8 flex justify-center">
        <div className="glass inline-flex rounded-full p-1">
          {PLANS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                activeId === p.id ? "text-ink" : "text-ink-muted hover:text-ink",
              )}
            >
              {activeId === p.id && (
                <motion.span
                  layoutId="plan-tab"
                  className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,#6366f1,#a855f7)]"
                  transition={{ type: "spring", damping: 28, stiffness: 320 }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                {p.months} tháng
                {p.recommended && <Star size={12} className="fill-current" />}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {/* meta */}
          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <MetaCard icon={Users} label="Dành cho" value={active.audience} />
            <MetaCard icon={Clock} label="Cường độ" value={active.hoursPerWeek} />
            <MetaCard icon={Gauge} label="Tổng thời gian" value={active.totalHours} />
          </div>

          {/* progress tracker bar */}
          <div className="glass mb-6 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-ink">
                  {next === -1 ? "🎉 Hoàn thành toàn bộ kế hoạch!" : `Tiến độ kế hoạch ${active.months} tháng`}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  {done}/{total} mốc
                </span>
              </div>
              <div className="flex items-center gap-3">
                {next !== -1 && (
                  <span className="hidden text-xs text-ink-muted sm:inline">
                    Tiếp theo: <span className="text-indigo">{active.rows[next].label}</span>
                  </span>
                )}
                <button
                  onClick={() => pp.resetPlan(active.id, total)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-rose/40 hover:text-rose"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>
            </div>
            <ProgressBar value={percent} className="mt-3" />
          </div>

          {active.recommended && (
            <div className="mb-6 flex items-center justify-center gap-2 rounded-xl border border-emerald/30 bg-emerald/10 px-4 py-2.5 text-sm text-emerald">
              <Star size={14} className="fill-current" /> Khuyên dùng — cân bằng nhất giữa tốc độ và xây portfolio thật.
            </div>
          )}

          {/* timeline rows */}
          <div className="glass overflow-hidden rounded-[var(--radius-card)]">
            <ul className="divide-y divide-white/[0.06]">
              {active.rows.map((row, i) => {
                const isDone = pp.hydrated && pp.isDone(active.id, i);
                const isNext = pp.hydrated && i === next;
                return (
                  <li
                    key={i}
                    className={cn(
                      "relative grid grid-cols-1 gap-2 p-4 transition-colors sm:grid-cols-[150px_1fr_1.2fr] sm:items-center sm:gap-4",
                      isDone ? "bg-white/[0.02]" : "hover:bg-white/[0.03]",
                      isNext && "bg-indigo/[0.06]",
                    )}
                  >
                    {isNext && (
                      <span className="absolute inset-y-0 left-0 w-[3px] bg-[linear-gradient(180deg,#6366f1,#a855f7)]" />
                    )}

                    {/* toggle + label */}
                    <button
                      onClick={() => pp.toggle(active.id, i)}
                      className="flex items-center gap-2.5 text-left"
                      aria-pressed={isDone}
                    >
                      {isDone ? (
                        <CheckCircle2 size={22} className="shrink-0 text-emerald" />
                      ) : (
                        <Circle size={22} className="shrink-0 text-ink-muted transition-colors hover:text-indigo" />
                      )}
                      <span className="flex flex-col">
                        <span className={cn("text-sm font-semibold", isDone ? "text-ink-muted line-through" : "text-ink")}>
                          {row.label}
                        </span>
                        {isNext && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo">
                            ● Đang học
                          </span>
                        )}
                      </span>
                    </button>

                    {/* focus + course */}
                    <div className={cn("text-sm", isDone ? "text-ink-muted" : "text-ink-soft")}>
                      {row.focus}
                      <div className="mt-0.5 text-xs text-ink-muted">{row.course}</div>
                    </div>

                    {/* milestone */}
                    {row.isProject || row.isCapstone ? (
                      <a
                        href="#projects"
                        className={cn(
                          "group flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                          row.isCapstone
                            ? "bg-amber/10 text-amber hover:bg-amber/20"
                            : "bg-indigo/10 text-indigo hover:bg-indigo/20",
                          isDone && "opacity-60",
                        )}
                      >
                        {row.isCapstone ? (
                          <Trophy size={14} className="shrink-0" />
                        ) : (
                          <FolderGit2 size={14} className="shrink-0" />
                        )}
                        <span className="flex-1">{row.milestone}</span>
                        <ArrowRight size={13} className="shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <div className={cn("flex items-center gap-2 px-3 py-2 text-sm", isDone ? "text-ink-muted" : "text-ink-soft")}>
                        <CheckCircle2 size={14} className="shrink-0 text-ink-muted" />
                        <span>{row.milestone}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

function MetaCard({ icon: Ico, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-muted">
        <Ico size={14} className="text-indigo" /> {label}
      </div>
      <p className="mt-1.5 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}

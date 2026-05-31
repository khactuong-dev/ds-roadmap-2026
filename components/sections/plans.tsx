"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Users, Gauge, CheckCircle2, Trophy, FolderGit2, Star } from "lucide-react";
import { PLANS } from "@/lib/plans";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function Plans() {
  const [activeId, setActiveId] = useState<(typeof PLANS)[number]["id"]>("9");
  const active = PLANS.find((p) => p.id === activeId)!;

  return (
    <Section id="plans">
      <SectionHeading
        eyebrow="Study Plans"
        title={<>Chọn <span className="text-gradient">nhịp độ</span> của bạn</>}
        description="Ba kế hoạch, cùng một thứ tự — chỉ khác tốc độ. Chọn theo quỹ thời gian thực tế của bạn mỗi tuần."
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

          {active.recommended && (
            <div className="mb-6 flex items-center justify-center gap-2 rounded-xl border border-emerald/30 bg-emerald/10 px-4 py-2.5 text-sm text-emerald">
              <Star size={14} className="fill-current" /> Khuyên dùng — cân bằng nhất giữa tốc độ và xây portfolio thật.
            </div>
          )}

          {/* timeline rows */}
          <div className="glass overflow-hidden rounded-[var(--radius-card)]">
            <ul className="divide-y divide-white/[0.06]">
              {active.rows.map((row, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 gap-2 p-4 transition-colors hover:bg-white/[0.03] sm:grid-cols-[120px_1fr_1.2fr] sm:items-center sm:gap-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[11px] font-bold text-indigo">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink">{row.label}</span>
                  </div>
                  <div className="text-sm text-ink-soft">
                    {row.focus}
                    <div className="mt-0.5 text-xs text-ink-muted">{row.course}</div>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
                      row.isCapstone
                        ? "bg-amber/10 text-amber"
                        : row.isProject
                          ? "bg-indigo/10 text-indigo"
                          : "text-ink-soft",
                    )}
                  >
                    {row.isCapstone ? (
                      <Trophy size={14} className="shrink-0" />
                    ) : row.isProject ? (
                      <FolderGit2 size={14} className="shrink-0" />
                    ) : (
                      <CheckCircle2 size={14} className="shrink-0 text-ink-muted" />
                    )}
                    <span>{row.milestone}</span>
                  </div>
                </li>
              ))}
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

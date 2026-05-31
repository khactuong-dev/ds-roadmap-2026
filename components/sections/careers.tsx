"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame, Check, Clock3, Wallet, Plus, Minus, FolderGit2, GraduationCap, ArrowUpRight } from "lucide-react";
import { CAREERS } from "@/lib/careers";
import { PROJECT_BY_ID } from "@/lib/projects";
import { COURSE_BY_ID } from "@/lib/courses";
import { TRACK, trackVars } from "@/lib/colors";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export function Careers() {
  const [activeId, setActiveId] = useState(CAREERS[1].id); // Data Scientist default
  const active = CAREERS.find((c) => c.id === activeId)!;

  return (
    <Section id="careers">
      <SectionHeading
        eyebrow="Career Paths"
        title={<>Pick your <span className="text-gradient">career path</span></>}
        description="The shared core (Phases 1-7) is the same for everyone. The difference is in the last third of the path. Click to see skills, projects, timelines, and reference salaries."
      />

      {/* selector cards */}
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-5">
        {CAREERS.map((c) => {
          const selected = c.id === activeId;
          return (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              style={trackVars(c.color)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300",
                selected
                  ? "border-white/25 bg-white/[0.06] shadow-[0_14px_40px_-20px_var(--c-ring)]"
                  : "border-white/10 hover:border-white/20 hover:bg-white/[0.03]",
              )}
            >
              {c.hot && (
                <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-rose/15 px-1.5 py-0.5 text-[9px] font-bold text-rose">
                  <Flame size={9} /> HOT
                </span>
              )}
              <span
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: "var(--c-soft)", color: "var(--c)" }}
              >
                <Icon name={c.icon} size={20} />
              </span>
              <h3 className="mt-3 text-sm font-bold leading-tight">{c.name}</h3>
              <p className="mt-0.5 text-[11px] text-ink-muted">{c.estimatedTime}</p>
              {selected && (
                <motion.span
                  layoutId="career-underline"
                  className="absolute inset-x-0 bottom-0 h-[3px]"
                  style={{ background: "var(--c-grad)" }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          style={trackVars(active.color)}
          className="glass overflow-hidden rounded-[var(--radius-card)]"
        >
          <div
            className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
            style={{ background: "linear-gradient(180deg, var(--c-soft), transparent)" }}
          >
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl text-white" style={{ background: "var(--c-grad)" }}>
                <Icon name={active.icon} size={26} />
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{active.name}</h3>
                <p className="text-sm text-ink-soft">“{active.question}”</p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-ink-soft">{active.tagline}</p>
          </div>

          <div className="grid gap-6 p-6 lg:grid-cols-3">
            {/* skills */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Check size={15} style={{ color: "var(--c)" }} /> Priority skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {active.prioritySkills.map((s) => (
                    <span key={s} className="rounded-lg px-2.5 py-1 text-xs font-medium" style={{ background: "var(--c-soft)", color: "var(--c)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ListBlock icon={Plus} title="Add later" items={active.later} tone="soft" />
                <ListBlock icon={Minus} title="Skip at first" items={active.skip} tone="mute" />
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4" style={{ borderLeft: "3px solid var(--c)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--c)" }}>
                  Most important skill
                </p>
                <p className="mt-1 text-sm text-ink-soft">{active.keySkill}</p>
              </div>

              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <FolderGit2 size={15} style={{ color: "var(--c)" }} /> Target portfolio
                </h4>
                <p className="text-sm text-ink-soft">{active.portfolio}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.recommendedProjects.map((pid) => {
                    const proj = PROJECT_BY_ID[pid];
                    return proj ? (
                      <span key={pid} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-ink-soft">
                        <Icon name={proj.icon} size={13} style={{ color: "var(--c)" }} /> {proj.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </div>

            {/* sidebar: time, salary, courses */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Clock3 size={15} style={{ color: "var(--c)" }} /> Learning time
                </div>
                <p className="mt-1 text-lg font-bold">{active.estimatedTime}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Wallet size={15} style={{ color: "var(--c)" }} /> Salary (reference)
                </div>
                <dl className="mt-2 space-y-1.5 text-sm">
                  <Row label="VN · Junior" value={active.salary.vnJunior} />
                  <Row label="VN · Mid" value={active.salary.vnMid} />
                  <Row label="Global" value={active.salary.globalUsd} />
                </dl>
                <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">{active.salary.note}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <GraduationCap size={15} style={{ color: "var(--c)" }} /> Suggested courses
                </div>
                <ul className="space-y-1.5">
                  {active.courseIds.slice(0, 5).map((id) => {
                    const c = COURSE_BY_ID[id];
                    return c ? (
                      <li key={id}>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-xs text-ink-soft transition-colors hover:bg-white/[0.05] hover:text-ink"
                        >
                          <span className="truncate">{c.name}</span>
                          <ArrowUpRight size={13} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

function ListBlock({
  icon: Ico,
  title,
  items,
  tone,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  tone: "soft" | "mute";
}) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink-soft">
        <Ico size={14} /> {title}
      </h4>
      <ul className="space-y-1">
        {items.map((i) => (
          <li key={i} className={cn("text-xs leading-relaxed", tone === "mute" ? "text-ink-muted" : "text-ink-soft")}>
            • {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <dt className="text-ink-muted">{label}</dt>
      <dd className="text-right font-medium text-ink">{value}</dd>
    </div>
  );
}

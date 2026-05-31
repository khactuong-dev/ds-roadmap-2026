import { ArrowUpRight, Star } from "lucide-react";
import type { Course } from "@/lib/types";
import { Badge, CostBadge, DifficultyBadge } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

/** Provider → short monogram + brand-ish tint for the "logo" chip. */
function providerMark(provider: string) {
  const p = provider.toLowerCase();
  if (p.includes("andrew") || p.includes("deeplearning")) return { m: "AI", c: "#ec4899" };
  if (p.includes("harvard")) return { m: "H", c: "#a51c30" };
  if (p.includes("stanford")) return { m: "S", c: "#8c1515" };
  if (p.includes("mit")) return { m: "M", c: "#a31f34" };
  if (p.includes("google")) return { m: "G", c: "#4285f4" };
  if (p.includes("kaggle")) return { m: "K", c: "#20beff" };
  if (p.includes("aws")) return { m: "A", c: "#ff9900" };
  if (p.includes("microsoft") || p.includes("azure")) return { m: "MS", c: "#00a4ef" };
  if (p.includes("hugging")) return { m: "🤗", c: "#ffb000" };
  if (p.includes("anthropic")) return { m: "An", c: "#d97757" };
  return { m: provider.slice(0, 2).toUpperCase(), c: "#6366f1" };
}

export function CourseCard({
  course,
  compact = false,
}: {
  course: Course;
  compact?: boolean;
}) {
  const mark = providerMark(course.provider);

  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group glass relative flex flex-col rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_50px_-22px_rgba(99,102,241,0.55)]",
        compact && "p-3.5",
      )}
    >
      {course.featured && (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-semibold text-amber">
          <Star size={10} className="fill-amber" /> Featured
        </span>
      )}

      <div className="flex items-start gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold text-white"
          style={{ background: `${mark.c}26`, color: mark.c, border: `1px solid ${mark.c}44` }}
        >
          {mark.m}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink group-hover:text-white">
            {course.name}
          </h3>
          <p className="mt-0.5 text-xs text-ink-muted">{course.provider}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <DifficultyBadge level={course.level} />
        <CostBadge cost={course.cost} />
        <Badge>{course.duration}</Badge>
      </div>

      {!compact && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {course.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.05] px-2 py-0.5 text-[11px] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-3">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo transition-colors group-hover:text-purple">
          Open Course
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

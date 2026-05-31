import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Cost, Difficulty } from "@/lib/types";

/* ── Badge ── */
export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "outline" | "solid";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium leading-5",
        tone === "default" && "bg-white/[0.06] text-ink-soft border border-white/10",
        tone === "outline" && "border border-white/15 text-ink-soft",
        tone === "solid" && "bg-indigo/20 text-indigo border border-indigo/30",
        className,
      )}
    >
      {children}
    </span>
  );
}

const DIFF_TONE: Record<Difficulty, string> = {
  Beginner: "text-emerald border-emerald/30 bg-emerald/10",
  Intermediate: "text-amber border-amber/30 bg-amber/10",
  Advanced: "text-rose border-rose/30 bg-rose/10",
};

export function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        DIFF_TONE[level],
      )}
    >
      {level}
    </span>
  );
}

export function CostBadge({ cost }: { cost: Cost }) {
  const free = cost === "Free" || cost === "Free audit";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
        free
          ? "text-cyan border-cyan/30 bg-cyan/10"
          : "text-ink-soft border-white/15 bg-white/5",
      )}
    >
      {cost === "Free"
        ? "Free"
        : cost === "Free audit"
          ? "Free audit"
          : cost === "Mixed"
            ? "Mixed"
            : "Paid"}
    </span>
  );
}

/* ── Card ── */
export function Card({
  children,
  className,
  hover = false,
  ...props
}: ComponentProps<"div"> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "glass rounded-[var(--radius-card)] p-5",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_50px_-20px_rgba(99,102,241,0.5)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Button ── */
type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
} & Omit<ComponentProps<"button">, "ref">;

const buttonClasses = (
  variant: NonNullable<ButtonProps["variant"]>,
  size: NonNullable<ButtonProps["size"]>,
) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo/60 cursor-pointer disabled:opacity-50",
    size === "md" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-base",
    variant === "primary" &&
      "text-white bg-[linear-gradient(120deg,#6366f1,#a855f7)] shadow-[0_10px_30px_-8px_rgba(124,58,237,0.6)] hover:shadow-[0_14px_40px_-8px_rgba(124,58,237,0.85)] hover:brightness-110",
    variant === "outline" &&
      "border border-white/15 text-ink hover:bg-white/[0.06] hover:border-white/25",
    variant === "ghost" && "text-ink-soft hover:text-ink hover:bg-white/[0.05]",
  );

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  ...props
}: ButtonProps) {
  const cls = cn(buttonClasses(variant, size), className);
  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

/* ── Section wrapper + heading ── */
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-indigo/50" />
          {eyebrow}
          <span className="h-px w-6 bg-indigo/50" />
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/* ── Progress bar ── */
export function ProgressBar({
  value,
  className,
  color = "#6366f1",
  showLabel = false,
  height = 8,
}: {
  value: number;
  className?: string;
  color?: string;
  showLabel?: boolean;
  height?: number;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="relative w-full overflow-hidden rounded-full bg-white/[0.07]"
        style={{ height }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            boxShadow: `0 0 12px ${color}80`,
          }}
        />
      </div>
      {showLabel && (
        <span className="w-10 shrink-0 text-right font-mono text-xs text-ink-soft">
          {value}%
        </span>
      )}
    </div>
  );
}

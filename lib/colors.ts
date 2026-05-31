import type { TrackColor } from "./types";

interface TrackTheme {
  hex: string;
  /** translucent fill for chips/backgrounds */
  soft: string;
  /** stronger translucent for borders */
  ring: string;
  /** gradient for accents */
  gradient: string;
}

export const TRACK: Record<TrackColor, TrackTheme> = {
  emerald: {
    hex: "#10b981",
    soft: "rgba(16,185,129,0.12)",
    ring: "rgba(16,185,129,0.45)",
    gradient: "linear-gradient(135deg,#10b981,#06b6d4)",
  },
  blue: {
    hex: "#3b82f6",
    soft: "rgba(59,130,246,0.12)",
    ring: "rgba(59,130,246,0.45)",
    gradient: "linear-gradient(135deg,#3b82f6,#6366f1)",
  },
  amber: {
    hex: "#f59e0b",
    soft: "rgba(245,158,11,0.12)",
    ring: "rgba(245,158,11,0.45)",
    gradient: "linear-gradient(135deg,#f59e0b,#f43f5e)",
  },
  purple: {
    hex: "#a855f7",
    soft: "rgba(168,85,247,0.12)",
    ring: "rgba(168,85,247,0.45)",
    gradient: "linear-gradient(135deg,#a855f7,#6366f1)",
  },
  rose: {
    hex: "#f43f5e",
    soft: "rgba(244,63,94,0.12)",
    ring: "rgba(244,63,94,0.45)",
    gradient: "linear-gradient(135deg,#f43f5e,#ec4899)",
  },
  pink: {
    hex: "#ec4899",
    soft: "rgba(236,72,153,0.12)",
    ring: "rgba(236,72,153,0.45)",
    gradient: "linear-gradient(135deg,#ec4899,#a855f7)",
  },
};

export function trackVars(color: TrackColor): React.CSSProperties {
  const t = TRACK[color];
  return {
    ["--c" as string]: t.hex,
    ["--c-soft" as string]: t.soft,
    ["--c-ring" as string]: t.ring,
    ["--c-grad" as string]: t.gradient,
  };
}

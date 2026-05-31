"use client";

import { useCallback, useEffect, useState } from "react";
import { PHASES } from "./phases";

const STORAGE_KEY = "ds-roadmap-progress-v1";

type ProgressMap = Record<string, boolean>;

function checklistKey(phaseId: string, index: number) {
  return `${phaseId}:${index}`;
}

/**
 * Tracks per-checklist-item completion in localStorage and derives
 * per-phase + overall percentages. SSR-safe.
 */
export function useProgress() {
  const [map, setMap] = useState<ProgressMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setMap(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: ProgressMap) => {
    setMap(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    (phaseId: string, index: number) => {
      const key = checklistKey(phaseId, index);
      persist({ ...map, [key]: !map[key] });
    },
    [map, persist],
  );

  const isChecked = useCallback(
    (phaseId: string, index: number) => !!map[checklistKey(phaseId, index)],
    [map],
  );

  const reset = useCallback(() => persist({}), [persist]);

  const phasePercent = useCallback(
    (phaseId: string) => {
      const phase = PHASES.find((p) => p.id === phaseId);
      if (!phase || phase.checklist.length === 0) return 0;
      const done = phase.checklist.filter((_, i) => map[checklistKey(phaseId, i)]).length;
      return Math.round((done / phase.checklist.length) * 100);
    },
    [map],
  );

  const totalItems = PHASES.reduce((s, p) => s + p.checklist.length, 0);
  const doneItems = Object.entries(map).filter(([, v]) => v).length;
  const overallPercent = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  const completedPhases = PHASES.filter((p) => phasePercent(p.id) === 100).length;

  return {
    hydrated,
    toggle,
    isChecked,
    reset,
    phasePercent,
    overallPercent,
    doneItems,
    totalItems,
    completedPhases,
  };
}

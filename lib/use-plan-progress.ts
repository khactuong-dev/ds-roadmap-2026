"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "ds-roadmap-plan-progress-v1";

type DoneMap = Record<string, boolean>;

function rowKey(planId: string, index: number) {
  return `${planId}:${index}`;
}

/**
 * Tracks per-row completion of a study plan (6/9/12-month) in localStorage.
 * Independent from the phase checklist — this is the "follow the plan" tracker.
 */
export function usePlanProgress() {
  const [map, setMap] = useState<DoneMap>({});
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

  const persist = useCallback((next: DoneMap) => {
    setMap(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const isDone = useCallback(
    (planId: string, index: number) => !!map[rowKey(planId, index)],
    [map],
  );

  const toggle = useCallback(
    (planId: string, index: number) => {
      const k = rowKey(planId, index);
      persist({ ...map, [k]: !map[k] });
    },
    [map, persist],
  );

  const resetPlan = useCallback(
    (planId: string, total: number) => {
      const next = { ...map };
      for (let i = 0; i < total; i++) delete next[rowKey(planId, i)];
      persist(next);
    },
    [map, persist],
  );

  const doneCount = useCallback(
    (planId: string, total: number) => {
      let n = 0;
      for (let i = 0; i < total; i++) if (map[rowKey(planId, i)]) n++;
      return n;
    },
    [map],
  );

  /** index of the first not-done row (the "next step"); -1 if all done */
  const nextIndex = useCallback(
    (planId: string, total: number) => {
      for (let i = 0; i < total; i++) if (!map[rowKey(planId, i)]) return i;
      return -1;
    },
    [map],
  );

  return { hydrated, isDone, toggle, resetPlan, doneCount, nextIndex };
}

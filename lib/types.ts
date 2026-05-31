export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Cost = "Free" | "Paid" | "Free audit" | "Mixed";

export type TrackColor =
  | "emerald"
  | "blue"
  | "amber"
  | "purple"
  | "rose"
  | "pink";

export interface Course {
  id: string;
  name: string;
  provider: string;
  level: Difficulty;
  duration: string;
  cost: Cost;
  url: string;
  category: CourseCategory;
  tags: string[];
  /** Priority tier — Andrew Ng / DeepLearning.AI / Stanford get the top tier */
  featured?: boolean;
}

export type CourseCategory =
  | "Python"
  | "Math"
  | "SQL"
  | "Data"
  | "ML"
  | "DL"
  | "Responsible AI"
  | "MLOps"
  | "AI 2026"
  | "BI";

export interface Phase {
  id: string;
  number: number;
  track: string;
  color: TrackColor;
  title: string;
  tagline: string;
  objective: string;
  why: string;
  learn: string[];
  skills: string[];
  tools: string[];
  duration: string;
  weeks: number;
  difficulty: Difficulty;
  outcome: string;
  deliverables: string[];
  checklist: string[];
  courseIds: string[];
  /** marks the AI-engineering / advanced gated phase */
  advanced?: boolean;
}

export interface CareerPath {
  id: string;
  name: string;
  icon: string;
  color: TrackColor;
  question: string;
  tagline: string;
  hot?: boolean;
  prioritySkills: string[];
  later: string[];
  skip: string[];
  keySkill: string;
  portfolio: string;
  recommendedProjects: string[];
  estimatedTime: string;
  salary: {
    vnJunior: string;
    vnMid: string;
    globalUsd: string;
    note: string;
  };
  courseIds: string[];
}

export interface Project {
  id: string;
  number: number;
  name: string;
  icon: string;
  color: TrackColor;
  difficulty: Difficulty;
  objective: string;
  dataset: { label: string; url: string };
  tech: string[];
  skills: string[];
  deliverables: string[];
  /** Popular high-star GitHub repo to study for this project's stack. */
  repo: { name: string; url: string; stars: string };
}

export interface PlanWeek {
  label: string;
  focus: string;
  course: string;
  milestone: string;
  isProject?: boolean;
  isCapstone?: boolean;
}

export interface Plan {
  id: "6" | "9" | "12";
  months: number;
  title: string;
  audience: string;
  hoursPerWeek: string;
  totalHours: string;
  recommended?: boolean;
  rows: PlanWeek[];
}

export interface JourneyStage {
  id: string;
  role: string;
  level: string;
  difficulty: string;
  years: string;
  expectation: string;
  color: TrackColor;
}

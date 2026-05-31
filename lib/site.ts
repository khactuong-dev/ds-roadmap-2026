import { PHASES } from "./phases";
import { COURSES } from "./courses";
import { PROJECTS } from "./projects";

const totalWeeks = PHASES.reduce((sum, p) => sum + p.weeks, 0);

export const STATS = {
  totalPhases: PHASES.length,
  totalCourses: COURSES.length,
  totalProjects: PROJECTS.length,
  totalWeeks,
  /** standard recommended plan */
  durationMonths: 9,
  freeCourses: COURSES.filter((c) => c.cost === "Free" || c.cost === "Free audit").length,
};

export const NAV_LINKS = [
  { href: "#roadmap", label: "Roadmap" },
  { href: "#courses", label: "Courses" },
  { href: "#dashboard", label: "Progress" },
  { href: "#projects", label: "Portfolio" },
  { href: "#careers", label: "Careers" },
  { href: "#ai-2026", label: "AI 2026" },
];

/** The Modern AI Stack for 2026 — flagged Advanced. */
export const AI_STACK = [
  {
    id: "llm",
    name: "LLM",
    icon: "MessageSquare",
    desc: "Large Language Models — the foundation of generative AI. Learn how they work, prompting, context windows, and limits.",
  },
  {
    id: "rag",
    name: "RAG",
    icon: "Search",
    desc: "Retrieval-Augmented Generation — combine an LLM with your own data for accurate, sourced answers.",
  },
  {
    id: "vectordb",
    name: "Vector DB",
    icon: "Database",
    desc: "Store & search embeddings by similarity. Chroma, pgvector, Pinecone.",
  },
  {
    id: "langchain",
    name: "LangChain",
    icon: "Link2",
    desc: "A framework that connects LLMs to tools, data, and memory to build full applications.",
  },
  {
    id: "langgraph",
    name: "LangGraph",
    icon: "Workflow",
    desc: "Build stateful agent flows — loops, branches, and multi-step orchestration.",
  },
  {
    id: "mcp",
    name: "MCP",
    icon: "Plug",
    desc: "Model Context Protocol — an open standard connecting AI to tools and data sources.",
  },
  {
    id: "agents",
    name: "AI Agents",
    icon: "Bot",
    desc: "Models that plan and act on their own. Know when you SHOULD and SHOULDN'T use them.",
  },
  {
    id: "agentic",
    name: "Agentic AI",
    icon: "Network",
    desc: "Multi-agent systems collaborating autonomously — the hottest wave, but it needs solid foundations.",
  },
];

/** The 3 golden principles from the handbook. */
export const PRINCIPLES = [
  {
    title: "Foundations first, AI later",
    desc: "Don't jump straight to LLMs. Python → SQL → Statistics → ML → Deploy → then LLMs. This is the most common beginner mistake of 2026.",
    icon: "Layers",
  },
  {
    title: "Finished portfolio > quantity",
    desc: "3-4 polished projects beat 10 half-finished notebooks. Each project needs a problem statement, data provenance, baseline, evaluation, limitations, and reproduction steps.",
    icon: "FolderCheck",
  },
  {
    title: "Show your delivery skills",
    desc: "In 2026, knowing how to deploy + evaluate honestly + communicate well is what sets you apart. Not just 'fitting a model'.",
    icon: "Rocket",
  },
];

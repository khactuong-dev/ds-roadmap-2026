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
  { href: "#courses", label: "Khóa học" },
  { href: "#dashboard", label: "Tiến độ" },
  { href: "#projects", label: "Portfolio" },
  { href: "#careers", label: "Nghề nghiệp" },
  { href: "#ai-2026", label: "AI 2026" },
];

/** The Modern AI Stack for 2026 — flagged Advanced. */
export const AI_STACK = [
  {
    id: "llm",
    name: "LLM",
    icon: "MessageSquare",
    desc: "Large Language Models — nền tảng của AI tạo sinh. Hiểu cách hoạt động, prompting, context window và giới hạn.",
  },
  {
    id: "rag",
    name: "RAG",
    icon: "Search",
    desc: "Retrieval-Augmented Generation — kết hợp LLM với dữ liệu riêng của bạn để trả lời chính xác, có nguồn.",
  },
  {
    id: "vectordb",
    name: "Vector DB",
    icon: "Database",
    desc: "Lưu & tìm kiếm embeddings theo độ tương đồng. Chroma, pgvector, Pinecone.",
  },
  {
    id: "langchain",
    name: "LangChain",
    icon: "Link2",
    desc: "Framework kết nối LLM với công cụ, dữ liệu và bộ nhớ thành ứng dụng hoàn chỉnh.",
  },
  {
    id: "langgraph",
    name: "LangGraph",
    icon: "Workflow",
    desc: "Xây luồng agent có trạng thái (stateful) — vòng lặp, nhánh, điều phối nhiều bước.",
  },
  {
    id: "mcp",
    name: "MCP",
    icon: "Plug",
    desc: "Model Context Protocol — chuẩn mở kết nối AI với công cụ và nguồn dữ liệu.",
  },
  {
    id: "agents",
    name: "AI Agents",
    icon: "Bot",
    desc: "Mô hình tự lập kế hoạch và hành động. Biết khi nào NÊN và KHÔNG NÊN dùng.",
  },
  {
    id: "agentic",
    name: "Agentic AI",
    icon: "Network",
    desc: "Hệ nhiều agent phối hợp tự chủ — làn sóng nóng nhất nhưng cần nền tảng vững.",
  },
];

/** The 3 golden principles from the handbook. */
export const PRINCIPLES = [
  {
    title: "Nền tảng trước, AI sau",
    desc: "Đừng nhảy thẳng vào LLM. Python → SQL → Thống kê → ML → Deploy → rồi mới LLM. Đây là sai lầm phổ biến nhất của người mới năm 2026.",
    icon: "Layers",
  },
  {
    title: "Portfolio hoàn thiện > số lượng",
    desc: "3-4 project xịn đánh bại 10 notebook dở dang. Mỗi project cần: problem statement, data provenance, baseline, evaluation, limitations, hướng dẫn tái lập.",
    icon: "FolderCheck",
  },
  {
    title: "Thể hiện kỹ năng delivery",
    desc: "Năm 2026, biết deploy + đánh giá trung thực + giao tiếp tốt là thứ phân biệt bạn với đám đông. Không chỉ 'fit được mô hình'.",
    icon: "Rocket",
  },
];

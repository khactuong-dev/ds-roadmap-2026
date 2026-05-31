import type { JourneyStage, Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "pr1",
    number: 1,
    name: "Excel + SQL Dashboard",
    icon: "LayoutDashboard",
    color: "amber",
    difficulty: "Beginner",
    objective:
      "Trả lời câu hỏi mô tả ('chuyện gì đã xảy ra') bằng dữ liệu sạch và biểu đồ rõ ràng.",
    dataset: {
      label: "World Bank Indicators",
      url: "https://data.worldbank.org/indicator",
    },
    tech: ["PostgreSQL", "Excel / Google Sheets", "Power BI", "Tableau"],
    skills: ["SQL", "Làm sạch dữ liệu", "Storytelling", "BI tools"],
    deliverables: ["Dashboard tương tác", "Data dictionary", "README"],
  },
  {
    id: "pr2",
    number: 2,
    name: "Sales Analytics Dashboard",
    icon: "TrendingUp",
    color: "amber",
    difficulty: "Beginner",
    objective:
      "Phân tích xu hướng bán hàng, phát hiện bất thường, gợi ý hành động.",
    dataset: {
      label: "NYC TLC Trip Data",
      url: "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page",
    },
    tech: ["pandas", "Matplotlib / Seaborn", "Streamlit"],
    skills: ["EDA", "Time series cơ bản", "Visualization", "Communication"],
    deliverables: ["Streamlit dashboard", "Phân tích mùa vụ", "Brief 1 trang"],
  },
  {
    id: "pr3",
    number: 3,
    name: "Customer Segmentation",
    icon: "Users",
    color: "blue",
    difficulty: "Intermediate",
    objective: "Phân khúc khách hàng/quốc gia bằng học không giám sát.",
    dataset: {
      label: "UCI Retail / World Bank WDI",
      url: "https://archive.ics.uci.edu/",
    },
    tech: ["scikit-learn (KMeans, PCA)", "pandas", "Seaborn"],
    skills: ["Unsupervised ML", "PCA", "Tư duy phân khúc", "Diễn giải kết quả"],
    deliverables: ["Notebook phân khúc", "Memo diễn giải các cụm"],
  },
  {
    id: "pr4",
    number: 4,
    name: "Churn Prediction",
    icon: "UserMinus",
    color: "blue",
    difficulty: "Intermediate",
    objective:
      "Dự đoán khách hàng rời bỏ, xử lý dữ liệu mất cân bằng, bảo vệ lựa chọn metric.",
    dataset: {
      label: "Telco Churn (UCI / OpenML)",
      url: "https://www.openml.org/search?type=data",
    },
    tech: ["scikit-learn (logistic, RF, boosting)", "pipeline"],
    skills: ["Classification", "Xử lý imbalance", "Đánh giá trung thực", "Tránh leakage"],
    deliverables: ["So sánh ≥3 mô hình", "Memo bảo vệ metric", "Model card"],
  },
  {
    id: "pr5",
    number: 5,
    name: "ML API Service",
    icon: "Zap",
    color: "emerald",
    difficulty: "Advanced",
    objective:
      "Đóng gói mô hình thành dịch vụ người khác gọi được — thể hiện kỹ năng delivery.",
    dataset: {
      label: "Housing Price (OpenML)",
      url: "https://www.openml.org/search?type=data",
    },
    tech: ["FastAPI", "Docker", "MLflow", "DVC"],
    skills: ["MLOps", "Deployment", "Software engineering", "Reproducibility"],
    deliverables: ["FastAPI endpoint", "Dockerfile", "Experiment tracking", "Reproducible repo"],
  },
  {
    id: "pr6",
    number: 6,
    name: "RAG Application",
    icon: "Bot",
    color: "pink",
    difficulty: "Advanced",
    objective:
      "Xây ứng dụng hỏi-đáp thông minh trên tài liệu riêng bằng LLM + RAG.",
    dataset: {
      label: "Tài liệu của bạn (PDF, docs)",
      url: "https://modelcontextprotocol.io/",
    },
    tech: ["LLM API (OpenAI/Anthropic)", "Chroma / pgvector", "LangChain / LangGraph", "Streamlit"],
    skills: ["LLM", "RAG", "Embeddings", "Vector DB", "AI product thinking"],
    deliverables: ["App RAG chạy được", "Đánh giá chất lượng câu trả lời", "README kiến trúc"],
  },
];

export const PROJECT_BY_ID = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p]),
) as Record<string, Project>;

/** Visual learning journey — career progression ladder. */
export const JOURNEY: JourneyStage[] = [
  {
    id: "j0",
    role: "Beginner",
    level: "Job-Ready",
    difficulty: "⭐⭐",
    years: "6-12 tháng học",
    expectation: "Portfolio 3-4 project, pass phỏng vấn entry-level.",
    color: "emerald",
  },
  {
    id: "j1",
    role: "Data Analyst",
    level: "Junior → Mid",
    difficulty: "⭐⭐",
    years: "0-2 năm",
    expectation: "SQL/code vững, dashboard & báo cáo, trả lời câu hỏi kinh doanh.",
    color: "amber",
  },
  {
    id: "j2",
    role: "Data Scientist",
    level: "Mid-level",
    difficulty: "⭐⭐⭐",
    years: "2-4 năm",
    expectation: "Tự chủ project, mô hình dự đoán, thiết kế thí nghiệm, ra quyết định kỹ thuật.",
    color: "blue",
  },
  {
    id: "j3",
    role: "ML Engineer",
    level: "Senior track",
    difficulty: "⭐⭐⭐⭐",
    years: "4-7 năm",
    expectation: "Deploy & vận hành mô hình production, thiết kế hệ thống, mentor.",
    color: "purple",
  },
  {
    id: "j4",
    role: "AI Engineer",
    level: "Lead / Principal",
    difficulty: "⭐⭐⭐⭐⭐",
    years: "7+ năm",
    expectation: "Xây sản phẩm AI/LLM, định hướng kỹ thuật toàn đội/tổ chức.",
    color: "pink",
  },
];

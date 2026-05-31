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
      "Answer descriptive questions ('what happened') with clean data and clear charts.",
    dataset: {
      label: "World Bank Indicators",
      url: "https://data.worldbank.org/indicator",
    },
    tech: ["PostgreSQL", "Excel / Google Sheets", "Power BI", "Tableau"],
    skills: ["SQL", "Data cleaning", "Storytelling", "BI tools"],
    deliverables: ["Interactive dashboard", "Data dictionary", "README"],
    repo: { name: "metabase/metabase", url: "https://github.com/metabase/metabase", stars: "47k" },
  },
  {
    id: "pr2",
    number: 2,
    name: "Sales Analytics Dashboard",
    icon: "TrendingUp",
    color: "amber",
    difficulty: "Beginner",
    objective:
      "Analyze sales trends, spot anomalies, and recommend actions.",
    dataset: {
      label: "NYC TLC Trip Data",
      url: "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page",
    },
    tech: ["pandas", "Matplotlib / Seaborn", "Streamlit"],
    skills: ["EDA", "Basic time series", "Visualization", "Communication"],
    deliverables: ["Streamlit dashboard", "Seasonality analysis", "One-page brief"],
    repo: { name: "streamlit/streamlit", url: "https://github.com/streamlit/streamlit", stars: "45k" },
  },
  {
    id: "pr3",
    number: 3,
    name: "Customer Segmentation",
    icon: "Users",
    color: "blue",
    difficulty: "Intermediate",
    objective: "Segment customers/countries with unsupervised learning.",
    dataset: {
      label: "UCI Retail / World Bank WDI",
      url: "https://archive.ics.uci.edu/",
    },
    tech: ["scikit-learn (KMeans, PCA)", "pandas", "Seaborn"],
    skills: ["Unsupervised ML", "PCA", "Segmentation thinking", "Interpreting results"],
    deliverables: ["Segmentation notebook", "Memo interpreting the clusters"],
    repo: { name: "scikit-learn/scikit-learn", url: "https://github.com/scikit-learn/scikit-learn", stars: "66k" },
  },
  {
    id: "pr4",
    number: 4,
    name: "Churn Prediction",
    icon: "UserMinus",
    color: "blue",
    difficulty: "Intermediate",
    objective:
      "Predict customer churn, handle imbalanced data, and defend your metric choice.",
    dataset: {
      label: "Telco Churn (UCI / OpenML)",
      url: "https://www.openml.org/search?type=data",
    },
    tech: ["scikit-learn (logistic, RF, boosting)", "pipeline"],
    skills: ["Classification", "Imbalance handling", "Honest evaluation", "Avoiding leakage"],
    deliverables: ["3+ model comparison", "Metric-defense memo", "Model card"],
    repo: { name: "dmlc/xgboost", url: "https://github.com/dmlc/xgboost", stars: "28k" },
  },
  {
    id: "pr5",
    number: 5,
    name: "ML API Service",
    icon: "Zap",
    color: "emerald",
    difficulty: "Advanced",
    objective:
      "Package a model into a service others can call — show off delivery skills.",
    dataset: {
      label: "Housing Price (OpenML)",
      url: "https://www.openml.org/search?type=data",
    },
    tech: ["FastAPI", "Docker", "MLflow", "DVC"],
    skills: ["MLOps", "Deployment", "Software engineering", "Reproducibility"],
    deliverables: ["FastAPI endpoint", "Dockerfile", "Experiment tracking", "Reproducible repo"],
    repo: { name: "fastapi/fastapi", url: "https://github.com/fastapi/fastapi", stars: "99k" },
  },
  {
    id: "pr6",
    number: 6,
    name: "RAG Application",
    icon: "Bot",
    color: "pink",
    difficulty: "Advanced",
    objective:
      "Build a smart Q&A app over your own documents using an LLM + RAG.",
    dataset: {
      label: "Your own documents (PDF, docs)",
      url: "https://modelcontextprotocol.io/",
    },
    tech: ["LLM API (OpenAI/Anthropic)", "Chroma / pgvector", "LangChain / LangGraph", "Streamlit"],
    skills: ["LLM", "RAG", "Embeddings", "Vector DB", "AI product thinking"],
    deliverables: ["Working RAG app", "Answer-quality evaluation", "Architecture README"],
    repo: { name: "langchain-ai/langchain", url: "https://github.com/langchain-ai/langchain", stars: "138k" },
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
    years: "6-12 months learning",
    expectation: "A portfolio of 3-4 projects; pass an entry-level interview.",
    color: "emerald",
  },
  {
    id: "j1",
    role: "Data Analyst",
    level: "Junior → Mid",
    difficulty: "⭐⭐",
    years: "0-2 years",
    expectation: "Solid SQL/code, dashboards & reports, answering business questions.",
    color: "amber",
  },
  {
    id: "j2",
    role: "Data Scientist",
    level: "Mid-level",
    difficulty: "⭐⭐⭐",
    years: "2-4 years",
    expectation: "Own projects, build predictive models, design experiments, make technical calls.",
    color: "blue",
  },
  {
    id: "j3",
    role: "ML Engineer",
    level: "Senior track",
    difficulty: "⭐⭐⭐⭐",
    years: "4-7 years",
    expectation: "Deploy & operate production models, design systems, mentor.",
    color: "purple",
  },
  {
    id: "j4",
    role: "AI Engineer",
    level: "Lead / Principal",
    difficulty: "⭐⭐⭐⭐⭐",
    years: "7+ years",
    expectation: "Build AI/LLM products and set technical direction across the org.",
    color: "pink",
  },
];

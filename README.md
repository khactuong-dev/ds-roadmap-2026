# Data Science Roadmap 2026 — Interactive Learning Experience

Một website học tập tương tác, tái cấu trúc từ handbook *“Beginner Data Science
Roadmap for 2026”* thành một sản phẩm web hiện đại theo phong cách
Linear / Vercel / roadmap.sh.

> KHÔNG phải trang đọc PDF. Toàn bộ nội dung được mô hình hóa thành dữ liệu có
> kiểu (typed data) và render lại thành các trải nghiệm tương tác.

## Tech Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (design tokens trong `app/globals.css`)
- **Motion** (Framer Motion) cho animation
- **Lucide** icons

## Chạy dự án

```bash
npm install      # đã cài sẵn
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # chạy bản production
```

## Các section

| # | Section | Mô tả |
|---|---------|------|
| 1 | **Hero + Stats** | Tiêu đề lớn, counter động (phase / khóa học / project / thời gian) |
| 2 | **Interactive Roadmap** | 10 phase dạng Timeline & Graph (lane theo track). Click → detail drawer với mục tiêu, kỹ năng, công cụ, deliverables, **checklist tương tác**, khóa học |
| 3 | **Study Plans** | Tab 6 / 9 / 12 tháng — timeline milestone |
| 4 | **Course Catalog** | 50+ khóa học, lọc theo chủ đề / cấp độ / miễn phí + tìm kiếm |
| 5 | **Learning Dashboard** | Progress ring + thanh tiến độ theo phase (lưu `localStorage`) |
| 6 | **Portfolio** | 6 project cards (thumbnail, difficulty, skills, dataset, deliverables) |
| 7 | **Career Paths** | 5 hướng nghề tương tác: skills, project, thời gian, lương tham khảo, khóa học |
| 8 | **Visual Journey** | Bậc thang thăng tiến Beginner → AI Engineer |
| 9 | **AI Engineering 2026** | Modern AI Stack (LLM, RAG, Vector DB, LangGraph, MCP, Agents) — gắn cờ *Advanced* |
| 10 | **Principles + CTA** | 3 nguyên tắc vàng |

## Cấu trúc thư mục

```
app/
  layout.tsx          # fonts, metadata, theme
  globals.css         # 🎨 design system (tokens, glass, gradients)
  page.tsx            # lắp ráp các section
components/
  layout/             # navbar, footer
  sections/           # hero, roadmap, courses, dashboard, …
  ui/                 # primitives, course-card, icon, counter, reveal
lib/
  types.ts            # kiểu dữ liệu
  phases.ts           # 10 learning phases
  courses.ts          # course catalog
  careers.ts          # career paths + salary
  projects.ts         # portfolio + journey
  plans.ts            # 6/9/12-month plans
  site.ts             # stats, nav, AI stack, principles
  colors.ts           # bảng màu theo track (CSS vars)
  use-progress.ts     # hook tiến độ (localStorage)
```

## Nguồn nội dung

Mọi link khóa học dẫn tới nguồn chính thống (Andrew Ng, DeepLearning.AI,
Stanford, Harvard, MIT, Google, Kaggle, official docs). Mức lương là **ước
lượng tham khảo** từ dữ liệu thị trường công khai (US BLS 2024 + dải IT Việt Nam).

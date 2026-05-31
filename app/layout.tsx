import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data Science Roadmap 2026 — Beginner → AI Engineer",
  description:
    "Lộ trình học Data Science tương tác 2026: 10 phases, 50+ khóa học miễn phí, 6 portfolio project và 5 hướng nghề nghiệp. Từ con số 0 đến AI Engineer.",
  keywords: [
    "data science roadmap",
    "machine learning",
    "AI engineer",
    "lộ trình data science 2026",
    "học data science",
  ],
  authors: [{ name: "DS Roadmap 2026" }],
  openGraph: {
    title: "Data Science Roadmap 2026",
    description: "A complete beginner-to-AI-engineer learning journey.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

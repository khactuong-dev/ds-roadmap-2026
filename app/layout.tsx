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
    "An interactive 2026 Data Science learning roadmap: 10 phases, 50+ free courses, 6 portfolio projects, and 5 career paths. From zero to AI Engineer.",
  keywords: [
    "data science roadmap",
    "machine learning",
    "AI engineer",
    "data science roadmap 2026",
    "learn data science",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Roadmap } from "@/components/sections/roadmap";
import { Plans } from "@/components/sections/plans";
import { Courses } from "@/components/sections/courses";
import { Dashboard } from "@/components/sections/dashboard";
import { Portfolio } from "@/components/sections/portfolio";
import { Careers } from "@/components/sections/careers";
import { Journey } from "@/components/sections/journey";
import { AIStack } from "@/components/sections/ai-stack";
import { Principles } from "@/components/sections/principles";

function Divider() {
  return (
    <div className="mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Roadmap />
        <Divider />
        <Plans />
        <Divider />
        <Courses />
        <Divider />
        <Dashboard />
        <Divider />
        <Portfolio />
        <Divider />
        <Careers />
        <Divider />
        <Journey />
        <Divider />
        <AIStack />
        <Divider />
        <Principles />
      </main>
      <Footer />
    </>
  );
}

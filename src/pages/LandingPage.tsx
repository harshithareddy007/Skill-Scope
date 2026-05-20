import Navbar from "../components/Navbar";

import HeroSection from "../components/HeroSection";

import MetricsSection from "../components/MetricsSection";

import FeatureCards from "../components/FeatureCards";

import SolutionsSection from "../components/SolutionsSection";

import RoadmapsSection from "../components/RoadmapsSection";

import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg-primary)] text-white">
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* BASE */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#15110d_0%,#070707_55%,#040404_100%)]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.018]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        {/* GLOWS */}

        <div className="absolute top-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[#FF4400]/[0.05] blur-[180px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#FF4400]/[0.03] blur-[180px]" />
      </div>

      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <div className="relative">
        {/* DEMO BADGE */}

        <div className="absolute left-1/2 top-28 z-20 -translate-x-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#FF4400] backdrop-blur-xl">
            <Sparkles size={14} />

            UI/UX Demo Preview
          </div>
        </div>

        <HeroSection />
      </div>

      {/* =========================================
          METRICS
      ========================================= */}

      <MetricsSection />

      {/* =========================================
          FEATURES
      ========================================= */}

      <FeatureCards />

      {/* =========================================
          SOLUTIONS
      ========================================= */}

      <SolutionsSection />

      {/* =========================================
          ROADMAPS
      ========================================= */}

      <RoadmapsSection />

      {/* =========================================
          REVIEW NOTE
      ========================================= */}

      <section className="relative px-6 py-10">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-8 text-center backdrop-blur-xl">
          {/* TOP LINE */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

          <h2 className="text-2xl font-semibold tracking-[-0.04em]">
            This is a UI/UX Concept Preview
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
            SkillScope AI is currently in prototype stage and shared
            specifically for interface, interaction, and visual design feedback.
            Some features, AI systems, and backend workflows are simplified for
            demonstration purposes.
          </p>
        </div>
      </section>

      {/* =========================================
          FLOATING DEMO BADGE
      ========================================= */}

      <div className="fixed bottom-5 right-5 z-50">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 px-4 py-2 text-xs font-medium text-[#FF4400] backdrop-blur-xl">
          <div className="h-2 w-2 rounded-full bg-[#FF4400] animate-pulse" />

          Demo Preview
        </div>
      </div>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="relative mt-10 overflow-hidden border-t border-[var(--border-primary)]">
        {/* AMBIENT GLOWS */}

        <div className="absolute inset-0 overflow-hidden">
          {/* LEFT GLOW */}

          <div className="absolute left-[-120px] top-[-40px] h-[220px] w-[420px] rounded-full bg-[var(--accent)]/10 blur-[120px]" />

          {/* RIGHT GLOW */}

          <div className="absolute right-[-120px] top-[-40px] h-[220px] w-[420px] rounded-full bg-[var(--accent-hover)]/10 blur-[140px]" />
        </div>

        {/* CONTENT */}

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 lg:px-12 md:flex-row">
          {/* LEFT */}

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />

            <h2 className="text-[18px] font-medium tracking-[-0.03em] text-white">
              SkillScope AI
            </h2>
          </div>

          {/* CENTER */}

          <p className="text-center text-[12px] text-gray-500">
            Built for UI/UX feedback, interaction testing, and portfolio
            showcase.
          </p>

          {/* RIGHT */}

          <p className="text-[13px] text-gray-500">
            © 2026 SkillScope AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
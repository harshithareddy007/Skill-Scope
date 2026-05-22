import DashboardTopbar from "../components/DashboardTopbar";

import {
  ArrowRight,
  CheckCircle2,
  Lock,
  FileText,
  Brain,
  Route,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  /* =========================================
     STATES
  ========================================= */

  const [hasResumeAnalysis, setHasResumeAnalysis] =
    useState(true);

  const [userName, setUserName] =
    useState("Harshu");

  /* =========================================
     DEMO LOAD
  ========================================= */

  useEffect(() => {
    setUserName("Harshu");
    setHasResumeAnalysis(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* =========================================
          TOPBAR
      ========================================= */}

      <DashboardTopbar />

      {/* =========================================
          DEMO BADGE
      ========================================= */}

      <div className="fixed bottom-5 right-5 z-[999]">
        <div className="rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 backdrop-blur-xl px-5 py-2.5 shadow-[0_0_30px_rgba(255,68,0,0.12)]">
          <span className="text-xs font-medium tracking-wide text-[#FF4400]">
            Demo Preview
          </span>
        </div>
      </div>

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
          MAIN CONTAINER
      ========================================= */}

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-10">
        {/* =========================================
            HERO
        ========================================= */}

        <section className="relative overflow-hidden rounded-[36px] border border-white/[0.12] bg-white/[0.03] px-10 py-9 md:px-14 md:py-12 shadow-md hover:shadow-lg hover:border-[#FF4400]/30 hover:bg-white/[0.04] transition-all duration-300">
          {/* TOP LINE */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

          {/* SOFT GLOW */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,68,0,0.08),transparent_45%)]" />

          <div className="relative z-10">
            {/* STATUS */}

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#00FF66] animate-pulse" />

              <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-zinc-500">
                Career Workspace Active
              </span>
            </div>

            {/* TITLE */}

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-5xl lg:text-6xl">
              Welcome back,
              <br />

              <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                {userName}.
              </span>
            </h1>

            {/* SUBTEXT */}

            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-zinc-400 md:text-lg">
              Continue building your AI-powered
              career system. Analyze your resume,
              unlock skill insights, and generate
              your adaptive growth roadmap.
            </p>
          </div>
        </section>

        {/* =========================================
            PROGRESS SECTION
        ========================================= */}

        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">
              Career Journey Progress
            </h2>

            <span className="text-sm text-zinc-500">
              {hasResumeAnalysis
                ? "1 of 3 stages completed"
                : "0 of 3 stages completed"}
            </span>
          </div>

          {/* PROGRESS BAR */}

          <div className="h-3 overflow-hidden rounded-full bg-white/[0.05]">
            <div
              className={`h-full rounded-full bg-[#FF4400] transition-all duration-200 ${
                hasResumeAnalysis
                  ? "w-[33%]"
                  : "w-[0%]"
              }`}
            />
          </div>

          {/* STAGES */}

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <ProgressStage
              title="Resume"
              status={
                hasResumeAnalysis
                  ? "Completed"
                  : "Pending"
              }
              active={hasResumeAnalysis}
              pending={!hasResumeAnalysis}
            />

            <ProgressStage
              title="Skill Gap"
              status={
                hasResumeAnalysis
                  ? "Unlocked"
                  : "Locked"
              }
              pending={hasResumeAnalysis}
            />

            <ProgressStage
              title="Roadmap"
              status="Locked"
            />
          </div>
        </section>

        {/* =========================================
            JOURNEY CARDS
        ========================================= */}

        <section className="mt-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* CARD 1 */}

            <JourneyCard
              icon={<FileText size={22} />}
              title="Resume Analysis"
              desc="Upload your resume and receive ATS optimization insights powered by AI."
              buttonText="Analyze Resume"
              buttonLink="/ResumeAnalysisPage"
              active
            />

            {/* CARD 2 */}

            <JourneyCard
              icon={<Brain size={22} />}
              title="Skill Gap Analysis"
              desc="Compare your profile against your target role and identify missing technical skills."
              buttonText="Analyze Skills"
              buttonLink="/skill-insights"
            />

            {/* CARD 3 */}

            <JourneyCard
              icon={<Route size={22} />}
              title="Career Roadmap"
              desc="Generate a personalized AI-guided learning roadmap tailored to your future role."
              buttonText="Generate Roadmap"
              buttonLink="/career-roadmap"
            />
          </div>
        </section>

        {/* =========================================
            QUICK STATS
        ========================================= */}

        <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard
            value="92%"
            label="ATS Optimization"
          />

          <StatCard
            value="14+"
            label="Skills Identified"
          />

          <StatCard
            value="3"
            label="Roadmaps Generated"
          />
        </section>

        {/* =========================================
            FOOTER
        ========================================= */}

        <footer className="mt-24 border-t border-white/[0.10] pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* LEFT */}

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12]">
                <div className="h-2 w-2 rounded-full bg-[#FF4400]" />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  SkillScope
                </h3>

                <p className="text-sm text-zinc-500">
                  AI-powered career growth
                  workspace.
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <button className="transition hover:text-white">
                Website Review
              </button>

              <button className="transition hover:text-white">
                Contact Us
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =========================================
   JOURNEY CARD
========================================= */

function JourneyCard({
  icon,
  title,
  desc,
  buttonText,
  buttonLink,
  active,
  locked,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  buttonText?: string;
  buttonLink?: string;
  active?: boolean;
  locked?: boolean;
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        border
        min-h-[320px]
        p-8
        transition-all
        duration-200
        hover:-translate-y-1
        ${
          active
            ? "border-[#FF4400]/20 bg-white/[0.03]"
              : "border-white/[0.12] bg-white/[0.03] hover:border-[#FF4400]/30 hover:bg-white/[0.04] hover:scale-[1.01]"
        }
      `}
    >
      {/* TOP LINE */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* GLOW */}

      {active && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,68,0,0.08),transparent_55%)]" />
      )}

      {/* CONTENT */}

      <div className="relative z-10 flex h-full flex-col">
        {/* ICON */}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] text-[#FF4400] shadow-sm">
          {locked ? (
            <Lock size={18} />
          ) : (
            icon
          )}
        </div>

        {/* TITLE */}

        <h3 className="mt-8 text-[28px] font-semibold leading-none tracking-[-0.04em]">
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
          {desc}
        </p>

        {/* BUTTON */}

        <div className="mt-auto pt-10">
          {locked ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-sm text-zinc-500">
              <Lock size={14} />
              Locked
            </div>
          ) : (
            <Link
              to={buttonLink || "#"}
              className="group inline-flex items-center gap-3 rounded-full bg-[#FF4400] px-5 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#ff5a1f]"
            >
              {buttonText}

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================
   PROGRESS STAGE
========================================= */

function ProgressStage({
  title,
  status,
  active,
  pending,
}: {
  title: string;
  status: string;
  active?: boolean;
  pending?: boolean;
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-4
        rounded-2xl
        border
        px-5
        py-5
        transition-all
        ${
          pending
            ? "border-[#FF4400]/15 bg-[#FF4400]/[0.03]"
            : "border-white/[0.12] bg-white/[0.03] hover:border-[#FF4400]/30 hover:bg-white/[0.04]"
        }
      `}
    >
      {/* ICON */}

      <div
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          ${
            active
              ? "bg-[#00FF66]/10 text-[#00FF66]"
              : pending
              ? "bg-[#FF4400]/10 text-[#FF4400]"
              : "bg-white/[0.04] text-zinc-500"
          }
        `}
      >
        {active ? (
          <CheckCircle2 size={17} />
        ) : (
          <Lock size={15} />
        )}
      </div>

      {/* TEXT */}

      <div>
        <p className="text-sm font-medium text-white">
          {title}
        </p>

        <p
          className={`text-xs ${
            pending
              ? "text-[#FF4400]"
              : active
              ? "text-[#00FF66]"
              : "text-zinc-500"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

/* =========================================
   STAT CARD
========================================= */

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/[0.12] bg-white/[0.03] p-8 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white">
        {value}
      </h3>

      <p className="mt-3 text-sm text-zinc-500">
        {label}
      </p>
    </div>
  );
}
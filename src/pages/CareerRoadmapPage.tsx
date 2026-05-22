import { useEffect, useState } from "react";

import DashboardTopbar from "../components/DashboardTopbar";

import {
  CheckCircle2,
  Clock3,
  BookOpen,
  ArrowRight,
  Target,
  Sparkles,
  Lock,
} from "lucide-react";

import { Link } from "react-router-dom";

/* =========================================
   DEMO ROADMAP PAGE
========================================= */

export default function CareerRoadmapPage() {
  /* =========================================
     DEMO STATES
  ========================================= */

  const [loading, setLoading] =
    useState(true);

  const [targetRole] =
    useState("Frontend Developer");

  const [
    completedSteps,
    setCompletedSteps,
  ] = useState<string[]>([]);

  /* =========================================
     DEMO ROADMAP
  ========================================= */

  const roadmap = [
    {
      title:
        "Master React Fundamentals",
      urgency: "High Priority",
      duration: "3 Weeks",
      resources:
        "React Docs, Scrimba, YouTube",
    },

    {
      title:
        "Build Responsive UIs with Tailwind CSS",
      urgency: "Medium Priority",
      duration: "1 Week",
      resources:
        "Tailwind Docs, Frontend Mentor",
    },

    {
      title:
        "Learn TypeScript for Scalable Apps",
      urgency: "Medium Priority",
      duration: "2 Weeks",
      resources:
        "TypeScript Docs, Total TypeScript",
    },

    {
      title:
        "Develop Portfolio Projects",
      urgency: "High Priority",
      duration: "3 Weeks",
      resources:
        "GitHub, Personal Projects",
    },

    {
      title:
        "Practice API Integration",
      urgency: "Medium Priority",
      duration: "1 Week",
      resources:
        "REST API Tutorials, JSONPlaceholder",
    },
  ];

  /* =========================================
     FAKE LOADING
  ========================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () =>
      clearTimeout(timer);
  }, []);

  /* =========================================
     TOGGLE COMPLETE
  ========================================= */

  const toggleStepCompletion =
    (title: string) => {
      if (
        completedSteps.includes(
          title
        )
      ) {
        setCompletedSteps(
          completedSteps.filter(
            (step) =>
              step !== title
          )
        );
      } else {
        setCompletedSteps([
          ...completedSteps,
          title,
        ]);
      }
    };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* =========================================
          TOPBAR
      ========================================= */}

      <DashboardTopbar />

    
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

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-12">
        {/* =========================================
            HEADER
        ========================================= */}

        <section>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#FF4400]" />

            <span className="text-[10px] uppercase tracking-[0.22em] font-mono text-zinc-500">
              AI Career Progression System
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-[-0.06em] leading-[0.95]">
            Career Roadmap
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] md:text-lg leading-relaxed text-zinc-400">
            Personalized learning roadmap
            generated using your resume,
            target role, and missing
            skills.
          </p>
        </section>

        {/* =========================================
            TARGET ROLE
        ========================================= */}

        <section className="mt-14">
          <div className="relative overflow-hidden rounded-[32px] border border-[#FF4400]/20 bg-white/[0.03] p-8 shadow-sm">
            {/* TOP LINE */}

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

            {/* GLOW */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,68,0,0.08),transparent_55%)]" />

            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF4400]/20 bg-[#FF4400]/10 text-[#FF4400]">
                <Target size={22} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Target Role
                </p>

                <h2 className="mt-1 text-3xl font-semibold tracking-tight">
                  {targetRole}
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            ROADMAP TITLE
        ========================================= */}

        <section className="mt-14">
          <h2 className="text-3xl font-semibold tracking-tight">
            Learning Roadmap
          </h2>

          <p className="mt-3 text-zinc-400">
            Complete each milestone to
            progress toward your target
            role.
          </p>
        </section>

        {/* =========================================
            LOADING
        ========================================= */}

        {loading ? (
          <div className="mt-10 rounded-[30px] border border-white/[0.12] bg-white/[0.03] p-10 text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="mx-auto h-12 w-12 rounded-full border-2 border-[#FF4400] border-t-transparent animate-spin" />

            <p className="mt-5 text-zinc-400">
              Generating your AI roadmap...
            </p>
          </div>
        ) : (
          <>
            {/* =========================================
                ROADMAP STEPS
            ========================================= */}

            <section className="mt-10 space-y-6">
              {roadmap.map(
                (
                  step,
                  index
                ) => (
                  <RoadmapCard
                    key={index}
                    number={String(
                      index + 1
                    )}
                    title={
                      step.title
                    }
                    urgency={
                      step.urgency
                    }
                    duration={
                      step.duration
                    }
                    resources={
                      step.resources
                    }
                    completed={completedSteps.includes(
                      step.title
                    )}
                    onComplete={() =>
                      toggleStepCompletion(
                        step.title
                      )
                    }
                  />
                )
              )}
            </section>

            {/* =========================================
                CTA
            ========================================= */}

            <section className="mt-16">
              <div className="rounded-[32px] border border-white/[0.12] bg-white/[0.03] p-10 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Ready to Recheck Your Resume?
                </h2>

                <p className="mt-4 text-lg text-zinc-400">
                  Update your resume and
                  analyze your new ATS
                  score.
                </p>

                <Link
                  to="/ResumeAnalysisPage"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF4400] px-6 py-4 text-sm font-medium transition-all duration-300 hover:bg-[#ff5a1f]"
                >
                  ATS Checker

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

/* =========================================
   ROADMAP CARD
========================================= */

function RoadmapCard({
  number,
  title,
  urgency,
  duration,
  resources,
  completed,
  onComplete,
}: {
  number: string;
  title: string;
  urgency: string;
  duration: string;
  resources: string;
  completed: boolean;
  onComplete: () => void;
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[30px]
        border
        p-8
        transition-all
        duration-300
        ${
          completed
            ? "border-[#00FF66]/20 bg-[#00FF66]/[0.03]"
            : "border-white/[0.12] bg-white/[0.03] hover:border-[#FF4400]/30 hover:bg-white/[0.04]"
        }
      `}
    >
      {/* TOP LINE */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CONTENT */}

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT */}

        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {number}. {title}
          </h3>

          {/* DETAILS */}

          <div className="mt-8 space-y-5">
            {/* PRIORITY */}

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF4400]/10 text-[#FF4400]">
                <Sparkles size={18} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Priority
                </p>

                <p className="text-sm text-white">
                  {urgency}
                </p>
              </div>
            </div>

            {/* DURATION */}

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-[#3B82F6]">
                <Clock3 size={18} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Estimated Duration
                </p>

                <p className="text-sm text-white">
                  {duration}
                </p>
              </div>
            </div>

            {/* RESOURCES */}

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#22C55E]">
                <BookOpen size={18} />
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Learning Resources
                </p>

                <p className="text-sm text-white">
                  {resources}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COMPLETE BUTTON */}

        <button
          onClick={onComplete}
          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-sm
            transition-all
            duration-300
            ${
              completed
                ? "border border-[#00FF66]/20 bg-[#00FF66]/10 text-[#00FF66]"
                : "border border-white/[0.08] text-zinc-400 hover:border-[#00FF66]/30 hover:bg-[#00FF66]/5 hover:text-[#00FF66]"
            }
          `}
        >
          {completed ? (
            <>
              <CheckCircle2
                size={16}
              />
              Completed
            </>
          ) : (
            <>
              <Lock size={16} />
              Mark as Complete
            </>
          )}
        </button>
      </div>
    </div>
  );
}
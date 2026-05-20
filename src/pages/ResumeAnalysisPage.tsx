import { useRef, useState } from "react";

import { Link } from "react-router-dom";

import DashboardTopbar from "../components/DashboardTopbar";

import {
  Upload,
  FileText,
  ArrowRight,
  FileCheck2,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ResumeAnalysisPage() {
  /* =========================================
     STATES
  ========================================= */

  const fileInputRef =
    useRef<HTMLInputElement | null>(
      null
    );

  const [uploadedFile, setUploadedFile] =
    useState<File | null>(null);

  const [
    uploadedFileName,
    setUploadedFileName,
  ] = useState("");

  const [isAnalyzed, setIsAnalyzed] =
    useState(false);

  const [atsScore, setAtsScore] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  const [
    improvementSuggestions,
    setImprovementSuggestions,
  ] = useState<string[]>([]);

  const [strongAreas, setStrongAreas] =
    useState<string[]>([]);

  const [missingSkills, setMissingSkills] =
    useState<string[]>([]);

  const [
    bestMatchingRoles,
    setBestMatchingRoles,
  ] = useState<string[]>([]);

  const [
    recruiterReadiness,
    setRecruiterReadiness,
  ] = useState("");

  const [error, setError] =
    useState("");

  /* =========================================
     DEMO ANALYSIS
  ========================================= */

  const handleResumeAnalysis =
    async () => {
      if (!uploadedFile) {
        setError(
          "Please upload a resume"
        );

        return;
      }

      setLoading(true);

      setError("");

      setIsAnalyzed(false);

      setTimeout(() => {
        setAtsScore(87);

        setImprovementSuggestions([
          "Add measurable project outcomes",
          "Improve ATS keyword alignment",
          "Use stronger action verbs",
          "Add GitHub project links",
        ]);

        setStrongAreas([
          "React",
          "UI/UX Design",
          "Problem Solving",
          "Frontend Development",
        ]);

        setMissingSkills([
          "TypeScript",
          "Testing",
          "System Design",
        ]);

        setBestMatchingRoles([
          "Frontend Developer",
          "UI Engineer",
          "Product Designer",
        ]);

        setRecruiterReadiness(
          "Your resume demonstrates strong frontend and design capabilities with excellent ATS readability and recruiter appeal."
        );

        setUploadedFileName(
          uploadedFile.name
        );

        setIsAnalyzed(true);

        setLoading(false);
      }, 2500);
    };

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#15110d_0%,#070707_55%,#040404_100%)]" />

        <div className="absolute inset-0 opacity-[0.018]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

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
              Resume Intelligence Engine
            </span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-[-0.06em] leading-[0.95]">
            Resume Analysis
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] md:text-lg leading-relaxed text-zinc-400">
            Upload your resume and receive
            AI-powered ATS insights,
            optimization recommendations,
            and recruiter readiness analysis.
          </p>
        </section>

        {/* =========================================
            TOP GRID
        ========================================= */}

        <section className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* UPLOAD CARD */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-8 min-h-[340px]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,68,0,0.08),transparent_55%)]" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] text-[#FF4400]">
                  <Upload size={22} />
                </div>

                <h2 className="mt-8 text-[30px] font-semibold tracking-[-0.04em]">
                  Upload Resume
                </h2>

                <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                  Upload your latest resume
                  to begin AI-powered ATS
                  optimization and recruiter
                  analysis.
                </p>

                <div className="mt-8 rounded-[28px] border border-dashed border-white/[0.08] bg-black/20 px-6 py-14 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 text-[#FF4400]">
                    {uploadedFile ||
                    uploadedFileName ? (
                      <FileCheck2
                        size={28}
                      />
                    ) : (
                      <FileText
                        size={28}
                      />
                    )}
                  </div>

                  {uploadedFile ||
                  uploadedFileName ? (
                    <>
                      <p className="mt-5 text-sm font-medium text-white">
                        {uploadedFile?.name ||
                          uploadedFileName}
                      </p>

                      <p className="mt-2 text-xs text-[#00FF66]">
                        Resume uploaded
                        successfully
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mt-5 text-sm text-zinc-300">
                        Drag & drop your
                        resume here
                      </p>

                      <p className="mt-2 text-xs text-zinc-500">
                        PDF, DOC, DOCX
                        supported
                      </p>
                    </>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(
                      event
                    ) => {
                      const file =
                        event.target
                          .files?.[0];

                      if (!file)
                        return;

                      setUploadedFile(
                        file
                      );
                    }}
                  />

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        fileInputRef.current?.click()
                      }
                      className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-[#FF4400]/25"
                    >
                      <Upload
                        size={16}
                      />

                      {uploadedFile
                        ? "Change Resume"
                        : "Select Resume"}
                    </button>

                    <button
                      disabled={
                        loading ||
                        !uploadedFile
                      }
                      onClick={
                        handleResumeAnalysis
                      }
                      className="inline-flex items-center gap-3 rounded-full bg-[#FF4400] px-5 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#ff5a1f] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Sparkles
                        size={16}
                      />

                      {loading
                        ? "Analyzing..."
                        : "Analyze Resume"}
                    </button>
                  </div>

                  {error && (
                    <p className="mt-5 text-sm text-red-400">
                      {error}
                    </p>
                  )}

                  {loading && (
                    <div className="mt-6 space-y-2">
                      <p className="text-sm text-[#FF4400] animate-pulse">
                        Parsing resume structure...
                      </p>

                      <p className="text-sm text-[#FF4400] animate-pulse">
                        Matching ATS keywords...
                      </p>

                      <p className="text-sm text-[#FF4400] animate-pulse">
                        Generating AI insights...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ATS SCORE */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-8 min-h-[340px]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-mono text-zinc-500">
                      ATS Analysis
                    </p>

                    <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.04em]">
                      ATS Score
                    </h2>
                  </div>

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#FF4400]/20 bg-[#FF4400]/10">
                    <span className="text-3xl font-semibold">
                      {atsScore}
                    </span>
                  </div>
                </div>

                <div className="mt-10 h-3 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="h-full rounded-full bg-[#FF4400] transition-all duration-700"
                    style={{
                      width: `${atsScore}%`,
                    }}
                  />
                </div>

                <div className="mt-10 space-y-4">
                  <ATSMetric
                    title="Keyword Match"
                    value={
                      isAnalyzed
                        ? "Strong Match"
                        : "Waiting"
                    }
                  />

                  <ATSMetric
                    title="Formatting"
                    value={
                      isAnalyzed
                        ? "Well Structured"
                        : "Waiting"
                    }
                  />

                  <ATSMetric
                    title="Readability"
                    value={
                      isAnalyzed
                        ? "High Readability"
                        : "Waiting"
                    }
                  />

                  <ATSMetric
                    title="Recruiter Readiness"
                    value={
                      isAnalyzed
                        ? "Interview Ready"
                        : "Waiting"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI INSIGHTS */}

        <section className="mt-8">
          <div className="rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10">
            <h2 className="text-[30px] font-semibold tracking-[-0.04em]">
              AI Suggestions & Insights
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Personalized recommendations
              generated from your resume.
            </p>

            <div className="mt-10 space-y-10">
              <InsightCard
                icon={
                  <Sparkles
                    size={18}
                  />
                }
                title="Improvements / AI Suggestions"
                analyzed={
                  isAnalyzed
                }
                emptyText="Upload your resume to receive AI suggestions."
                items={
                  improvementSuggestions
                }
              />

              <InsightCard
                icon={
                  <ShieldCheck
                    size={18}
                  />
                }
                title="Strong Areas"
                analyzed={
                  isAnalyzed
                }
                emptyText="Your strengths will appear here."
                items={strongAreas}
              />

              <InsightCard
                icon={
                  <AlertTriangle
                    size={18}
                  />
                }
                title="Missing Skills"
                analyzed={
                  isAnalyzed
                }
                emptyText="Skill gaps will appear here."
                items={
                  missingSkills
                }
              />

              <InsightCard
                icon={
                  <FileText
                    size={18}
                  />
                }
                title="Best Matching Roles"
                analyzed={
                  isAnalyzed
                }
                emptyText="Recommended roles will appear here."
                items={
                  bestMatchingRoles
                }
              />
            </div>

            <div className="mt-14 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Compare with your
                  target role
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Discover missing
                  skills and unlock
                  roadmap generation.
                </p>
              </div>

              <Link
                to="/skill-insights"
                className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-medium transition-all duration-300 ${
                  isAnalyzed
                    ? "bg-[#FF4400] hover:bg-[#ff5a1f]"
                    : "pointer-events-none bg-white/[0.06] text-zinc-500"
                }`}
              >
                View Skill Gap

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================================
   ATS METRIC
========================================= */

function ATSMetric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-black/20 px-5 py-4">
      <p className="text-sm text-zinc-300">
        {title}
      </p>

      <span className="text-sm text-zinc-500">
        {value}
      </span>
    </div>
  );
}

/* =========================================
   INSIGHT CARD
========================================= */

function InsightCard({
  title,
  items,
  analyzed,
  emptyText,
  icon,
}: {
  title: string;
  items: string[];
  analyzed: boolean;
  emptyText: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF4400]/20 bg-[#FF4400]/10 text-[#FF4400]">
          {icon}
        </div>

        <h3 className="text-lg font-medium text-white">
          {title}
        </h3>
      </div>

      <div className="mt-5 rounded-2xl border border-white/[0.06] bg-black/20 p-6">
        {analyzed ? (
          <ul className="space-y-3 text-sm leading-relaxed text-zinc-300">
            {items.length >
            0 ? (
              items.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={
                      index
                    }
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={
                        15
                      }
                      className="mt-1 text-[#FF4400]"
                    />

                    <span>
                      {item}
                    </span>
                  </li>
                )
              )
            ) : (
              <p className="text-zinc-500">
                No data available.
              </p>
            )}
          </ul>
        ) : (
          <p className="text-sm leading-relaxed text-zinc-500">
            {emptyText}
          </p>
        )}
      </div>
    </div>
  );
}
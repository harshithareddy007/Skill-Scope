import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import DashboardTopbar from "../components/DashboardTopbar";

import {
  Brain,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Target,
  Sparkles,
} from "lucide-react";

export default function SkillInsightsPage() {
  /* =========================================
     STATES
  ========================================= */

  const [targetRole, setTargetRole] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [matchPercentage, setMatchPercentage] =
    useState(0);

  const [verifiedSkills, setVerifiedSkills] =
    useState<string[]>([]);

  const [missingSkills, setMissingSkills] =
    useState<string[]>([]);

  const [
    recommendedSkills,
    setRecommendedSkills,
  ] = useState<string[]>([]);

  const [resumeSkills, setResumeSkills] =
    useState<string[]>([]);

  /* =========================================
     DEMO DATA
  ========================================= */

  useEffect(() => {
    setResumeSkills([
      "React",
      "UI/UX Design",
      "JavaScript",
      "Frontend Development",
      "Figma",
      "Problem Solving",
    ]);
  }, []);

  /* =========================================
     TARGET ROLE SKILLS
  ========================================= */

  const roleSkills: Record<
    string,
    string[]
  > = {
    "Frontend Developer": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "API Integration",
      "JavaScript",
      "Git",
    ],

    "UI/UX Designer": [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Systems",
      "UX Writing",
      "Interaction Design",
    ],

    "Backend Developer": [
      "Node.js",
      "Express.js",
      "Database Design",
      "Authentication",
      "REST APIs",
      "MongoDB",
      "System Design",
    ],

    "AI Engineer": [
      "Python",
      "Machine Learning",
      "LLMs",
      "Prompt Engineering",
      "Deep Learning",
      "PyTorch",
      "Data Processing",
    ],
  };

  /* =========================================
     ANALYZE SKILL GAP
  ========================================= */

  const handleAnalyzeSkillGap =
    async () => {
      if (!targetRole)
        return;

      setLoading(true);

      setTimeout(() => {
        const userSkills =
          resumeSkills.map(
            (skill) =>
              skill.toLowerCase()
          );

        const targetSkills =
          roleSkills[
            targetRole
          ] || [];

        const verified =
          targetSkills.filter(
            (skill) =>
              userSkills.some(
                (
                  userSkill
                ) =>
                  userSkill.includes(
                    skill.toLowerCase()
                  ) ||
                  skill
                    .toLowerCase()
                    .includes(
                      userSkill
                    )
              )
          );

        const missing =
          targetSkills.filter(
            (skill) =>
              !verified.includes(
                skill
              )
          );

        const percentage =
          Math.max(
            Math.round(
              (verified.length /
                targetSkills.length) *
                100
            ),
            0
          );

        setVerifiedSkills(
          verified
        );

        setMissingSkills(
          missing
        );

        setRecommendedSkills([
          ...missing,
          "Build portfolio projects",
          "Practice interview preparation",
          "Improve Git & collaboration",
        ]);

        setMatchPercentage(
          percentage
        );

        setLoading(false);
      }, 2000);
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
              Skill Intelligence System
            </span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-[-0.06em] leading-[0.95]">
            Skill Gap Analysis
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] md:text-lg leading-relaxed text-zinc-400">
            Compare your resume with your
            target role and identify the
            exact skills required to become
            job-ready.
          </p>
        </section>

        {/* =========================================
            TARGET ROLE SECTION
        ========================================= */}

        <section className="mt-14">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,68,0,0.08),transparent_55%)]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF4400]/20 bg-[#FF4400]/10 text-[#FF4400]">
                  <Target size={22} />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Select Target Role
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Choose your desired
                    career path for AI
                    comparison.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <select
                  value={targetRole}
                  onChange={(e) =>
                    setTargetRole(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-black/30
                    px-5
                    py-4
                    text-sm
                    text-zinc-300
                    outline-none
                    transition-all
                    focus:border-[#FF4400]/40
                  "
                >
                  <option value="">
                    Select Target Role
                  </option>

                  <option>
                    Frontend Developer
                  </option>

                  <option>
                    UI/UX Designer
                  </option>

                  <option>
                    Backend Developer
                  </option>

                  <option>
                    AI Engineer
                  </option>
                </select>

                <button
                  onClick={
                    handleAnalyzeSkillGap
                  }
                  disabled={
                    !targetRole ||
                    loading
                  }
                  className="
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#FF4400]
                    px-6
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-[#ff5a1f]
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  <Sparkles size={16} />

                  {loading
                    ? "Analyzing..."
                    : "Analyze Skill Gap"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            MATCH CARD
        ========================================= */}

        <section className="mt-8">
          <div className="relative overflow-hidden rounded-[32px] border border-[#FF4400]/20 bg-white/[0.02] p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#FF4400]/20 bg-[#FF4400]/10">
                <span className="text-3xl font-semibold">
                  {matchPercentage}%
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-[30px] font-semibold tracking-[-0.04em]">
                  Match Percentage
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  AI-powered compatibility
                  score based on your resume
                  and selected role.
                </p>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="h-full rounded-full bg-[#FF4400] transition-all duration-700"
                    style={{
                      width: `${matchPercentage}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            COMPARISON
        ========================================= */}

        <section className="mt-8">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight">
            Resume vs Target Role
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-[30px] border border-white/[0.06] bg-white/[0.02] p-8 min-h-[260px]">
              <h3 className="text-lg font-semibold">
                Your Resume Skills
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {resumeSkills.map(
                  (
                    skill,
                    index
                  ) => (
                    <SkillBadge
                      key={index}
                      text={skill}
                    />
                  )
                )}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/[0.06] bg-white/[0.02] p-8 min-h-[260px]">
              <h3 className="text-lg font-semibold">
                Target Role Skills
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {targetRole ? (
                  roleSkills[
                    targetRole
                  ]?.map(
                    (
                      skill,
                      index
                    ) => (
                      <SkillBadge
                        key={index}
                        text={skill}
                      />
                    )
                  )
                ) : (
                  <SkillBadge text="Select Target Role" />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SKILL SECTIONS
        ========================================= */}

        <section className="mt-8 space-y-6">
          <SkillSection
            title="Verified Skills"
            desc="Skills successfully matched with your target role."
            icon={
              <CheckCircle2
                size={18}
              />
            }
            iconColor="text-[#00FF66]"
            borderColor="border-[#00FF66]/15"
            bgColor="bg-[#00FF66]/5"
            items={verifiedSkills}
          />

          <SkillSection
            title="Missing Skills"
            desc="Important skills currently missing from your profile."
            icon={
              <AlertCircle
                size={18}
              />
            }
            iconColor="text-[#FF4400]"
            borderColor="border-[#FF4400]/15"
            bgColor="bg-[#FF4400]/5"
            items={missingSkills}
          />

          <SkillSection
            title="Recommended Next Skills"
            desc="AI recommendations for your next learning priorities."
            icon={
              <Brain size={18} />
            }
            iconColor="text-[#3B82F6]"
            borderColor="border-[#3B82F6]/15"
            bgColor="bg-[#3B82F6]/5"
            items={
              recommendedSkills
            }
          />
        </section>

        {/* =========================================
            CTA
        ========================================= */}

        <section className="mt-10">
          <div className="rounded-[32px] border border-[#FF4400]/20 bg-white/[0.02] p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Generate Your AI Roadmap
                </h2>

                <p className="mt-3 text-zinc-400">
                  Build a personalized
                  roadmap based on your
                  missing skills and target
                  role.
                </p>
              </div>

              <Link
                to="/career-roadmap"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#FF4400]
                  px-6
                  py-4
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-[#ff5a1f]
                "
              >
                View Roadmap

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
   SKILL SECTION
========================================= */

function SkillSection({
  title,
  desc,
  icon,
  iconColor,
  borderColor,
  bgColor,
  items,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconColor: string;
  borderColor: string;
  bgColor: string;
  items: string[];
}) {
  return (
    <div
      className={`rounded-[30px] border ${borderColor} bg-white/[0.02] p-8`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bgColor} ${iconColor}`}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {desc}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/[0.06] bg-black/20 p-6">
        {items.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {items.map(
              (item, index) => (
                <SkillBadge
                  key={index}
                  text={item}
                />
              )
            )}
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-zinc-500">
            No insights available
            yet.
          </p>
        )}
      </div>
    </div>
  );
}

/* =========================================
   SKILL BADGE
========================================= */

function SkillBadge({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
      {text}
    </div>
  );
}
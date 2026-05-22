import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  GraduationCap,
  Code2,
  Briefcase,
  Sparkles,
  Terminal,
} from "lucide-react";

const solutions = [
  {
    icon: GraduationCap,

    title: "Students",

    stat: "92%",

    label: "Roadmap Completion",

    description:
      "Transform confusion into structured career direction with adaptive AI-generated growth systems.",
  },

  {
    icon: Code2,

    title: "Developers",

    stat: "ATS+",

    label: "Engineering Optimization",

    description:
      "Optimize technical resumes, portfolios, and skill alignment for modern engineering roles.",
  },

  {
    icon: Briefcase,

    title: "Career Switchers",

    stat: "3X",

    label: "Transition Clarity",

    description:
      "Identify transferable skills, missing capabilities, and the fastest transition pathways.",
  },

  {
    icon: Sparkles,

    title: "Job Seekers",

    stat: "AI",

    label: "Resume Intelligence",

    description:
      "Gain recruiter-focused resume insights, interview alignment, and strategic positioning.",
  },
];

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const active = solutions[activeIndex];

  const sideCards = solutions.filter((_, i) => i !== activeIndex);

  return (
    <section
      id="solutions"
      className="relative min-h-auto overflow-hidden bg-[var(--bg-primary)] flex items-center mt-[94px] py-16 md:py-24 lg:py-32"
    >
      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="absolute inset-0 bg-[var(--bg-primary)]" />
      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 md:py-6 lg:py-10">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="max-w-3xl">
          {/* LABEL */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--border-primary)] bg-[var(--surface-secondary)]/70 backdrop-blur-xl">
            <Terminal size={14} className="text-[var(--accent)]" />

            <span className="text-[11px] uppercase tracking-[0.18em] font-mono text-zinc-300">
              Solutions Architecture
            </span>
          </div>

          {/* HEADING */}

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.06em] font-semibold">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Built for every stage of
            </span>

            <br />

            <span className="text-[var(--accent)]">career evolution.</span>
          </h2>

          {/* SUBTEXT */}

          <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-400">
            SkillScope adapts dynamically to different career journeys —
            intelligently reshaping workflows for every user type.
          </p>
        </div>

        {/* =========================================
            MAIN LAYOUT
        ========================================= */}

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto md:auto-rows-[330px]">
          {/* =========================================
              ACTIVE CARD
          ========================================= */}

          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="col-span-1 md:col-span-12 lg:col-span-7 cursor-glow-target relative overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[36px] border border-white/[0.05] p-4 sm:p-5 md:p-7 shadow-sm hover:shadow-[0_0_30px_rgba(255,68,0,0.08)] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 min-h-[280px] md:min-h-auto"
            >
              {/* GLOW */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,93,42,0.12),transparent_60%)]" />

              {/* =========================================
                  TOP
              ========================================= */}

              <div className="relative z-10 flex items-start justify-between">
                {/* LEFT */}

                <div>
                  <div className="flex items-center justify-center w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/[0.12] bg-[var(--surface-primary)] shadow-md hover:shadow-lg hover:border-[#FF4400]/30 hover:bg-white/[0.04] transition-all duration-300">
                    <active.icon
                      size={20}
                      className="text-[var(--accent)] sm:w-[24px] md:w-[28px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.06em] font-semibold">
                    <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                      {active.title}
                    </span>
                  </h3>
                </div>

                {/* RIGHT */}

                <div className="text-right">
                  <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-none tracking-[-0.06em] font-semibold text-[var(--accent)]">
                    {active.stat}
                  </h4>

                  <p className="mt-2 md:mt-3 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-mono text-zinc-500">
                    {active.label}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="relative z-10 mt-4 md:mt-6 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400"
              >
                {active.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* =========================================
              SIDE STACK
          ========================================= */}

          <div className="col-span-1 md:col-span-12 lg:col-span-5 flex flex-col gap-3 md:gap-4">
            {sideCards.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  layout
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`
group
cursor-glow-target
relative
overflow-hidden
rounded-[18px] sm:rounded-[24px] md:rounded-[30px]
border border-white/[0.05]
px-4 sm:px-5 md:px-6 py-4 md:py-5
transition-all duration-300
hover:border-[var(--accent)]/15
flex flex-col justify-between
shadow-sm hover:shadow-[0_0_30px_rgba(255,68,0,0.08)] hover:-translate-y-1 hover:scale-[1.01]
min-h-[100px] md:min-h-auto
`}
                >
                  {/* HOVER GLOW */}

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(232,93,42,0.10),transparent_55%)]" />

                  {/* TOP */}

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* ICON */}

                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl border border-white/[0.05] bg-[var(--surface-primary)]">
                        <Icon size={18} className="text-[var(--accent)] sm:w-[20px] md:w-[20px]" />
                      </div>

                      {/* TITLE */}

                      <h4 className="text-sm sm:text-base md:text-lg leading-tight tracking-[-0.05em] font-semibold">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                          {item.title}
                        </span>
                      </h4>
                    </div>

                    {/* STAT */}

                    <span className="text-base sm:text-lg md:text-xl font-semibold tracking-[-0.05em] text-[var(--accent)] flex-shrink-0">
                      {item.stat}
                    </span>
                  </div>

                  {/* LABEL */}

                  <p className="relative z-10 text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.15em] md:tracking-[0.18em] font-mono text-zinc-600 pl-12 sm:pl-14 md:pl-16">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

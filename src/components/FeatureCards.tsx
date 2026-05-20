import { BrainCircuit, Radar, Route, Terminal } from "lucide-react";

import SpotlightCard from "./SpotlightCard";

export default function FeatureCards() {
  const features = [
    {
      title: "ATS Intelligence",

      description:
        "AI-powered resume scoring, keyword optimization, and recruiter compatibility analysis.",

      status: "Resume Intelligence Active",

      icon: BrainCircuit,

      tag: "CORE_SYSTEM",
    },

    {
      title: "Skill Gap Detection",

      description:
        "Identify missing skills and compare your profile against industry role requirements.",

      status: "Real-time Skill Analysis",

      icon: Radar,

      tag: "ANALYSIS_MODULE",
    },

    {
      title: "Career Roadmaps",

      description:
        "Generate structured AI-guided growth paths tailored to your target career.",

      status: "Personalized Growth Routing",

      icon: Route,

      tag: "ROUTING_ENGINE",
    },
  ];

  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-6 lg:px-12 py-28"
    >
      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.018]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* =========================================
            TOP SECTION
        ========================================= */}

        <div className="max-w-6xl">
          {/* LABEL */}

          <div className="flex items-center gap-3 mb-6">
            <Terminal size={14} className="text-[var(--accent)]" />

            <p className="text-[var(--accent)] text-[10px] uppercase tracking-[0.28em] font-mono">
              Platform Capabilities
            </p>
          </div>

          {/* HEADING */}

          <h2 className="text-[54px] leading-[1.1] tracking-[-0.04em] font-semibold">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              Everything required
            </span>

            <br />

            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              to scale your
            </span>

            <span className="text-[var(--accent)]"> career architecture.</span>
          </h2>

          {/* SUBTEXT */}

          <p className="mt-4 text-[18px] leading-relaxed text-zinc-400 max-w-3xl">
            SkillScope combines ATS intelligence, skill-gap analysis, and
            AI-powered career systems into one futuristic workflow.
          </p>
        </div>

        {/* =========================================
            FEATURE CARDS
        ========================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <SpotlightCard
                key={index}
                className="group relative h-[360px] rounded-[30px] overflow-hidden border border-[var(--border-primary)] bg-white/[0.025] backdrop-blur-md"
              >
                {/* =========================================
                    CARD LIGHTING
                ========================================= */}

                {/* TOP SHINE */}

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* HOVER GLOW */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(232,93,42,0.12),transparent_45%)]" />

                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="relative z-10 flex flex-col h-full p-7">
                  {/* TOP */}

                  <div className="flex items-start justify-between">
                    {/* ICON */}

                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                      <Icon
                        size={22}
                        className="text-zinc-400 transition-all duration-500 group-hover:text-[var(--accent)] group-hover:scale-110"
                      />
                    </div>

                    {/* TAG */}

                    <span className="px-3 py-1 rounded-full border border-[var(--accent)]/10 bg-[var(--accent)]/[0.05] text-[9px] uppercase tracking-[0.2em] font-mono text-zinc-500">
                      {feature.tag}
                    </span>
                  </div>

                  {/* TEXT */}

                  <div className="mt-7">
                    <h3 className="text-[34px] leading-[0.95] tracking-[-0.055em] font-semibold">
                      <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                        {feature.title}
                      </span>
                    </h3>

                    <p className="mt-5 text-[17px] leading-relaxed text-zinc-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* FOOTER */}

                  <div className="mt-auto pt-7 border-t border-white/[0.05] flex items-center justify-between">
                    {/* STATUS */}

                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] font-mono text-zinc-500 transition-all duration-300 group-hover:text-zinc-300">
                      <span>{feature.status}</span>
                    </div>

                    {/* DOT */}

                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_16px_rgba(232,93,42,0.8)]" />
                  </div>
                </div>

                {/* =========================================
                    BOTTOM AMBIENT LIGHT
                ========================================= */}
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

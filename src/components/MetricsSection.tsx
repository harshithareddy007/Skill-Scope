import {
  Sparkles,
  BrainCircuit,
  Route,
  LockKeyhole,
  Terminal,
} from "lucide-react";

export default function MetricsSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Beat ATS Filters",
      description: "Increase resume visibility with AI optimization.",
    },

    {
      icon: BrainCircuit,
      title: "Discover Hidden Gaps",
      description: "Reveal missing skills blocking opportunities.",
    },

    {
      icon: Route,
      title: "Plan Your Next Move",
      description: "Get structured AI-powered career roadmaps.",
    },
  ];

  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-12 py-16 md:py-20 lg:py-24"
    >
      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.022]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 md:gap-10 items-center">
        {/* =========================================
            LEFT SECTION
        ========================================= */}

        <div>
          {/* LABEL */}

          <div className="flex items-center gap-3 mb-5">
            <Terminal
              size={14}
              className="text-[var(--accent)]"
            />

            <p className="text-[10px] uppercase tracking-[0.24em] font-mono text-[var(--accent)]">
              Platform Preview
            </p>
          </div>

          {/* HEADING */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.92] tracking-[-0.07em] font-semibold">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              AI-native
            </span>

            <br />

            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              career growth.
            </span>
          </h2>

          {/* SUBTEXT */}

          <p className="mt-4 md:mt-5 max-w-md text-sm md:text-base leading-relaxed text-zinc-400">
            Resume intelligence, skill analysis, and career planning —
            combined into one modern workflow.
          </p>

          {/* =========================================
              FEATURE CARDS
          ========================================= */}

          <div className="mt-8 md:mt-10 space-y-3 md:space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-transparent transition-all duration-300 px-4 py-4 sm:px-5 sm:py-5 hover:border-white/[0.18] hover:-translate-y-1 hover:scale-[1.01] shadow-sm hover:shadow-[0_0_30px_rgba(255,68,0,0.04)]"
                >
                  {/* HOVER LIGHT */}

                  <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-200 bg-[radial-gradient(circle_at_top_right,rgba(232,93,42,0.12),transparent_45%)]" />

                  {/* TOP SHINE */}

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* ICON */}

                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/[0.12] bg-white/[0.03] group-hover:border-[var(--accent)]/20 transition-all duration-300 shadow-sm hover:shadow-md">
                        <Icon
                          size={20}
                          className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* TEXT */}

                      <div>
                        <h3 className="text-[24px] tracking-[-0.04em] font-medium text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            RIGHT SECTION
        ========================================= */}

        <div className="relative">
          {/* OUTER CARD */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.05] bg-transparent backdrop-blur-md p-7">
            {/* TOP SHINE */}

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          
            {/* =========================================
                HEADER
            ========================================= */}

            <div className="relative z-10 flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] font-mono text-zinc-500">
                  Dashboard Preview
                </p>

                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl leading-[0.95] tracking-[-0.06em] font-semibold">
                  <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                    Your AI Career Workspace
                  </span>
                </h2>
              </div>

              {/* PRIVATE CHIP */}

              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent)]/10 bg-[var(--accent)]/8 backdrop-blur-xl">
                <LockKeyhole
                  size={14}
                  className="text-[var(--accent)]"
                />

                <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-[var(--accent)]">
                  Private
                </span>
              </div>
            </div>

            {/* =========================================
                DASHBOARD MOCKUP
            ========================================= */}

            <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-xl min-h-[380px] shadow-sm hover:shadow-md transition-all duration-300">
              {/* BACKGROUND GLOW */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,93,42,0.08),transparent_45%)]" />

              {/* FAKE DASHBOARD */}

              <div className="absolute inset-0 p-5 transition-all duration-500 group-hover:blur-[2px] blur-[7px] scale-[1.03] opacity-70 group-hover:opacity-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                  {/* CARD 1 */}

                  <div className="rounded-[30px] border border-white/[0.12] bg-white/[0.03] backdrop-blur-md p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
                      ATS SCORE
                    </p>

                    <h3 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white">
                      94%
                    </h3>

                    <div className="mt-6 w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="w-[88%] h-full rounded-full bg-[var(--accent)]" />
                    </div>

                    <p className="mt-3 text-sm text-[var(--accent)]">
                      Excellent optimization
                    </p>
                  </div>

                  {/* CARD 2 */}

                  <div className="rounded-[30px] border border-white/[0.12] bg-[var(--surface-secondary)] p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
                      SKILL MATCH
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "React",
                        "UI/UX",
                        "TypeScript",
                        "Tailwind",
                        "Node.js",
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.04] text-sm text-zinc-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 3 */}

                  <div className="rounded-[30px] border border-white/[0.12] bg-[var(--surface-secondary)] p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
                      AI SUGGESTIONS
                    </p>

                    <div className="mt-6 space-y-4">
                      {[
                        "Add quantified achievements",
                        "Improve keyword density",
                        "Mention React projects",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />

                          <p className="text-sm text-zinc-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 4 */}

                  <div className="rounded-[30px] border border-white/[0.12] bg-[var(--surface-secondary)] p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
                        CAREER READINESS
                      </p>

                      <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                        87%
                      </h3>
                    </div>

                    <div className="mt-4 w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="w-[82%] h-full rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* GLASS OVERLAY */}

              <div
                className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent backdrop-blur-md transition-all duration-200 group-hover:backdrop-blur-md"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, black 32%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 32%, transparent 100%)",
                }}
              />

              {/* CENTER CONTENT */}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 transition-all duration-200 group-hover:opacity-0 group-hover:scale-95">
                {/* LOCK */}

                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/15 backdrop-blur-xl">
                  <LockKeyhole
                    size={30}
                    className="text-[var(--accent)]"
                  />
                </div>

                {/* TITLE */}

                <h3 className="mt-6 text-[40px] leading-none tracking-[-0.05em] font-semibold">
                  <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                    Unlock Your Dashboard
                  </span>
                </h3>

                {/* TEXT */}

                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
                  Access resume intelligence, AI suggestions, career tracking,
                  and personalized growth insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import {
  Sparkles,
  BrainCircuit,
  Route,
  ArrowUpRight,
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
      className="relative overflow-hidden bg-[#030303] px-6 lg:px-12 py-20"
    >
      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* GLOW */}

      <div className="absolute top-[40%] left-[35%] w-[600px] h-[600px] rounded-full bg-[#FF4400]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[0.78fr_1.22fr] gap-10 items-center">
        {/* LEFT SECTION */}

        <div>
          {/* LABEL */}

          <div className="flex items-center gap-3 mb-5">
            <Terminal size={14} className="text-[#FF4400]" />

            <p className="text-[10px] uppercase tracking-[0.24em] font-mono text-[#FF4400]">
              Platform Preview
            </p>
          </div>

          {/* HEADING */}

          <h2 className="text-[54px] leading-[0.92] tracking-[-0.07em] font-semibold text-white">
            AI-native
            <br />
            career growth.
          </h2>

          {/* SUBTEXT */}

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-400">
            Resume intelligence, skill analysis, and career planning - combined
            into one modern workflow.
          </p>

          {/* FEATURE CARDS */}

          <div className="mt-10 space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-500 px-5 py-5"
                >
                  {/* HOVER GLOW */}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,68,0,0.14),transparent_45%)]" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* ICON */}

                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-black/40 ring-1 ring-white/10 group-hover:ring-[#FF4400]/20 transition-all duration-500">
                        <Icon
                          size={20}
                          className="text-[#FF4400] group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* TEXT */}

                      <div>
                        <h3 className="text-[24px] tracking-[-0.04em] font-medium text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
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

        {/* RIGHT SECTION */}

        <div className="relative">
          {/* OUTER CARD */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] bg-white/[0.03] backdrop-blur-xl p-7 shadow-[0_0_80px_rgba(255,68,0,0.04)]">
            {/* TOP */}

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] font-mono text-gray-500">
                  Dashboard Preview
                </p>

                <h2 className="mt-3 text-[44px] leading-[0.95] tracking-[-0.06em] font-semibold text-white">
                  Your AI Career Workspace
                </h2>
              </div>

              {/* PRIVATE CHIP */}

              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4400]/10 ring-1 ring-[#FF4400]/20">
                <LockKeyhole size={14} className="text-[#FF4400]" />

                <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-[#FF4400]">
                  Private
                </span>
              </div>
            </div>

            {/* DASHBOARD */}

            <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] bg-black/30 min-h-[380px]">
              {/* FAKE DASHBOARD */}

              <div className="absolute inset-0 p-5 transition-all duration-700 group-hover:blur-[2px] blur-[7px] scale-[1.03] opacity-70 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* CARD 1 */}

                  <div className="rounded-[30px] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
                      ATS SCORE
                    </p>

                    <h3 className="mt-6 text-6xl font-semibold tracking-[-0.05em] text-white">
                      94%
                    </h3>

                    <div className="mt-6 w-full h-2 rounded-full bg-white/5">
                      <div className="w-[88%] h-full rounded-full bg-[#FF4400]" />
                    </div>

                    <p className="mt-3 text-sm text-[#FF4400]">
                      Excellent optimization
                    </p>
                  </div>

                  {/* CARD 2 */}

                  <div className="rounded-[30px] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
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
                          className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 3 */}

                  <div className="rounded-[30px] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
                      AI SUGGESTIONS
                    </p>

                    <div className="mt-6 space-y-4">
                      {[
                        "Add quantified achievements",
                        "Improve keyword density",
                        "Mention React projects",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#FF4400]" />

                          <p className="text-sm text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CARD 4 */}

                  <div className="rounded-[30px] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">
                        CAREER READINESS
                      </p>

                      <h3 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white">
                        87%
                      </h3>
                    </div>

                    <div className="w-full h-2 rounded-full bg-white/5">
                      <div className="w-[82%] h-full rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SILK GLASS OVERLAY */}

              <div
                className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent backdrop-blur-xl transition-all duration-700 group-hover:backdrop-blur-md"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, black 32%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 32%, transparent 100%)",
                }}
              />

              {/* CENTER CONTENT */}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 transition-all duration-700 group-hover:opacity-0 group-hover:scale-95">
                {/* LOCK */}

                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#FF4400]/10 ring-1 ring-[#FF4400]/20 backdrop-blur-xl">
                  <LockKeyhole size={30} className="text-[#FF4400]" />
                </div>

                {/* TITLE */}

                <h3 className="mt-6 text-[40px] leading-none tracking-[-0.05em] font-semibold text-white">
                  Unlock Your Dashboard
                </h3>

                {/* TEXT */}

                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-400">
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

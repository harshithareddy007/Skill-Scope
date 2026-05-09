import { BrainCircuit, Radar, Route, ArrowRight, Terminal } from "lucide-react";
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
      className="relative overflow-hidden bg-[#030303] px-6 lg:px-12 py-28"
    >
      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* GLOW */}

      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#FF4400]/[0.05] blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP */}

        <div className="max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <Terminal size={14} className="text-[#FF4400]" />

            <p className="text-[#FF4400] text-[10px] uppercase tracking-[0.28em] font-mono">
              Platform Capabilities
            </p>
          </div>

          {/* FIXED HEADING */}

          <h2 className="text-[54px] leading-[1.1] tracking-[-0.035em] font-semibold text-white">
            Everything required to scale your <br></br>
            <span className="text-[#FF4400]"> career architecture.</span>
          </h2>

          {/* SUBTEXT */}

          <p className="mt-4 text-[18px] leading-relaxed text-gray-400 max-w-3xl">
            SkillScope combines ATS intelligence, skill-gap analysis, and
            AI-powered career systems into one futuristic workflow.
          </p>
        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <SpotlightCard
                key={index}
                className="group relative h-[360px] rounded-[30px] border border-[#FF4400]/22 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-[0_0_0_1px_rgba(255,68,0,0.04)]"
              >
                {/* INNER BORDER */}

                <div className="absolute inset-[1px] rounded-[31px] border border-white/[0.04]" />

                {/* CONTENT */}

                <div className="relative z-10 flex flex-col h-full p-7">
                  {/* TOP */}

                  <div className="flex items-start justify-between">
                    {/* ICON */}

                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-black/30 flex items-center justify-center">
                      <Icon
                        size={22}
                        className="text-gray-400 group-hover:text-[#FF4400] transition-all duration-500"
                      />
                    </div>

                    {/* TAG */}

                    <span className="px-3 py-1 rounded-full border border-[#FF4400]/10 bg-[#FF4400]/[0.03] text-[9px] uppercase tracking-[0.2em] font-mono text-gray-500">
                      {feature.tag}
                    </span>
                  </div>

                  {/* TEXT */}

                  <div className="mt-7">
                    <h3 className="text-[34px] leading-[0.95] tracking-[-0.05em] font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-5 text-[17px] leading-relaxed text-gray-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* FOOTER */}

                  <div className="mt-auto pt-7 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] font-mono text-gray-500 group-hover:text-white transition-all duration-300">
                      <span>{feature.status}</span>
                    </div>

                    {/* DOT */}

                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF4400] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_12px_#FF4400] transition-all duration-500" />
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

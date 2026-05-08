import {
  BrainCircuit,
  Radar,
  Route,
  ArrowUpRight,
} from "lucide-react";

function FeatureCards() {

  const features = [
    {
      title: "ATS Intelligence",
      description:
        "AI-powered resume analysis with ATS scoring, keyword optimization, and recruiter-readiness insights.",

      icon: BrainCircuit,

      accent: "#FB3640",
    },

    {
      title: "Skill Gap Detection",
      description:
        "Compare your current skills against industry roles and identify missing competencies instantly.",

      icon: Radar,

      accent: "#89E900",
    },

    {
      title: "Career Roadmaps",
      description:
        "Generate personalized learning paths, project recommendations, and AI-guided career growth plans.",

      icon: Route,

      accent: "#7C3AED",
    },
  ];

  return (
    <div className="px-6 lg:px-12 py-28">

      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl">

          <p className="text-[#FB3640] uppercase tracking-[0.2em] text-sm font-medium">
            AI-Powered Career Intelligence
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">

            Everything you need to grow your career with AI.

          </h2>

          <p className="text-gray-400 text-xl leading-relaxed mt-8">

            SkillScope AI helps students and developers understand
            their strengths, identify skill gaps, and accelerate
            career growth with intelligent resume analytics.

          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-8 lg:p-10 hover:-translate-y-2 hover:border-white/20 transition-all duration-500 backdrop-blur-2xl"
              >

                <div
                  className="absolute top-0 right-0 w-52 h-52 blur-3xl opacity-20 rounded-full"
                  style={{
                    background: feature.accent,
                  }}
                />

                <div className="relative z-10">

                  <div
                    className="w-16 h-16 rounded-2xl border flex items-center justify-center"
                    style={{
                      background: `${feature.accent}15`,
                      borderColor: `${feature.accent}30`,
                    }}
                  >

                    <Icon
                      size={30}
                      style={{
                        color: feature.accent,
                      }}
                    />

                  </div>

                  <h3 className="text-3xl font-bold mt-10 leading-tight">

                    {feature.title}

                  </h3>

                  <p className="text-gray-400 leading-relaxed text-lg mt-6">

                    {feature.description}

                  </p>

                  <div className="mt-10 flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-all duration-300">

                    <span>
                      Explore Feature
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
}

export default FeatureCards;
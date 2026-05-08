import Sidebar from "../components/Sidebar";
import DashboardTopbar from "../components/DashboardTopbar";

import {
  BrainCircuit,
  Code2,
  Database,
  Rocket,
  ArrowRight,
} from "lucide-react";

function CareerRoadmapPage() {

  const roadmapSteps = [
    {
      title: "Frontend Foundations",
      description:
        "Master React, TypeScript, Tailwind CSS, and modern UI architecture.",

      icon: Code2,

      color: "#FB3640",
    },

    {
      title: "Backend & APIs",
      description:
        "Learn Node.js, Express, databases, authentication, and scalable APIs.",

      icon: Database,

      color: "#89E900",
    },

    {
      title: "AI Integration",
      description:
        "Understand AI workflows, LLM APIs, prompt engineering, and AI systems.",

      icon: BrainCircuit,

      color: "#7C3AED",
    },

    {
      title: "Launch Career",
      description:
        "Build portfolio projects, optimize resume, and prepare for internships.",

      icon: Rocket,

      color: "#38BDF8",
    },
  ];

  return (
    <main className="min-h-screen bg-[#000F08] text-white overflow-hidden">

      <div className="flex flex-col lg:flex-row">

        <Sidebar />

        <div className="flex-1 min-h-screen">

          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">

            <DashboardTopbar />

            <div className="relative overflow-hidden mt-12 bg-white/[0.03] border border-white/10 rounded-[36px] p-8 lg:p-10 backdrop-blur-2xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-[#FB3640]/10 blur-3xl rounded-full" />

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FB3640]/10 border border-[#FB3640]/20 text-sm text-[#FB3640]">

                  AI Career Planning

                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight max-w-5xl">

                  Build your personalized
                  career roadmap with AI.

                </h1>

                <p className="text-gray-400 text-xl leading-relaxed mt-8 max-w-3xl">

                  SkillScope AI helps you identify the exact
                  skills, technologies, and milestones needed
                  to achieve your target career path.

                </p>

              </div>

            </div>

            <div className="mt-14 space-y-8">

              {roadmapSteps.map((step, index) => {

                const Icon = step.icon;

                return (

                  <div
                    key={index}
                    className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-2xl"
                  >

                    <div
                      className="absolute top-0 right-0 w-64 h-64 blur-3xl opacity-10 rounded-full"
                      style={{
                        background: step.color,
                      }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                      <div className="flex items-start gap-6">

                        <div
                          className="w-20 h-20 rounded-3xl border flex items-center justify-center shrink-0"
                          style={{
                            background: `${step.color}15`,
                            borderColor: `${step.color}30`,
                          }}
                        >

                          <Icon
                            size={36}
                            style={{
                              color: step.color,
                            }}
                          />

                        </div>

                        <div>

                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs uppercase tracking-wide text-gray-400 mb-5">

                            Step {index + 1}

                          </div>

                          <h2 className="text-3xl font-bold leading-tight">

                            {step.title}

                          </h2>

                          <p className="text-gray-400 text-lg leading-relaxed mt-5 max-w-3xl">

                            {step.description}

                          </p>

                        </div>

                      </div>

                      <button className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">

                        Explore Step

                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-all duration-300"
                        />

                      </button>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default CareerRoadmapPage;
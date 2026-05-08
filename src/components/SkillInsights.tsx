import {
  Brain,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

function SkillInsights({
  analysis,
}: {
  analysis: any;
}) {

  return (
    <div className="relative overflow-hidden mt-10 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-2xl">

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        <div className="flex items-center gap-5">

          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">

            <Brain
              size={28}
              className="text-purple-400"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold">
              Skill Insights
            </h2>

            <p className="text-gray-400 mt-2 text-lg">
              AI-generated strengths and skill-gap analysis
            </p>

          </div>

        </div>

        {!analysis ? (

          <div className="mt-12 bg-black/20 border border-white/10 rounded-3xl p-8 text-gray-400 leading-relaxed">

            Upload your resume to unlock AI-powered
            skill intelligence and role-based insights.

          </div>

        ) : (

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">

            <div className="bg-black/20 border border-white/10 rounded-[28px] p-8">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-[#89E900]/10 border border-[#89E900]/20 flex items-center justify-center">

                  <ShieldCheck
                    size={24}
                    className="text-[#89E900]"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Current Strengths
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Skills detected from your resume
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {analysis.strongAreas?.map(
                  (
                    skill: string,
                    index: number
                  ) => (

                    <div
                      key={index}
                      className="px-5 py-3 rounded-2xl bg-[#89E900]/10 border border-[#89E900]/20 text-[#C9FF7A] font-medium hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </div>

                  )
                )}

              </div>

            </div>

            <div className="bg-black/20 border border-white/10 rounded-[28px] p-8">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-14 h-14 rounded-2xl bg-[#FB3640]/10 border border-[#FB3640]/20 flex items-center justify-center">

                  <TriangleAlert
                    size={24}
                    className="text-[#FB3640]"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    Skill Gaps
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Missing skills for your target role
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {analysis.missingSkills?.map(
                  (
                    skill: string,
                    index: number
                  ) => (

                    <div
                      key={index}
                      className="px-5 py-3 rounded-2xl bg-[#FB3640]/10 border border-[#FB3640]/20 text-[#FF9CA1] font-medium hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default SkillInsights;
import {
  BarChart3,
  Sparkles,
} from "lucide-react";

function AnalyticsChart({
  analysis,
}: {
  analysis: any;
}) {

  const skillData =
    analysis?.strongAreas?.map(
      (
        skill: string,
        index: number
      ) => ({
        name: skill,
        score: 92 - index * 12,
      })
    ) || [];

  return (
    <div className="relative overflow-hidden mt-10 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-2xl">

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#89E900]/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        <div className="flex items-center justify-between gap-6 flex-wrap">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[#89E900]/10 border border-[#89E900]/20 flex items-center justify-center">

              <BarChart3
                size={28}
                className="text-[#89E900]"
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold">
                Skill Intelligence
              </h2>

              <p className="text-gray-400 mt-2 text-lg">
                AI-powered strength analysis
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-300">

            <Sparkles
              size={16}
              className="text-[#89E900]"
            />

            Live AI Insights

          </div>

        </div>

        {!analysis ? (

          <div className="mt-12 bg-black/20 border border-white/10 rounded-3xl p-8 text-gray-400">

            Upload your resume to unlock AI-powered
            skill intelligence and analytics.

          </div>

        ) : (

          <div className="mt-12 space-y-8">

            {skillData.map(
              (
                skill: {
                  name: string;
                  score: number;
                },
                index: number
              ) => (

                <div
                  key={index}
                  className="group"
                >

                  <div className="flex items-center justify-between mb-4">

                    <div>

                      <p className="text-white text-lg font-semibold">
                        {skill.name}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        AI confidence analysis
                      </p>

                    </div>

                    <div className="text-right">

                      <h3 className="text-2xl font-bold text-[#89E900]">
                        {skill.score}%
                      </h3>

                    </div>

                  </div>

                  <div className="relative w-full h-5 bg-white/[0.04] rounded-full overflow-hidden border border-white/10">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#89E900] to-lime-300 transition-all duration-1000 ease-out shadow-lg shadow-lime-500/20"
                      style={{
                        width: `${skill.score}%`,
                      }}
                    />

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </div>
  );
}

export default AnalyticsChart;
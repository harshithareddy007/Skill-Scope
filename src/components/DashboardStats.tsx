import {
  TrendingUp,
  Brain,
  Sparkles,
  Target,
} from "lucide-react";

function DashboardStats({
  analysis,
}: {
  analysis: any;
}) {

  const atsScore = analysis
    ? analysis.atsScore > 1
      ? analysis.atsScore
      : Math.round(analysis.atsScore * 100)
    : "--";

  const skillMatch = analysis
    ? Math.max(
        0,
        100 - analysis.missingSkills.length * 8
      )
    : "--";

  const growthScore = analysis
    ? Math.min(
        100,
        analysis.strongAreas.length * 20
      )
    : "--";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">

      <div className="relative overflow-hidden bg-gradient-to-br from-[#FB3640]/20 to-transparent border border-[#FB3640]/20 rounded-[28px] p-7 backdrop-blur-xl">

        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FB3640]/10 blur-3xl rounded-full" />

        <div className="relative z-10">

          <div className="w-14 h-14 rounded-2xl bg-[#FB3640]/20 border border-[#FB3640]/20 flex items-center justify-center">

            <TrendingUp
              size={24}
              className="text-[#FB3640]"
            />

          </div>

          <p className="text-gray-400 mt-6 text-sm uppercase tracking-wide">
            ATS Score
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {atsScore}%
          </h2>

        </div>

      </div>

      <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[28px] p-7 backdrop-blur-xl">

        <div className="relative z-10">

          <div className="w-14 h-14 rounded-2xl bg-[#89E900]/10 border border-[#89E900]/20 flex items-center justify-center">

            <Target
              size={24}
              className="text-[#89E900]"
            />

          </div>

          <p className="text-gray-400 mt-6 text-sm uppercase tracking-wide">
            Skill Match
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {skillMatch}%
          </h2>

        </div>

      </div>

      <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[28px] p-7 backdrop-blur-xl">

        <div className="relative z-10">

          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">

            <Brain
              size={24}
              className="text-purple-400"
            />

          </div>

          <p className="text-gray-400 mt-6 text-sm uppercase tracking-wide">
            Resume Strength
          </p>

          <h2 className="text-4xl font-bold mt-4 leading-tight">

            {analysis
              ? analysis.atsScore > 80
                ? "Strong"
                : "Moderate"
              : "--"}

          </h2>

        </div>

      </div>

      <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[28px] p-7 backdrop-blur-xl">

        <div className="relative z-10">

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">

            <Sparkles
              size={24}
              className="text-cyan-400"
            />

          </div>

          <p className="text-gray-400 mt-6 text-sm uppercase tracking-wide">
            Growth Score
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {growthScore}%
          </h2>

        </div>

      </div>

    </div>
  );
}

export default DashboardStats;
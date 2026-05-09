import { Network, Terminal } from "lucide-react";

export default function AnalyticsChart({ analysis }: { analysis: any }) {
  const skillData = analysis?.strongAreas?.map((skill: string, index: number) => ({
      name: skill,
      score: 92 - index * 12,
  })) || [];

  return (
    <div className="mt-8 bg-white/[0.02] border border-white/[0.06] rounded-xl p-8">
      
      {/* Component Header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-6 mb-8">
        <div className="flex items-center gap-3">
          <Network size={16} className="text-gray-400" />
          <h2 className="text-sm font-mono tracking-widest text-white uppercase">
            Resource Allocation: Skills
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#00FF66] rounded-full" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Live</span>
        </div>
      </div>

      {!analysis ? (
        <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-white/10 rounded-lg bg-black/20">
          <Terminal size={20} className="text-gray-600 mb-3" />
          <p className="text-xs font-mono tracking-widest text-gray-500 uppercase">Awaiting Dataset</p>
        </div>
      ) : (
        <div className="space-y-6">
          {skillData.map((skill: { name: string; score: number }, index: number) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-mono text-gray-300 uppercase tracking-wide">
                  {skill.name}
                </p>
                <p className="text-[11px] font-mono text-gray-500">
                  {skill.score}%
                </p>
              </div>
              {/* Razor-thin tracking line */}
              <div className="w-full h-[2px] bg-white/[0.05] overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-1000 ease-out"
                  style={{ width: `${skill.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
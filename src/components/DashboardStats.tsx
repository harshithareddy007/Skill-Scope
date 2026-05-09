import { Activity, Target, Fingerprint, Zap } from "lucide-react";

export default function DashboardStats({ analysis }: { analysis: any }) {
  const atsScore = analysis ? (analysis.atsScore > 1 ? analysis.atsScore : Math.round(analysis.atsScore * 100)) : "--";
  const skillMatch = analysis ? Math.max(0, 100 - analysis.missingSkills.length * 8) : "--";
  const growthScore = analysis ? Math.min(100, analysis.strongAreas.length * 20) : "--";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
      
      {/* Stat Node 1 */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 group hover:border-[#FF4400]/30 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <Activity size={16} className="text-[#FF4400]" />
          <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">Metric 01</span>
        </div>
        <h2 className="text-4xl font-mono tracking-tighter text-white">{atsScore}%</h2>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">ATS Match Rate</p>
      </div>

      {/* Stat Node 2 */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 group hover:border-white/20 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <Target size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">Metric 02</span>
        </div>
        <h2 className="text-4xl font-mono tracking-tighter text-white">{skillMatch}%</h2>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Vector Alignment</p>
      </div>

      {/* Stat Node 3 */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 group hover:border-white/20 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <Fingerprint size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">Metric 03</span>
        </div>
        <h2 className="text-2xl font-mono tracking-tight text-white mt-2 mb-1">
          {analysis ? (analysis.atsScore > 80 ? "OPTIMIZED" : "DEGRADED") : "STANDBY"}
        </h2>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Profile Status</p>
      </div>

      {/* Stat Node 4 */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 group hover:border-white/20 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <Zap size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">Metric 04</span>
        </div>
        <h2 className="text-4xl font-mono tracking-tighter text-white">{growthScore}%</h2>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Growth Potential</p>
      </div>

    </div>
  );
}
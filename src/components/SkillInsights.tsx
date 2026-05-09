import { Terminal, CheckSquare, XSquare, Activity } from "lucide-react";

export default function SkillInsights({ analysis }: { analysis: any }) {
  return (
    <div className="bg-[#030303] border border-white/[0.06] rounded-2xl p-8 h-full flex flex-col">
      
      {/* Technical Header */}
      <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/[0.06]">
        <Activity size={16} className="text-gray-400" />
        <h2 className="text-sm font-mono tracking-widest text-white uppercase">
          Output: Skill Telemetry
        </h2>
      </div>

      {!analysis ? (
        // Empty Terminal State
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-white/[0.05] rounded-xl">
          <Terminal size={24} className="text-gray-600 mb-4" />
          <p className="text-xs font-mono tracking-widest text-gray-500 uppercase">
            Awaiting Data Ingestion...
          </p>
          <p className="text-[10px] font-mono text-gray-600 mt-2">
            System requires resume parameters to map skill vectors.
          </p>
        </div>
      ) : (
        // Data Output State
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          
          {/* Strengths Pane */}
          <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <CheckSquare size={14} className="text-[#00FF66]" />
              <h3 className="text-xs font-mono tracking-widest text-white uppercase">
                Verified Vectors
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {analysis.strongAreas?.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="px-2.5 py-1 rounded-md bg-[#00FF66]/5 border border-[#00FF66]/20 text-[#00FF66] text-[11px] font-mono tracking-tight"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Gaps Pane */}
          <div className="bg-white/[0.01] border border-white/[0.04] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <XSquare size={14} className="text-[#FF4400]" />
              <h3 className="text-xs font-mono tracking-widest text-white uppercase">
                Missing Dependencies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {analysis.missingSkills?.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="px-2.5 py-1 rounded-md bg-[#FF4400]/5 border border-[#FF4400]/20 text-[#FF4400] text-[11px] font-mono tracking-tight"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
import { Cpu, ChevronRight } from "lucide-react";

export default function AIRecommendations({ analysis }: { analysis: any }) {
  return (
    <div className="mt-8 bg-white/[0.02] border border-white/[0.06] rounded-xl p-8">
      
      {/* Component Header */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] pb-6 mb-8">
        <Cpu size={16} className="text-[#FF4400]" />
        <h2 className="text-sm font-mono tracking-widest text-white uppercase">
          Execution Protocol
        </h2>
      </div>

      <div className="space-y-3">
        {analysis?.improvementSuggestions?.length > 0 ? (
          analysis.improvementSuggestions.map((suggestion: string, index: number) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 border border-white/[0.04] bg-black/40 rounded-lg hover:border-[#FF4400]/30 transition-colors font-mono"
            >
              <div className="mt-0.5 shrink-0">
                <ChevronRight size={14} className="text-[#FF4400]" />
              </div>
              <div>
                <p className="text-[10px] text-[#FF4400] tracking-widest uppercase mb-1">
                  [Action Required]
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {suggestion}
                </p>
              </div>
            </div>
          ))
        ) : (
           <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-white/10 rounded-lg bg-black/20">
            <p className="text-xs font-mono tracking-widest text-gray-500 uppercase">
              No protocol active. Provide data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
import { Bell, Search, Command } from "lucide-react";

export default function DashboardTopbar() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-white/[0.06] pb-8">
      
      {/* Technical Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-pulse shadow-[0_0_8px_#00FF66]" />
          <p className="text-gray-500 font-mono tracking-widest uppercase text-[10px]">
            Session Active
          </p>
        </div>
        <h1 className="text-3xl font-medium tracking-tight text-white">
          System Overview
        </h1>
      </div>

      {/* Command Center Tools */}
      <div className="flex items-center gap-4">
        
        {/* DevTool Style Search Palette */}
        <div className="hidden md:flex items-center justify-between bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-lg px-3 py-2 w-[280px] transition-colors cursor-text">
          <div className="flex items-center gap-2">
            <Search size={14} className="text-gray-500" />
            <span className="text-[12px] text-gray-500 font-mono">Search telemetry...</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-gray-500 font-mono bg-white/[0.05] px-1.5 py-0.5 rounded border border-white/10">
            <Command size={10} />
            <span>K</span>
          </div>
        </div>

        {/* Action Icons */}
        <button className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
          <Bell size={16} />
        </button>

        {/* Tech Badge Avatar */}
        <div className="w-10 h-10 rounded-lg bg-[#FF4400]/10 border border-[#FF4400]/30 flex items-center justify-center text-sm font-mono text-[#FF4400]">
          HK
        </div>
        
      </div>
    </div>
  );
}
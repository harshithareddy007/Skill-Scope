import Sidebar from "../components/Sidebar";
import DashboardTopbar from "../components/DashboardTopbar";
import { Terminal, Code2, Database, Network, Rocket, ArrowRight } from "lucide-react";

export default function CareerRoadmapPage() {
  const roadmapSteps = [
    { title: "Client Architecture", desc: "React, TypeScript, Tailwind CSS, DOM manipulation.", icon: Code2, status: "VERIFIED" },
    { title: "Server Infrastructure", desc: "Node.js, Express, RDBMS/NoSQL, API design.", icon: Database, status: "PENDING" },
    { title: "AI/LLM Integration", desc: "Vector DBs, prompt engineering, agentic workflows.", icon: Network, status: "LOCKED" },
    { title: "Deployment Pipeline", desc: "CI/CD, Docker, cloud hosting, portfolio compilation.", icon: Rocket, status: "LOCKED" },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#FF4400]/30 selection:text-white">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 min-h-screen overflow-y-auto">
          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">
            
            <DashboardTopbar />

            <div className="mt-12 mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Terminal size={14} className="text-[#FF4400]" />
                <span className="text-[10px] font-mono tracking-widest text-[#FF4400] uppercase">
                  Execution Path
                </span>
              </div>
              <h1 className="text-4xl font-medium tracking-tight mb-2">
                Routing Engine
              </h1>
              <p className="text-gray-400 font-light">
                Sequential dependency graph for target architecture.
              </p>
            </div>

            <div className="space-y-4">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                const isVerified = step.status === "VERIFIED";
                const isPending = step.status === "PENDING";
                
                return (
                  <div key={index} className="group flex items-center justify-between bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300">
                    
                    <div className="flex items-center gap-6">
                      {/* Step Indicator */}
                      <div className="hidden sm:flex flex-col items-center justify-center w-12 h-12 bg-black/40 border border-white/10 rounded-lg">
                        <span className="text-[9px] font-mono text-gray-500 uppercase">Step</span>
                        <span className="text-sm font-mono text-white">0{index + 1}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <Icon size={16} className={isVerified ? "text-[#00FF66]" : isPending ? "text-[#FF4400]" : "text-gray-600"} />
                          <h2 className="text-lg font-medium tracking-tight">{step.title}</h2>
                          {/* Status Badge */}
                          <span className={`text-[9px] font-mono tracking-widest px-2 py-0.5 rounded border ${
                            isVerified ? "border-[#00FF66]/20 text-[#00FF66] bg-[#00FF66]/5" :
                            isPending ? "border-[#FF4400]/20 text-[#FF4400] bg-[#FF4400]/5" :
                            "border-white/10 text-gray-600"
                          }`}>
                            {step.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 font-mono">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 group-hover:bg-white text-gray-400 group-hover:text-black transition-colors duration-300 shrink-0">
                      <ArrowRight size={16} className={isVerified || isPending ? "" : "opacity-50"} />
                    </button>
                    
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
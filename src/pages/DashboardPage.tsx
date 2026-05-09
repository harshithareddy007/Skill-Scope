import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardStats from "../components/DashboardStats";
import DashboardTopbar from "../components/DashboardTopbar";
import { Activity, Database, GitBranch } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function DashboardPage() {
  const [analysis, setAnalysis] = useState<any>(null);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();

    navigate("/login");
  };
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#FF4400]/30 selection:text-white">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />

        <div className="flex-1 min-h-screen overflow-y-auto">
          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">
            <DashboardTopbar />
            <DashboardStats analysis={analysis} />

            {/* System Status Banner */}
            <div className="mt-12 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 lg:p-10">
              <div className="flex flex-col max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#FF4400]/20 bg-[#FF4400]/5 w-fit mb-6">
                  <div className="w-1.5 h-1.5 bg-[#FF4400] rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-[#FF4400] uppercase">
                    Core Engine Online
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                  Transform raw data into career intelligence.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Execute parsing algorithms to discover skill gaps, bypass ATS
                  filters, and map career vectors with cryptographic precision.
                </p>
              </div>

              {/* Bento Box Sub-features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                <div className="bg-black/40 border border-white/[0.04] rounded-xl p-6 hover:border-white/10 transition-colors">
                  <Database size={18} className="text-[#FF4400] mb-4" />
                  <h3 className="text-sm font-mono tracking-widest uppercase text-white mb-2">
                    Ingestion
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Algorithmic document parsing and entity extraction.
                  </p>
                </div>

                <div className="bg-black/40 border border-white/[0.04] rounded-xl p-6 hover:border-white/10 transition-colors">
                  <Activity size={18} className="text-white mb-4" />
                  <h3 className="text-sm font-mono tracking-widest uppercase text-white mb-2">
                    Telemetry
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Real-time identification of missing competency nodes.
                  </p>
                </div>

                <div className="bg-black/40 border border-white/[0.04] rounded-xl p-6 hover:border-white/10 transition-colors">
                  <GitBranch size={18} className="text-white mb-4" />
                  <h3 className="text-sm font-mono tracking-widest uppercase text-white mb-2">
                    Routing
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Dynamic generation of optimal career execution paths.
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

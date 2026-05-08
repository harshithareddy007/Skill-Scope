import Sidebar from "../components/Sidebar";
import DashboardStats from "../components/DashboardStats";
import DashboardTopbar from "../components/DashboardTopbar";
import { useState } from "react";

function DashboardPage() {
  const [analysis, setAnalysis] = useState<any>(null);
  return (
    <main className="min-h-screen bg-[#000F08] text-white overflow-hidden">

      <div className="flex flex-col lg:flex-row">

        <Sidebar />

        <div className="flex-1 min-h-screen">

          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">

            <DashboardTopbar />
            <DashboardStats analysis={analysis} />
            <div className="relative overflow-hidden mt-12 bg-white/[0.03] border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-2xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-[#FB3640]/10 blur-3xl rounded-full" />

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FB3640]/10 border border-[#FB3640]/20 text-sm text-[#FB3640]">

                  AI Career Intelligence

                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mt-8 leading-tight max-w-4xl">

                  Transform your resume into
                  career intelligence.

                </h2>

                <p className="text-gray-400 mt-8 text-xl leading-relaxed max-w-3xl">

                  Analyze resumes, discover hidden skill gaps,
                  improve ATS performance, and receive AI-powered
                  recommendations tailored to your career goals.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <h3 className="text-3xl font-bold text-[#FB3640]">
                      ATS
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      Intelligent resume optimization
                      powered by AI analysis.

                    </p>

                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <h3 className="text-3xl font-bold text-[#89E900]">
                      Skills
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      Discover strengths and identify
                      missing role-based competencies.

                    </p>

                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <h3 className="text-3xl font-bold text-purple-400">
                      Growth
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      Generate personalized AI career
                      roadmaps for long-term success.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default DashboardPage;
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import DashboardTopbar from "../components/DashboardTopbar";
import ResumeUploadCard from "../components/ResumeUploadCard";
import AIRecommendations from "../components/AIRecommendations";
import DashboardStats from "../components/DashboardStats";

import {
  FileSearch,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function ResumeAnalysisPage() {

  const [analysis, setAnalysis] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#000F08] text-white overflow-hidden">

      <div className="flex flex-col lg:flex-row">

        <Sidebar />

        <div className="flex-1 min-h-screen">

          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">

            <DashboardTopbar />

            <div className="relative overflow-hidden mt-12 bg-white/[0.03] border border-white/10 rounded-[36px] p-8 lg:p-10 backdrop-blur-2xl">

              <div className="absolute top-0 right-0 w-72 h-72 bg-[#FB3640]/10 blur-3xl rounded-full" />

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FB3640]/10 border border-[#FB3640]/20 text-sm text-[#FB3640]">

                  Resume Intelligence

                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight max-w-5xl">

                  Analyze your resume
                  with AI-powered insights.

                </h1>

                <p className="text-gray-400 text-xl leading-relaxed mt-8 max-w-3xl">

                  Upload your resume to receive ATS analysis,
                  skill-gap detection, role-based recommendations,
                  and personalized career intelligence.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <FileSearch
                      size={32}
                      className="text-[#FB3640]"
                    />

                    <h3 className="text-2xl font-bold mt-6">
                      ATS Analysis
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      AI-powered resume scoring and recruiter-readiness analysis.

                    </p>

                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <Sparkles
                      size={32}
                      className="text-[#89E900]"
                    />

                    <h3 className="text-2xl font-bold mt-6">
                      Skill Insights
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      Identify strengths and discover missing role-based skills.

                    </p>

                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <CheckCircle2
                      size={32}
                      className="text-purple-400"
                    />

                    <h3 className="text-2xl font-bold mt-6">
                      AI Suggestions
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      Get actionable recommendations to improve your resume.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {analysis && (
              <DashboardStats analysis={analysis} />
            )}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12">

              <div className="xl:col-span-2">

                <ResumeUploadCard
                  setAnalysis={setAnalysis}
                />

              </div>

              <div>

                <AIRecommendations
                  analysis={analysis}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ResumeAnalysisPage;
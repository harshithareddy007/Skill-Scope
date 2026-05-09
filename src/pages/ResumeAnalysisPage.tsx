import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardTopbar from "../components/DashboardTopbar";
import ResumeUploadCard from "../components/ResumeUploadCard";
import AIRecommendations from "../components/AIRecommendations";
import DashboardStats from "../components/DashboardStats";

export default function ResumeAnalysisPage() {
  const [analysis, setAnalysis] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#FF4400]/30 selection:text-white">
      <div className="flex flex-col lg:flex-row">
        
        <Sidebar />

        <div className="flex-1 min-h-screen overflow-y-auto">
          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">
            
            <DashboardTopbar />

            <div className="mb-10 mt-8">
              <h1 className="text-3xl font-medium tracking-tight mb-2">
                Data Ingestion Pipeline
              </h1>
              <p className="text-gray-400 text-sm font-mono">
                Upload profile document for algorithmic parsing and ATS scoring.
              </p>
            </div>

            {analysis && (
              <div className="mb-8">
                <DashboardStats analysis={analysis} />
              </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <ResumeUploadCard setAnalysis={setAnalysis} />
              </div>
              <div>
                <AIRecommendations analysis={analysis} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
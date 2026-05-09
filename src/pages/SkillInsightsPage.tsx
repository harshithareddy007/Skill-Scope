import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardTopbar from "../components/DashboardTopbar";
import SkillInsights from "../components/SkillInsights";
import AnalyticsChart from "../components/AnalyticsChart";

export default function SkillInsightsPage() {
  // Using the exact mock data structure you provided
  const [analysis] = useState<any>({
    strongAreas: ["UI/UX Design", "Frontend Development", "Product Design", "Design Thinking"],
    missingSkills: ["Machine Learning", "Deep Learning", "Natural Language Processing"],
  });

  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden selection:bg-[#FF4400]/30 selection:text-white">
      <div className="flex flex-col lg:flex-row">
        
        <Sidebar />

        <div className="flex-1 min-h-screen overflow-y-auto">
          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">
            
            <DashboardTopbar />

            <div className="mb-10 mt-8">
              <h1 className="text-3xl font-medium tracking-tight mb-2">
                Vector Analysis
              </h1>
              <p className="text-gray-400 text-sm font-mono">
                Evaluate mapped competencies against target architecture requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <AnalyticsChart analysis={analysis} />
              <SkillInsights analysis={analysis} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
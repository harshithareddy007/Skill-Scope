import { useState } from "react";

import Sidebar from "../components/Sidebar";
import DashboardTopbar from "../components/DashboardTopbar";
import SkillInsights from "../components/SkillInsights";
import AnalyticsChart from "../components/AnalyticsChart";

import {
  Brain,
  Radar,
  Sparkles,
} from "lucide-react";

function SkillInsightsPage() {

  const [analysis] = useState<any>({
    strongAreas: [
      "UI/UX Design",
      "Frontend Development",
      "Product Design",
      "Design Thinking",
    ],

    missingSkills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
    ],
  });

  return (
    <main className="min-h-screen bg-[#000F08] text-white overflow-hidden">

      <div className="flex flex-col lg:flex-row">

        <Sidebar />

        <div className="flex-1 min-h-screen">

          <div className="px-6 lg:px-12 py-8 lg:py-10 max-w-[1700px] mx-auto">

            <DashboardTopbar />

            <div className="relative overflow-hidden mt-12 bg-white/[0.03] border border-white/10 rounded-[36px] p-8 lg:p-10 backdrop-blur-2xl">

              <div className="absolute top-0 left-0 w-72 h-72 bg-[#89E900]/10 blur-3xl rounded-full" />

              <div className="relative z-10">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#89E900]/10 border border-[#89E900]/20 text-sm text-[#89E900]">

                  AI Skill Intelligence

                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight max-w-5xl">

                  Discover your strengths
                  and close skill gaps faster.

                </h1>

                <p className="text-gray-400 text-xl leading-relaxed mt-8 max-w-3xl">

                  SkillScope AI analyzes your current abilities,
                  identifies missing competencies, and helps
                  accelerate your career growth strategically.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <Brain
                      size={32}
                      className="text-[#89E900]"
                    />

                    <h3 className="text-2xl font-bold mt-6">
                      Skill Mapping
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      AI-powered identification of your strongest competencies.

                    </p>

                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <Radar
                      size={32}
                      className="text-[#FB3640]"
                    />

                    <h3 className="text-2xl font-bold mt-6">
                      Gap Detection
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      Discover critical missing skills for target career paths.

                    </p>

                  </div>

                  <div className="bg-black/20 border border-white/10 rounded-3xl p-6">

                    <Sparkles
                      size={32}
                      className="text-purple-400"
                    />

                    <h3 className="text-2xl font-bold mt-6">
                      AI Insights
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">

                      Unlock intelligent career-growth recommendations instantly.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            <AnalyticsChart analysis={analysis} />

            <SkillInsights analysis={analysis} />

          </div>

        </div>

      </div>

    </main>
  );
}

export default SkillInsightsPage;
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MetricsSection from "../components/MetricsSection";
import FeatureCards from "../components/FeatureCards";
import SolutionsSection from "../components/SolutionsSection";
import RoadmapsSection from "../components/RoadmapsSection";

export default function LandingPage() {
  return (
    <main className="bg-[#030303] text-white overflow-hidden">
      <Navbar />

      <HeroSection />

      <MetricsSection />

      <FeatureCards />

      <SolutionsSection />

      <RoadmapsSection />

      {/* FOOTER */}

      <footer className="relative border-t border-white/[0.1] overflow-hidden">
        {/* AMBIENT GLOWS */}

        <div className="absolute inset-0 overflow-hidden">
          {/* LEFT GLOW */}

          <div className="absolute left-[-120px] top-[-40px] w-[420px] h-[220px] rounded-full bg-[#FF4400]/10 blur-[120px]" />

          {/* RIGHT GLOW */}

          <div className="absolute right-[-120px] top-[-40px] w-[420px] h-[220px] rounded-full bg-[#1D4ED8]/10 blur-[140px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* LEFT */}

          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FF4400]" />

            <h2 className="text-[18px] tracking-[-0.03em] font-medium text-white">
              SkillScope AI
            </h2>
          </div>

          {/* RIGHT */}

          <p className="text-[13px] text-gray-500">
            © 2026 SkillScope AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ResumeAnalysisPage from "../pages/ResumeAnalysisPage";
import SkillInsightsPage from "../pages/SkillInsightsPage";
import CareerRoadmapPage from "../pages/CareerRoadmapPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume-analysis" element={<ResumeAnalysisPage />} />
        <Route path="/skill-insights" element={<SkillInsightsPage />} />
        <Route path="/career-roadmap" element={<CareerRoadmapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

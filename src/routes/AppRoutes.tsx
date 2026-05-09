import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ResumeAnalysisPage from "../pages/ResumeAnalysisPage";
import SkillInsightsPage from "../pages/SkillInsightsPage";
import CareerRoadmapPage from "../pages/CareerRoadmapPage";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume-analysis"
          element={
            <ProtectedRoute>
              <ResumeAnalysisPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skill-insights"
          element={
            <ProtectedRoute>
              <SkillInsightsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/career-roadmap"
          element={
            <ProtectedRoute>
              <CareerRoadmapPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

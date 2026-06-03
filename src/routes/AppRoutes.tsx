import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthPage from "../pages/AuthPage";
import DashboardPage from "../pages/DashboardPage";
import ResumeAnalysisPage from "../pages/ResumeAnalysisPage";
import SkillInsightsPage from "../pages/SkillInsightsPage";
import CareerRoadmapPage from "../pages/CareerRoadmapPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ResumeAnalysisPage"
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
         <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";

function LandingPage() {

  return (
    <main className="min-h-screen bg-[#000F08] text-white overflow-hidden">

      <Navbar />

      <HeroSection />

      <FeatureCards />

    </main>
  );
}

export default LandingPage;
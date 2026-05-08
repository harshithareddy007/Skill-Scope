import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

function Navbar() {

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-[#000F08]/70">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FB3640] to-red-700 flex items-center justify-center shadow-lg shadow-red-500/20">

            <Sparkles
              size={20}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              SkillScope AI
            </h1>

            <p className="text-xs text-gray-500 mt-1">
              AI Career Intelligence
            </p>

          </div>

        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">

          <button className="hover:text-white transition-all duration-300">
            Features
          </button>

          <button className="hover:text-white transition-all duration-300">
            Dashboard
          </button>

          <button className="hover:text-white transition-all duration-300">
            Skill Insights
          </button>

          <button className="hover:text-white transition-all duration-300">
            Roadmaps
          </button>

        </div>

        <Link
          to="/signup"
          className="group inline-flex items-center gap-3 bg-[#FB3640] hover:bg-red-500 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg shadow-red-500/20"
        >

          Get Started

          <ArrowUpRight
            size={18}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
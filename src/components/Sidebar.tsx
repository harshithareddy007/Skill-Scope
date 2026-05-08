import {
  LayoutDashboard,
  FileText,
  Brain,
  Route,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-full lg:w-[280px] min-h-screen border-r border-white/10 bg-white/[0.03] backdrop-blur-2xl px-6 py-8">

      <div>

        <h1 className="text-4xl font-bold tracking-tight">
          SkillScope
        </h1>

        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          AI-powered career intelligence platform
        </p>

      </div>

      <div className="mt-14 flex flex-col gap-3">

        <button className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#FB3640] text-white font-medium transition-all duration-300 shadow-lg shadow-red-500/10">

          <LayoutDashboard
            size={20}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span>
            Dashboard
          </span>

        </button>

        <button className="group flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-300 hover:bg-white/[0.05] hover:text-white transition-all duration-300 border border-transparent hover:border-white/10">

          <FileText
            size={20}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span>
            Resume Analysis
          </span>

        </button>

        <button className="group flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-300 hover:bg-white/[0.05] hover:text-white transition-all duration-300 border border-transparent hover:border-white/10">

          <Brain
            size={20}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span>
            Skill Insights
          </span>

        </button>

        <button className="group flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-300 hover:bg-white/[0.05] hover:text-white transition-all duration-300 border border-transparent hover:border-white/10">

          <Route
            size={20}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span>
            Career Roadmap
          </span>

        </button>

        <button className="group flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-300 hover:bg-white/[0.05] hover:text-white transition-all duration-300 border border-transparent hover:border-white/10">

          <Settings
            size={20}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span>
            Settings
          </span>

        </button>

      </div>

      <div className="mt-auto pt-12">

        <div className="bg-gradient-to-br from-[#FB3640]/20 to-transparent border border-[#FB3640]/20 rounded-3xl p-5">

          <p className="text-sm text-gray-400 leading-relaxed">
            Your AI career copilot is ready to help you grow smarter.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;
import { Bell, Search } from "lucide-react";

function DashboardTopbar() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

      <div>

        <p className="text-[#FB3640] font-medium tracking-wide uppercase text-sm">
          AI Career Intelligence
        </p>

        <h1 className="text-5xl lg:text-6xl font-bold mt-3 leading-tight">
          Welcome back 👋
        </h1>

        <p className="text-gray-400 mt-4 text-lg leading-relaxed max-w-2xl">
          Analyze resumes, identify skill gaps, and accelerate
          your career growth with AI-powered insights.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="hidden md:flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-3 w-[280px]">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search insights..."
            className="bg-transparent outline-none text-sm text-white placeholder:text-gray-500 w-full"
          />

        </div>

        <button className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300">

          <Bell size={20} />

        </button>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FB3640] to-red-700 flex items-center justify-center text-lg font-semibold shadow-lg shadow-red-500/20">

          H

        </div>

      </div>

    </div>
  );
}

export default DashboardTopbar;
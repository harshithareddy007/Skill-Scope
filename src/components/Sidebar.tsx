import {
  LayoutDashboard,
  FileText,
  Brain,
  Route,
  Settings,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },

    {
      name: "Resume Analysis",
      icon: FileText,
      active: false,
    },

    {
      name: "Skill Insights",
      icon: Brain,
      active: false,
    },

    {
      name: "Career Roadmap",
      icon: Route,
      active: false,
    },

    {
      name: "Settings",
      icon: Settings,
      active: false,
    },
  ];

  return (
    <aside className="relative w-full lg:w-[280px] min-h-screen border-r border-white/10 bg-[#050505] overflow-hidden selection:bg-white/20">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF4400]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* TOP BRAND */}

        <div className="h-24 px-8 flex items-center border-b border-white/10">

          <div className="flex items-center gap-4">

            {/* LOGO */}

            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03]">

              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4400] shadow-[0_0_14px_#FF4400]" />

            </div>

            {/* TEXT */}

            <div>

              <h1 className="text-[18px] font-medium tracking-[-0.04em] text-white">

                SkillScope

              </h1>

              <p className="mt-1 text-[9px] uppercase tracking-[0.28em] font-mono text-gray-500">

                AI Workspace

              </p>

            </div>

          </div>

        </div>

        {/* NAVIGATION */}

        <div className="flex-1 px-5 py-8">

          {/* LABEL */}

          <div className="px-3 mb-5">

            <p className="text-[10px] uppercase tracking-[0.26em] font-mono text-gray-500">

              Navigation

            </p>

          </div>

          {/* NAV ITEMS */}

          <div className="space-y-2">

            {navItems.map((item) => (

              <button
                key={item.name}
                className={`
                  group
                  relative
                  w-full
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3.5
                  rounded-2xl
                  transition-all
                  duration-300
                  border
                  ${
                    item.active
                      ? "bg-white/[0.05] border-white/10 text-white"
                      : "border-transparent text-gray-400 hover:bg-white/[0.03] hover:border-white/10 hover:text-white"
                  }
                `}
              >

                {/* ACTIVE GLOW */}

                {item.active && (

                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_left,rgba(255,68,0,0.12),transparent_60%)]" />

                )}

                {/* LEFT */}

                <div className="relative z-10 flex items-center gap-4">

                  <div
                    className={`
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-xl
                      border
                      transition-all
                      duration-300
                      ${
                        item.active
                          ? "border-[#FF4400]/20 bg-[#FF4400]/10"
                          : "border-white/10 bg-white/[0.02] group-hover:border-white/20"
                      }
                    `}
                  >

                    <item.icon
                      size={18}
                      className={`
                        transition-all
                        duration-300
                        ${
                          item.active
                            ? "text-[#FF4400]"
                            : "text-gray-500 group-hover:text-white"
                        }
                      `}
                    />

                  </div>

                  <span className="text-[13px] tracking-wide font-medium">

                    {item.name}

                  </span>

                </div>

                {/* RIGHT */}

                <ChevronRight
                  size={16}
                  className={`
                    relative
                    z-10
                    transition-all
                    duration-300
                    ${
                      item.active
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white group-hover:translate-x-1"
                    }
                  `}
                />

              </button>

            ))}

          </div>

        </div>

        {/* BOTTOM STATUS CARD */}

        <div className="p-5 border-t border-white/10">

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-white/20">

            {/* GLOW */}

            <div className="absolute top-[-40px] right-[-40px] w-[140px] h-[140px] rounded-full bg-[#FF4400]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#FF4400]/20" />

            {/* CONTENT */}

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#FF4400]/20 bg-[#FF4400]/10">

                  <Zap
                    size={16}
                    className="text-[#FF4400]"
                  />

                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[0.22em] font-mono text-white">

                    AI Copilot Active

                  </p>

                  <p className="mt-1 text-xs text-gray-500">

                    System synchronized successfully.

                  </p>

                </div>

              </div>

              {/* STATUS */}

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                <div className="flex items-center gap-2">

                  <div className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />

                  <span className="text-[11px] uppercase tracking-[0.18em] font-mono text-gray-400">

                    Online

                  </span>

                </div>

                <span className="text-[11px] font-mono text-gray-500">

                  v2.1.4

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}
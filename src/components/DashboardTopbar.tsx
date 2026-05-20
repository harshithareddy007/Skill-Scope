import { Link, useLocation } from "react-router-dom";

import { ChevronDown, Menu } from "lucide-react";

import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

export default function DashboardTopbar() {
  const location = useLocation();

  const [userName, setUserName] = useState("HK");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const fullName = user.user_metadata?.full_name;

    if (fullName) {
      setUserName(fullName);
    }
  };

  const navItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },

    {
      label: "Resume",
      path: "/ResumeAnalysisPage",
    },

    {
      label: "Skill Gap",
      path: "/skill-insights",
    },

    {
      label: "Roadmap",
      path: "/career-roadmap",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-5">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050505]/80 backdrop-blur-2xl">
          {/* TOP LINE */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

          {/* AMBIENT */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,68,0,0.04),transparent_65%)]" />

          {/* CONTENT */}

          <div className="relative z-10 flex items-center justify-between h-[74px] px-6 lg:px-8">
            {/* =========================================
                LEFT
            ========================================= */}

            <Link to="/dashboard" className="flex items-center gap-4 group">
              {/* LOGO */}

              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4400]" />
              </div>

              {/* BRAND */}

              <h1 className="text-[22px] font-semibold tracking-[-0.05em] text-white">
                SkillScope
              </h1>
            </Link>

            {/* =========================================
                CENTER NAVIGATION
            ========================================= */}

            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      group
                      relative
                      text-[12px]
                      uppercase
                      tracking-[0.18em]
                      font-mono
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-500 hover:text-white"
                      }
                    `}
                  >
                    {item.label}

                    {/* UNDERLINE */}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-px
                        bg-[#FF4400]
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* =========================================
                RIGHT
            ========================================= */}

            <div className="flex items-center gap-4">
              {/* PROFILE */}

              <Link
                to="/profile"
                className="group hidden md:flex items-center gap-3 rounded-full border border-white/[0.08] bg-transparent px-4 py-2.5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]"
              >
                {/* AVATAR */}

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FF4400]/15 bg-[#FF4400]/10 text-[11px] font-mono text-[#FF4400]">
                  {userName?.slice(0, 2).toUpperCase()}
                </div>

                {/* NAME */}

                <span className="text-sm text-gray-400 transition-colors group-hover:text-white">
                  Profile
                </span>

                {/* ICON */}

                <ChevronDown
                  size={15}
                  className="text-gray-600 transition-colors group-hover:text-white"
                />
              </Link>

              {/* MOBILE MENU */}

              <button className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-white/[0.06] text-gray-400 transition-all duration-300 hover:text-white">
                <Menu size={20} strokeWidth={1.7} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*
              DEMO UI
              */}
      <div className="fixed bottom-5 right-5 z-50 rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 px-4 py-2 text-xs font-medium text-[#FF4400] backdrop-blur-xl">
        Demo Preview
      </div>
    </nav>
  );
}

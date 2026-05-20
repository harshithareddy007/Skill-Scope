import { Link } from "react-router-dom";

import {
  ArrowRight,
  Menu,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    {
      label: "Insights",
      id: "insights",
    },

    {
      label: "Platform",
      id: "platform",
    },

    {
      label: "Solutions",
      id: "solutions",
    },

    {
      label: "Roadmaps",
      id: "roadmaps",
    },
  ];

  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const scrollToSection = (id: string) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };

  /* =========================================
     ACTIVE NAV DETECTION
  ========================================= */

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 200;

      let currentSection = "";

      navItems.forEach((item) => {

        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {

          currentSection = item.id;

        }

      });

      setActiveSection(currentSection);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 pt-5">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.28)]">

          {/* TOP BORDER GLOW */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

          
          <div className="relative z-10 grid grid-cols-[1.2fr_1fr_1.2fr] items-center h-[74px] px-8">

            {/* =========================================
                LEFT
            ========================================= */}

            <div className="flex items-center">

              <Link
                to="/"
                className="flex items-center gap-4 group"
              >

                {/* LOGO */}

                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl border border-[var(--border-primary)] bg-white/[0.03] overflow-hidden">

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(255,68,0,0.18),transparent_70%)]" />

                  <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(232,93,42,0.45)]" />

                </div>

                {/* BRAND */}

                <div>

                  <h1 className="text-[22px] font-semibold tracking-[-0.05em] text-white leading-none">

                    SkillScope

                  </h1>

                </div>

              </Link>

            </div>

            {/* =========================================
                CENTER NAV
            ========================================= */}

            <div className="hidden lg:flex items-center justify-center gap-12">

              {navItems.map((item) => {

                const isActive = activeSection === item.id;

                return (

                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
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
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >

                    {item.label}

                    {/* ACTIVE UNDERLINE */}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-px
                        bg-[var(--accent)]
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }
                      `}
                    />

                  </button>

                );

              })}

            </div>

            {/* =========================================
                RIGHT
            ========================================= */}

            <div className="flex items-center justify-end gap-7">

              {/* LOGIN */}

              <Link
                to="/login"
                className="hidden lg:block text-[12px] uppercase tracking-[0.18em] font-mono text-gray-300 hover:text-white transition-all duration-300"
              >

                Log In

              </Link>

              {/* CTA */}

              <Link
                to="/signup"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] text-white px-6 py-3 text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300  hover:bg-[var(--accent-hover)] hover:-translate-y-[1px]"
              >

                Get Started

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              {/* MOBILE MENU */}

              <button className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-secondary)] text-gray-300 hover:text-white transition-all duration-300">

                <Menu
                  size={20}
                  strokeWidth={1.7}
                />

              </button>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}
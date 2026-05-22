import { Link } from "react-router-dom";

import { ArrowRight, Menu } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  /* =========================================
     ACTIVE NAV DETECTION
  ========================================= */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!isMenuOpen) return;

      const target = event.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
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
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-8 pt-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl border border-white/[0.12] bg-zinc-900/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.28)] hover:shadow-lg transition-all duration-300">
          {/* TOP BORDER GLOW */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

          <div className="relative z-10 grid grid-cols-[auto_1fr] lg:grid-cols-[1.2fr_1fr_1.2fr] items-center h-14 sm:h-16 gap-3 sm:gap-4 px-3 sm:px-4 lg:px-8">
            {/* =========================================
                LEFT
            ========================================= */}

            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
                {/* LOGO */}

                <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[var(--border-primary)] bg-white/[0.03] overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 bg-[radial-gradient(circle,rgba(255,68,0,0.18),transparent_70%)]" />

                  <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(232,93,42,0.45)]" />
                </div>

                {/* BRAND */}

                <div>
                  <h1 className="text-base sm:text-lg font-semibold tracking-[-0.05em] text-white leading-none">
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

            <div className="flex items-center justify-end gap-3 sm:gap-4">
              <Link
                to="/login"
                className="hidden sm:flex text-sm text-zinc-400 hover:text-white transition-colors duration-300 px-3"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] text-white px-4 sm:px-5 md:px-6 py-2.5 text-[10px] sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:bg-[var(--accent-hover)] hover:-translate-y-[1px]"
              >
                Get Started
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-secondary)] text-gray-300 hover:text-white transition-all duration-300"
              >
                <Menu size={20} strokeWidth={1.7} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="absolute inset-x-3 top-full mt-3 rounded-3xl border border-white/[0.08] bg-black/80 backdrop-blur-xl shadow-xl ring-1 ring-white/5 z-40 overflow-hidden lg:hidden"
              >
                <div className="flex flex-col gap-2 p-4 sm:p-5">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] font-mono text-zinc-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}

                  <div className="border-t border-white/[0.08] pt-3 mt-2">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] font-mono text-zinc-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      Log In
                    </Link>

                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-4 py-3 text-sm uppercase tracking-[0.18em] font-medium text-white transition-all duration-200 hover:bg-[var(--accent-hover)]"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

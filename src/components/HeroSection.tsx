import { motion, type Variants } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =========================================
     ANIMATIONS
  ========================================= */

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* =========================================
          CINEMATIC BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#151515_0%,#0f0f10_60%,#090909_100%)]" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.022]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* NOISE TEXTURE */}

      <div className="absolute inset-0 opacity-[0.025] mix-blend-soft-light pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>

      {/* =========================================
          AMBIENT LIGHTING
      ========================================= */}

      {/* MAIN AURA */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[760px] h-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[220px]"
      />

      {/* TOP LIGHT */}

      <div className="absolute top-[-260px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-[var(--accent)]/5 blur-[200px]" />

      {/* LEFT FLOATING LIGHT */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[18%] left-[6%] w-[320px] h-[320px] rounded-full bg-[var(--accent)]/5 blur-[180px]"
      />

      {/* RIGHT FLOATING LIGHT */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[12%] right-[8%] w-[360px] h-[360px] rounded-full bg-[var(--accent)]/4 blur-[200px]"
      />

      {/* LIGHT RAYS */}

      <motion.div
        animate={{
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <div className="absolute left-[18%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent blur-sm" />

        <div className="absolute right-[22%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--accent)]/12 to-transparent blur-sm" />
      </motion.div>

      {/* VIGNETTE */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.72)_100%)]" />

      {/* =========================================
          CONTENT
      ========================================= */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center"
      >
        {/* BADGE */}

        <motion.div
          variants={itemVariants}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/[0.12] bg-white/[0.03] backdrop-blur-xl shadow-sm hover:shadow-md hover:border-[#FF4400]/30 hover:bg-white/[0.04] transition-all duration-300"
        >
          <Terminal
            size={14}
            className="text-[var(--accent)]"
          />

          <span className="text-[11px] uppercase tracking-[0.18em] font-mono text-zinc-300">
            Your AI Career Intelligence System
          </span>
        </motion.div>

        {/* HEADING */}

        <motion.h1
          variants={itemVariants}
          className="mt-10 text-[58px] md:text-[82px] xl:text-[96px] leading-[0.9] tracking-[-0.075em] font-semibold"
        >
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Decode your future.
          </span>

          <span className="block mt-2 bg-gradient-to-r from-[var(--accent)] to-[#ff8b5e] bg-clip-text text-transparent">
            Automate the rest.
          </span>
        </motion.h1>

        {/* SUBTEXT */}

        <motion.p
          variants={itemVariants}
          className="mt-10 max-w-3xl mx-auto text-[17px] md:text-[19px] leading-relaxed text-zinc-400"
        >
          Analyze resumes, identify hidden skill gaps, optimize ATS
          performance, and generate AI-powered career roadmaps built for the
          next generation of ambitious builders.
        </motion.p>

        {/* CTA */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-14"
        >
          <Link
            to="/signup"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-medium text-white shadow-[0_8px_40px_rgba(232,93,42,0.22)] transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:bg-[var(--accent-hover)] active:scale-[0.98]"
          >
            {/* BUTTON LIGHT */}

            <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)]" />

            <span className="relative z-10">
              Deploy Analysis
            </span>

            <ArrowRight
              size={18}
              className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* TRUST TEXT */}

        <motion.div
          variants={itemVariants}
          className="mt-10"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
            Built for students, creators, engineers, and future-ready talent
          </p>
        </motion.div>
      </motion.div>

      {/* =========================================
          SECTION TRANSITION
      ========================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[var(--bg-primary)]" />
    </section>
  );
}
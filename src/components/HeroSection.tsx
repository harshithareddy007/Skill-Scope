import { motion, type Variants } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function HeroSection() {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-black" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.04]">
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

      {/* MAIN CENTER GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.16, 0.26, 0.16],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4400]/20 blur-[170px]"
      />

      {/* TOP LIGHT */}

      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-[#FF4400]/10 blur-[140px]" />

      {/* LEFT GLOW */}

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
        className="absolute top-[20%] left-[8%] w-[280px] h-[280px] rounded-full bg-orange-500/10 blur-[120px]"
      />

      {/* RIGHT GLOW */}

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
        className="absolute bottom-[15%] right-[10%] w-[320px] h-[320px] rounded-full bg-[#FF4400]/10 blur-[130px]"
      />

      {/* LIGHT RAYS */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <div className="absolute left-[18%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#FF4400]/40 to-transparent blur-sm" />

        <div className="absolute right-[22%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#FF4400]/30 to-transparent blur-sm" />
      </motion.div>

      {/* DARK VIGNETTE */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      {/* TEXT AURA */}

      <motion.div
        animate={{
          opacity: [0.16, 0.24, 0.16],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[38%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FF4400]/10 blur-[120px]"
      />

      {/* CONTENT */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center"
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
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF4400]/20 bg-white/[0.05]"
        >
          <Terminal size={14} className="text-[#FF4400]" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-mono text-gray-300">
            Your AI Career Intelligence System
          </span>
        </motion.div>

        {/* HEADING */}

        <motion.h1
          variants={itemVariants}
          className="mt-10 text-[58px] md:text-[82px] xl:text-[96px] leading-[0.92] tracking-[-0.07em] font-semibold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.06)]"
        >
          Decode your future.
          <span className="block text-[#FF4400] mt-2">Automate the rest.</span>
        </motion.h1>

        {/* SUBTEXT */}

        <motion.p
          variants={itemVariants}
          className="mt-10 max-w-3xl mx-auto text-[17px] md:text-[19px] leading-relaxed text-gray-400"
        >
          Analyze resumes, detect skill gaps, optimize ATS performance, and
          generate AI-powered career roadmaps for the next generation of
          builders.
        </motion.p>

        {/* CTA */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-14"
        >
          <Link
            to="/signup"
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-white text-black px-7 py-4 rounded-full text-sm font-medium hover:-translate-y-[2px] transition-all duration-300 shadow-[0_0_0px_rgba(255,68,0,0)] hover:shadow-[0_0_35px_rgba(255,68,0,0.18)]"
          >
            Deploy Analysis
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

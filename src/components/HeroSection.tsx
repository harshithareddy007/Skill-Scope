import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

function HeroSection() {

  return (
    <section className="relative overflow-hidden px-6 lg:px-12 pt-32 pb-24">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FB3640]/10 blur-[140px] rounded-full" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.9,
        }}

        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center"
      >

        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 text-sm text-gray-300 backdrop-blur-xl">

          <Sparkles
            size={16}
            className="text-[#FB3640]"
          />

          AI-Powered Career Intelligence Platform

        </div>

        <h1 className="mt-10 text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight max-w-6xl">

          Build your future with
          <span className="block text-[#FB3640] mt-4">
            SkillScope AI
          </span>

        </h1>

        <p className="text-gray-400 text-xl lg:text-2xl mt-10 max-w-4xl leading-relaxed">

          Analyze resumes, discover skill gaps, improve ATS performance,
          and unlock AI-generated career roadmaps tailored to your goals.

        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 mt-14">

          <Link
            to="/signup"
            className="group inline-flex items-center gap-3 bg-[#FB3640] hover:bg-red-500 text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl shadow-red-500/20"
          >

            Start Your Analysis

            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-all duration-300"
            />

          </Link>

          <button className="px-8 py-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] text-white text-lg transition-all duration-300">

            Explore Features

          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-5xl">

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h3 className="text-4xl font-bold text-[#FB3640]">
              92%
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Average ATS optimization improvement
            </p>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h3 className="text-4xl font-bold text-[#89E900]">
              AI
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Intelligent role-based skill analysis
            </p>

          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h3 className="text-4xl font-bold text-purple-400">
              Smart
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Personalized career growth roadmaps
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default HeroSection;
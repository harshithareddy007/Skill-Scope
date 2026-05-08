import { Link } from "react-router-dom";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

function SignupPage() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000F08] text-white flex items-center justify-center px-6 py-16">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FB3640]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/[0.03] border border-white/10 rounded-[36px] p-8 lg:p-10 backdrop-blur-2xl">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-[#FB3640]/15 border border-[#FB3640]/20 flex items-center justify-center">

              <Sparkles
                size={24}
                className="text-[#FB3640]"
              />

            </div>

            <div>

              <p className="text-sm uppercase tracking-wide text-[#FB3640]">
                SkillScope AI
              </p>

              <h1 className="text-4xl font-bold mt-2">
                Create Account
              </h1>

            </div>

          </div>

          <p className="text-gray-400 text-lg leading-relaxed mt-8">

            Start your AI-powered career journey and
            unlock intelligent resume insights.

          </p>

          <div className="flex flex-col gap-5 mt-10">

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
                Full Name
              </p>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FB3640]/40 transition-all duration-300 placeholder:text-gray-500"
              />

            </div>

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
                Email Address
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FB3640]/40 transition-all duration-300 placeholder:text-gray-500"
              />

            </div>

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
                Password
              </p>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#FB3640]/40 transition-all duration-300 placeholder:text-gray-500"
              />

            </div>

            <button className="group mt-4 inline-flex items-center justify-center gap-3 bg-[#FB3640] hover:bg-red-500 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl shadow-red-500/20">

              Create Account

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-all duration-300"
              />

            </button>

          </div>

          <div className="mt-10 pt-8 border-t border-white/10 text-center">

            <p className="text-gray-400">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-white font-semibold hover:text-[#FB3640] transition-all duration-300"
              >

                Sign In

              </Link>

            </p>

          </div>

        </div>

      </div>

    </main>
  );
}

export default SignupPage;
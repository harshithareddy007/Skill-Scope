import { Link } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen w-full bg-[#030303] font-sans text-white selection:bg-[#FF4400]/30 selection:text-white">
      
      {/* =========================================
          LEFT SIDE: EDGE-TO-EDGE VISUAL PANEL
          ========================================= */}
      <div className="relative hidden w-1/2 lg:flex flex-col justify-center overflow-hidden border-r border-white/10 bg-[#080808]">
        
        {/* Crisp Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Tech/Hacker ambient glows */}
        <div className="absolute top-0 left-0 h-[800px] w-[800px] -translate-y-1/3 -translate-x-1/3 rounded-full bg-[#00FF66]/10 blur-[160px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-y-1/3 translate-x-1/3 rounded-full bg-[#FF4400]/15 blur-[140px] mix-blend-screen pointer-events-none" />
        
        {/* GLASS TERMINAL WINDOW */}
        <div className="relative z-10 w-full max-w-xl mx-auto rounded-2xl border border-white/15 bg-black/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-mono text-gray-400">core_engine_init.sh</span>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-8 font-mono text-sm leading-relaxed tracking-wider">
            <div className="text-gray-500 mb-5">{">"} INITIALIZING SECURE ENVIRONMENT...</div>
            <div className="text-[#00FF66] mb-3">[OK] Core dependencies loaded.</div>
            <div className="text-[#00FF66] mb-8">[OK] Neural pathways established.</div>
            
            <div className="text-gray-500 mb-3">{">"} AWAITING OPERATOR INPUT...</div>
            <div className="text-gray-300 mb-8 pl-5 border-l-2 border-[#FF4400]/50">
              System ready to parse resume vectors.<br/>
              Standing by to generate career roadmap.
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#FF4400] font-bold">{">"}</span>
              <span className="h-5 w-2.5 bg-white animate-pulse" />
            </div>
          </div>
        </div>

      </div>

      {/* =========================================
          RIGHT SIDE: THE FORM (Centered in its half)
          ========================================= */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-16 lg:w-1/2 xl:px-32 2xl:px-48">
        
        <div className="w-full max-w-[440px] mx-auto">
          
          <Link to="/" className="mb-12 flex items-center gap-3 w-fit">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF4400]">
              <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">SkillScope AI</h1>
          </Link>

          <div className="mb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">
              Build your future
            </h2>
            <p className="text-sm text-gray-400 font-light">
              Start with a smarter resume, finish with a sharper career.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button className="flex-1 flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] transition-all hover:bg-white/[0.08] hover:border-white/30 active:scale-95 text-sm font-medium">
              <FcGoogle size={18} />
              <span>Google</span>
            </button>
            <button className="flex-1 flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] transition-all hover:bg-white/[0.08] hover:border-white/30 active:scale-95 text-sm font-medium">
              <FaLinkedinIn size={18} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-white/20" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
              Or continue with email
            </span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <div className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <User size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-4 py-4 pr-12 text-sm text-white outline-none transition-all placeholder:text-gray-500 hover:border-white/30 focus:border-[#FF4400] focus:bg-white/[0.06]"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-4 py-4 pr-12 text-sm text-white outline-none transition-all placeholder:text-gray-500 hover:border-white/30 focus:border-[#FF4400] focus:bg-white/[0.06]"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>
              <input
                type="password"
                placeholder="Create password"
                className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-4 py-4 pr-12 text-sm text-white outline-none transition-all placeholder:text-gray-500 hover:border-white/30 focus:border-[#FF4400] focus:bg-white/[0.06]"
              />
            </div>

            <button className="w-full mt-6 rounded-xl bg-[#FF4400] py-4 text-sm font-semibold text-white transition-all hover:bg-[#FF5500] active:scale-[0.98] shadow-[0_0_24px_rgba(255,68,0,0.25)]">
              Create account
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF4400] font-medium hover:text-[#FF5500] transition-colors">
              Sign in
            </Link>
          </p>

          <p className="mt-12 text-center text-[10px] text-gray-600 font-mono">
            By creating an account you agree to our Terms & Privacy.
          </p>

        </div>
      </div>

    </main>
  );
}
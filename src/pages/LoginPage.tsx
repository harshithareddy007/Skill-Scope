import { Link } from "react-router-dom";
import { Lock, Mail, Quote, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        setIsAuthenticated(true);
      }

      setCheckingSession(false);
    };

    checkSession();
  }, []);

  if (checkingSession) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030303]">
        <div className="h-10 w-10 rounded-full border-2 border-[#FF4400] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <main className="flex min-h-screen w-full bg-[#030303] font-sans text-white selection:bg-[#FF4400]/30 selection:text-white">
      {/* =========================================
          LEFT SIDE: THE FORM (Centered in its half)
          ========================================= */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-16 lg:w-1/2 xl:px-32 2xl:px-48">
        <div className="w-full max-w-[440px] mx-auto">
          <Link to="/" className="mb-12 flex items-center gap-3 w-fit">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF4400]">
              <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">
              SkillScope AI
            </h1>
          </Link>

          <div className="mb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-2">
              Welcome back
            </h2>
            <p className="text-sm text-gray-400 font-light">
              Sign in to continue refining your career intelligence.
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
                <Mail size={18} className="text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 hover:border-white/30 focus:border-[#FF4400] focus:bg-white/[0.06]"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-500" />
              </div>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-12 py-4 pr-12 text-sm text-white outline-none transition-all placeholder:text-gray-500 hover:border-white/30 focus:border-[#FF4400] focus:bg-white/[0.06]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

              {errorMessage && (
                <p className="mt-3 text-sm text-red-500">{errorMessage}</p>
              )}
            </div>
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/30 bg-white/[0.04] accent-[#FF4400]"
                />
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Remember me
                </span>
              </label>
              <button className="text-sm text-[#FF4400] hover:text-[#FF5500] transition-colors font-medium">
                Forgot password?
              </button>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full mt-6 rounded-xl bg-[#FF4400] py-4 text-sm font-semibold text-white transition-all hover:bg-[#FF5500] active:scale-[0.98] shadow-[0_0_24px_rgba(255,68,0,0.25)] disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            New to SkillScope?{" "}
            <Link
              to="/signup"
              className="text-[#FF4400] font-medium hover:text-[#FF5500] transition-colors"
            >
              Create an account
            </Link>
          </p>

          <p className="mt-12 text-center text-[10px] text-gray-600 font-mono">
            Protected with end-to-end encrypted sessions.
          </p>
        </div>
      </div>

      {/* =========================================
          RIGHT SIDE: EDGE-TO-EDGE VISUAL PANEL
          ========================================= */}
      <div className="relative hidden w-1/2 lg:flex flex-col justify-center overflow-hidden border-l border-white/10 bg-[#080808]">
        {/* Crisp Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Deep ambient glows */}
        <div className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[#FF4400]/15 blur-[160px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-[#1D4ED8]/15 blur-[140px] mix-blend-screen pointer-events-none" />

        {/* Quote Content */}
        <div className="relative z-10 w-full max-w-xl mx-auto px-12">
          <Quote size={56} className="text-[#FF4400]/50 mb-10" />

          <h2 className="text-[2.25rem] leading-[1.25] font-medium tracking-tight text-white mb-12">
            "SkillScope’s AI didn't just optimize my resume; it mapped the exact
            system design dependencies I needed to land my Senior Engineering
            role."
          </h2>

          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#FF4400] to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#FF4400]/25">
              JD
            </div>
            <div>
              <p className="text-lg font-medium text-white">Jane Doe</p>
              <p className="text-sm font-mono text-[#FF4400]">
                Senior ML Engineer, TechCorp
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

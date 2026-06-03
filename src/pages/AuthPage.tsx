import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { supabase } from "../lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// 1. CHAOS TO CLARITY BACKGROUND COMPONENT
// Wrapped in React.memo() to prevent typing lag!
// ==========================================
const ChaosToClarityBackground = React.memo(() => {
  const paths = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      // 1. CLARITY: Evenly spaced horizontal lanes in the middle of the screen
      const targetY = 150 + i * (700 / 30);

      // 2. CHAOS: Completely random vertical start points on the left
      const startY = Math.random() * 1200 - 100;

      // 3. THE SWOOP: Keep the chaos constrained to the left side
      const cp1X = 50 + Math.random() * 200;
      const cp1Y = startY + (Math.random() * 600 - 300);

      // 4. THE LOCK-IN: Tucked precisely behind the right edge of the centered card
      const lockX = 520 + Math.random() * 60;

      // 5. THE TANGENT: Pull the line smoothly into the lock point
      const cp2X = lockX - (Math.random() * 100 + 40);
      const cp2Y = targetY;

      return {
        id: i,
        // M (Start) -> C (Smooth S-Curve) -> L (Straight Laser to the right edge)
        d: `M -100 ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${lockX} ${targetY} L 1200 ${targetY}`,
        delay: Math.random() * -20,
        duration: 12 + Math.random() * 15,
        opacity: 0.3 + Math.random() * 0.5,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="w-full h-full opacity-70"
      >
        {/* Neon Glow Filter */}
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths.map((path) => (
          <g key={path.id}>
            {/* The permanent "fiber optic" track */}
            <path
              d={path.d}
              fill="none"
              stroke="#FF4400"
              strokeWidth="1.5"
              opacity="0.06"
            />
            {/* The glowing data packet moving along the track */}
            <motion.path
              d={path.d}
              fill="none"
              stroke="#FF4400"
              strokeWidth="3.5"
              strokeLinecap="round"
              filter="url(#neon-glow)"
              initial={{ pathLength: 0.15, pathOffset: -0.2, opacity: 0 }}
              animate={{
                pathOffset: 1.2,
                opacity: [0, path.opacity, path.opacity, 0],
              }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "linear",
                delay: path.delay,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
});

// ==========================================
// 2. UNIFIED AUTH PAGE
// ==========================================
export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSignUp, setIsSignUp] = useState(location.pathname === "/signup");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setErrorMessage("Enter your email first");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      alert("Password reset email sent.");
    }
  };

  const handleGithubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/dashboard");
        return;
      }

      setCheckingSession(false);
    };

    checkSession();
  }, [navigate]);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const toggleAuthMode = () => {
    const newMode = !isSignUp;
    setIsSignUp(newMode);
    setErrorMessage("");
    navigate(newMode ? "/signup" : "/login");
  };

  const [successMessage, setSuccessMessage] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password || (isSignUp && !name)) {
      setErrorMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      if (isSignUp && password !== confirmPassword) {
        setLoading(false);
        setErrorMessage("Passwords do not match");
        return;
      }

      if (isSignUp && !/(?=.*[A-Z])(?=.*[0-9]).{8,}/.test(password)) {
        setLoading(false);
        setErrorMessage(
          "Password must contain 8+ characters, one number and one uppercase letter",
        );
        return;
      }

      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
            },
          },
        });

        if (error) throw error;

        setSuccessMessage(
          "Verification email sent. Check your inbox and verify your account.",
        );

        navigate("/login");
        return;
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (!data.user.email_confirmed_at) {
        await supabase.auth.signOut();

        setErrorMessage("Please verify your email before logging in.");
        return;
      }

      if (error) throw error;

      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("already registered")) {
        setErrorMessage("An account already exists with this email.");
      } else {
        setErrorMessage(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#050505]">
        <div className="h-6 w-6 rounded-full border-2 border-zinc-800 border-t-[#FF4400] animate-spin" />
      </div>
    );
  }

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] font-sans text-white selection:bg-[#FF4400]/30 px-4">
      {/* --- BACKGROUND LAYERS --- */}
      <ChaosToClarityBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,68,0,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] z-0" />

      {/* Central Atmospheric Glows to anchor the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[#050505] blur-[100px] rounded-full pointer-events-none opacity-80 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF4400]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* --- UI CONTENT --- */}
      <motion.div
        layout
        className="relative z-10 flex items-center justify-center mb-2"
      >
        <Link to="/" className="flex items-center gap-2 group outline-none">
          <div className="w-7 h-7 rounded-md bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF4400] shadow-[0_0_10px_#FF4400]" />
          </div>
          <span className="text-[20px] font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
            SkillScope
          </span>
        </Link>
      </motion.div>

      <motion.div
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`relative z-10 w-full max-w-[440px]
${isSignUp ? "p-5 sm:p-6" : "p-6 sm:p-8"}
bg-[#0A0A0C]/80
backdrop-blur-2xl
border border-[#FF4400]/40
rounded-[24px]
shadow-[0_0_60px_-15px_rgba(255,68,0,0.5)]
overflow-hidden`}
      >
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-[#FF4400]/80 via-[#FF4400]/20 to-transparent" />

        <motion.div layout className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5">
            {isSignUp ? "Create account." : "Welcome back."}
          </h1>
          <p className="text-[13px] text-zinc-400 font-medium">
            {isSignUp
              ? "Build your AI-powered career system."
              : "Continue your AI-powered career journey."}
          </p>
        </motion.div>

        {successMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[12px] text-green-400 font-medium"
          >
            {successMessage}
          </motion.p>
        )}

        <form onSubmit={handleAuth}>
          <motion.div layout className="space-y-3">
            <AnimatePresence initial={false}>
              {isSignUp && (
                <motion.div
                  initial={{ height: 0, opacity: 0, overflow: "hidden" }}
                  animate={{ height: "auto", opacity: 1, overflow: "visible" }}
                  exit={{ height: 0, opacity: 0, overflow: "hidden" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <label className="block text-[11px] font-bold tracking-wider text-zinc-400 mb-1.5 uppercase pt-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-zinc-500" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 rounded-xl bg-[#111113]/80 border border-white/[0.06] pl-10 pr-4 text-[13px] text-white placeholder:text-zinc-600 outline-none transition-all focus:bg-[#151518] focus:border-[#FF4400]/60 focus:ring-1 focus:ring-[#FF4400]/50"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-[11px] font-bold tracking-wider text-zinc-400 mb-1.5 uppercase">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-zinc-500" />
                <input
                  type="email"
                  placeholder="you@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 rounded-xl bg-[#111113]/80 border border-white/[0.06] pl-10 pr-4 text-[13px] text-white placeholder:text-zinc-600 outline-none transition-all focus:bg-[#151518] focus:border-[#FF4400]/60 focus:ring-1 focus:ring-[#FF4400]/50"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                  Password
                </label>
                {!isSignUp && (
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-[12px] font-medium text-[#FF4400] hover:text-[#FF6633] transition-colors"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-zinc-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={
                    isSignUp ? "Create a password" : "Enter your password"
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 rounded-xl bg-[#111113]/80 border border-white/[0.06] pl-10 pr-10 text-[13px] text-white placeholder:text-zinc-600 outline-none transition-all focus:bg-[#151518] focus:border-[#FF4400]/60 focus:ring-1 focus:ring-[#FF4400]/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isSignUp && (
                <motion.div
                  initial={{ height: 0, opacity: 0, overflow: "hidden" }}
                  animate={{ height: "auto", opacity: 1, overflow: "visible" }}
                  exit={{ height: 0, opacity: 0, overflow: "hidden" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <label className="block text-[11px] font-bold tracking-wider text-zinc-400 mb-1.5 uppercase mt-3">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-zinc-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full h-11 rounded-xl bg-[#111113]/80 border border-white/[0.06] pl-10 pr-4 text-[13px] text-white placeholder:text-zinc-600 outline-none transition-all focus:bg-[#151518] focus:border-[#FF4400]/60 focus:ring-1 focus:ring-[#FF4400]/50"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {errorMessage && (
              <motion.p
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[12px] text-[#FF4400] font-medium"
              >
                {errorMessage}
              </motion.p>
            )}

            <motion.button
              layout
              type="submit"
              disabled={loading}
              className="w-full h-11 flex items-center justify-center gap-2 rounded-xl bg-[#FF4400] hover:bg-[#E63E00] text-white text-[14px] font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSignUp ? (
                "Create Account \u2192"
              ) : (
                "Log In \u2192"
              )}
            </motion.button>
          </motion.div>
        </form>

        <motion.div layout className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/[0.08]" />
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
            Or continue with
          </span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </motion.div>

        <motion.div layout className="grid grid-cols-2 gap-3">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#111113] border border-white/[0.06] text-[13px] font-medium text-zinc-300 hover:bg-[#18181B] hover:border-white/[0.12] hover:text-white transition-all"
          >
            <FcGoogle size={16} />
            Google
          </button>
          <button
            onClick={handleGithubLogin}
            type="button"
            className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#111113] border border-white/[0.06] text-[13px] font-medium text-zinc-300 hover:bg-[#18181B] hover:border-white/[0.12] hover:text-white transition-all group"
          >
            <FaGithub size={16} />
            GitHub
          </button>
        </motion.div>
      </motion.div>

      <motion.p
        layout
        className="relative z-10 mt-6 text-center text-[13px] text-zinc-400 font-medium"
      >
        {isSignUp ? "Already have an account? " : "Don't have an account? "}
        <button
          onClick={toggleAuthMode}
          className="text-[#FF4400] hover:text-[#FF6633] transition-colors font-semibold"
        >
          {isSignUp ? "Log in \u2192" : "Sign up \u2192"}
        </button>
      </motion.p>
    </main>
  );
}

import { Link, Navigate, useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  Quote,
  Eye,
  EyeOff,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

import { FaLinkedinIn } from "react-icons/fa";

import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const navigate = useNavigate();

  /* =========================================
     STATES
  ========================================= */

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    checkingSession,
    setCheckingSession,
  ] = useState(true);

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(false);

  /* =========================================
     CHECK SESSION
  ========================================= */

  useEffect(() => {
    const checkSession =
      async () => {
        const { data } =
          await supabase.auth.getSession();

        if (data.session) {
          setIsAuthenticated(true);
        }

        setCheckingSession(false);
      };

    checkSession();
  }, []);

  /* =========================================
     LOGIN
  ========================================= */

  const handleLogin =
    async () => {
      if (!email || !password) {
        setErrorMessage(
          "Please fill all fields"
        );

        return;
      }

      try {
        setLoading(true);

        setErrorMessage("");

        const { error } =
          await supabase.auth.signInWithPassword(
            {
              email,
              password,
            }
          );

        if (error) {
          setErrorMessage(
            error.message
          );

          return;
        }

        navigate("/dashboard");
      } catch (err) {
        console.log(err);

        setErrorMessage(
          "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

  /* =========================================
     DEMO LOGIN
  ========================================= */

  /* =========================================
     LOADING SCREEN
  ========================================= */

  if (checkingSession) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030303]">
        <div className="h-10 w-10 rounded-full border-2 border-[#FF4400] border-t-transparent animate-spin" />
      </div>
    );
  }

  /* =========================================
     REDIRECT
  ========================================= */

  if (isAuthenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return (
    <main className="flex min-h-screen w-full overflow-hidden bg-[#030303] text-white">
      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="flex w-full flex-col justify-center px-8 sm:px-16 lg:w-1/2 xl:px-32 2xl:px-48">
        <div className="mx-auto w-full max-w-[440px]">
          {/* LOGO */}

          <Link
            to="/"
            className="mb-12 flex w-fit items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF4400]">
              <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_white]" />
            </div>

            <h1 className="text-xl font-semibold tracking-tight">
              SkillScope AI
            </h1>
          </Link>


          {/* HEADER */}

          <div className="mb-8">
            <h2 className="mb-3 text-4xl font-semibold tracking-tight text-white">
              Welcome back
            </h2>

            <p className="text-sm leading-relaxed text-zinc-400">
              Explore the SkillScope
              experience and review the
              interface, interactions, and
              user flow.
            </p>
          </div>


          {/* DIVIDER */}

          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.08]" />

            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
              Optional Login
            </span>

            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>

          {/* SOCIALS */}

          <div className="mb-6 flex items-center gap-4">
            <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <FcGoogle size={18} />

              <span>Google</span>
            </button>

            <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <FaLinkedinIn
                size={18}
                className="text-[#0A66C2]"
              />

              <span>LinkedIn</span>
            </button>
          </div>

          {/* EMAIL DIVIDER */}

          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.08]" />

            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
              Continue with Email
            </span>

            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>

          {/* FORM */}

          <div className="space-y-5">
            {/* EMAIL */}

            <div className="relative">
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  px-5
                  py-4
                  pr-12
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-zinc-500
                  hover:border-white/20
                  focus:border-[#FF4400]
                "
              />

              <div className="absolute inset-y-0 right-4 flex items-center">
                <Mail
                  size={18}
                  className="text-zinc-500"
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center">
                <Lock
                  size={18}
                  className="text-zinc-500"
                />
              </div>

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  px-12
                  py-4
                  pr-12
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-zinc-500
                  hover:border-white/20
                  focus:border-[#FF4400]
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute inset-y-0 right-4 flex items-center text-zinc-500 transition-colors hover:text-white"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {/* ERROR */}

            {errorMessage && (
              <p className="text-sm text-red-400">
                {errorMessage}
              </p>
            )}

            {/* OPTIONS */}

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[#FF4400]"
                />

                Remember me
              </label>

              <button className="text-sm text-[#FF4400] transition-colors hover:text-[#ff5a1f]">
                Forgot password?
              </button>
            </div>

            {/* LOGIN BUTTON */}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
                w-full
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.04]
                py-4
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-white/[0.08]
                disabled:opacity-50
              "
            >
              {loading
                ? "Signing in..."
                : "Sign in"}
            </button>
          </div>

          {/* SIGNUP */}

          <p className="mt-8 text-center text-sm text-zinc-400">
            New to SkillScope?{" "}

            <Link
              to="/signup"
              className="font-medium text-[#FF4400] transition-colors hover:text-[#ff5a1f]"
            >
              Create an account
            </Link>
          </p>

          {/* FOOTER */}

        
        </div>
      </div>

      {/* =========================================
          RIGHT SIDE VISUAL
      ========================================= */}

      <div className="relative hidden w-1/2 overflow-hidden lg:flex lg:flex-col lg:justify-center">
        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* GLOW */}

        <div className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#FF4400]/[0.06] blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#2563EB]/[0.05] blur-[160px]" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto max-w-xl px-12">
          <Quote
            size={58}
            className="mb-10 text-[#FF4400]/40"
          />

          <h2 className="mb-12 text-[2.25rem] font-medium leading-[1.25] tracking-tight text-white">
            "SkillScope transformed
            career planning into a modern,
            intelligent experience that
            feels beautifully seamless."
          </h2>

          {/* PROFILE */}

          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FF4400] to-orange-600 text-xl font-bold text-white shadow-lg shadow-[#FF4400]/20">
              UI
            </div>

            <div>
              <p className="text-lg font-medium text-white">
                Demo Preview
              </p>

              <p className="text-sm font-mono text-[#FF4400]">
                SkillScope Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
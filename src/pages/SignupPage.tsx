import {
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

import { FaLinkedinIn } from "react-icons/fa";

import {
  useEffect,
  useState,
} from "react";

import { supabase } from "../lib/supabase";

export default function SignupPage() {
  const navigate = useNavigate();

  /* =========================================
     STATES
  ========================================= */

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [
    checkingSession,
    setCheckingSession,
  ] = useState(true);

  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(false);

  /* =========================================
     SESSION CHECK
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
     SIGNUP
  ========================================= */

  const handleSignup =
    async () => {
      if (
        !name ||
        !email ||
        !password
      ) {
        setErrorMessage(
          "Please fill all fields"
        );

        return;
      }

      try {
        setLoading(true);

        setErrorMessage("");

        const { error } =
          await supabase.auth.signUp({
            email,

            password,

            options: {
              data: {
                full_name: name,
              },
            },
          });

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

  const handleDemoAccess = () => {
    navigate("/dashboard");
  };

  /* =========================================
     LOADER
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
          LEFT VISUAL
      ========================================= */}

      <div className="relative hidden w-1/2 overflow-hidden lg:flex lg:items-center lg:justify-center">
        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* GLOWS */}

        <div className="absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#00FF66]/[0.05] blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[700px] w-[700px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#FF4400]/[0.06] blur-[200px]" />

        {/* CONTENT */}

        <div className="relative z-10 max-w-xl px-12">
          {/* BADGE */}

          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] px-5 py-2">
            <div className="h-2 w-2 rounded-full bg-[#00FF66]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
              Demo Preview Build
            </span>
          </div>

          {/* HEADING */}

          <h2 className="text-[58px] font-semibold leading-[0.95] tracking-[-0.06em]">
            Build your
            <br />

            <span className="text-[#FF4400]">
              career system.
            </span>
          </h2>

          {/* TEXT */}

          <p className="mt-8 max-w-lg text-[17px] leading-relaxed text-zinc-400">
            Explore SkillScope’s
            AI-powered interface,
            interactive career workflows,
            and futuristic learning
            experience.
          </p>

          {/* TERMINAL */}

          <div className="mt-12 space-y-4 font-mono text-sm">
            <div className="text-zinc-500">
              {">"} initializing
              skill engine...
            </div>

            <div className="text-[#00FF66]">
              [OK] ATS optimization
              active
            </div>

            <div className="text-[#00FF66]">
              [OK] roadmap generation
              ready
            </div>

            <div className="flex items-center gap-2 text-[#FF4400]">
              <span>{">"}</span>

              <span className="h-4 w-2 animate-pulse bg-[#FF4400]" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          RIGHT FORM
      ========================================= */}

      <div className="flex w-full flex-col justify-center px-8 sm:px-16 lg:w-1/2 xl:px-32 2xl:px-48">
        <div className="mx-auto w-full max-w-[440px]">
          {/* LOGO */}

          <Link
            to="/"
            className="mb-14 flex w-fit items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08]">
              <div className="h-2 w-2 rounded-full bg-[#FF4400]" />
            </div>

            <h1 className="text-[22px] font-semibold tracking-[-0.04em]">
              SkillScope
            </h1>
          </Link>

          {/* DEMO BADGE */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 px-4 py-2 text-xs font-medium text-[#FF4400]">
            <Sparkles size={14} />
            UI/UX Demo Preview
          </div>

          {/* HEADING */}

          <div className="mb-10">
            <h2 className="text-5xl font-semibold tracking-[-0.05em]">
              Create account
            </h2>

            <p className="mt-3 text-sm text-zinc-500">
              Experience the SkillScope
              interface and explore the
              complete user journey.
            </p>
          </div>

          {/* DEMO BUTTON */}

          <button
            onClick={handleDemoAccess}
            className="
              group
              mb-6
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-[#FF4400]
              px-5
              py-4
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-[#ff5a1f]
              active:scale-[0.99]
            "
          >
            Enter Demo Workspace

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* SOCIALS */}

          <div className="mb-6 flex items-center gap-4">
            <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-sm transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.04]">
              <FcGoogle size={18} />

              <span>Google</span>
            </button>

            <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-sm transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.04]">
              <FaLinkedinIn
                size={16}
                className="text-[#0A66C2]"
              />

              <span>LinkedIn</span>
            </button>
          </div>

          {/* DIVIDER */}

          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.08]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Or continue with email
            </span>

            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>

          {/* FORM */}

          <div className="space-y-5">
            {/* NAME */}

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <User
                  size={18}
                  className="text-zinc-500"
                />
              </div>

              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) =>
                  setName(
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
            </div>

            {/* EMAIL */}

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <Mail
                  size={18}
                  className="text-zinc-500"
                />
              </div>

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
            </div>

            {/* PASSWORD */}

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
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
                placeholder="Create password"
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
              <p className="text-sm text-red-500">
                {errorMessage}
              </p>
            )}

            {/* BUTTON */}

            <button
              onClick={handleSignup}
              disabled={loading}
              className="
                mt-3
                w-full
                rounded-2xl
                bg-[#FF4400]
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#FF5522]
                active:scale-[0.98]
                disabled:opacity-50
              "
            >
              {loading
                ? "Creating account..."
                : "Create account"}
            </button>
          </div>

          {/* LOGIN */}

          <p className="mt-8 text-center text-sm text-zinc-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-medium text-[#FF4400] transition-colors hover:text-[#FF5522]"
            >
              Sign in
            </Link>
          </p>

          {/* FOOTER */}

          <p className="mt-14 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
            Demo Preview • UI/UX Review
          </p>
        </div>
      </div>
    </main>
  );
}
import DashboardTopbar from "../components/DashboardTopbar";

import {
  User,
  Mail,
  Briefcase,
  Pencil,
  Save,
  FileText,
  Route,
  RotateCcw,
  LogOut,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  /* =========================================
     STATES
  ========================================= */

  const [loading, setLoading] =
    useState(false);

  const [fullName, setFullName] =
    useState("Harshavardhan");

  const [profession, setProfession] =
    useState(
      "UI/UX Designer & Frontend Developer"
    );

  const [email, setEmail] =
    useState(
      "demo@skillscope.ai"
    );

  /* =========================================
     DEMO LOAD
  ========================================= */

  useEffect(() => {
    setFullName(
      "Harshavardhan"
    );

    setProfession(
      "UI/UX Designer & Frontend Developer"
    );

    setEmail(
      "demo@skillscope.ai"
    );
  }, []);

  /* =========================================
     SAVE PROFILE
  ========================================= */

  const handleSave = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert(
        "Demo Preview: Profile updated successfully."
      );
    }, 1500);
  };

  /* =========================================
     RESET HISTORY
  ========================================= */

  const handleResetHistory =
    async () => {
      const confirmReset =
        window.confirm(
          "Demo Preview: Reset profile history?"
        );

      if (!confirmReset)
        return;

      alert(
        "Demo Preview: History reset successfully."
      );
    };

  /* =========================================
     LOGOUT
  ========================================= */

  const handleLogout = async () => {
    alert(
      "Demo Preview: Logout successful."
    );
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* =========================================
          TOPBAR
      ========================================= */}

      <DashboardTopbar />

      {/* =========================================
          DEMO BADGE
      ========================================= */}

      <div className="fixed bottom-5 right-5 z-[999]">
        <div className="rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 backdrop-blur-xl px-5 py-2.5 shadow-[0_0_30px_rgba(255,68,0,0.12)]">
          <span className="text-xs font-medium tracking-wide text-[#FF4400]">
            Demo Preview
          </span>
        </div>
      </div>

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* BASE */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#15110d_0%,#070707_55%,#040404_100%)]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.018]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        {/* GLOWS */}

        <div className="absolute top-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full bg-[#FF4400]/[0.05] blur-[180px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[#FF4400]/[0.03] blur-[180px]" />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-40 pb-10">
        {/* =========================================
            HEADER
        ========================================= */}

        <section>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#FF4400]" />

            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
              Account Management System
            </span>
          </div>

          <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-[-0.06em] leading-[0.95]">
            Your Profile
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-zinc-400">
            Manage your personal information,
            saved reports, and career
            progress.
          </p>
        </section>

        {/* =========================================
            PROFILE INFO CARD
        ========================================= */}

        <section className="mt-14">
          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10">
            {/* TOP LINE */}

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4400]/20 to-transparent" />

            {/* GLOW */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,68,0,0.08),transparent_45%)]" />

            {/* CONTENT */}

            <div className="relative z-10 flex flex-col gap-10 lg:flex-row">
              {/* PROFILE IMAGE */}

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="flex h-40 w-40 items-center justify-center rounded-[32px] border border-white/[0.06] bg-black/30">
                    <User
                      size={60}
                      className="text-zinc-600"
                    />
                  </div>

                  {/* EDIT BUTTON */}

                  <button className="absolute -bottom-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#FF4400] text-white transition-all hover:bg-[#ff5a1f]">
                    <Pencil size={16} />
                  </button>
                </div>

                {/* INITIALS */}

                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 text-sm font-medium text-[#FF4400]">
                  {fullName
                    ?.slice(0, 2)
                    .toUpperCase()}
                </div>
              </div>

              {/* FORM */}

              <div className="flex-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Your Information
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-5">
                  {/* FULL NAME */}

                  <ProfileInput
                    icon={<User size={18} />}
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(
                        e.target.value
                      )
                    }
                  />

                  {/* PROFESSION */}

                  <ProfileInput
                    icon={
                      <Briefcase size={18} />
                    }
                    placeholder="Profession"
                    value={profession}
                    onChange={(e) =>
                      setProfession(
                        e.target.value
                      )
                    }
                  />

                  {/* EMAIL */}

                  <ProfileInput
                    icon={<Mail size={18} />}
                    placeholder="Email Address"
                    value={email}
                    disabled
                  />
                </div>

                {/* SAVE BUTTON */}

                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF4400] px-6 py-3 text-sm font-medium transition-all hover:bg-[#ff5a1f] disabled:opacity-60"
                >
                  <Save size={16} />

                  {loading
                    ? "Saving..."
                    : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            REPORTS SECTION
        ========================================= */}

        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* RESUME REPORT */}

          <DataCard
            icon={<FileText size={20} />}
            title="Resume Reports"
            desc="Your previous ATS analysis reports and AI suggestions."
          />

          {/* SAVED ROADMAPS */}

          <DataCard
            icon={<Route size={20} />}
            title="Saved Roadmaps"
            desc="Saved career learning paths and progression plans."
          />
        </section>

        {/* =========================================
            SETTINGS SECTION
        ========================================= */}

        <section className="mt-10">
          <div className="overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02]">
            {/* RESET */}

            <div className="flex flex-col gap-5 border-b border-white/[0.06] p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Reset History
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Remove saved reports,
                  roadmap history, and ATS
                  results.
                </p>
              </div>

              <button
                onClick={
                  handleResetHistory
                }
                className="inline-flex items-center gap-3 rounded-full border border-[#FF4400]/20 bg-[#FF4400]/10 px-5 py-3 text-sm text-[#FF4400] transition-all hover:bg-[#FF4400]/20"
              >
                <RotateCcw size={16} />

                Reset
              </button>
            </div>

            {/* LOGOUT */}

            <div className="flex flex-col gap-5 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Logout
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Securely sign out from your
                  SkillScope workspace.
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-transparent px-5 py-3 text-sm text-zinc-300 transition-all hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
              >
                <LogOut size={16} />

                Logout
              </button>
            </div>
          </div>
        </section>

        {/* =========================================
            FOOTER
        ========================================= */}

        <footer className="mt-20 border-t border-white/[0.06] pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* LEFT */}

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06]">
                <div className="h-2 w-2 rounded-full bg-[#FF4400]" />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  SkillScope
                </h3>

                <p className="text-sm text-zinc-500">
                  AI-powered career growth
                  workspace.
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <button className="transition hover:text-white">
                Website Review
              </button>

              <button className="transition hover:text-white">
                Contact Us
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* =========================================
   PROFILE INPUT
========================================= */

function ProfileInput({
  icon,
  placeholder,
  value,
  onChange,
  disabled,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-black/20 px-5 py-4">
      <div className="text-[#FF4400]">
        {icon}
      </div>

      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 disabled:text-zinc-500"
      />

      <button className="text-zinc-500 transition hover:text-white">
        <Pencil size={16} />
      </button>
    </div>
  );
}

/* =========================================
   DATA CARD
========================================= */

function DataCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-8">
      {/* TOP LINE */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CONTENT */}

      <div className="relative z-10">
        {/* HEADER */}

        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF4400]/10 text-[#FF4400]">
            {icon}
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {title}
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {desc}
            </p>
          </div>
        </div>

        {/* PLACEHOLDER */}

        <div className="mt-8 space-y-4">
          <div className="h-4 rounded-full bg-white/[0.05]" />

          <div className="h-4 w-[90%] rounded-full bg-white/[0.05]" />

          <div className="h-4 w-[75%] rounded-full bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}
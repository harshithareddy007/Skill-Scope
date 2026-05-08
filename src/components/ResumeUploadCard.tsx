import { useState } from "react";

import {
  Upload,
  Sparkles,
  FileText,
} from "lucide-react";

function ResumeUploadCard({
  setAnalysis,
}: {
  setAnalysis: React.Dispatch<React.SetStateAction<any>>;
}) {

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [targetRole, setTargetRole] = useState("");

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (
      event.target.files &&
      event.target.files[0]
    ) {
      setSelectedFile(event.target.files[0]);
    }

  };

  const handleUpload = async () => {

    if (!selectedFile) return;

    if (!targetRole) {
      alert("Please select a target role");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", selectedFile);

      formData.append(
        "targetRole",
        targetRole
      );

      const response = await fetch(
        "http://localhost:5000/api/resume/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      setAnalysis(data.analysis);

    } catch (error) {

      console.log(error);

      alert("Upload failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-8 lg:p-10 backdrop-blur-2xl">

      <div className="absolute top-0 right-0 w-72 h-72 bg-[#FB3640]/10 blur-3xl rounded-full" />

      <div className="relative z-10">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-[#FB3640]/15 border border-[#FB3640]/20 flex items-center justify-center">

            <Sparkles
              size={28}
              className="text-[#FB3640]"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold">
              Resume Intelligence
            </h2>

            <p className="text-gray-400 mt-2 text-lg">
              AI-powered ATS and career analysis
            </p>

          </div>

        </div>

        <div className="mt-10">

          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            Target Role
          </p>

          <select
            value={targetRole}
            onChange={(e) =>
              setTargetRole(e.target.value)
            }
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#FB3640]/50 transition-all duration-300"
          >

            <option value="">
              Choose a role
            </option>

            <option value="Frontend Developer">
              Frontend Developer
            </option>

            <option value="Backend Developer">
              Backend Developer
            </option>

            <option value="AI Engineer">
              AI Engineer
            </option>

            <option value="Data Analyst">
              Data Analyst
            </option>

            <option value="UI UX Designer">
              UI/UX Designer
            </option>

            <option value="Full Stack Developer">
              Full Stack Developer
            </option>

          </select>

        </div>

        <input
          id="resumeUpload"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="mt-10 border border-dashed border-white/10 rounded-[32px] p-12 lg:p-16 text-center bg-black/20 hover:border-[#FB3640]/40 transition-all duration-500">

          <div className="w-24 h-24 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto">

            <Upload
              size={40}
              className="text-[#FB3640]"
            />

          </div>

          <h3 className="text-3xl font-bold mt-8">
            Upload Your Resume
          </h3>

          <p className="text-gray-500 mt-4 text-lg leading-relaxed max-w-xl mx-auto">
            Upload your resume to unlock AI-driven ATS analysis,
            skill intelligence, and personalized career guidance.
          </p>

          <label
            htmlFor="resumeUpload"
            className="mt-10 inline-flex items-center gap-3 bg-[#FB3640] hover:bg-red-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 cursor-pointer shadow-lg shadow-red-500/20"
          >

            <FileText size={20} />

            Choose Resume

          </label>

          {selectedFile && (

            <div className="mt-10 bg-white/[0.03] border border-white/10 rounded-3xl p-6 max-w-2xl mx-auto">

              <p className="text-sm uppercase tracking-wide text-gray-500">
                Selected File
              </p>

              <p className="text-white text-lg mt-3 break-words font-medium">
                {selectedFile.name}
              </p>

              <button
                className="mt-8 w-full bg-gradient-to-r from-[#FB3640] to-red-700 hover:opacity-90 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl shadow-red-500/20"
                onClick={(e) => {
                  e.preventDefault();
                  handleUpload();
                }}
              >

                {loading
                  ? "Analyzing Resume..."
                  : "Generate AI Analysis"}

              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default ResumeUploadCard;
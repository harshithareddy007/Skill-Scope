import { useState } from "react";
import { Upload, Terminal, FileCode2, ArrowRight } from "lucide-react";

export default function ResumeUploadCard({
  setAnalysis,
}: {
  setAnalysis: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [targetRole, setTargetRole] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    if (!targetRole) {
      alert("System Error: Please define a target role parameter.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("resume", selectedFile);
      formData.append("targetRole", targetRole);

      // Kept your exact API route
      const response = await fetch("http://localhost:5000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      setAnalysis(data.analysis);
    } catch (error) {
      console.log(error);
      alert("Ingestion failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#030303] border border-white/[0.06] rounded-2xl p-8 relative overflow-hidden group">
      
      {/* Technical Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={14} className="text-[#FF4400]" />
            <h2 className="text-sm font-mono tracking-widest text-white uppercase">
              Data Ingestion
            </h2>
          </div>
          <p className="text-xs text-gray-500 font-mono">
            Provide profile parameters for AI evaluation.
          </p>
        </div>
      </div>

      {/* Role Selector */}
      <div className="mb-6">
        <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">
          Target Architecture (Role)
        </label>
        <select
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-[13px] font-mono text-white outline-none focus:border-[#FF4400]/50 transition-colors duration-300 appearance-none cursor-pointer"
        >
          <option value="" className="bg-[#030303]">Select parameter...</option>
          <option value="Frontend Developer" className="bg-[#030303]">Frontend Developer</option>
          <option value="Backend Developer" className="bg-[#030303]">Backend Developer</option>
          <option value="AI Engineer" className="bg-[#030303]">AI Engineer</option>
          <option value="Data Analyst" className="bg-[#030303]">Data Analyst</option>
          <option value="UI UX Designer" className="bg-[#030303]">UI/UX Designer</option>
          <option value="Full Stack Developer" className="bg-[#030303]">Full Stack Developer</option>
        </select>
      </div>

      {/* Hidden Input */}
      <input
        id="resumeUpload"
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Dropzone */}
      <div className="border border-dashed border-white/[0.15] hover:border-[#FF4400]/50 rounded-xl p-10 text-center bg-white/[0.01] transition-all duration-300 relative group/drop">
        <div className="w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover/drop:border-[#FF4400]/30 transition-colors">
          <Upload size={20} className="text-gray-400 group-hover/drop:text-[#FF4400] transition-colors" />
        </div>
        
        <h3 className="text-sm font-medium text-white mb-1">
          Mount Document
        </h3>
        <p className="text-xs text-gray-500 font-mono mb-6">
          Supported formats: .pdf, .doc, .docx
        </p>

        <label
          htmlFor="resumeUpload"
          className="inline-flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-mono tracking-widest uppercase px-6 py-2.5 rounded border border-white/10 cursor-pointer transition-colors"
        >
          Browse Files
        </label>
      </div>

      {/* Selected File & Action Area */}
      {selectedFile && (
        <div className="mt-6 p-4 border border-white/[0.06] bg-white/[0.02] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <FileCode2 size={16} className="text-[#FF4400] shrink-0" />
            <span className="text-xs font-mono text-gray-300 truncate">
              {selectedFile.name}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleUpload();
            }}
            disabled={loading}
            className="group relative inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded text-xs font-mono tracking-widest uppercase overflow-hidden transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              {loading ? "Processing..." : "Execute"}
              {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
            </span>
            <div className="absolute inset-0 bg-[#FF4400] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      )}
    </div>
  );
}
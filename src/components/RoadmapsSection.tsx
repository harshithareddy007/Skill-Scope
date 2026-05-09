import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue, 
  useSpring,
  useMotionTemplate
} from "framer-motion";
import { useRef, useEffect } from "react";
import { Sparkles, Terminal } from "lucide-react";

const roadmapSteps = [
  { title: "Resume Intelligence", description: "AI analyzes resume structure, ATS alignment, and recruiter compatibility." },
  { title: "Skill Gap Mapping", description: "Missing technical and strategic skills are identified in real-time." },
  { title: "Adaptive Learning Path", description: "Personalized roadmap generation based on career targets and growth velocity." },
  { title: "Execution System", description: "Projects, milestones, and optimization loops are continuously updated." },
  { title: "Target Role Alignment", description: "Your profile evolves toward the requirements of your desired role." },
];

export default function RoadmapsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. SCROLL TRACKING (Fixed Offset)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "end bottom" ensures progress hits 1.0 even if it's the last section on the page
    offset: ["start center", "end end"], // ✅ "end" is the correct keyword for the bottom of the viewport
  });

  // ACCELERATED PATH DRAWING
  // This forces the line to finish drawing at 85% scroll, ensuring it covers the dotted line completely.
  const pathDraw = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  // 2. MOUSE TRACKING FOR 3D TILT
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      normX.set((e.clientX / innerWidth) * 2 - 1);
      normY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, normX, normY]);

  const smoothNormX = useSpring(normX, { damping: 40, stiffness: 150 });
  const smoothNormY = useSpring(normY, { damping: 40, stiffness: 150 });

  const rotateX = useTransform(smoothNormY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothNormX, [-1, 1], [-8, 8]);
  const bgX = useTransform(smoothNormX, [-1, 1], [40, -40]);
  const bgY = useTransform(smoothNormY, [-1, 1], [40, -40]);

  return (
    <section
      id="roadmaps"
      ref={containerRef}
      className="relative overflow-hidden bg-[#030303] py-32 perspective-[1500px]" 
    >
      {/* BACKGROUNDS (Pushed Deep Back) */}
      <motion.div 
        style={{ x: bgX, y: bgY, z: -300 }} 
        className="absolute inset-0 z-0 pointer-events-none transform-style-3d"
      >
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>
        <div className="absolute left-[5%] top-[20%] w-[600px] h-[600px] rounded-full bg-[#FF4400]/10 blur-[180px]" />
        <div className="absolute right-[5%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-[#FF4400]/5 blur-[150px]" />
      </motion.div>

      {/* HEADER */}
      <motion.div 
        style={{ translateZ: -50 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mb-24"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#FF4400]/20 bg-[#FF4400]/5 backdrop-blur-md">
            <Terminal size={14} className="text-[#FF4400]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-mono text-[#FF4400]/80">
              AI Roadmap Engine
            </span>
          </div>
          <h2 className="mt-8 text-[44px] md:text-[64px] leading-[1.1] tracking-[-0.035em] font-semibold text-white drop-shadow-2xl">
            Career growth, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4400] to-orange-500">systemized by AI.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            SkillScope generates adaptive execution systems that evolve with your skills, goals, and industry positioning.
          </p>
        </div>
      </motion.div>

      {/* 3D ROADMAP WRAPPER */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10"
      >
        <div className="relative py-20 min-h-[1600px] flex justify-center transform-style-3d">
          
          {/* CURVY SVG PATH */}
          <motion.div 
            style={{ translateZ: -100 }} 
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[800px] pointer-events-none hidden lg:block"
          >
            <svg viewBox="0 0 800 1600" fill="none" className="w-full h-full" preserveAspectRatio="none">
              
              {/* Dotted Base Path */}
              <path 
                d="M 400 0 C 700 200, 700 300, 400 450 C 100 600, 100 700, 400 850 C 700 1000, 700 1100, 400 1250 C 100 1400, 100 1500, 400 1600" 
                stroke="rgba(255,255,255,0.15)" 
                strokeWidth="3" 
                strokeDasharray="6 8" 
                strokeLinecap="round"
              />
              
              {/* Glowing Animated Path (Uses pathDraw instead of scrollYProgress) */}
              <motion.path 
                d="M 400 0 C 700 200, 700 300, 400 450 C 100 600, 100 700, 400 850 C 700 1000, 700 1100, 400 1250 C 100 1400, 100 1500, 400 1600" 
                stroke="#FF4400" 
                strokeWidth="5" 
                strokeLinecap="round"
                style={{ 
                  pathLength: pathDraw, // <--- THE FIX IS HERE
                  filter: "drop-shadow(0px 0px 12px rgba(255,68,0,0.9))"
                }} 
              />
            </svg>
          </motion.div>
          
          {/* CARDS */}
          <div className="w-full relative flex flex-col gap-32 lg:gap-0 transform-style-3d">
            {roadmapSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <RoadmapCard 
                  key={index}
                  step={step}
                  index={index}
                  isLeft={isLeft}
                  scrollYProgress={scrollYProgress}
                  totalSteps={roadmapSteps.length}
                  smoothNormX={smoothNormX}
                  smoothNormY={smoothNormY}
                />
              );
            })}
          </div>

        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   INDIVIDUAL 3D CARD COMPONENT (Unchanged)
========================================================= */

function RoadmapCard({ step, index, isLeft, scrollYProgress, totalSteps, smoothNormX, smoothNormY }: any) {
  const stepThreshold = 1 / totalSteps;
  const activationPoint = index * stepThreshold;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, activationPoint - 0.15), activationPoint + 0.1],
    [0.2, 1]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, activationPoint - 0.15), activationPoint + 0.1],
    [0.9, 1.05] 
  );

  const translateZ = useTransform(
    scrollYProgress,
    [Math.max(0, activationPoint - 0.15), activationPoint + 0.1],
    [-50, 80] 
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [Math.max(0, activationPoint - 0.1), activationPoint + 0.1],
    [0, 1]
  );

  const shadowX = useTransform(smoothNormX, [-1, 1], [30, -30]);
  const shadowY = useTransform(smoothNormY, [-1, 1], [30, -30]);
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 50px rgba(0,0,0,0.8), 0 0 40px rgba(255,68,0, ${useTransform(glowOpacity, v => v * 0.15)})`;

  return (
    <div className={`relative flex w-full ${isLeft ? "lg:justify-start" : "lg:justify-end"} lg:absolute`} style={{ top: `${index * 320}px`, transformStyle: "preserve-3d" }}>
      <motion.div 
        style={{ opacity, scale, z: translateZ, boxShadow }}
        className="group relative w-full lg:w-[45%] rounded-[30px] border border-white/[0.08] bg-black/80 backdrop-blur-2xl p-8 transition-colors duration-500 hover:border-[#FF4400]/40 z-20"
      >
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(255,68,0,0.2),transparent_60%)] pointer-events-none" 
        />
        <div className="relative z-10 flex items-center justify-between transform-style-3d">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-[#050505] shadow-inner group-hover:translate-z-10 transition-transform duration-300">
              <Sparkles size={24} className="text-[#FF4400]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#FF4400]/70 mb-1">
                Phase 0{index + 1}
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                {step.title}
              </h3>
            </div>
          </div>
          
        </div>
        <p className="relative z-10 mt-6 text-[15px] leading-relaxed text-gray-400">
          {step.description}
        </p>
        <div className="relative z-10 mt-8 flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF4400] shadow-[0_0_12px_#FF4400]" />
          <div className="h-px flex-1 bg-gradient-to-r from-[#FF4400]/50 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
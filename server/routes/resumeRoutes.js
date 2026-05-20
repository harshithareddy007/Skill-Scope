const upload = require("../utils/multerConfig");
const extractTextFromPDF = require("../services/pdfParser");
const analyzeResume = require("../services/aiService");

const express = require("express");

const supabase = require("../lib/supabase");

const router = express.Router();

/* =========================================
   RESUME ANALYSIS
========================================= */

router.post(
  "/upload",
  upload.single("resume"),
  async (req, res) => {
    try {
      const extractedText = await extractTextFromPDF(
        req.file.path
      );

      const targetRole = req.body.targetRole;

      const analysis = await analyzeResume(
        extractedText,
        targetRole
      );

      const {
        data: insertedData,
        error: insertError,
      } = await supabase
        .from("resume_analysis")
        .insert([
          {
            ats_score: analysis.atsScore,

            improvement_suggestions:
              analysis.improvementSuggestions,

            strong_areas: analysis.strongAreas,

            missing_skills:
              analysis.missingSkills,

            best_matching_roles:
              analysis.bestMatchingRoles,

            recruiter_readiness:
              analysis.recruiterReadiness,

            resume_file_name:
              req.file?.originalname || "",

            resume_text: extractedText,
          },
        ]);

      console.log(insertedData);

      console.log(insertError);

      res.json({
        message: "Resume analyzed successfully",
        analysis,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Error analyzing resume",
      });
    }
  }
);

/* =========================================
   SKILL GAP ANALYSIS
========================================= */

router.post("/skill-gap", async (req, res) => {
  try {
    const { targetRole } = req.body;

    const { data, error } = await supabase
      .from("resume_analysis")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1);

    if (error) {
      return res.status(500).json({
        message: "Failed to fetch resume data",
      });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "No resume analysis found",
      });
    }

    const latestResume = data[0];

    const prompt = `
You are an AI career coach.

Target Role:
${targetRole}

User Resume:
${latestResume.resume_text}

Analyze the gap between the user's current skills and the target role.

Return ONLY valid JSON in this format:

{
  "matchPercentage": number,
  "verifiedSkills": [],
  "missingSkills": [],
  "recommendedSkills": []
}
`;

    const result = await analyzeResume(prompt);

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Skill gap analysis failed",
    });
  }
});

module.exports = router;
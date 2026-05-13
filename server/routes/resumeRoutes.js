const upload = require("../utils/multerConfig");
const extractTextFromPDF = require("../services/pdfParser");
const analyzeResume = require("../services/aiService");

const express = require("express");

const router = express.Router();

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {

    const extractedText = await extractTextFromPDF(req.file.path);
    const targetRole = req.body.targetRole;
    
    const analysis = await analyzeResume(
      extractedText,
      targetRole
    );

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
});

module.exports = router;
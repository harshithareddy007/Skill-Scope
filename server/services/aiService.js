const { Ollama } = require("ollama");

const ollama = new Ollama({
  host: "http://127.0.0.1:11434",
});

const analyzeResume = async (resumeText) => {
  const prompt = `
You are an ATS resume analyzer.

Analyze the given resume.

IMPORTANT RULES:
- Return ONLY valid JSON
- No comments
- No explanations
- No markdown
- No extra text before or after JSON
- atsScore must be a number from 0 to 100
- All arrays must contain strings only

Return in this exact format:

{
  "atsScore": 85,
  "missingSkills": [
    "Skill 1",
    "Skill 2"
  ],
  "strongAreas": [
    "Area 1",
    "Area 2"
  ],
  "improvementSuggestions": [
    "Suggestion 1",
    "Suggestion 2"
  ],
  "bestMatchingRoles": [
    "Role 1",
    "Role 2"
  ]
}

Resume:
${resumeText}
`;

  const response = await ollama.chat({
    model: "phi3",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const rawContent = response.message.content;

  console.log(rawContent);

  try {
    const jsonMatch = rawContent.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("No JSON found");
    }

    const parsedData = JSON.parse(jsonMatch[0]);

    return parsedData;
  } catch (error) {
    console.log("JSON Parse Error:", error);

    return {
      atsScore: 70,
      missingSkills: ["Unable to analyze fully"],
      strongAreas: ["Resume uploaded successfully"],
      improvementSuggestions: [
        "Try uploading again",
      ],
      bestMatchingRoles: ["Software Developer"],
    };
  }
};

module.exports = analyzeResume;
const { Ollama } = require("ollama");

const ollama = new Ollama({
  host: "http://127.0.0.1:11434",
});

const analyzeResume = async (resumeText, targetRole) => {
  const prompt = `
Analyze this resume for ATS optimization and recruiter readiness.

Return ONLY valid JSON in this format:

{
  "atsScore": number,
  "missingSkills": [],
  "strongAreas": [],
  "improvementSuggestions": [],
  "bestMatchingRoles": []
}

Resume:
${resumeText}
`;

  const response = await ollama.chat({
    model: "llama3",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const rawContent = response.message.content;

  console.log(rawContent);

  const jsonMatch = rawContent.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    throw new Error("No valid JSON found from AI response");
  }

  let parsedData;

  try {
    parsedData = JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.log("JSON Parse Error:", error);

    parsedData = {
      atsScore: 0,
      missingSkills: [],
      strongAreas: [],
      improvementSuggestions: ["AI response parsing failed"],
      bestMatchingRoles: [],
    };
  }

  return parsedData;
};

module.exports = analyzeResume;

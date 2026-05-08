const { Ollama } = require("ollama");

const ollama = new Ollama({
  host: "http://127.0.0.1:11434",
});

const analyzeResume = async (resumeText, targetRole) => {
  const prompt = `
Analyze this resume for the role: ${targetRole}

Return ONLY valid JSON.

IMPORTANT:
- atsScore should be from 0 to 100
- improvementSuggestions MUST contain at least 3 items
- missingSkills should be role-specific
- strongAreas should contain technical strengths

Format:

{
  "atsScore": 85,
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

  const parsedData = JSON.parse(jsonMatch[0]);

  return parsedData;
};

module.exports = analyzeResume;

import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResult, GroundingSource } from "../types";

export const generateStrategySnippet = async (industry: string, adSpend: string): Promise<StrategyResult> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Using gemini-3-pro-preview for complex reasoning and googleSearch tool
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `You are an elite growth consultant at SALT Ads Agency. 
      Analyze the ${industry} industry in South Africa for a business spending ${adSpend} monthly. 
      Provide a high-level, psychological growth angle. 
      Use Google Search to find current market trends or competitor gaps in SA for this specific niche.`,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            psychology: {
              type: Type.STRING,
              description: "A deep psychological trigger specific to high-income SA business owners in this niche.",
            },
            angle: {
              type: Type.STRING,
              description: "The unignorable marketing narrative needed to dominate this industry right now.",
            },
            potential: {
              type: Type.STRING,
              description: "The high-end scalability potential (e.g., 'R5M+ Monthly Acquisition Velocity').",
            },
          },
          required: ["psychology", "angle", "potential"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    const data = JSON.parse(text) as StrategyResult;
    
    // Extract grounding chunks for citations
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      data.sources = chunks
        .filter(c => c.web)
        .map(c => ({
          title: c.web.title || "Market Intelligence",
          uri: c.web.uri
        }))
        .slice(0, 3);
    }

    return data;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      psychology: "Status and Economic Certainty",
      angle: "Shift from service-provider to elite growth partner in the South African landscape.",
      potential: "Exponential ZAR scalability through automated ROI loops.",
      sources: []
    };
  }
};
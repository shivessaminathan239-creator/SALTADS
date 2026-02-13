
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateStrategySnippet = async (industry: string, adSpend: string): Promise<StrategyResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this industry: ${industry} within the South African market context, with a monthly ad spend of ${adSpend} ZAR. Provide a 'Salt Ads Agency' style elite growth strategy based on human psychology (relevant to SA business owners), conversion engineering, and data.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            psychology: {
              type: Type.STRING,
              description: "A psychological trigger relevant to high-income South African clients in this industry.",
            },
            angle: {
              type: Type.STRING,
              description: "The unique marketing angle or narrative shift needed for the SA market.",
            },
            potential: {
              type: Type.STRING,
              description: "The estimated scalability potential in ZAR (keep it elite/premium).",
            },
          },
          required: ["psychology", "angle", "potential"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text) as StrategyResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      psychology: "Status and Economic Certainty",
      angle: "Shift from service-provider to elite growth partner in the South African landscape.",
      potential: "Exponential ZAR scalability through automated ROI loops."
    };
  }
};

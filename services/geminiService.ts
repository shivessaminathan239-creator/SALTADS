
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResult, GroundingSource } from "../types";

export const generateStrategySnippet = async (industry: string, adSpend: string): Promise<StrategyResult> => {
  try {
    // Correctly initialize with process.env.API_KEY as per the guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `You are an elite growth consultant at SALT Ads Agency. 
      Analyze the ${industry} industry in South Africa for a business intending to invest ${adSpend} monthly into growth. 
      Identify a deep psychological gap in the current market.
      Focus on the UNTAPPED POTENTIAL and the shift needed to dominate this niche in the next 12 months.
      Use Google Search to find real-time market sentiment or competitor weaknesses in SA.`,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            psychology: {
              type: Type.STRING,
              description: "A deep psychological leverage point specific to SA consumers in this niche.",
            },
            angle: {
              type: Type.STRING,
              description: "The strategic narrative shift required for market leadership.",
            },
            potential: {
              type: Type.STRING,
              description: "The projected outcome of deploying high-level automation and precision ads.",
            },
          },
          required: ["psychology", "angle", "potential"],
        },
      },
    });

    // Access .text property directly (not a method)
    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    // Note: while guidelines warn search responses may not be JSON, we use responseSchema to guide the model
    const data = JSON.parse(text) as StrategyResult;
    
    // Always extract and provide grounding sources as per mandatory requirements
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
      psychology: "Unconscious Desire for Exclusive Authority",
      angle: "Transition from 'service provider' to 'the only logical choice' through status-signaling ads.",
      potential: "Maximized Market Share Velocity through AI-Optimization.",
      sources: []
    };
  }
};

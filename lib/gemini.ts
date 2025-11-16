// MINDU/lib/gemini.ts
// This file handles communication with Gemini AI for Q&A / study help

import OpenAI from "openai"; // Import OpenAI (Gemini API compatible)

// Initialize Gemini client using API key from environment variables
const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * askGemini
 * Sends a question (with optional context) to Gemini AI and returns the answer
 * @param prompt User question
 * @param context Optional course or PDF context
 */
export async function askGemini(prompt: string, context?: string) {
  const response = await client.chat.completions.create({
    model: "gemini-1", // Gemini AI model
    messages: [
      { role: "system", content: "You are an AI study assistant." }, // AI persona
      { role: "user", content: context ? `${context}\n${prompt}` : prompt }, // User question
    ],
  });

  // Return the AI's text response (or empty string if unavailable)
  return response.choices[0].message?.content ?? "";
}

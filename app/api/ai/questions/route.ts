// app/api/ai/questions/route.ts
// Receives user question + optional context and returns answer from Gemini AI

import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";

/**
 * POST /api/ai/questions
 * Body: { question: string, context?: string }
 */
export async function POST(req: Request) {
  const { question, context } = await req.json(); // Parse request body

  // Validate question
  if (!question) {
    return NextResponse.json({ error: "Missing question" }, { status: 400 });
  }

  // Ask Gemini AI
  const answer = await askGemini(question, context);

  // Return JSON response
  return NextResponse.json({ answer });
}

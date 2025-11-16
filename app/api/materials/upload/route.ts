// app/api/materials/upload/route.ts
// Handles uploading PDFs, parsing them, and storing content in Firestore

import { NextResponse } from "next/server";
import { adminStorage, adminDB } from "@/lib/firebaseAdmin";
import { extractTextFromPDF } from "@/lib/pdf";

/**
 * POST /api/materials/upload
 * FormData: file (PDF), courseId
 */
export async function POST(req: Request) {
  const formData = await req.formData();       // Parse multipart form data
  const file = formData.get("file") as File;   // Get file
  const courseId = formData.get("courseId") as string; // Get course ID

  // Validate inputs
  if (!file || !courseId) {
    return NextResponse.json({ error: "Missing file or courseId" }, { status: 400 });
  }

  // Upload PDF to Firebase Storage
  const blob = adminStorage.file(`courses/${courseId}/${file.name}`); // File path
  const buffer = Buffer.from(await file.arrayBuffer());              // Convert to Node buffer
  await blob.save(buffer);                                           // Save file

  // Extract text from PDF (temporary path used here)
  const text = await extractTextFromPDF(`/tmp/${file.name}`);

  // Save parsed text in Firestore under course materials
  await adminDB.collection("courses").doc(courseId).collection("materials").add({
    name: file.name,
    text,
    uploadedAt: new Date(),
  });

  return NextResponse.json({ message: "File uploaded & parsed successfully" });
}

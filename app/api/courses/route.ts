// app/api/courses/route.ts
// Handles course creation and fetching via API

import { NextResponse } from "next/server"; // Next.js Response helper
import { adminDB } from "@/lib/firebaseAdmin"; // Admin Firestore access

/**
 * GET /api/courses
 * Fetch all courses from Firestore
 */
export async function GET(req: Request) {
  const snapshot = await adminDB.collection("courses").get(); // Get all docs
  const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map to array with ID
  return NextResponse.json(courses); // Return JSON response
}

/**
 * POST /api/courses
 * Create a new course
 * Body: { name: string, description?: string }
 */
export async function POST(req: Request) {
  const body = await req.json(); // Parse request JSON
  const docRef = await adminDB.collection("courses").add(body); // Add new course
  return NextResponse.json({ id: docRef.id, ...body }); // Return created course
}



//--------------TESTING PURPOSES ONLY--------------//
// import { NextResponse } from "next/server";

// // Temporary mock courses
// const mockCourses = [
//   { id: "c1", name: "Calculus 101", description: "Intro to Calculus" },
//   { id: "c2", name: "Physics 101", description: "Intro to Physics" },
// ];

// export async function GET() {
//   return NextResponse.json(mockCourses);
// }

// MINDU/lib/pdf.ts
// Helper file for parsing PDFs and extracting text

import fs from "fs";       // Node.js file system
import pdfParse from "pdf-parse"; // Library to parse PDFs

/**
 * extractTextFromPDF
 * Reads a PDF from the filesystem and returns extracted text
 * @param filePath Path to PDF file
 * @returns Extracted text as a string
 */
export async function extractTextFromPDF(filePath: string): Promise<string> {
  const buffer = fs.readFileSync(filePath); // Read PDF as binary
  const data = await pdfParse(buffer);      // Parse PDF using pdf-parse
  return data.text;                         // Return text content
}

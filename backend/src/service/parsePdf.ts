import pdf from "pdf-parse";
import fs from "fs";

export async function extractPdfText(filepath: string): Promise<string> {
  try {
    const pdfBuffer: Buffer = await fs.promises.readFile(filepath);
    const pdfData = await pdf(pdfBuffer);

    console.log("Parsed PDF data:", pdfData);

     return pdfData.text.replace(/\f/g, "\n");
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw error;
  }
}


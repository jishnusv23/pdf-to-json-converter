// import pdf from "pdf-parse";
// import fs from "fs";

// export async function extractPdfText(filepath: string): Promise<string> {
//   try {
//     const pdfBuffer: Buffer = await fs.promises.readFile(filepath);
//     const pdfData = await pdf(pdfBuffer);

//     console.log("Parsed PDF data:", pdfData);

//      return pdfData.text.replace(/\f/g, "\n");
//   } catch (error) {
//     console.error("Error parsing PDF:", error);
//     throw error;
//   }
// }

import { PDFExtract } from "pdf.js-extract";
const pdfExtract = new PDFExtract();
import fs from "fs";
export async function extractPdfText(filepath: string): Promise<any> {
  return new Promise((resolve, reject) => {
    pdfExtract.extract(filepath, {}, (error, data) => {
      if (error) {
        console.error("error extracting PDF converting", error);
        reject(error);
      } else {
        console.log('extract pdf data',data)
        resolve(data)
      }
    });
  });
}

import { extractDocxText } from "./doc/extractDocxText";
import { extractPdfText } from "./pdf/parsePdf";

export async function extractDocumentText(filepath: string): Promise<any> {
  const fileExtension = filepath.split(".").pop()?.toLowerCase();
  console.log(
    "🚀 ~ file: extractDocumentText.ts:3 ~ extractDocumentText ~ fileExtension:",
    fileExtension
  );
  if (fileExtension === "pdf") {
    return await extractPdfText(filepath);
  } else if (fileExtension === "doc" || fileExtension === "docx") {
    return await extractDocxText(filepath);
  }else if (fileExtension==='md'){
    

  } else {
    throw new Error("Unspported file type");
  }
}

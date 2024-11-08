
import { extractPdfText } from "../service/pdf/parsePdf";
import { extractDocumentText } from "../service/extractDocumentText";
import { processPdfText } from "../service/pdf/processPdfText";
import { NextFunction, Request, Response } from "express";
import { extractDocxText } from "../service/doc/extractDocxText";
import { convertMarkdownToJson } from "../service/markdown/convertMarkdownToJson";

export class pdfController {
  async PdfReader(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        res.status(400).json({succss:false, error: "No file uploaded" });
      }
      let jsonData;
      // console.log(req.file, "________________");
        const filepath = req.file?.path as string;
          const fileExtension = filepath.split(".").pop()?.toLowerCase();

           if (fileExtension === "pdf") {
             const pdfText= await extractPdfText(filepath);
              jsonData = processPdfText(pdfText);
            } else if (fileExtension === "doc" || fileExtension === "docx") {
             jsonData= await extractDocxText(filepath);
             console.log("🚀 ~ file: pdfController.ts:24 ~ pdfController ~ PdfReader ~ jsonData:", jsonData)
           } else if (fileExtension === "md") {
            jsonData=await convertMarkdownToJson(req.file?.path as string)
           } else {
             throw new Error("Unspported file type");
           }
          console.log("🚀 ~ file: pdfController.ts:15 ~ pdfController ~ PdfReader ~ fileExtension:", fileExtension)
          
          if(!jsonData){
             res.status(500).json({
               success: false,
               error: "Failed to process PDF text into JSON data",
             });
      //  const pdfText = await  extractDocumentText(req.file?.path as string)
      }

      res.status(200).json({success:true,data:jsonData})
    } catch (error: any) {
      console.error('Error during the PDF processing tiem',error);
      
      res.status(500).json({
        success: false,
        error: error.message || "An error occurred while processing the PDF.",
      });
    }
  }
}

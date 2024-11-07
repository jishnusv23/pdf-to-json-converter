import { extractPdfText } from "../service/parsePdf";
import { processPdfText } from "../service/processPdfText";
import { NextFunction, Request, Response } from "express";

export class pdfController {
  async PdfReader(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        res.status(400).json({succss:false, error: "No file uploaded" });
      }
      console.log(req.file, "________________");
       const pdfText = await extractPdfText(req.file?.path as string); 
       const jsonData = processPdfText(pdfText);
      // console.log(
      //   "🚀 ~ file: pdfController.ts:12 ~ pdfController ~ PdfReader ~ pdfextractPdfTextText:",
      //   extractPdfText
      // );
      // console.log(
      //   "🚀 ~ file: pdfController.ts:14 ~ pdfController ~ PdfReader ~ jsonData:",
      //   jsonData
      // );
      if(!jsonData){
         res.status(500).json({
           success: false,
           error: "Failed to process PDF text into JSON data",
         });
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

"use strict";
// import pdf from "pdf-parse";
// import fs from "fs";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPdfText = extractPdfText;
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
const pdf_js_extract_1 = require("pdf.js-extract");
const pdfExtract = new pdf_js_extract_1.PDFExtract();
function extractPdfText(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            pdfExtract.extract(filepath, {}, (error, data) => {
                if (error) {
                    console.error("error extracting PDF converting", error);
                    reject(error);
                }
                else {
                    console.log('extract pdf data', data);
                    resolve(data);
                }
            });
        });
    });
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPdfText = extractPdfText;
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const fs_1 = __importDefault(require("fs"));
function extractPdfText(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pdfBuffer = yield fs_1.default.promises.readFile(filepath);
            const pdfData = yield (0, pdf_parse_1.default)(pdfBuffer);
            console.log("Parsed PDF data:", pdfData);
            return pdfData.text.replace(/\f/g, "\n");
        }
        catch (error) {
            console.error("Error parsing PDF:", error);
            throw error;
        }
    });
}
// import PDFParser from "pdf2json";
// import fs from "fs";
// export async function extractPdfText(filepath: any): Promise<any> {
//   try {
//     const pdfParser = new PDFParser();
//     return new Promise((resolve, reject) => {
//       pdfParser.on("pdfParser_dataReady", (pdfData) => {
//         console.log("passData:", pdfData);
//         resolve(pdfData);
//       });
//       pdfParser.on("pdfParser_dataError", (err) => {
//         console.error("ErrorParsing PDF:", err.parserError);
//         reject(err.parserError);
//       });
//       pdfParser.loadPDF(filepath)
//     });
//   } catch (error: any) {
//     console.error("Something wrong ExtractPdfText", error.message);
//     throw error;
//   }
// }

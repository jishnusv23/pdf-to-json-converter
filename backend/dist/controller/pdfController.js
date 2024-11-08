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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdfController = void 0;
const parsePdf_1 = require("../service/pdf/parsePdf");
const processPdfText_1 = require("../service/pdf/processPdfText");
const extractDocxText_1 = require("../service/doc/extractDocxText");
const convertMarkdownToJson_1 = require("../service/markdown/convertMarkdownToJson");
class pdfController {
    PdfReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                if (!req.file) {
                    res.status(400).json({ succss: false, error: "No file uploaded" });
                }
                let jsonData;
                // console.log(req.file, "________________");
                const filepath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
                const fileExtension = (_b = filepath.split(".").pop()) === null || _b === void 0 ? void 0 : _b.toLowerCase();
                if (fileExtension === "pdf") {
                    const pdfText = yield (0, parsePdf_1.extractPdfText)(filepath);
                    jsonData = (0, processPdfText_1.processPdfText)(pdfText);
                }
                else if (fileExtension === "doc" || fileExtension === "docx") {
                    jsonData = yield (0, extractDocxText_1.extractDocxText)(filepath);
                    console.log("🚀 ~ file: pdfController.ts:24 ~ pdfController ~ PdfReader ~ jsonData:", jsonData);
                }
                else if (fileExtension === "md") {
                    jsonData = yield (0, convertMarkdownToJson_1.convertMarkdownToJson)((_c = req.file) === null || _c === void 0 ? void 0 : _c.path);
                }
                else {
                    throw new Error("Unspported file type");
                }
                console.log("🚀 ~ file: pdfController.ts:15 ~ pdfController ~ PdfReader ~ fileExtension:", fileExtension);
                if (!jsonData) {
                    res.status(500).json({
                        success: false,
                        error: "Failed to process PDF text into JSON data",
                    });
                    //  const pdfText = await  extractDocumentText(req.file?.path as string)
                }
                res.status(200).json({ success: true, data: jsonData });
            }
            catch (error) {
                console.error('Error during the PDF processing tiem', error);
                res.status(500).json({
                    success: false,
                    error: error.message || "An error occurred while processing the PDF.",
                });
            }
        });
    }
}
exports.pdfController = pdfController;

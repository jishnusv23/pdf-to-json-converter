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
const parsePdf_1 = require("../service/parsePdf");
const processPdfText_1 = require("../service/processPdfText");
class pdfController {
    PdfReader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file) {
                    res.status(400).json({ succss: false, error: "No file uploaded" });
                }
                console.log(req.file, "________________");
                const pdfText = yield (0, parsePdf_1.extractPdfText)((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
                const jsonData = (0, processPdfText_1.processPdfText)(pdfText);
                // console.log(
                //   "🚀 ~ file: pdfController.ts:12 ~ pdfController ~ PdfReader ~ pdfextractPdfTextText:",
                //   extractPdfText
                // );
                // console.log(
                //   "🚀 ~ file: pdfController.ts:14 ~ pdfController ~ PdfReader ~ jsonData:",
                //   jsonData
                // );
                if (!jsonData) {
                    res.status(500).json({
                        success: false,
                        error: "Failed to process PDF text into JSON data",
                    });
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

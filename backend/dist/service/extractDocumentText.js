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
exports.extractDocumentText = extractDocumentText;
const extractDocxText_1 = require("./doc/extractDocxText");
const parsePdf_1 = require("./pdf/parsePdf");
function extractDocumentText(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const fileExtension = (_a = filepath.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        console.log("🚀 ~ file: extractDocumentText.ts:3 ~ extractDocumentText ~ fileExtension:", fileExtension);
        if (fileExtension === "pdf") {
            return yield (0, parsePdf_1.extractPdfText)(filepath);
        }
        else if (fileExtension === "doc" || fileExtension === "docx") {
            return yield (0, extractDocxText_1.extractDocxText)(filepath);
        }
        else if (fileExtension === 'md') {
        }
        else {
            throw new Error("Unspported file type");
        }
    });
}

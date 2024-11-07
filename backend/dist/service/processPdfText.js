"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPdfText = processPdfText;
const path_1 = __importDefault(require("path"));
function processPdfText(pdfData) {
    var _a, _b;
    // console.log(
    //   "🚀 ~ file: processPdfText.ts:3 ~ processPdfText ~ pdfText:",
    //   pdfData
    // );
    const fileName = path_1.default.basename(pdfData.filename);
    const jsonData = {
        filename: fileName,
        meta: {
            info: (_a = pdfData.meta) === null || _a === void 0 ? void 0 : _a.info,
            metadata: (_b = pdfData.meta) === null || _b === void 0 ? void 0 : _b.metadata,
        },
        pages: pdfData.pages.map((page) => ({
            pageInfo: {
                num: page.pageInfo.num,
                scale: page.pageInfo.scale,
                rotation: page.pageInfo.rotation,
                width: page.pageInfo.width,
                height: page.pageInfo.height,
            },
            links: page.links,
            content: page.content.map((contentItem) => ({
                x: contentItem.x,
                y: contentItem.y,
                str: contentItem.str,
                dir: contentItem.dir,
                width: contentItem.width,
                height: contentItem.height,
                fontName: contentItem.fontName,
            })),
        })),
        pdfInfo: pdfData.pdfInfo,
    };
    return jsonData;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPdfText = processPdfText;
function processPdfText(pdfData) {
    var _a, _b;
    console.log("🚀 ~ file: processPdfText.ts:3 ~ processPdfText ~ pdfText:", pdfData);
    const jsonData = {
        filename: pdfData.filename,
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
// const paragraphs = pdfText.split("\n").filter((line) => line.trim() !== "");
// const sections = paragraphs.reduce((acc, paragraph, index) => {
//   const sectionMatch = paragraph.match(/^\d+\./);
//   if (sectionMatch) {
//     const sectionNumber = parseInt(sectionMatch[0].replace(".", ""));
//     acc.push({
//       sectionNumber,
//       content: [paragraph],
//     });
//   } else if (acc.length > 0) {
//     // If it's not a new section, append the paragraph to the last section
//     acc[acc.length - 1].content.push(paragraph);
//   } else {
//     acc.push({
//       sectionNumber: 1,
//       content:[paragraph]
//     });
//   }
//   return acc;
// }, [] as { sectionNumber: number; content: string[] }[]);
// const jsonData = {
//   sections:
//     sections.length > 0
//       ? sections
//       : [{ sectionNumber: 1, content: paragraphs }],
// };
// return jsonData;

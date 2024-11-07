"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPdfText = processPdfText;
// export function processPdfText(pdfText: string): string[] {
//   const paragraphs = pdfText.split("\n").filter((line) => line.trim() !== "");
//   console.log("Paragraphs:", paragraphs);
//   return paragraphs;
// }
function processPdfText(pdfText) {
    const paragraphs = pdfText.split("\n").filter((line) => line.trim() !== "");
    const sections = paragraphs.reduce((acc, paragraph, index) => {
        const sectionMatch = paragraph.match(/^\d+\./);
        if (sectionMatch) {
            const sectionNumber = parseInt(sectionMatch[0].replace(".", ""));
            acc.push({
                sectionNumber,
                content: [paragraph],
            });
        }
        else if (acc.length > 0) {
            // If it's not a new section, append the paragraph to the last section
            acc[acc.length - 1].content.push(paragraph);
        }
        else {
            acc.push({
                sectionNumber: 1,
                content: [paragraph]
            });
        }
        return acc;
    }, []);
    const jsonData = {
        sections: sections.length > 0
            ? sections
            : [{ sectionNumber: 1, content: paragraphs }],
    };
    return jsonData;
}

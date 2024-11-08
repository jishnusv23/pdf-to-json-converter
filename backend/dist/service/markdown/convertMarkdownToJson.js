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
exports.convertMarkdownToJson = convertMarkdownToJson;
const promises_1 = __importDefault(require("fs/promises"));
function convertMarkdownToJson(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const markdownContent = yield promises_1.default.readFile(filePath, "utf-8");
            // console.log("🚀 ~ file: convertMarkdownToJson.ts:7 ~ convertMarkdownToJson ~ markdownContent:", markdownContent)
            const lines = markdownContent.split("\n");
            // console.log("🚀 ~ file: convertMarkdownToJson.ts:11 ~ convertMarkdownToJson ~ lines:", lines)
            const jsonOutput = {
                filePath: filePath,
                content: {},
            };
            let currentTag = "";
            let currentContent = [];
            lines.forEach((line) => {
                const tagMatch = line.match(/^<(\w+)>/);
                if (tagMatch) {
                    if (currentTag) {
                        jsonOutput.content[currentTag] = currentContent.join("\n").trim();
                    }
                    currentTag = tagMatch[1];
                    currentContent = [];
                }
                else {
                    currentContent.push(line);
                }
            });
            if (currentTag) {
                jsonOutput.content[currentTag] = currentContent.join("\n").trim();
            }
            //  JSON
            // console.log(
            //   "🚀 ~ file: convertMarkdownToJson.ts ~ convertMarkdownToJson ~ jsonOutput:",
            //   jsonOutput
            // );
            return jsonOutput;
        }
        catch (error) {
            console.error("Error converting Markdown to JSON:", error);
        }
    });
}

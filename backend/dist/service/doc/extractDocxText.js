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
exports.extractDocxText = extractDocxText;
const mammoth_1 = __importDefault(require("mammoth"));
function extractDocxText(filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 ~ file: extractDocxText.ts:2 ~ extractDocxText ~ filepath:", filepath);
        return new Promise((resolve, reject) => {
            mammoth_1.default
                .extractRawText({ path: filepath })
                .then((result) => {
                const sectionMarkerIndex = result.value.search(/^[^:\n]+(?:Workouts|:)/m);
                const metadataText = result.value.slice(0, sectionMarkerIndex);
                const mainContent = result.value.slice(sectionMarkerIndex);
                // console.log(
                //   "🚀 ~ file: extractDocxText.ts:16 ~ .then ~ metadataText:",
                //   metadataText
                // );
                // console.log(
                //   "🚀 ~ file: extractDocxText.ts:26 ~ .then ~ sectionMarkerIndex:",
                //   sectionMarkerIndex
                // );
                // console.log(
                //   "🚀 ~ file: extractDocxText.ts:18 ~ .then ~ mainContent:",
                //   mainContent
                // );
                const extractLinks = (text) => {
                    const urlPattern = /(https?:\/\/[^\s]+)/g;
                    return text.match(urlPattern) || [];
                };
                const allLinks = extractLinks(result.value);
                console.log("🚀 ~ file: extractDocxText.ts:33 ~ .then ~ allLinks:", allLinks);
                const structuredData = {
                    metaData: metadataText,
                    mainContent: mainContent,
                    messages: result.messages,
                    links: allLinks,
                };
                resolve(structuredData);
            })
                .catch((error) => {
                console.error("something wrong extractRawText doc", error);
                reject(error);
            });
        });
    });
}

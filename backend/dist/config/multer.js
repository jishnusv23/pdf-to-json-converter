"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path_1.default.join(__dirname, "public", "sample");
        if (!fs_1.default.existsSync(uploadDir)) {
            fs_1.default.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniquename = `${new Date()
            .toISOString()
            .replace(/:/g, "-")}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniquename}_${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
// import multer, { StorageEngine } from "multer";
// import path from "path";
// import fs from "fs";
// const storage: StorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log("🚀 ~ file: multer.ts:25 ~ file:", file);
//     // console.log("🚀 ~ file: multer.ts:25 ~ req:", req)
//     // Build the correct path based on the current working directory
//     const dir = path.join(__dirname, "/sample"); // Adjust relative path to point to the correct directory
//     // Ensure the directory exists
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir, { recursive: true });
//     }
//     cb(null, dir);
//     console.log("Reached multer");
//   },
//     filename: (req, file, cb) => {
//       const uniquename = `${new Date().toISOString()}-${Math.round(
//         Math.random() * 1e9
//       )}`;
//       console.log("🚀 ~ file: multer.ts:11 ~ uniquename:", uniquename);
//       cb(null, `${uniquename}_${file.originalname}`);
//     },
// });
// const upload = multer({ storage });
// export default upload;

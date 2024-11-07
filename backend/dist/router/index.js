"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfController_1 = require("../controller/pdfController");
const express_1 = require("express");
const multer_1 = __importDefault(require("../config/multer"));
const router = (0, express_1.Router)();
const pdfcontroller = new pdfController_1.pdfController();
router.post("/", multer_1.default.single('file'), pdfcontroller.PdfReader.bind(pdfController_1.pdfController));
exports.default = router;

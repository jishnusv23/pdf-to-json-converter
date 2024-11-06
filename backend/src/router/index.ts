import { pdfController } from "../controller/pdfController";
import { Router } from "express";
import upload from "../config/multer";

const router = Router();

const pdfcontroller = new pdfController();
router.post("/", upload.single('file'),pdfcontroller.PdfReader.bind(pdfController));

export default router
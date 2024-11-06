import { NextFunction, Request, Response } from "express";

export class pdfController{
    async PdfReader(req:Request,res:Response,next:NextFunction){
        try{
             if (!req.file) {
                res.status(400).json({ error: "No file uploaded" });
             }
            console.log(req.file,'________________')

        }catch(error:any){
            next(error)
        }
    }
}
import multer, { StorageEngine } from "multer";
import path from "path";

const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/sample");
    console.log("Reached multer");
  },
  filename: (req, file, cb) => {
    //using scientific notation
    const uniquename = new Date() + "-" + Math.round(Math.random() * 1e9);
    console.log("🚀 ~ file: multer.ts:11 ~ uniquename:", uniquename);
    cb(null, `${uniquename}_${file.originalname}`);
  },
});

const upload = multer({ storage });
export default upload;

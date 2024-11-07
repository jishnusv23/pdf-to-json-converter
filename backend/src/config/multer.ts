import multer, { StorageEngine } from "multer";
import path from "path";
import fs from "fs";
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "public", "sample");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
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

const upload = multer({ storage });
export default upload;

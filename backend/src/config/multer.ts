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

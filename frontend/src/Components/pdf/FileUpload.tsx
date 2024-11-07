import React, { ChangeEvent, useRef, useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import { CLIENT_API } from "../../utils/Axios";
const FileUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [jsonData,setJsonData]=useState<string[]>([])
  const handlClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handlePdfFile =async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    console.log("🚀 ~ file: FileUpload.tsx:13 ~ handlePdfFile ~ file:", file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await CLIENT_API.post("/pdf", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(
          "🚀 ~ file: FileUpload.tsx:24 ~ handlePdfFile ~ response:",
          response
        );
      } catch (error: any) {
        console.error('something wrong',error);
        
      }
    }
  };

  return (
    <div
      className=" border border-black max-h-screen w-90 p-4 cursor-pointer mx-auto"
      onClick={handlClick}
    >
      <div>
        <div>
          <Player
            src="https://lottie.host/7ffb869d-5cce-47e6-bd5d-f6a46546b1fb/kCfhTC0uaJ.json"
            background="transparent"
            speed={1}
            loop
            autoplay
            className="w-32 mx-auto"
          />
          <div className="flex flex-col items-center">
            <h3 className="font-black">
              Drag and drop files here or click to upload
            </h3>
            <p>
              Check Resources section at the top for Image OCR and other Free
              Tools.
            </p>
          </div>
        </div>
        <div className="mt-4 text-center items-center text-white bg-blue-600  mx-1 px-2 rounded-2xl my-1">
          <button className="w-60 h-10" onClick={handlClick}>
            Upload files to convert
          </button>
        </div>
      </div>
      <input
        type="file"
        ref={inputRef}
        accept="application/pdf"
        className="hidden"
        style={{ display: "none" }}
        onChange={handlePdfFile}
      />
    </div>
  );
};

export default FileUpload;

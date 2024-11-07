import React, { ChangeEvent, useRef, useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import { CLIENT_API } from "../../utils/Axios";
import ConversionProgress from "./ConversionProgress";
import JsonOutput from "./JsonOutput";
import toast from "react-hot-toast";
const FileUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [jsonData, setJsonData] = useState<any[]>([]);
  const [isProccessing, setIsProcessing] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const handlClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleClear = () => {
    setJsonData([""]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setShowResult(false);
    setIsDisabled(false);
    setIsProcessing(false);
  };
  const handlePdfFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    // console.log("🚀 ~ file: FileUpload.tsx:13 ~ handlePdfFile ~ file:", file);
    setIsProcessing(true);
    setIsDisabled(true);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await CLIENT_API.post("/pdf", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // console.log(
        //   "🚀 ~ file: FileUpload.tsx:24 ~ handlePdfFile ~ response:",
        //   response
        // );
        if (response.data.success) {
          console.log("success the result");
          setShowResult(true);
          setJsonData(response.data.data);
        } else {
          toast.error(response.data.error);
        }
      } catch (error: any) {
        console.error("something wrong", error);
      } finally {
        setIsProcessing(false);
      }
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-5">
        <div
          className=" border border-black max-h-screen w-90 p-4 cursor-pointer mx-auto"
          // onClick={!isDisabled ? handlClick : undefined}
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
                  Click to upload your PDF file for JSON conversion
                </h3>
                <p>
                  Supported format: PDF only. Quickly convert your documents
                  into JSON with ease!
                </p>
              </div>
            </div>
            <div className="mt-4 text-center items-center text-white bg-blue-600  mx-1 px-2 rounded-2xl my-1">
              <button
                className="w-60 h-10"
                onClick={handlClick}
                disabled={isProccessing || isDisabled}
              >
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
            disabled={isDisabled || isProccessing}
            onChange={handlePdfFile}
          />
        </div>
        <ConversionProgress isProcessing={isProccessing} />
        {showResult && (
          <>
            <div className=" flex justify-end gap-4">
              <button
                className="w-40  h-7  text-white bg-blue-600  rounded-xl "
                onClick={handleClear}
              >
                Reset
              </button>
              <button
                className="w-40 h-7  text-white bg-blue-600 rounded-xl  "
                onClick={() =>
                  toast("Oops! This file is in read-only mode.", { icon: "😁" })
                }
              >
                Copy
              </button>
            </div>

            <div className="h-[calc(90vh-2.5rem)] border border-black flex justify-center  overflow-y-auto scrollbar-hide ">
              <JsonOutput jsonData={jsonData} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FileUpload;

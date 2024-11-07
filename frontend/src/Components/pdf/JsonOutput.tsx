import React from "react";
interface JsonOutputProps {
  jsonData: any[];
}
const JsonOutput: React.FC<JsonOutputProps> = ({ jsonData }) => {
//   console.log("🚀 ~ file: JsonOutput.tsx:6 ~ jsonData:", jsonData);
  return (
    <>
      {/* <button className="">Copy</button> */}
      <div className="      ">
        <div>
          {jsonData.length === 0 ? (
            <div>
              <p>No data available .Pleae upload the PDF.</p>
            </div>
          ) : (
            <div className="flex ">
              <pre className="text-red-500">
                {JSON.stringify(jsonData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JsonOutput;

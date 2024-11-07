import React from "react";
interface JsonOutputProps {
  jsonData: any[];
}
const JsonOutput: React.FC<JsonOutputProps> = ({ jsonData }) => {
  console.log("🚀 ~ file: JsonOutput.tsx:6 ~ jsonData:", jsonData);
  return (
    <div className="      ">
      <div>
        {jsonData.length === 0 ? (
          <div>
            <p>No data available .Pleae upload the PDF.</p>
          </div>
        ) : (
          <div>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default JsonOutput;

import React from "react";
interface JsonOutputProps {
  jsonData: any[];
}
const JsonOutput: React.FC<JsonOutputProps> = ({ jsonData }) => {
  
  const formattedJson = JSON.stringify(jsonData, null, 2).replace(
    /\n/g,
    "<br />"
  );
  return (
    <>
  
      <div className="      ">
        <div>
          {jsonData.length === 0 ? (
            <div>
              <p>No data available .Pleae upload the PDF.</p>
            </div>
          ) : (
            <div className="flex ">
              <code
                className="text-red-500"
                dangerouslySetInnerHTML={{ __html: formattedJson }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JsonOutput;

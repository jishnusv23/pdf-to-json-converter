import fs from "fs/promises";
import path from 'path'

export async function convertMarkdownToJson(filePath: string) {
  try {
 
    const markdownContent = await fs.readFile(filePath, "utf-8");
    // console.log("🚀 ~ file: convertMarkdownToJson.ts:7 ~ convertMarkdownToJson ~ markdownContent:", markdownContent)

    
    const lines = markdownContent.split("\n");
    // console.log("🚀 ~ file: convertMarkdownToJson.ts:11 ~ convertMarkdownToJson ~ lines:", lines)

    const filename=path.basename(filePath as string)
    const jsonOutput: any = {
      filePath: filename,
      content: {},
    };

    let currentTag = "";
    let currentContent: string[] = [];

    lines.forEach((line) => {
     
      const tagMatch = line.match(/^<(\w+)>/);

      if (tagMatch) {
       
        if (currentTag) {
          jsonOutput.content[currentTag] = currentContent.join("\n").trim();
        }

        currentTag = tagMatch[1];
        currentContent = [];
      } else {
        
        currentContent.push(line);
      }
    });

    
    if (currentTag) {
      jsonOutput.content[currentTag] = currentContent.join("\n").trim();
    }

    //  JSON
    // console.log(
    //   "🚀 ~ file: convertMarkdownToJson.ts ~ convertMarkdownToJson ~ jsonOutput:",
    //   jsonOutput
    // );

    return jsonOutput;
  } catch (error) {
    console.error("Error converting Markdown to JSON:", error);
  }
}


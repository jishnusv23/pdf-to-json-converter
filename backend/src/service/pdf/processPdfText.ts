import path from "path";
export function processPdfText(pdfData: any): any {
  console.log(
    "🚀 ~ file: processPdfText.ts:3 ~ processPdfText ~ pdfText:",
    pdfData
  );
  const fileName = path.basename(pdfData.filename as string);
  const jsonData = {
  filename: fileName,
  meta: {
    info: pdfData.meta?.info,
    metadata: pdfData.meta?.metadata,
  },
  pages: pdfData.pages.map((page:any) => ({
    pageInfo: {
      num: page.pageInfo.num,
      scale: page.pageInfo.scale,
      rotation: page.pageInfo.rotation,
      width: page.pageInfo.width,
      height: page.pageInfo.height,
    },
    links: page.links,
    content: page.content
      .map((contentItem:any) => contentItem.str) 
      .join(" ") 
      .replace(/\.\s*/g, ".\n"), 
  })),
  pdfInfo: pdfData.pdfInfo,
};

return jsonData;
}

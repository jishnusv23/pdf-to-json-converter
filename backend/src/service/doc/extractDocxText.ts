import mammoth from "mammoth";
export async function extractDocxText(filepath: string): Promise<any> {
  console.log(
    "🚀 ~ file: extractDocxText.ts:2 ~ extractDocxText ~ filepath:",
    filepath
  );
  return new Promise((resolve, reject) => {
    mammoth
      .extractRawText({ path: filepath })
      .then((result) => {
        const sectionMarkerIndex = result.value.search(
          /^[^:\n]+(?:Workouts|:)/m
        );
        const metadataText = result.value.slice(0, sectionMarkerIndex);
        const mainContent = result.value.slice(sectionMarkerIndex);
        // console.log(
        //   "🚀 ~ file: extractDocxText.ts:16 ~ .then ~ metadataText:",
        //   metadataText
        // );
        // console.log(
        //   "🚀 ~ file: extractDocxText.ts:26 ~ .then ~ sectionMarkerIndex:",
        //   sectionMarkerIndex
        // );
        // console.log(
        //   "🚀 ~ file: extractDocxText.ts:18 ~ .then ~ mainContent:",
        //   mainContent
        // );
        const extractLinks = (text: string): string[] => {
          const urlPattern = /(https?:\/\/[^\s]+)/g;
          return text.match(urlPattern) || [];
        };
        const allLinks = extractLinks(result.value);
        console.log(
          "🚀 ~ file: extractDocxText.ts:33 ~ .then ~ allLinks:",
          allLinks
        );
        const structuredData = {
          metaData: metadataText,
          mainContent: mainContent,
          messages: result.messages,
          links: allLinks,
        };

        resolve(structuredData);
      })
      .catch((error) => {
        console.error("something wrong extractRawText doc", error);
        reject(error);
      });
  });
}

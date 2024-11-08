# PDF-to-JSON-Converter - Machine Task

## Different ways to convert files into JSON format, supporting various modules and the `fs` module.

## PDF to JSON Conversion using ("pdf.js-extract")  
- This is one of the easiest ways to extract PDF content, providing additional features like:  
  - Extracting detailed metadata.  
  - Retrieving page details such as width, string (`str`), and font size.

## Markdown File to JSON Conversion  
- Different npm packages are available for this task, but I used the `fs` module with UTF-8 encoding for simplicity.  
- Additional **regex methods** were used to structure the JSON format effectively.

## MS Word to JSON Conversion using ("mammoth")  
- The `mammoth` package makes it easy to extract raw text from MS Word files.  
- Additional iteration methods were implemented to refine the extracted content.

## Hosting the Project  
- **Frontend:** Vercel  
- **Backend:** Render

## Notes  
- These methods are some of the ways to convert files into JSON.  
- Many other packages and AI APIs are available for more structured and advanced conversions.  
- Exploring these options can lead to better results.

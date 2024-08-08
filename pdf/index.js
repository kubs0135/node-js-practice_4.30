const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdfGenerate = (text, image) => {
  // Create a document
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));

  doc.fontSize(25).text(text, 100, 100);

  // Add an image, constrain it to a given size, and center it vertically and horizontally
  doc.image(image, {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
  // Finalize PDF file
  doc.end();
};

pdfGenerate("Hello world", "pp.jpg");

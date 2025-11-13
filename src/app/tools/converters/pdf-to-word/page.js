"use client";
export const dynamic = "force-dynamic"; // disable SSR & static rendering

import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function PdfToWordConverter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleConvert = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError("");
    setDownloadUrl(null);
    setLoading(true);

    try {
      // 🧩 Dynamically import browser-only libraries
      const pdfjsLib = await import("pdfjs-dist/build/pdf");
      const { Document, Packer, Paragraph, TextRun } = await import("docx");

      // Required to load worker correctly in browser
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.mjs",
        import.meta.url
      ).toString();

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      const paragraphs = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const text = textContent.items.map((item) => item.str).join(" ");
        paragraphs.push(new Paragraph({ children: [new TextRun(text)] }));
      }

      const doc = new Document({ sections: [{ children: paragraphs }] });
      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
    } catch (err) {
      console.error("Conversion failed:", err);
      setError("Failed to convert PDF. Try another file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToolPageTemplate
      title="PDF to Word Converter"
      description="Convert PDF files to editable Word documents directly in your browser."
    >
      <div className="space-y-6 text-center">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleConvert}
          className="border p-2 rounded-lg cursor-pointer"
        />

        {loading && <p className="text-gray-400">Processing...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {downloadUrl && (
          <a
            href={downloadUrl}
            download="converted.docx"
            className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            Download Word File
          </a>
        )}
      </div>
    </ToolPageTemplate>
  );
}

"use client";
import { useState } from "react";
import jsPDF from "jspdf";

export default function TextToPdf() {
  const [text, setText] = useState("");

  const generatePdf = () => {
    if (!text.trim()) return alert("Enter some text first!");
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("converted.pdf");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🧾 Text → PDF Converter</h1>
      <textarea
        placeholder="Enter your text here..."
        className="w-full max-w-xl h-40 bg-gray-900 border border-gray-700 p-3 rounded-lg text-white mb-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={generatePdf}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold"
      >
        Convert to PDF
      </button>
    </main>
  );
}

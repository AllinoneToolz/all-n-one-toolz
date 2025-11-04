"use client";
import { useState } from "react";
import JSZip from "jszip";

export default function ZipCreator() {
  const [files, setFiles] = useState([]);

  const createZip = async () => {
    if (files.length === 0) return alert("Please upload files first!");
    const zip = new JSZip();
    Array.from(files).forEach((file) => {
      zip.file(file.name, file);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "compressed.zip";
    link.click();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🗜️ ZIP / RAR Creator</h1>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="bg-gray-900 border border-gray-700 p-3 rounded-lg mb-4"
      />
      <button
        onClick={createZip}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold"
      >
        Create ZIP File
      </button>
    </main>
  );
}

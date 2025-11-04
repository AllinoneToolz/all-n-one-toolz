"use client";
import { useState } from "react";

export default function ImageConverter() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("png");
  const [convertedURL, setConvertedURL] = useState(null);

  const handleConvert = async () => {
    if (!file) return alert("Please upload an image first.");
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);
          setConvertedURL(url);
        },
        `image/${format}`,
        1.0
      );
    };
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🖼️ Image Converter</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="bg-gray-900 border border-gray-700 p-3 rounded-lg mb-3"
      />
      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="bg-gray-900 border border-gray-700 p-2 rounded-lg mb-4"
      >
        <option value="png">PNG</option>
        <option value="jpeg">JPG</option>
        <option value="webp">WEBP</option>
      </select>
      <button
        onClick={handleConvert}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold"
      >
        Convert
      </button>

      {convertedURL && (
        <div className="mt-6 text-center">
          <p className="mb-2">✅ Conversion Successful!</p>
          <a
            href={convertedURL}
            download={`converted.${format}`}
            className="text-blue-400 underline"
          >
            Download {format.toUpperCase()} File
          </a>
        </div>
      )}
    </main>
  );
}

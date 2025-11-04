"use client";
import { useState } from "react";

export default function SvgToPng() {
  const [svg, setSvg] = useState("");
  const [png, setPng] = useState(null);

  const convert = () => {
    const svgBlob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      setPng(canvas.toDataURL("image/png"));
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🪶 SVG to PNG Converter</h1>
      <textarea
        value={svg}
        onChange={(e) => setSvg(e.target.value)}
        rows="8"
        placeholder="<svg>...</svg>"
        className="w-full max-w-xl p-4 rounded text-black mb-4"
      ></textarea>
      <button onClick={convert} className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg mb-4">
        Convert
      </button>
      {png && (
        <div className="text-center">
          <img src={png} alt="converted" className="max-w-xs mx-auto rounded" />
          <a href={png} download="converted.png" className="text-green-400 hover:underline mt-2 block">
            Download PNG
          </a>
        </div>
      )}
    </main>
  );
}

"use client";
import { useState } from "react";

export default function FaviconGenerator() {
  const [text, setText] = useState("");
  const [favicon, setFavicon] = useState(null);

  const generate = () => {
    if (!text.trim()) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 64;
    canvas.height = 64;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = "#0f0";
    ctx.font = "40px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text[0].toUpperCase(), 32, 38);
    setFavicon(canvas.toDataURL());
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🧷 Favicon Generator</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter app name or letter"
        className="p-2 rounded text-black mb-4"
      />
      <button onClick={generate} className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg mb-4">
        Generate
      </button>
      {favicon && (
        <div className="text-center">
          <img src={favicon} alt="favicon" className="w-16 h-16 mx-auto rounded" />
          <a
            href={favicon}
            download="favicon.png"
            className="text-green-400 hover:underline mt-2 block"
          >
            Download PNG
          </a>
        </div>
      )}
    </main>
  );
}

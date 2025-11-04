"use client";
import { useState } from "react";

export default function FontPreviewTool() {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog");
  const [font, setFont] = useState("Arial");

  const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Roboto", "Poppins"];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🔤 Font Preview Tool</h1>
      <textarea
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full max-w-2xl p-4 rounded text-black mb-4"
      />
      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="p-2 rounded text-black mb-6"
      >
        {fonts.map((f, i) => (
          <option key={i} value={f}>
            {f}
          </option>
        ))}
      </select>

      <div className="bg-gray-800 w-full max-w-2xl p-6 rounded-lg text-center" style={{ fontFamily: font }}>
        <p className="text-lg">{text}</p>
        <p className="mt-4 text-green-400 italic">{font}</p>
      </div>
    </main>
  );
}

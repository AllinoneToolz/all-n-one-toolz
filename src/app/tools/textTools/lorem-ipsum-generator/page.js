"use client";
import { useState } from "react";

export default function LoremIpsumGenerator() {
  const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const [paragraphs, setParagraphs] = useState(2);
  const [result, setResult] = useState("");

  const generate = () => {
    const text = Array.from({ length: paragraphs }, () => loremText).join("\n\n");
    setResult(text);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">📝 Lorem Ipsum Generator</h1>

      <input
        type="number"
        min="1"
        max="10"
        value={paragraphs}
        onChange={(e) => setParagraphs(Number(e.target.value))}
        className="p-3 bg-gray-800 border border-gray-700 rounded-lg mb-3 w-32 text-center"
      />

      <button onClick={generate} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg mb-4">
        Generate
      </button>

      {result && (
        <textarea
          readOnly
          rows="8"
          value={result}
          className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg"
        ></textarea>
      )}
    </main>
  );
}

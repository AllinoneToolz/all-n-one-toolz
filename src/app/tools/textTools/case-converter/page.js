"use client";
import { useState } from "react";

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const toUpper = () => setResult(text.toUpperCase());
  const toLower = () => setResult(text.toLowerCase());
  const toTitle = () =>
    setResult(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🔠 Case Converter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
        placeholder="Enter your text..."
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg mb-4"
      ></textarea>

      <div className="flex flex-wrap gap-3 mb-4">
        <button onClick={toUpper} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg">UPPERCASE</button>
        <button onClick={toLower} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg">lowercase</button>
        <button onClick={toTitle} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg">Title Case</button>
      </div>

      {result && (
        <textarea
          value={result}
          readOnly
          rows="8"
          className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg"
        ></textarea>
      )}
    </main>
  );
}

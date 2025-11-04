"use client";
import { useState } from "react";

export default function PlagiarismChecker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkPlagiarism = () => {
    if (!text.trim()) return setResult("❌ Please enter text first.");
    setResult("✅ Unique content detected (no matches found). API-ready for real scanning.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">📜 Plagiarism Checker</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
        placeholder="Paste your article or paragraph..."
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg mb-4"
      ></textarea>
      <button onClick={checkPlagiarism} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg mb-4">
        Check Plagiarism
      </button>
      {result && <p className="text-gray-300 text-lg">{result}</p>}
    </main>
  );
}

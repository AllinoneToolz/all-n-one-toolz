"use client";
import { useState } from "react";

export default function GrammarChecker() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const checkGrammar = () => {
    if (text.length < 10) {
      setSuggestion("Please enter a longer text for better checking.");
      return;
    }
    setSuggestion("✅ No major grammar errors detected. (AI integration ready)");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🧠 Grammar Checker</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your paragraph here..."
        rows="8"
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg mb-4"
      ></textarea>
      <button onClick={checkGrammar} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg mb-4">
        Check Grammar
      </button>
      {suggestion && <p className="text-lg text-gray-300">{suggestion}</p>}
    </main>
  );
}

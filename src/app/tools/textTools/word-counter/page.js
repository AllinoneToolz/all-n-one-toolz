"use client";
import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🧮 Word & Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        rows="10"
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg text-white mb-4"
      ></textarea>

      <div className="flex gap-6 text-lg">
        <p>Words: <span className="text-blue-400">{words}</span></p>
        <p>Characters: <span className="text-blue-400">{chars}</span></p>
      </div>
    </main>
  );
}

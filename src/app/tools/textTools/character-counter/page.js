"use client";
import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🔡 Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text..."
        rows="10"
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg text-white mb-4"
      ></textarea>

      <p className="text-lg">
        Characters (including spaces):{" "}
        <span className="text-blue-400">{text.length}</span>
      </p>
    </main>
  );
}

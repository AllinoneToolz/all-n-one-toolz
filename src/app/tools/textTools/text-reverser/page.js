"use client";
import { useState } from "react";

export default function TextReverser() {
  const [text, setText] = useState("");
  const [reversed, setReversed] = useState("");

  const reverse = () => {
    setReversed(text.split("").reverse().join(""));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🔄 Text Reverser</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
        placeholder="Enter text to reverse..."
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg mb-4"
      ></textarea>
      <button onClick={reverse} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg mb-4">
        Reverse Text
      </button>
      {reversed && (
        <textarea
          value={reversed}
          readOnly
          rows="8"
          className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg"
        ></textarea>
      )}
    </main>
  );
}

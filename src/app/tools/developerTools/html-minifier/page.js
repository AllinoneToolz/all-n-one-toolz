"use client";
import React, { useState } from "react";

export default function HTMLMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const minifyHTML = () => {
    const result = input
      .replace(/\n/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/>\s+</g, "><")
      .trim();
    setOutput(result);
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">🧹 HTML Minifier</h1>
      <textarea
        className="w-full p-3 text-black rounded"
        rows="6"
        placeholder="Paste HTML code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={minifyHTML}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-4 rounded"
      >
        Minify HTML
      </button>
      <textarea
        className="w-full p-3 text-black rounded mt-4"
        rows="6"
        value={output}
        readOnly
      />
    </div>
  );
}

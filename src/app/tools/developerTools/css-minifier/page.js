"use client";
import React, { useState } from "react";

export default function CSSMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const minify = () => {
    setOutput(
      input
        .replace(/\s+/g, " ")
        .replace(/\/\*.*?\*\//g, "")
        .replace(/\s*([{}:;,])\s*/g, "$1")
        .trim()
    );
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">🎨 CSS Minifier</h1>
      <textarea
        className="w-full p-3 text-black rounded"
        rows="6"
        placeholder="Paste your CSS code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={minify}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-4 rounded"
      >
        Minify CSS
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

"use client";
import React, { useState } from "react";

export default function JavaScriptFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJS = () => {
    try {
      const formatted = js_beautify(input, { indent_size: 2 });
      setOutput(formatted);
    } catch (error) {
      setOutput("⚠️ Error: Invalid JavaScript code!");
    }
  };

  return (
    <div className="p-6 text-white text-center">
      <h1 className="text-3xl font-bold mb-4">⚙️ JavaScript Formatter</h1>
      <textarea
        className="w-full text-black p-3 rounded"
        rows="8"
        placeholder="Paste JS code here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={formatJS}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-4 rounded"
      >
        Format JavaScript
      </button>
      <textarea
        className="w-full text-black p-3 rounded mt-4"
        rows="8"
        value={output}
        readOnly
      />
    </div>
  );
}

// You must install js-beautify:
// npm install js-beautify
import { js_beautify } from "js-beautify";

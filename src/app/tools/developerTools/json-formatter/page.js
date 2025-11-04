"use client";
import React, { useState } from "react";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setOutput("⚠️ Invalid JSON!");
    }
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">📑 JSON Formatter</h1>
      <textarea
        className="w-full p-3 text-black rounded"
        rows="8"
        placeholder="Paste JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={formatJSON}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-4 rounded"
      >
        Format JSON
      </button>
      <textarea
        className="w-full p-3 text-black rounded mt-4"
        rows="8"
        value={output}
        readOnly
      />
    </div>
  );
}

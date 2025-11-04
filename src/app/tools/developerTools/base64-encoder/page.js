"use client";
import React, { useState } from "react";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch {
      setOutput("⚠️ Invalid input!");
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("⚠️ Invalid Base64 string!");
    }
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">🔐 Base64 Encoder / Decoder</h1>
      <textarea
        className="w-full p-3 rounded text-black"
        rows="4"
        placeholder="Enter text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={encode} className="bg-blue-600 px-4 py-2 rounded">
          Encode
        </button>
        <button onClick={decode} className="bg-green-600 px-4 py-2 rounded">
          Decode
        </button>
      </div>
      <textarea
        className="w-full p-3 rounded mt-4 text-black"
        rows="4"
        value={output}
        readOnly
      />
    </div>
  );
}

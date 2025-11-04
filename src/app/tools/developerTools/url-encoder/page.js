"use client";
import React, { useState } from "react";

export default function URLEncoder() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => setOutput(encodeURIComponent(text));
  const decode = () => {
    try {
      setOutput(decodeURIComponent(text));
    } catch {
      setOutput("⚠️ Invalid encoded text!");
    }
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">🔗 URL Encoder / Decoder</h1>
      <textarea
        className="w-full p-3 text-black rounded"
        rows="4"
        placeholder="Enter URL or text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
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
        className="w-full p-3 text-black rounded mt-4"
        rows="4"
        value={output}
        readOnly
      />
    </div>
  );
}

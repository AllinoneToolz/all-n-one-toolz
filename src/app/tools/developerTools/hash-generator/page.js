"use client";
import React, { useState } from "react";

export default function HashGenerator() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  const generateHash = async (algorithm) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const buffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    setHash(hashHex);
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">🔒 Hash Generator</h1>
      <textarea
        className="w-full p-3 rounded text-black"
        rows="4"
        placeholder="Enter text to hash..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => generateHash("SHA-256")}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          SHA-256
        </button>
        <button
          onClick={() => generateHash("SHA-1")}
          className="bg-green-600 px-4 py-2 rounded"
        >
          SHA-1
        </button>
      </div>
      <textarea
        className="w-full p-3 rounded text-black mt-4"
        rows="4"
        value={hash}
        readOnly
      />
    </div>
  );
}

"use client";
import React, { useState } from "react";

export default function XMLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatXML = () => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(input, "text/xml");
      const serializer = new XMLSerializer();
      const xmlString = serializer.serializeToString(xmlDoc);
      const formatted = xmlString.replace(/></g, ">\n<");
      setOutput(formatted);
    } catch {
      setOutput("⚠️ Invalid XML!");
    }
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">🧾 XML Formatter</h1>
      <textarea
        className="w-full p-3 text-black rounded"
        rows="8"
        placeholder="Paste XML here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={formatXML}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 mt-4 rounded"
      >
        Format XML
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

"use client";
import React, { useState } from "react";

export default function HTMLPreviewer() {
  const [html, setHtml] = useState("<h1>Hello World!</h1>");

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">🌐 HTML Previewer</h1>
      <textarea
        className="w-full p-3 text-black rounded"
        rows="8"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      />
      <div
        className="bg-white text-black p-4 rounded mt-4 shadow"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

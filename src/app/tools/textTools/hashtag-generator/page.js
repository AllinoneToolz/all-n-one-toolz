"use client";
import { useState } from "react";

export default function HashtagGenerator() {
  const [keywords, setKeywords] = useState("");
  const [hashtags, setHashtags] = useState([]);

  const generate = () => {
    const words = keywords.split(/[ ,]+/).filter(Boolean);
    const tags = words.map((w) => `#${w.toLowerCase()}`).slice(0, 20);
    setHashtags(tags);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🏷️ Hashtag Generator</h1>
      <input
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter keywords (e.g., travel food nature)"
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg mb-4"
      />
      <button onClick={generate} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg mb-4">
        Generate Hashtags
      </button>
      {hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2 max-w-xl">
          {hashtags.map((tag) => (
            <span key={tag} className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-lg text-blue-400">
              {tag}
            </span>
          ))}
        </div>
      )}
    </main>
  );
}

"use client";
import { useState } from "react";

export default function KeywordDensityChecker() {
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState([]);

  const analyze = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    if (!words) return setKeywords([]);

    const counts = {};
    words.forEach((w) => (counts[w] = (counts[w] || 0) + 1));
    const total = words.length;

    const sorted = Object.entries(counts)
      .map(([word, count]) => ({ word, percent: ((count / total) * 100).toFixed(2) }))
      .sort((a, b) => b.percent - a.percent)
      .slice(0, 10);

    setKeywords(sorted);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">🔍 Keyword Density Checker</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
        placeholder="Paste your content..."
        className="w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg mb-4"
      ></textarea>
      <button onClick={analyze} className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg mb-4">
        Analyze Text
      </button>

      {keywords.length > 0 && (
        <table className="w-full max-w-xl text-left text-gray-300 border border-gray-700 rounded-lg">
          <thead className="bg-gray-800 text-blue-400">
            <tr>
              <th className="px-3 py-2 border-b border-gray-700">Keyword</th>
              <th className="px-3 py-2 border-b border-gray-700">Density (%)</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((k) => (
              <tr key={k.word}>
                <td className="px-3 py-2 border-b border-gray-700">{k.word}</td>
                <td className="px-3 py-2 border-b border-gray-700">{k.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

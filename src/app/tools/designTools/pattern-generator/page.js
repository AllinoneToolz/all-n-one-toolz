"use client";
import { useState } from "react";

export default function PatternGenerator() {
  const [color, setColor] = useState("#00ff7f");

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🧶 Pattern Generator</h1>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="mb-4" />
      <div
        className="w-72 h-72 border border-gray-700 rounded-lg"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${color}, ${color} 10px, transparent 10px, transparent 20px)`,
        }}
      ></div>
    </main>
  );
}

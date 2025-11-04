"use client";
import { useState } from "react";

export default function LogoMaker() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#00ff7f");

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🪄 Logo Maker</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter brand name"
        className="p-3 rounded text-black mb-3"
      />
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="mb-4" />

      <div className="bg-gray-800 p-10 rounded-lg flex items-center justify-center w-72 h-72">
        <h2 className="text-5xl font-bold" style={{ color }}>
          {name || "Your Brand"}
        </h2>
      </div>
    </main>
  );
}

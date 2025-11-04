"use client";
import { useState } from "react";

export default function WeightConverter() {
  const [kg, setKg] = useState("");
  const [lbs, setLbs] = useState(null);

  const convert = () => setLbs((kg * 2.20462).toFixed(2));

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-12">
      <section className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">⚖️ Weight Converter</h1>
        <input
          type="number"
          placeholder="Enter weight in kilograms"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          className="p-2 bg-gray-900 border border-gray-700 rounded-lg text-white w-full mb-4"
        />
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg">Convert to Pounds</button>
        {lbs && <p className="mt-4 text-lg">{kg} kg = {lbs} lbs</p>}
      </section>
    </main>
  );
}

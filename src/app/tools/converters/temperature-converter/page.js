"use client";
import { useState } from "react";

export default function TemperatureConverter() {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("CtoF");
  const [result, setResult] = useState(null);

  const convert = () => {
    if (scale === "CtoF") setResult(((temp * 9) / 5 + 32).toFixed(2) + " °F");
    else setResult((((temp - 32) * 5) / 9).toFixed(2) + " °C");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-12">
      <section className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">🌡️ Temperature Converter</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Enter temperature"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            className="p-2 bg-gray-900 border border-gray-700 rounded-lg text-white flex-1"
          />
          <select
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className="p-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
          >
            <option value="CtoF">C → F</option>
            <option value="FtoC">F → C</option>
          </select>
        </div>
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg">Convert</button>
        {result && <p className="mt-4 text-lg">{result}</p>}
      </section>
    </main>
  );
}

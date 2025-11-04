"use client";
import { useState } from "react";

export default function SpeedConverter() {
  const [speed, setSpeed] = useState("");
  const [from, setFrom] = useState("kmh");
  const [to, setTo] = useState("mph");
  const [result, setResult] = useState(null);

  const convert = () => {
    let value = parseFloat(speed);
    if (isNaN(value)) return;

    const conversions = {
      kmh: { mph: value * 0.621371, ms: value / 3.6 },
      mph: { kmh: value / 0.621371, ms: value * 0.44704 },
      ms: { kmh: value * 3.6, mph: value / 0.44704 },
    };

    const output = conversions[from]?.[to];
    if (output) setResult(output.toFixed(2));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-12">
      <section className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">⚡ Speed Converter</h1>
        <div className="grid gap-3">
          <input
            type="number"
            placeholder="Enter speed"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="p-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
          />
          <div className="flex gap-2">
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="p-2 bg-gray-900 border border-gray-700 rounded-lg flex-1">
              <option value="kmh">km/h</option>
              <option value="mph">mph</option>
              <option value="ms">m/s</option>
            </select>
            <select value={to} onChange={(e) => setTo(e.target.value)} className="p-2 bg-gray-900 border border-gray-700 rounded-lg flex-1">
              <option value="kmh">km/h</option>
              <option value="mph">mph</option>
              <option value="ms">m/s</option>
            </select>
          </div>

          <button onClick={convert} className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg mt-3">Convert</button>
          {result && <p className="mt-4 text-lg">{speed} {from} = {result} {to}</p>}
        </div>
      </section>
    </main>
  );
}

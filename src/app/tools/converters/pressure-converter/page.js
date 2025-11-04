"use client";
import { useState } from "react";

export default function PressureConverter() {
  const [pressure, setPressure] = useState("");
  const [from, setFrom] = useState("Pa");
  const [to, setTo] = useState("bar");
  const [result, setResult] = useState(null);

  const convert = () => {
    const factors = {
      Pa: 1,
      kPa: 1000,
      bar: 100000,
      psi: 6894.76,
      atm: 101325,
    };

    const valueInPa = parseFloat(pressure) * factors[from];
    const converted = valueInPa / factors[to];
    setResult(converted.toFixed(4));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-12">
      <section className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">🌬️ Pressure Converter</h1>
        <div className="grid gap-3">
          <input
            type="number"
            placeholder="Enter pressure value"
            value={pressure}
            onChange={(e) => setPressure(e.target.value)}
            className="p-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
          />
          <div className="flex gap-2">
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="p-2 bg-gray-900 border border-gray-700 rounded-lg flex-1">
              <option>Pa</option>
              <option>kPa</option>
              <option>bar</option>
              <option>psi</option>
              <option>atm</option>
            </select>
            <select value={to} onChange={(e) => setTo(e.target.value)} className="p-2 bg-gray-900 border border-gray-700 rounded-lg flex-1">
              <option>Pa</option>
              <option>kPa</option>
              <option>bar</option>
              <option>psi</option>
              <option>atm</option>
            </select>
          </div>

          <button onClick={convert} className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-lg mt-3">Convert</button>
          {result && <p className="mt-4 text-lg">{pressure} {from} = {result} {to}</p>}
        </div>
      </section>
    </main>
  );
}

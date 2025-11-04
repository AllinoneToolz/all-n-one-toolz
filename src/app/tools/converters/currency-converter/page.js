"use client";
import { useEffect, useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function Page() {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch available currencies (symbol list)
  useEffect(() => {
    fetch("https://api.exchangerate.host/symbols")
      .then((res) => res.json())
      .then((data) => {
        if (data.symbols) setCurrencies(Object.keys(data.symbols));
      })
      .catch((err) => console.error("Error fetching symbols:", err));
  }, []);

  // Convert currency using real API
  const convert = async () => {
    if (!amount) return alert("Please enter amount");
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
      );
      const data = await res.json();
      if (data.result) setResult(data.result.toFixed(2));
      else setResult("Conversion failed");
    } catch (e) {
      console.error(e);
      setResult("Error fetching rates");
    }
    setLoading(false);
  };

  return (
    <ToolPageTemplate
      title="Currency Converter"
      description="Convert between 150+ currencies with real-time exchange rates."
    >
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
        />

        <div className="flex gap-4 justify-between">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="flex-1 p-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
          >
            {currencies.map((code) => (
              <option key={code}>{code}</option>
            ))}
          </select>

          <span className="text-lg mt-2">→</span>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="flex-1 p-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
          >
            {currencies.map((code) => (
              <option key={code}>{code}</option>
            ))}
          </select>
        </div>

        <button
          onClick={convert}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          {loading ? "Converting..." : "Convert"}
        </button>

        {result && (
          <div className="mt-4 text-xl font-semibold text-blue-400">
            {amount} {from} = {result} {to}
          </div>
        )}
      </div>
    </ToolPageTemplate>
  );
}

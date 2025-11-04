"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compound, setCompound] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);
    if (!P || !R || !T) return;
    const interest = compound
      ? P * (Math.pow(1 + R / 100, T) - 1)
      : (P * R * T) / 100;
    setResult(interest.toFixed(2));
  };

  return (
    <ToolPageTemplate title="Interest Calculator" description="Simple & Compound Interest Calculator">
      <div className="tool-box">
        <input type="number" placeholder="Principal" className="input" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        <input type="number" placeholder="Rate (%)" className="input" value={rate} onChange={(e) => setRate(e.target.value)} />
        <input type="number" placeholder="Time (Years)" className="input" value={time} onChange={(e) => setTime(e.target.value)} />
        <label className="flex items-center gap-2 text-gray-300">
          <input type="checkbox" checked={compound} onChange={() => setCompound(!compound)} /> Compound Interest
        </label>
        <button onClick={calculate} className="btn">Calculate</button>
        {result && <p className="result">Interest: {result}</p>}
      </div>
    </ToolPageTemplate>
  );
}

"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!value || !total) return;
    setResult(((value / total) * 100).toFixed(2));
  };

  return (
    <ToolPageTemplate title="Percentage Calculator" description="Find percentage easily.">
      <div className="tool-box">
        <input type="number" placeholder="Value" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
        <input type="number" placeholder="Total" className="input" value={total} onChange={(e) => setTotal(e.target.value)} />
        <button onClick={calculate} className="btn">Calculate</button>
        {result && <p className="result">{result}%</p>}
      </div>
    </ToolPageTemplate>
  );
}

"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function BodyFatCalculator() {
  const [waist, setWaist] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!waist || !weight) return;
    const bf = ((waist * 1.082 + 94.42 - weight * 4.15) / weight) * 100;
    setResult(bf.toFixed(2));
  };

  return (
    <ToolPageTemplate title="Body Fat Calculator" description="Estimate your body fat percentage.">
      <div className="tool-box">
        <input type="number" placeholder="Waist (inches)" className="input" value={waist} onChange={(e) => setWaist(e.target.value)} />
        <input type="number" placeholder="Weight (lbs)" className="input" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <button onClick={calculate} className="btn">Calculate</button>
        {result && <p className="result">Body Fat: {result}%</p>}
      </div>
    </ToolPageTemplate>
  );
}

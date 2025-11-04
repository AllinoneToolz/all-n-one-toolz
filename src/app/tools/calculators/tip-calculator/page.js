"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [result, setResult] = useState(null);

  const calculateTip = () => {
    if (!bill || !tip) return;
    const tipAmount = (bill * tip) / 100;
    const total = parseFloat(bill) + tipAmount;
    setResult({ tipAmount: tipAmount.toFixed(2), total: total.toFixed(2) });
  };

  return (
    <ToolPageTemplate title="Tip Calculator" description="Easily calculate your tip amount.">
      <div className="tool-box">
        <input type="number" placeholder="Bill Amount" value={bill} onChange={(e) => setBill(e.target.value)} className="input" />
        <input type="number" placeholder="Tip (%)" value={tip} onChange={(e) => setTip(e.target.value)} className="input" />
        <button onClick={calculateTip} className="btn">Calculate</button>
        {result && (
          <p className="result">
            Tip: ${result.tipAmount} | Total: ${result.total}
          </p>
        )}
      </div>
    </ToolPageTemplate>
  );
}

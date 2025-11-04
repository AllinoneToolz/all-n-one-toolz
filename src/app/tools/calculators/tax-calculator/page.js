"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [rate, setRate] = useState("");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    if (!income || !rate) return;
    const result = (income * rate) / 100;
    setTax(result.toFixed(2));
  };

  return (
    <ToolPageTemplate title="Tax Calculator" description="Calculate income tax quickly.">
      <div className="tool-box">
        <input type="number" placeholder="Income" className="input" value={income} onChange={(e) => setIncome(e.target.value)} />
        <input type="number" placeholder="Tax Rate (%)" className="input" value={rate} onChange={(e) => setRate(e.target.value)} />
        <button onClick={calculateTax} className="btn">Calculate</button>
        {tax && <p className="result">Tax: ${tax}</p>}
      </div>
    </ToolPageTemplate>
  );
}

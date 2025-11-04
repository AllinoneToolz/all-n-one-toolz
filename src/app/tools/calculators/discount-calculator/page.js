"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [final, setFinal] = useState(null);

  const calculate = () => {
    if (!price || !discount) return;
    const result = price - (price * discount) / 100;
    setFinal(result.toFixed(2));
  };

  return (
    <ToolPageTemplate title="Discount Calculator" description="Find the discounted price quickly.">
      <div className="tool-box">
        <input type="number" placeholder="Original Price" className="input" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="number" placeholder="Discount (%)" className="input" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <button onClick={calculate} className="btn">Calculate</button>
        {final && <p className="result">Final Price: ${final}</p>}
      </div>
    </ToolPageTemplate>
  );
}

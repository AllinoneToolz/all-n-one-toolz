"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(years) * 12;
    if (!p || !r || !n) return;
    const e = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(e.toFixed(2));
  };

  return (
    <ToolPageTemplate title="Loan / EMI Calculator" description="Find your monthly loan installment.">
      <div className="bg-gray-800/50 p-6 rounded-xl max-w-md mx-auto">
        <div className="space-y-3">
          <input placeholder="Loan Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"/>
          <input placeholder="Annual Interest Rate (%)" type="number" value={rate} onChange={(e)=>setRate(e.target.value)} className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"/>
          <input placeholder="Loan Tenure (Years)" type="number" value={years} onChange={(e)=>setYears(e.target.value)} className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"/>
          <button onClick={calculateEMI} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">Calculate EMI</button>
        </div>
        {emi && <div className="mt-4 text-center text-lg">Monthly EMI: <span className="text-blue-400 font-bold">₹{emi}</span></div>}
      </div>
    </ToolPageTemplate>
  );
}

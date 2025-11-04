"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  function calculateBMI() {
    if (!height || !weight) return;
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);
    setBmi(result);
  }

  return (
    <ToolPageTemplate title="BMI Calculator" description="Check your Body Mass Index instantly.">
      <div className="bg-gray-800/50 p-6 rounded-xl max-w-md mx-auto">
        <input type="number" placeholder="Height (cm)" className="input" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input type="number" placeholder="Weight (kg)" className="input" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <button onClick={calculateBMI} className="btn">Calculate BMI</button>
        {bmi && <p className="result">Your BMI: {bmi}</p>}
      </div>
    </ToolPageTemplate>
  );
}

"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function CaloriesCalculator() {
  const [weight, setWeight] = useState("");
  const [minutes, setMinutes] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    if (!weight || !minutes) return;
    const calories = (0.0175 * 8 * weight * minutes).toFixed(2); // MET=8 avg
    setResult(calories);
  };

  return (
    <ToolPageTemplate title="Calories Burned Calculator" description="Estimate calories burned during exercise.">
      <div className="tool-box">
        <input type="number" placeholder="Weight (kg)" className="input" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="Duration (minutes)" className="input" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
        <button onClick={calculate} className="btn">Calculate</button>
        {result && <p className="result">Calories Burned: {result}</p>}
      </div>
    </ToolPageTemplate>
  );
}

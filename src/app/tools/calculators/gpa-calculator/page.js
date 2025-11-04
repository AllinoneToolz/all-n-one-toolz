"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function GPACalculator() {
  const [grades, setGrades] = useState([""]);
  const [result, setResult] = useState(null);

  const addField = () => setGrades([...grades, ""]);
  const handleChange = (val, i) => {
    const arr = [...grades];
    arr[i] = val;
    setGrades(arr);
  };
  const calculate = () => {
    const nums = grades.map(Number).filter((n) => !isNaN(n));
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
    setResult(avg.toFixed(2));
  };

  return (
    <ToolPageTemplate title="GPA / CGPA Calculator" description="Calculate your GPA or CGPA easily.">
      <div className="tool-box">
        {grades.map((val, i) => (
          <input key={i} type="number" placeholder={`Subject ${i + 1} GPA`} className="input" value={val} onChange={(e) => handleChange(e.target.value, i)} />
        ))}
        <button onClick={addField} className="btn">Add Subject</button>
        <button onClick={calculate} className="btn mt-2">Calculate GPA</button>
        {result && <p className="result">Your GPA: {result}</p>}
      </div>
    </ToolPageTemplate>
  );
}

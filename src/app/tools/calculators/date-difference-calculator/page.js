"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function DateDifference() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [days, setDays] = useState(null);

  const calculate = () => {
    if (!start || !end) return;
    const diff = Math.abs(new Date(end) - new Date(start));
    setDays(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <ToolPageTemplate title="Date Difference Calculator" description="Find the number of days between two dates.">
      <div className="tool-box">
        <input type="date" className="input" value={start} onChange={(e) => setStart(e.target.value)} />
        <input type="date" className="input" value={end} onChange={(e) => setEnd(e.target.value)} />
        <button onClick={calculate} className="btn">Calculate</button>
        {days !== null && <p className="result">Difference: {days} days</p>}
      </div>
    </ToolPageTemplate>
  );
}

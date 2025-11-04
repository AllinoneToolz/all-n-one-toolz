"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function PregnancyCalculator() {
  const [lmp, setLmp] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const calculateDueDate = () => {
    if (!lmp) return;
    const date = new Date(lmp);
    date.setDate(date.getDate() + 280); // 40 weeks
    setDueDate(date.toDateString());
  };

  return (
    <ToolPageTemplate title="Pregnancy Due Date Calculator" description="Estimate your baby's due date.">
      <div className="tool-box">
        <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} className="input" />
        <button onClick={calculateDueDate} className="btn">Calculate</button>
        {dueDate && <p className="result">Estimated Due Date: {dueDate}</p>}
      </div>
    </ToolPageTemplate>
  );
}

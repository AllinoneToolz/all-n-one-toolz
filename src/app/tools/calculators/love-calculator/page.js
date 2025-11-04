"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function LoveCalculator() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    if (!name1 || !name2) return;
    const percent = Math.floor(Math.random() * 21) + 80; // 80–100% 😁
    setResult(`${percent}% compatibility 💕`);
  };

  return (
    <ToolPageTemplate title="Love Calculator" description="Just for fun — check your love percentage!">
      <div className="tool-box">
        <input placeholder="Your Name" value={name1} onChange={(e) => setName1(e.target.value)} className="input" />
        <input placeholder="Partner's Name" value={name2} onChange={(e) => setName2(e.target.value)} className="input" />
        <button onClick={calculateLove} className="btn">Calculate Love 💖</button>
        {result && <p className="result">{result}</p>}
      </div>
    </ToolPageTemplate>
  );
}

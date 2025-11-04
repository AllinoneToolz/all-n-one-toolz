"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function HeightConverter() {
  const [cm, setCm] = useState("");
  const [feetInch, setFeetInch] = useState("");

  const convert = () => {
    if (!cm) return;
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = (totalInches % 12).toFixed(1);
    setFeetInch(`${feet} ft ${inches} in`);
  };

  return (
    <ToolPageTemplate title="Height Converter" description="Convert height from cm to feet & inches.">
      <div className="tool-box">
        <input type="number" placeholder="Height (cm)" className="input" value={cm} onChange={(e) => setCm(e.target.value)} />
        <button onClick={convert} className="btn">Convert</button>
        {feetInch && <p className="result">{feetInch}</p>}
      </div>
    </ToolPageTemplate>
  );
}

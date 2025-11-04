"use client";
import { useState } from "react";
import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function TimeZoneConverter() {
  const [time, setTime] = useState("");
  const [from, setFrom] = useState("UTC");
  const [to, setTo] = useState("Asia/Karachi");
  const [converted, setConverted] = useState("");

  const convertTime = () => {
    if (!time) return;
    const date = new Date(`1970-01-01T${time}:00Z`);
    const convertedTime = date.toLocaleTimeString("en-US", { timeZone: to });
    setConverted(convertedTime);
  };

  return (
    <ToolPageTemplate title="Time Zone Converter" description="Convert time between different time zones.">
      <div className="tool-box">
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="input" />
        <select value={to} onChange={(e) => setTo(e.target.value)} className="input">
          <option value="Asia/Karachi">Asia/Karachi</option>
          <option value="America/New_York">America/New York</option>
          <option value="Europe/London">Europe/London</option>
          <option value="Asia/Dubai">Asia/Dubai</option>
          <option value="Asia/Tokyo">Asia/Tokyo</option>
        </select>
        <button onClick={convertTime} className="btn">Convert</button>
        {converted && <p className="result">Converted Time: {converted}</p>}
      </div>
    </ToolPageTemplate>
  );
}

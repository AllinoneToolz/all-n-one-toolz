"use client";
import ToolPageTemplate from "@/components/ToolPageTemplate";
import { useState } from "react";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      years--;
    }
    setAge(years);
  };

  return (
    <ToolPageTemplate
      title="Age Calculator"
      description="Find out your age in years based on your birth date."
    >
      <div className="space-y-4">
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-900 border border-gray-700"
          />
        </div>

        <button
          onClick={calculateAge}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Calculate Age
        </button>

        {age !== null && (
          <p className="mt-4 text-lg">
            You are <span className="font-semibold">{age}</span> years old.
          </p>
        )}
      </div>
    </ToolPageTemplate>
  );
}

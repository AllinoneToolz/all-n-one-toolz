"use client";
import React, { useState } from "react";

export default function DataGenerator() {
  const [count, setCount] = useState(5);
  const [data, setData] = useState([]);

  const generateData = () => {
    const fakeData = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `User_${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `+123456789${i + 1}`,
    }));
    setData(fakeData);
  };

  return (
    <div className="p-6 text-white text-center">
      <h1 className="text-3xl font-bold mb-4">📦 Random Data Generator</h1>
      <input
        type="number"
        min="1"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="text-black p-2 rounded mb-4"
      />
      <button
        onClick={generateData}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded ml-2"
      >
        Generate
      </button>
      <pre className="bg-gray-900 text-left mt-4 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

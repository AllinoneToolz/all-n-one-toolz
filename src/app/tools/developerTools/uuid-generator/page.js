"use client";
import React, { useState } from "react";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    const id = crypto.randomUUID();
    setUuid(id);
  };

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">🆔 UUID Generator</h1>
      <button
        onClick={generateUUID}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Generate UUID
      </button>
      <input
        className="w-full text-black p-3 rounded mt-4"
        value={uuid}
        readOnly
      />
    </div>
  );
}

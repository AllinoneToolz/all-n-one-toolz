"use client";
import { useState } from "react";

export default function MockupGenerator() {
  const [image, setImage] = useState(null);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🖼️ Mockup Generator</h1>
      <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} className="mb-4" />

      {image && (
        <div className="relative border border-gray-600 rounded-lg p-6 bg-gray-800">
          <img src={image} alt="mockup" className="max-w-sm rounded" />
          <p className="text-center mt-4 text-green-400">Preview Mockup</p>
        </div>
      )}
    </main>
  );
}

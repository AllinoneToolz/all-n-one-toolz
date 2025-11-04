"use client";
import { useState } from "react";

export default function ColorPaletteExtractor() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);

  const extractColors = () => {
    // Mock color extraction (you can later integrate a real library like color-thief)
    setColors(["#FF5733", "#FFC300", "#28A745", "#007BFF", "#6F42C1"]);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🎨 Color Palette Extractor</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        className="mb-4"
      />
      {image && <img src={image} alt="preview" className="max-w-xs rounded-lg mb-4" />}
      <button onClick={extractColors} className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg mb-4">
        Extract Colors
      </button>

      <div className="flex gap-3">
        {colors.map((c, i) => (
          <div key={i} className="w-12 h-12 rounded" style={{ background: c }} title={c}></div>
        ))}
      </div>
    </main>
  );
}

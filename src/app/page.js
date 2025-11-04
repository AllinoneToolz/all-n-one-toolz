"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "Calculators",
    tools: [
      { name: "BMI Calculator", path: "/tools/calculators/bmi-calculator" },
      { name: "Age Calculator", path: "/tools/calculators/age-calculator" },
      { name: "Love Calculator", path: "/tools/calculators/love-calculator" },
      { name: "Percentage Calculator", path: "/tools/calculators/percentage-calculator" },
      { name: "Discount Calculator", path: "/tools/calculators/discount-calculator" },
      { name: "Simple Interest Calculator", path: "/tools/calculators/simple-interest-calculator" },
      { name: "Compound Interest Calculator", path: "/tools/calculators/compound-interest-calculator" },
      { name: "Loan / EMI Calculator", path: "/tools/calculators/loan-calculator" },
      { name: "Tax Calculator", path: "/tools/calculators/tax-calculator" },
      { name: "Time Zone Converter", path: "/tools/calculators/timezone-converter" },
    ],
  },
  {
    name: "Converters",
    tools: [
      { name: "Image Converter", path: "/tools/converters/image-converter" },
      { name: "Video Converter", path: "/tools/converters/video-converter" },
      { name: "Audio Converter", path: "/tools/converters/audio-converter" },
      { name: "PDF to Word", path: "/tools/converters/pdf-to-word" },
      { name: "Word to PDF", path: "/tools/converters/word-to-pdf" },
      { name: "Excel to CSV", path: "/tools/converters/excel-to-csv" },
      { name: "Text to PDF", path: "/tools/converters/text-to-pdf" },
      { name: "HTML to PDF", path: "/tools/converters/html-to-pdf" },
      { name: "ZIP / RAR Creator", path: "/tools/converters/zip-creator" },
      { name: "Currency Converter", path: "/tools/converters/currency-converter" },
    ],
  },
  {
    name: "Design Tools",
    tools: [
      { name: "Color Palette Extractor", path: "/tools/designTools/color-palette-extractor" },
      { name: "Favicon Generator", path: "/tools/designTools/favicon-generator" },
      { name: "Font Preview Tool", path: "/tools/designTools/font-preview-tool" },
      { name: "Logo Maker", path: "/tools/designTools/logo-maker" },
      { name: "Mockup Generator", path: "/tools/designTools/mockup-generator" },
      { name: "Pattern Generator", path: "/tools/designTools/pattern-generator" },
      { name: "SVG to PNG", path: "/tools/designTools/svg-to-png" },
    ],
  },
  {
    name: "Developer Tools",
    tools: [
      { name: "Base64 Encoder", path: "/tools/developerTools/base64-encoder" },
      { name: "Color Picker", path: "/tools/developerTools/color-picker" },
      { name: "CSS Minifier", path: "/tools/developerTools/css-minifier" },
      { name: "Data Generator", path: "/tools/developerTools/data-generator" },
      { name: "Hash Generator", path: "/tools/developerTools/hash-generator" },
      { name: "HTML Minifier", path: "/tools/developerTools/html-minifier" },
      { name: "HTML Previewer", path: "/tools/developerTools/html-previewer" },
      { name: "JS Formatter", path: "/tools/developerTools/javascript-formatter" },
      { name: "JSON Formatter", path: "/tools/developerTools/json-formatter" },
      { name: "UUID Generator", path: "/tools/developerTools/uuid-generator" },
    ],
  },
  {
    name: "Fun Tools",
    tools: [
      { name: "Joke Generator", path: "/tools/funTools/joke-generator" },
      { name: "Meme Creator", path: "/tools/funTools/meme-creator" },
      { name: "Trivia Quiz", path: "/tools/funTools/trivia-quiz" },
    ],
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    tools: cat.tools.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">All-in-One Toolz</h1>
        <p className="text-gray-300 mb-8">
          Smart, fast and secure online tools — all in one place.
        </p>
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-lg text-gray-900 w-80 mb-10"
        />

        {filteredCategories.map(
          (category) =>
            category.tools.length > 0 && (
              <div key={category.name} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-blue-300">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool) => (
                    <Link
                      key={tool.path}
                      href={tool.path}
                      className="p-5 rounded-2xl bg-gray-800 hover:bg-gray-700 transition shadow-lg border border-gray-700"
                    >
                      <h3 className="text-lg font-semibold text-gray-100">
                        {tool.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        Click to use the {tool.name}.
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </main>
  );
}

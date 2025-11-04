"use client";
import { useState } from "react";
import * as XLSX from "xlsx";

export default function ExcelToCsv() {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState("");

  const handleConvert = () => {
    if (!file) return alert("Upload an Excel file first!");
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const csv = XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]);
      setCsvData(csv);
      const blob = new Blob([csv], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "converted.csv";
      link.click();
    };
    reader.readAsBinaryString(file);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">📊 Excel → CSV Converter</h1>
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={(e) => setFile(e.target.files[0])}
        className="bg-gray-900 border border-gray-700 p-3 rounded-lg mb-4"
      />
      <button
        onClick={handleConvert}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold"
      >
        Convert to CSV
      </button>
      {csvData && (
        <textarea
          readOnly
          className="mt-4 w-full max-w-xl h-40 bg-gray-900 border border-gray-700 p-2 rounded-lg text-sm"
          value={csvData}
        />
      )}
    </main>
  );
}

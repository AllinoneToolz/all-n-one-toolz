"use client";
import Link from "next/link";

export default function ToolPageTemplate({ title, description, children }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-16">
      <section className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-3 text-blue-400 drop-shadow-md">
          {title}
        </h1>
        <p className="text-gray-300 mb-8">{description}</p>

        <div className="bg-gray-800/40 border border-gray-700 p-6 rounded-2xl shadow-md">
          {children}
        </div>
      </section>
    </main>
  );
}

"use client";
import Link from "next/link";

export default function DeveloperTools() {
  const tools = [
    { name: "Base64 Encoder", link: "/tools/developerTools/base64-encoder" },
    { name: "CSS Minifier", link: "/tools/developerTools/css-minifier" },
    { name: "HTML Previewer", link: "/tools/developerTools/html-previewer" },
    // add all inside this folder
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-16">
      <section className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">Developer Tools</h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.link}
              className="bg-gray-800/40 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all p-6 rounded-2xl shadow-md text-left group"
            >
              <h2 className="text-xl font-semibold group-hover:text-blue-400 mb-2">
                {tool.name}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

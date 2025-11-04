"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">All-in-One Toolz</h1>
      <div className="flex gap-6 text-sm">
        <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
        <a href="/tools" className="hover:text-cyan-400 transition-colors">Tools</a>
        <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
      </div>
    </nav>
  );
}

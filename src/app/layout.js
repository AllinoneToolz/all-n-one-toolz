import "@fontsource-variable/inter";
import "./globals.css";
import Navbar from "../components/Navbar";
import "@fontsource-variable/inter";


export const metadata = {
  title: "All n One Toolz",
  description: "Free online utilities — converters, downloaders and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        {/* subtle glows */}
        <div className="page-glow-1" />
        <div className="page-glow-2" />

        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        <footer className="footer container-lg mx-auto mt-12">
          <div className="max-w-6xl mx-auto py-8 text-center">
            <div className="mb-3 text-muted">© {new Date().getFullYear()} All n One Toolz</div>
            <div className="text-muted">Built with ❤️ — Fast, free & secure tools</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

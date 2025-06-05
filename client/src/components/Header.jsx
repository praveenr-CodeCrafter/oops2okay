import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full border-b px-8 py-3 border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] flex justify-between items-center relative">
      <h1 className="ml-2 text-xl font-bold text-[var(--color-accent)]">Oops2Okay</h1>

      <div className="flex items-center gap-4">
        <a
          href="#how-it-works"
          className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition hidden sm:inline"
        >
          How It Works
        </a>

        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-[var(--color-border)] transition"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="sm:hidden p-2"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-bg)] border-t border-[var(--color-border)] sm:hidden z-50 shadow-md">
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-3 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition"
          >
            How It Works
          </a>
        </div>
      )}
    </header>
  );
}

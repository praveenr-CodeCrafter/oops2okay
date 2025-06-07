import { useState, useEffect } from "react";
import axios from "axios";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [menuOpen, setMenuOpen] = useState(false);
    const [stars, setStars] = useState(null);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        axios
        .get("https://api.github.com/repos/praveenr-CodeCrafter/oops2okay")
        .then((res) => setStars(res.data.stargazers_count)) 
        .catch(() => setStars(null));
    }, []);

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
            href="https://github.com/praveenr-CodeCrafter/oops2okay"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition"
        >
            <FiGithub  size={18} className="mr-1" />
            Open Source
            {stars !== null && (
                <span className="ml-1 px-2 py-0.5 rounded bg-[var(--color-panel)] border border-[var(--color-border)] text-[var(--color-accent)] font-semibold inline-flex items-center">
                    {stars} ★
                </span>
            )}
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

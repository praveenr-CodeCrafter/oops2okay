import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function GithubPopup() {
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl border bg-[var(--color-panel)] border-[var(--color-border)] animate-slide-in"
      style={{ minWidth: 270, maxWidth: 340 }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm">
        <FiGithub size={28} className="text-[var(--color-accent)]" />
      </div>
      <div className="flex-1 flex flex-col">
        <span className="font-semibold text-[var(--color-text)] text-base mb-1">
          Love this project?
        </span>
        <a
          href="https://github.com/praveenr-CodeCrafter/oops2okay"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline text-sm font-medium"
        >
          <Star size={16} className="mb-[2px]" />
          Star us on GitHub
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] text-lg transition"
        aria-label="Close"
      >
        ×
      </button>

      {/* Animation CSS */}
      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(40px) scale(0.96);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
        .animate-slide-in {
          animation: slide-in 0.5s cubic-bezier(.42,0,.58,1) both;
        }
      `}</style>
    </div>
  );
}

import { useState } from "react";

export default function ResultSection() {
  const [activeTab, setActiveTab] = useState("results");

  return (
    <section className="md:w-1/2 w-full bg-[var(--color-panel)] border border-[var(--color-border)] rounded-xl p-4">
      <div className="flex gap-4 border-b border-[var(--color-border)] mb-4">
        <button
          className={`py-2 text-sm font-medium ${
            activeTab === "results"
              ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
          }`}
          onClick={() => setActiveTab("results")}
        >
          Results
        </button>
        <button
          className={`py-2 text-sm font-medium ${
            activeTab === "history"
              ? "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
          }`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
      </div>

      {activeTab === "results" ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-sm text-[var(--color-muted)]">
          <div className="text-3xl mb-2">🔗</div>
          <p className="font-semibold mb-1">No Results Yet</p>
          <p>Paste your code and error message, then click <br />“Debug Now” to get an analysis and fix</p>
        </div>
      ) : (
        <div className="text-sm text-[var(--color-muted)]">No History Yet</div>
      )}
    </section>
  );
}

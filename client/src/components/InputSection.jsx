export default function InputSection() {
  return (
    <section className="md:w-1/2 w-full bg-[var(--color-panel)] border border-[var(--color-border)] rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Paste Your Code & Error</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Code Snippet</label>
        <textarea
          placeholder="// Paste your code here..."
          className="w-full p-3 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-sm resize-y min-h-[100px]"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Error Message</label>
        <textarea
          placeholder="Paste your error message here..."
          className="w-full p-3 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-sm resize-y min-h-[60px]"
        />
      </div>

      <button className="w-full py-2 mt-2 bg-[var(--color-accent)] hover:opacity-90 text-white rounded-md font-medium transition">
        Debug Now →
      </button>
    </section>
  );
}

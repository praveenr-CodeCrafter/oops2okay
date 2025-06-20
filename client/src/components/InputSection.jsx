import { useState } from "react";
import { X } from "lucide-react"; 
import axios from "axios";
import { saveDebugResult } from '../utils/localStorage';

export default function InputSection({ setResult }) {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const isDisabled = code.trim() === "" || error.trim() === "";
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    console.log("Backend URL:", BACKEND_URL);

    const handleDebug = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${BACKEND_URL}/debug`, {
                code,
                error
            });
            const savedEntry = saveDebugResult(res.data);
            setResult(res.data);
        } catch (err) {
            setResult({ message: "Error connecting to backend." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="md:w-1/2 w-full bg-[var(--color-panel)] border border-[var(--color-border)] rounded-xl p-4 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">Paste Your Code & Error</h2>

            <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-[var(--color-accent)]">Code Snippet</label>
                    {code.trim() !== "" && (
                    <button
                        type="button"
                        onClick={() => setCode("")}
                        className="flex items-center gap-1 text-[var(--color-muted)] text-xs hover:text-[var(--color-text)] focus:outline-none"
                        style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
                    >
                        <X size={12} className="relative top-[1px]" />
                        Clear
                    </button>
                    )}
                </div>
                <textarea
                    placeholder="// Paste your code here..."
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="w-full p-3 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-sm resize-y min-h-[100px] text-[var(--color-text)]"
                />
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-[var(--color-accent)]">
                    Error Message
                    </label>
                    {error.trim() !== "" && (
                    <button
                        type="button"
                        onClick={() => setError("")}
                        className="flex items-center gap-1 text-[var(--color-muted)] text-xs hover:text-[var(--color-text)] transition focus:outline-none"
                        style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
                    >
                        <X size={12} className="relative top-[1px]" />
                        <span>Clear</span>
                    </button>
                    )}
                </div>
                <textarea
                    placeholder="Paste your error message here..."
                    value={error}
                    onChange={e => setError(e.target.value)}
                    className="w-full p-3 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-sm resize-y min-h-[60px] text-[var(--color-text)]"
                />
            </div>  

            <button
                className={`w-full py-2 mt-2 rounded-md font-medium transition
                    ${isDisabled
                    ? "bg-[var(--color-border)] text-[var(--color-muted)] cursor-not-allowed"
                    : "bg-[var(--color-accent)] hover:opacity-90 text-white cursor-pointer"}
                `}
                disabled={isDisabled}
                onClick={handleDebug}
            >
                {loading ? "Debugging..." : "Debug Now →"}
            </button>
        </section>
    );
}

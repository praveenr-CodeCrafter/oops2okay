import { useState, useEffect } from "react";
// import { Link as LinkIcon } from "lucide-react";
import { Link as LinkIcon, Clock as ClockIcon, Copy as CopyIcon, ExternalLink, Trash2 } from "lucide-react";
import { getDebugHistory, clearDebugHistory } from '../utils/localStorage';

export default function ResultSection({ result }) {
    const [activeTab, setActiveTab] = useState("results");
    const [history, setHistory] = useState([]);
    const prompt = result?.prompt;

    useEffect(() => {
        if (activeTab === "history") {
            setHistory(getDebugHistory());
        }
    }, [activeTab]);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    const handleClearHistory = () => {
        clearDebugHistory();
        setHistory([]);
    };


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
                prompt ? (
                    <div className="space-y-6 text-sm text-[var(--color-text)]">
                        {/* Explanation Section */}
                        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-8">Analysis Results</h2>
                        <div>
                            <h4 className="font-semibold text-[var(--color-accent)] mb-2">Root Cause</h4>
                            {/* Root Cause */}
                            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded p-3 mb-3">
                                {prompt.root_cause}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[var(--color-accent)] mb-2">Explanation</h4>
                            {/* Non-Technical */}
                            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded p-3 mb-2">
                                <span className="font-medium text-[var(--color-accent)]">Non-Technical</span>
                                <p className="mt-1">{prompt.explanation.non_technical}</p>
                            </div>
                            {/* Technical */}
                            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded p-3">
                                <span className="font-medium text-[var(--color-accent)]">Technical</span>
                                <p className="mt-1">{prompt.explanation.technical}</p>
                            </div>
                        </div>

                        {/* Suggested Fix */}
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-[var(--color-accent)]">Suggested Fix</h4>
                                <button
                                    className="flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] cursor-pointer"
                                    onClick={() => handleCopy(prompt.suggested_fix.code)}
                                >
                                    <CopyIcon size={14} /> Copy Fix
                                </button>
                            </div>
                            <pre className="bg-[var(--color-bg)] border border-[var(--color-border)] p-3 rounded-md overflow-auto text-xs mb-2">
                                {prompt.suggested_fix.code}
                            </pre>
                            <div className="text-[var(--color-muted)]">{prompt.suggested_fix.explanation}</div>
                        </div>

                        {/* References */}
                        <div>
                            <h4 className="font-semibold text-[var(--color-accent)] mb-2">References</h4>
                            <ul className="space-y-2">
                                {prompt.references.map((ref, idx) => (
                                    <li key={idx} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded p-2 flex items-center justify-between">
                                        <div>
                                            <a
                                                href={ref.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[var(--color-accent)] font-medium hover:underline flex items-center"
                                            >
                                                {ref.title}
                                            </a>
                                            <div className="text-[var(--color-muted)] text-xs">{ref.description}</div>
                                        </div>
                                        <a
                                            href={ref.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-2 text-[var(--color-accent)] hover:text-[var(--color-text)]"
                                            aria-label="Open reference"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center text-sm text-[var(--color-muted)]">
                        <div className="text-3xl mb-2">
                            <LinkIcon size={32} className="mx-auto text-[var(--color-accent)]" />
                        </div>
                        <p className="font-semibold mb-1">No Results Yet</p>
                        <p>Paste your code and error message, then click <br />“Debug Now” to get an analysis and fix</p>
                    </div>
                )
            ) : (
            <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-base font-semibold text-[var(--color-text)]">Recent Debugs</h3>
                        {history.length > 0 && (
                            <button
                                onClick={handleClearHistory}
                                className="flex items-center gap-1 text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                            >
                                <Trash2 size={14} /> Clear All
                            </button>
                        )}
                    </div>
                    
                    {history.length > 0 ? (
                        <div className="space-y-3 ">
                            {history.map((entry, index) => (
                                <div key={entry.id} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded p-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-medium text-[var(--color-text)] truncate">
                                            {entry.result.prompt?.root_cause || 'Debug Result'}
                                        </h4>
                                        <span className="text-xs text-[var(--color-muted)]">
                                            {entry.date} {entry.time}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[var(--color-muted)] line-clamp-2">
                                        {entry.result.prompt?.explanation?.non_technical || 'No explanation available'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col flex-1 items-center justify-center text-center">
                            <ClockIcon size={48} className="text-[var(--color-muted)] mb-2" />
                            <p className="text-[var(--color-muted)] text-sm">No debug history yet</p>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

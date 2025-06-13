import { useState } from "react";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

export default function MainContent() {

    const [result, setResult] = useState(null);

    return (
        <main className="flex-1 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
                <InputSection setResult={setResult} />
                <ResultSection result={result} />
            </div>
        </main>
    );
}

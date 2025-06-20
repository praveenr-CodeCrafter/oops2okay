import { BugPlay } from "lucide-react";

export default function PoweredByAI() {
  return (
    <div className="flex flex-col items-center mb-6 mt-6">
      <BugPlay className="text-[var(--color-accent)] w-20 h-20 mb-1" />
      <span className="text-3xl text-[var(--color-muted)] font-medium">Powered by AI - Debug Smarter, Not Harder</span>
    </div>
  );
}

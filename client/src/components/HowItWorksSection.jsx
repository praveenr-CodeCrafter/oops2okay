import { FileText, Bug, CircleCheckBig, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <FileText className="text-[var(--color-accent)]" size={28} />,
    text: "Paste your code and error",
  },
  {
    icon: <Bug className="text-[var(--color-accent)]" size={28} />,
    text: "See the bug explained",
  },
  {
    icon: <CircleCheckBig className="text-[var(--color-accent)]" size={28} />,
    text: "Get the fix",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-10 text-[var(--color-muted)]">
        How it works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="bg-[var(--color-panel)] p-4 rounded-full border border-[var(--color-border)]">
              {step.icon}
            </div>
            <p className="text-base font-medium text-left text-[var(--color-muted)]">
              {step.text}
            </p>
            {index < steps.length - 1 && (
              <ArrowRight className="text-[var(--color-muted)] mx-2 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

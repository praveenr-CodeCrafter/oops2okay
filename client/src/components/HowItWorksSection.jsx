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
<section className="px-4 py-10 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-10 text-[var(--color-muted)]">
        How it works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {steps.map((step, index) => (
  <div
    key={index}
    className="flex flex-col md:flex-row items-center gap-2 md:gap-4 relative"
  >
    <div className="bg-[var(--color-panel)] p-4 rounded-full border border-[var(--color-border)] flex-shrink-0">
      {step.icon}
    </div>
    <p className="text-base font-medium text-[var(--color-muted)] whitespace-nowrap">
      {step.text}
    </p>
    {/* Arrow for desktop */}
    {index < steps.length - 1 && (
      <ArrowRight className="text-[var(--color-muted)] mx-2 hidden md:block" />
    )}
    {/* Arrow for mobile (vertical) */}
    {index < steps.length - 1 && (
      <ArrowRight className="text-[var(--color-muted)] my-2 md:hidden rotate-90" />
    )}
  </div>
))}

      </div>
    </section>
  );
}

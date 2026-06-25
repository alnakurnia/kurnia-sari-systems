import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study — Manufacturing SME Operational Visibility | Alna Kurnia Sari" },
      { name: "description", content: "How a manufacturing SME improved operational visibility and productivity with a simple digital reporting system — a practical case study." },
      { property: "og:title", content: "Case Study — Manufacturing SME Operational Visibility" },
      { property: "og:description", content: "Structured production data became the foundation for faster decisions, continuous improvement, and operational cost reduction." },
    ],
  }),
  component: CaseStudyPage,
});

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{children}</span>;
}

function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur print:hidden">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 md:px-10">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-foreground text-[11px] font-bold tracking-tight text-background">AK</span>
            <span className="truncate text-sm font-semibold tracking-tight">Alna Kurnia Sari</span>
            <span className="hidden truncate text-xs text-muted-foreground sm:inline">— Quality & Productivity Consultant</span>
          </Link>
          <nav className="flex items-center gap-1 md:gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            {/* Header */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Mark>— Case Study</Mark>
                <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  How a Manufacturing SME Improved Operational Visibility and Productivity with a Simple Digital Reporting System
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
                  A practical example of how structured production data became the foundation for faster decisions, continuous improvement, and operational cost reduction.
                </p>
              </div>
              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="border border-border bg-background p-6">
                  <Mark>Project Summary</Mark>
                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                    {[
                      ["Industry", "Rubber Patch & PVC Logo"],
                      ["Production Lines", "24"],
                      ["Implementation", "1 Month"],
                      ["Approach", "Hybrid Consulting"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{k}</dt>
                        <dd className="mt-1 font-semibold tracking-tight text-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>
            </div>

            {/* Challenge */}
            <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Mark>01 — Challenge</Mark>
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  The factory had data. But it was not driving improvement.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                  Daily targets, supervisor reports, and reject records existed — but most information stayed manual and never became insight.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                  {[
                    ["Manual Reporting", "Production and reject information recorded manually on paper."],
                    ["Low Visibility", "Performance differences between lines were hard to see."],
                    ["Unstable Productivity", "Output fluctuations were difficult to explain or address."],
                    ["Reactive Decisions", "Issues were caught after the fact, not prevented."],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-background p-6">
                      <div className="text-sm font-semibold tracking-tight text-foreground">{k}</div>
                      <div className="mt-2 text-sm leading-relaxed text-foreground/65">{v}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-8 border-l-2 border-primary bg-background p-6 text-lg font-medium leading-snug tracking-tight text-foreground">
                  "The problem was not lack of data. The problem was lack of visibility."
                </blockquote>
              </div>
            </div>

            {/* Root Cause + Solution */}
            <div className="mt-20 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
              <div className="bg-background p-8 md:p-10">
                <Mark>02 — Root Cause</Mark>
                <h3 className="mt-4 text-xl font-bold tracking-tight md:text-2xl">What we found on the floor</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  Production data was used only for manual order tracking. Reject data was on paper, never consolidated. Management could not see output by product, reject trends by line, hidden losses, or underperforming lines.
                </p>
                <ol className="mt-6 space-y-2 font-mono text-xs tracking-widest text-foreground/70 uppercase">
                  <li>Data exists</li>
                  <li className="text-foreground/40">↓</li>
                  <li>Data not analyzed</li>
                  <li className="text-foreground/40">↓</li>
                  <li>Limited visibility</li>
                  <li className="text-foreground/40">↓</li>
                  <li className="text-primary">Reactive improvement</li>
                </ol>
              </div>
              <div className="bg-background p-8 md:p-10">
                <Mark>03 — What We Built</Mark>
                <h3 className="mt-4 text-xl font-bold tracking-tight md:text-2xl">A simple digital reporting system</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  No expensive software. We used tools the business already had — designed around the way operators actually work.
                </p>
                <ol className="mt-6 space-y-2 font-mono text-xs tracking-widest text-foreground/70 uppercase">
                  <li>Operator</li>
                  <li className="text-foreground/40">↓</li>
                  <li>Google Form</li>
                  <li className="text-foreground/40">↓</li>
                  <li>Spreadsheet Dashboard</li>
                  <li className="text-foreground/40">↓</li>
                  <li>Management Review</li>
                  <li className="text-foreground/40">↓</li>
                  <li className="text-primary">Improvement Actions</li>
                </ol>
              </div>
            </div>

            {/* Results */}
            <div className="mt-20">
              <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <Mark>04 — Results</Mark>
                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    What changed
                  </h3>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ["Operational Visibility", "Performance visible across every production line."],
                  ["Data-Driven Decisions", "Discussions shifted from assumptions to facts."],
                  ["Faster Problem ID", "Performance gaps surfaced earlier, not after the month."],
                  ["Better Prioritization", "Resources focused on the highest-impact opportunities."],
                  ["CI Foundation", "Structured reporting enabled systematic CI reviews."],
                ].map(([k, v], i) => (
                  <div key={k} className="bg-background p-6">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <div className="mt-4 text-sm font-semibold tracking-tight text-foreground">{k}</div>
                    <div className="mt-2 text-sm leading-relaxed text-foreground/65">{v}</div>
                  </div>
                ))}
              </div>
              <blockquote className="mt-8 border-l-2 border-primary bg-background p-6 text-lg font-medium leading-snug tracking-tight text-foreground">
                "For the first time, management could clearly see which production lines were underperforming — and where the improvement opportunities were."
              </blockquote>
            </div>

            {/* Key Learning + Self-check */}
            <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Mark>05 — Key Learning</Mark>
                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Most factories don't need more data. They need visible data.
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                  Many manufacturing SMEs already have enough data to improve productivity. The real challenge is making that data visible, structured, and connected to decision-making. When operational data becomes visible, continuous improvement becomes easier, faster, and more systematic.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="border border-border bg-background p-8">
                  <Mark>Could this be happening in your factory?</Mark>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Production reports are collected but rarely analyzed.",
                      "Reject records are stored but not trended over time.",
                      "Improvement discussions rely on opinions, not data.",
                      "It's hard to identify which lines are underperforming.",
                    ].map((q) => (
                      <li key={q} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm leading-relaxed text-foreground/70">
                    If you answered <span className="font-semibold text-foreground">yes</span> to any of these, there are likely hidden productivity and quality opportunities inside your operations.
                  </p>
                </div>
              </div>
            </div>

            {/* In-section CTA */}
            <div className="mt-16 border-t border-border pt-12">
              <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.02em] md:text-3xl">
                    Looking for better productivity and operational visibility?
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
                    Many factories already have improvement opportunities hidden inside daily operations. Often the fastest gains come from making existing data visible and actionable. Let's discuss your productivity, quality, or operational challenges — and explore practical next steps for your factory.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <a
                    href="https://calendly.com/alna_kurnia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary px-6 py-3.5 text-sm font-medium tracking-tight text-primary-foreground transition-colors hover:bg-foreground"
                  >
                    Book a Strategy Call →
                  </a>
                </div>
              </div>
            </div>

            {/* Back to home */}
            <div className="mt-16 border-t border-border pt-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 text-sm font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

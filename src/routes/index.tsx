import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import waQr from "@/assets/wa-qr.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alna Kurnia Sari — Quality & Productivity Consultant" },
      { name: "description", content: "I help manufacturing companies improve quality, reduce waste, and build operational systems that scale — QMS, continuous improvement, and data analytics." },
      { property: "og:title", content: "Alna Kurnia Sari — Quality & Productivity Consultant" },
      { property: "og:description", content: "Most productivity problems are management system problems. I redesign the system so quality, productivity, and profitability improve together." },
    ],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Quality Management Systems",
    body: "Build the governance backbone that makes quality predictable — not heroic.",
    focus: ["ISO readiness & certification", "SOP development", "Audit preparation", "Governance & risk frameworks", "Non-conformance control"],
    outcomes: ["Fewer non-conformities", "Improved process reliability", "Stronger customer trust"],
  },
  {
    n: "02",
    title: "Continuous Improvement & Operational Excellence",
    body: "Install the daily habits and tools that compound into operational excellence.",
    focus: ["Lean principles & 5S", "TPM & PDCA cycles", "Root cause analysis", "Kaizen & value stream mapping", "Problem-solving capability"],
    outcomes: ["Higher productivity", "Lower waste", "Stronger problem-solving culture"],
  },
  {
    n: "03",
    title: "Data Analytics for Productivity",
    body: "Turn scattered operational data into the signals leaders act on.",
    focus: ["Automated dashboards", "KPI framework design", "Process performance tracking", "Predictive trend analysis", "Spreadsheet analytics"],
    outcomes: ["Better, faster decisions", "Earlier issue detection", "Real-time operational visibility"],
  },
];

const process = [
  { n: "01", title: "Assess", items: ["Audit current systems", "Review operational data", "Identify bottlenecks"] },
  { n: "02", title: "Diagnose", items: ["Root cause analysis", "Waste & flow mapping", "Process review"] },
  { n: "03", title: "Design", items: ["Improvement roadmap", "KPI framework", "System redesign"] },
  { n: "04", title: "Implement", items: ["Team training", "SOP rollout", "Dashboard deployment"] },
  { n: "05", title: "Sustain", items: ["Continuous monitoring", "Performance reviews", "Improvement culture"] },
];

const insights = [
  { tag: "Operations", title: "How Continuous Improvement Becomes Daily Work", read: "5 min read", slug: "why-productivity-projects-fail" },
  { tag: "Quality", title: "The Hidden Cost of Poor Quality: Why Defects Hurt Profit More Than You Think", read: "4 min read", slug: "hidden-cost-of-poor-quality" },
  { tag: "Analytics", title: "KPI Dashboards That Actually Drive Action", read: "4 min read", slug: "kpi-dashboards-that-drive-action" },
];


const projects = [
  {
    title: "Quality Management System for Consumer Goods Expansion",
    desc: "Built and implemented a Quality Management System for a multinational consumer goods company expanding into white market channels across Asia Pacific.",
    deliverables: [
      "Quality risk assessment for international sourcing and suppliers",
      "Quality compliance management across 40 distributors in Asia, Australia and Pacific Islands",
      "Customer quality feedback portal to accelerate issue resolution and improve customer satisfaction",
    ],
  },
  {
    title: "GMP & Product Launch Readiness",
    desc: "Prepared a contract manufacturing facility for successful launch of a new home care liquid product with strong quality and compliance controls.",
    deliverables: [
      "Manufacturing readiness and GMP gap assessment",
      "Cross-contamination prevention through segregation and changeover controls",
      "Cleaning and sanitation validation program",
      "Laboratory and testing capability enhancement for product quality assurance",
    ],
  },
  {
    title: "Operational Excellence for Rubber Logo Manufacturer",
    desc: "Improved operational performance for a rubber logo manufacturer supplying global sportswear brands.",
    deliverables: [
      "Manufacturing SOP development and standardization",
      "Workforce training system and competency framework",
      "Automated KPI dashboard for real-time performance monitoring",
    ],
  },
  {
    title: "Business Analytics & Growth Strategy (PaDi UMKM)",
    desc: "Partnered with Telkom Indonesia to improve marketplace performance and support SME growth on PaDi UMKM.",
    deliverables: [
      "Business performance dashboard using Google Analytics and marketplace data",
      "Conversion rate improvement analysis",
      "Buyer and seller segmentation strategy",
    ],
  },
  {
    title: "Global Quality Management System Optimization",
    desc: "Streamlined Quality Management System documentation for a consumer goods manufacturer operating multiple production sites.",
    deliverables: [
      "QMS document restructuring with clear ownership and governance",
      "Faster document review and approval workflows",
      "Integration of quality and product safety documentation from 7 manufacturing sites into a unified global QMS",
    ],
  },
  {
    title: "Quality, Food Safety & Regulatory Compliance",
    desc: "Strengthened compliance systems for a consumer goods manufacturer to maintain certifications and audit readiness.",
    deliverables: [
      "ISO 9001:2015 Quality Management System",
      "FSSC 22000 v6.0 Food Safety Management System",
      "Risk Management Program (PMR)",
      "CPKB Compliance (Cosmetics GMP)",
    ],
  },
];

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{children}</span>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur print:hidden">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-foreground text-[11px] font-bold tracking-tight text-background">AK</span>
            <span className="truncate text-sm font-semibold tracking-tight">Alna Kurnia Sari</span>
            <span className="hidden truncate text-xs text-muted-foreground sm:inline">— Quality & Productivity Consultant</span>
          </a>
          <nav className="flex items-center gap-1 md:gap-6">
            <a href="#services" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">Services</a>
            <a href="#process" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">Process</a>
            <a href="#case-study" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">Case Study</a>
            <a href="#experience" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">Experience</a>
            <a href="#purpose" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">Purpose</a>
            <a href="#insights" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">Insights</a>
            <a href="#about" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">About</a>
            <a href="#contact" className="ml-2 inline-flex shrink-0 items-center border border-foreground bg-foreground px-4 py-2 text-xs font-medium tracking-tight text-background transition-colors hover:bg-primary hover:border-primary">
              Book Strategy Call →
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ABOUT */}
        <section id="about" className="border-b border-border print:break-inside-avoid">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 print:grid-cols-12 print:gap-8 print:py-6 md:px-10 md:py-28 lg:grid-cols-12">
            <div className="print:col-span-4 lg:col-span-4">
              <Mark>— About</Mark>
              <img
                src={portrait}
                alt="Portrait of Alna Kurnia Sari"
                width={1024}
                height={1280}
                className="mt-6 block aspect-[4/5] w-full object-cover print:mt-3 print:w-[180px] print:max-w-none"
              />
            </div>
            <div className="print:col-span-8 print:col-start-5 lg:col-span-7 lg:col-start-6">
              <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                From factory floor to strategic improvement partner.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/75">
                <p>
                  I started on the production floor — auditing processes, chasing defects, and learning that operational problems almost always trace back to system design, not effort.
                </p>
                <p>
                  Today I help manufacturing leaders use quality systems, continuous improvement, and data-driven decisions to produce measurable business outcomes. Quality, in my work, is a growth engine.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  ["Quality builds trust.", "Reliable processes create reliable revenue."],
                  ["Data drives decisions.", "Opinions defer to what the numbers show."],
                  ["Improvement is a journey.", "Sustained gains beat one-time wins."],
                  ["Prevention beats firefighting.", "Design out the problem, don't manage it."],
                ].map(([k, v]) => (
                  <div key={k} className="bg-background p-6">
                    <div className="text-sm font-semibold tracking-tight text-foreground">{k}</div>
                    <div className="mt-1.5 text-sm leading-relaxed text-foreground/60">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section id="experience" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Mark>— Professional Experience</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  15+ Years in Quality & Operational Excellence
                </h2>
                <p className="mt-6 text-base leading-relaxed text-foreground/70">
                  Quality leadership across multinational manufacturing organizations, from the production floor to regional and global systems.
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
              <article className="bg-background p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">2022 — 2024</span>
                  <span className="font-mono text-xs text-primary">01</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight">Danone Specialized Nutrition</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  Led Quality, Food Safety, Compliance, and Continuous Improvement initiatives for specialized nutrition manufacturing operations.
                </p>
              </article>
              <article className="bg-background p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">2008 — 2022</span>
                  <span className="font-mono text-xs text-primary">02</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight">Unilever</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  Held Quality leadership roles across Factory, Regional, and Global organizations supporting manufacturing, logistics, and market operations across Asia Pacific and international markets.
                </p>
              </article>
            </div>

            <div className="mt-16 border-t border-border pt-12">
              <Mark>Career Highlights</Mark>
              <div className="mt-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
                {[
                  ["8", "Factories managed, plus 20+ contract manufacturers"],
                  ["30%", "Reduction in supplier quality defects"],
                  ["58%", "Reduction in Cost of Poor Quality"],
                ].map(([n, t]) => (
                  <div key={t} className="bg-background p-6 md:p-8">
                    <div className="text-4xl font-black tracking-tight text-primary md:text-5xl">{n}</div>
                    <div className="mt-3 text-sm leading-relaxed text-foreground/70">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PURPOSE, VISION & MISSION */}
        <section id="purpose" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Mark>— Why I Do This</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  My Purpose, Vision and Mission
                </h2>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
              <article className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary">01</span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">Purpose</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  To empower organizations to enhance their quality systems, improve operational productivity, and unlock the power of data to drive sustainable growth and customer trust.
                </p>
              </article>
              <article className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary">02</span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">Vision</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  To be a trusted partner for businesses seeking excellence in quality and productivity, recognized for transforming challenges into impactful results through innovative solutions.
                </p>
              </article>
              <article className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary">03</span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">Mission</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Help organizations embed quality into their culture and systems.</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Drive continuous improvement that boosts efficiency and customer satisfaction.</span>
                  </li>
                  <li className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Enable data-informed decisions for real-time and long-term performance enhancements.</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Mark>— Services</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  My Focus Area
                </h2>
              </div>
              <p className="self-end text-base leading-relaxed text-foreground/70 lg:col-span-5 lg:col-start-8">
                Each engagement combines governance, improvement, and analytics — because durable performance requires all three working as one system, not three disconnected initiatives.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.n} className="flex flex-col bg-background p-8 md:p-10">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-medium text-primary">{s.n}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{s.body}</p>

                  <div className="mt-8">
                    <Mark>Focus</Mark>
                    <ul className="mt-3 space-y-2">
                      {s.focus.map((f) => (
                        <li key={f} className="flex gap-3 text-sm text-foreground/80">
                          <span className="mt-2 h-px w-3 shrink-0 bg-foreground/40" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <Mark>Outcomes</Mark>
                    <ul className="mt-3 space-y-2">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-sm font-medium text-foreground">
                          <span className="text-primary">→</span> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Mark>— Method</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  How we improve operations.
                </h2>
              </div>
              <p className="text-sm text-foreground/60 lg:col-span-4 lg:col-start-9">
                A five-stage method that moves you from diagnosis to a self-sustaining improvement culture.
              </p>
            </div>

            <ol className="mt-14 grid grid-cols-1 gap-px bg-border md:grid-cols-5">
              {process.map((p, i) => (
                <li key={p.n} className="relative bg-background p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium text-primary">{p.n}</span>
                    {i < process.length - 1 && (
                      <span className="hidden font-mono text-xs text-foreground/30 md:inline">→</span>
                    )}
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight">{p.title}</h3>
                  <ul className="mt-5 space-y-2">
                    {p.items.map((it) => (
                      <li key={it} className="text-sm leading-snug text-foreground/70">{it}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CASE STUDY (preview link) */}
        <section id="case-study" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Mark>— Case Study</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  Proof, not promises.
                </h2>
              </div>
              <p className="text-sm text-foreground/60 lg:col-span-4 lg:col-start-9">
                A worked example showing how visibility — not more data — unlocks productivity.
              </p>
            </div>

            <div className="mt-14">
              <Link
                to="/case-study"
                className="group grid grid-cols-1 gap-px bg-border lg:grid-cols-12"
              >
                <div className="bg-background p-8 md:p-10 lg:col-span-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest text-primary uppercase">Manufacturing SME</span>
                    <span className="font-mono text-[11px] text-foreground/40">01</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                    How a Manufacturing SME Improved Operational Visibility and Productivity with a Simple Digital Reporting System
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/70">
                    A practical example of how structured production data became the foundation for faster decisions, continuous improvement, and operational cost reduction.
                  </p>
                  <div className="mt-10 flex items-center gap-3 border-t border-border pt-5">
                    <span className="text-sm font-medium tracking-tight text-primary">Read the full case study</span>
                    <span className="text-sm text-foreground/40 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
                <div className="bg-background p-8 md:p-10 lg:col-span-4">
                  <Mark>Project Summary</Mark>
                  <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 text-sm">
                    {[
                      ["Industry", "Rubber & PVC"],
                      ["Production Lines", "24"],
                      ["Implementation", "1 Month"],
                      ["Approach", "Hybrid"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{k}</dt>
                        <dd className="mt-1 font-semibold tracking-tight text-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section id="insights" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Mark>— Insights</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  Insights for Manufacturing Leaders
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70">
                  Practical ideas to improve productivity, reduce defects, and build better factory systems.
                </p>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
              {insights.map((a, i) => (
                <Link key={a.title} to="/insights/$slug" params={{ slug: a.slug }} className="group flex flex-col justify-between bg-background p-6 transition-colors hover:bg-secondary/60 md:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] tracking-widest text-primary uppercase">{a.tag}</span>
                      <span className="font-mono text-[11px] text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-xl">
                      {a.title}
                    </h3>
                  </div>
                  <div className="mt-10 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-foreground/60">{a.read}</span>
                    <span className="text-sm text-primary transition-transform group-hover:translate-x-1">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED PROJECT EXPERIENCE */}
        <section id="portfolio" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Mark>— Portfolio</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  Selected Project Experience
                </h2>
              </div>
              <p className="self-end text-base leading-relaxed text-foreground/70 lg:col-span-5 lg:col-start-8">
                A track record of building resilient quality management systems, scaling operational performance, and driving growth strategy.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className="flex flex-col justify-between bg-background p-8 md:p-10 transition-colors duration-300 hover:bg-secondary/10 col-span-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                        Project Experience
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-border pt-6">
                    <Mark>Key Deliverables</Mark>
                    <ul className="mt-4 space-y-3">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex gap-3 text-sm leading-snug text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Mark>— Let's Talk</Mark>
                <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-7xl">
                  Better systems <br /><span className="text-primary">create better results.</span>
                </h2>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  If defects, delays, waste, or inconsistent performance are slowing your business down, let's identify the system behind the problem — and design one that scales.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3 print:hidden">
                  <a
                    href="https://calendly.com/alna_kurnia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary px-6 py-3.5 text-sm font-medium tracking-tight text-primary-foreground transition-colors hover:bg-foreground"
                  >
                    Schedule a Strategy Call →
                  </a>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center border border-foreground/20 px-6 py-3.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:border-foreground cursor-pointer"
                  >
                    Download Capability Profile
                  </button>
                </div>
              </div>
              <aside className="lg:col-span-4">
                <div className="border-l border-primary pl-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <Mark>Contact me:</Mark>
                      <a href="mailto:alna_kurnia@yahoo.co.id" className="block font-medium text-foreground hover:text-primary mt-1.5">alna_kurnia@yahoo.co.id</a>
                    </div>
                    <div>
                      <a href="tel:+628119226656" className="block text-foreground/70 hover:text-primary">Contact Number: +628119226656</a>
                      <a
                        href="https://wa.me/628119226656"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-28 mt-2 transition-transform duration-300 hover:scale-105"
                        title="Scan or click to WhatsApp me"
                      >
                        <img
                          src={waQr}
                          alt="WhatsApp QR Code"
                          width={112}
                          height={112}
                          className="aspect-square border border-border p-2 bg-white object-contain"
                        />
                      </a>
                    </div>
                    <a href="https://www.linkedin.com/in/alna-kurnia-sari/" target="_blank" rel="noopener noreferrer" className="block text-foreground/70 hover:text-primary">LinkedIn Profile</a>
                  </div>
                  <div className="mt-8 text-xs leading-relaxed text-foreground/60">
                    Typical engagements run 8–24 weeks. Strategy calls are 30 minutes and free of obligation.
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-background print:hidden">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 py-10 md:grid-cols-[1fr_auto] md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center bg-foreground text-[10px] font-bold text-background">AK</span>
            <span className="truncate text-sm font-semibold">Alna Kurnia Sari</span>
            <span className="hidden truncate text-xs text-muted-foreground sm:inline">— Quality & Productivity Consultant</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/60">
            <a href="https://www.linkedin.com/in/alna-kurnia-sari/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="mailto:alna_kurnia@yahoo.co.id" className="hover:text-primary">Email</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
            <span className="text-foreground/40">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

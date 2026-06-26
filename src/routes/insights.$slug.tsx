import { createFileRoute, Link, notFound } from "@tanstack/react-router";

type Section =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

type Article = {
  slug: string;
  tag: string;
  read: string;
  title: string;
  hero: string[];
  sections: Section[];
};

const articles: Article[] = [
  {
    slug: "why-productivity-projects-fail",
    tag: "Operations",
    read: "5 min read",
    title: "The Reason Most Productivity Improvement Projects Fail",
    hero: ["Everyone wants higher productivity.", "Few factories improve it for long."],
    sections: [
      { type: "h", text: "Introduction" },
      { type: "p", text: "Many SME factories start improvement projects with enthusiasm." },
      { type: "p", text: "A few months later, everything goes back to normal." },
      { type: "p", text: "The problem isn't effort. It's the system." },
      { type: "h", text: "Common Reasons" },
      {
        type: "list",
        items: [
          "Problems are never measured.",
          "Root causes stay unknown.",
          "Actions are not standardized.",
          "Teams stop following new ways of working.",
          "Leaders stop reviewing progress.",
        ],
      },
      { type: "h", text: "What Good Factories Do" },
      { type: "p", text: "Instead of chasing quick wins, they:" },
      {
        type: "list",
        items: [
          "Solve one problem at a time.",
          "Measure results.",
          "Update SOPs.",
          "Train operators.",
          "Review performance every day.",
        ],
      },
      { type: "p", text: "Small improvements become daily habits." },
      { type: "h", text: "Key Takeaway" },
      { type: "quote", text: "Productivity improves when systems improve — not when people simply work harder." },
    ],
  },
  {
    slug: "hidden-cost-of-poor-quality",
    tag: "Quality",
    read: "4 min read",
    title: "The Hidden Cost of Poor Quality",
    hero: ["Poor quality costs far more than rejected products.", "Most factories only see the visible losses."],
    sections: [
      { type: "h", text: "Introduction" },
      { type: "p", text: "A customer complaint is expensive." },
      { type: "p", text: "But many hidden costs happen long before that." },
      { type: "h", text: "Hidden Costs" },
      {
        type: "list",
        items: [
          "Rework",
          "Production delays",
          "Extra inspections",
          "Material waste",
          "Machine downtime",
          "Missed delivery",
          "Lost customer trust",
        ],
      },
      { type: "p", text: "Every repeated defect quietly reduces profit." },
      { type: "h", text: "Ask Yourself" },
      { type: "p", text: "How much time does your team spend fixing yesterday's problems?" },
      { type: "p", text: "That time could be producing more products." },
      { type: "h", text: "Key Takeaway" },
      { type: "quote", text: "Good quality reduces cost. Poor quality creates hidden waste every day." },
    ],
  },
  {
    slug: "kpi-dashboards-that-drive-action",
    tag: "Analytics",
    read: "4 min read",
    title: "KPI Dashboards That Actually Drive Action",
    hero: ["Many factories collect data.", "Very few use it."],
    sections: [
      { type: "h", text: "Introduction" },
      { type: "p", text: "Daily reports don't improve productivity. Good decisions do." },
      { type: "p", text: "The purpose of a dashboard isn't reporting. It's helping leaders act faster." },
      { type: "h", text: "A Useful Dashboard Shows" },
      {
        type: "list",
        items: [
          "Output vs Target",
          "Reject Rate",
          "Downtime",
          "OEE",
          "Customer Complaints",
          "Rework",
          "On-Time Delivery",
        ],
      },
      { type: "p", text: "The dashboard should answer one question:" },
      { type: "quote", text: "What needs attention today?" },
      { type: "h", text: "Keep It Simple" },
      { type: "p", text: "Avoid dashboards with dozens of charts. Focus on the few KPIs that drive action." },
      { type: "h", text: "Key Takeaway" },
      { type: "quote", text: "Visibility creates accountability. Accountability creates improvement." },
    ],
  },
  {
    slug: "factory-keeps-solving-same-problem",
    tag: "Culture",
    read: "5 min read",
    title: "The Reason Your Factory Keeps Solving the Same Problem",
    hero: ["Continuous Improvement is not a monthly workshop.", "It is daily management."],
    sections: [
      { type: "h", text: "Introduction" },
      { type: "p", text: "Many companies organize Kaizen events." },
      { type: "p", text: "After a few weeks, improvements disappear." },
      { type: "p", text: "Why? Because improvement was never built into daily work." },
      { type: "h", text: "Continuous Improvement Means" },
      {
        type: "list",
        items: [
          "Daily problem solving",
          "Standard work",
          "Visual management",
          "KPI review",
          "Root cause analysis",
          "PDCA",
          "Regular coaching",
        ],
      },
      { type: "p", text: "Improvement becomes part of the routine — not a special event." },
      { type: "h", text: "Leadership Matters" },
      { type: "p", text: "The best ideas often come from operators." },
      { type: "p", text: "Leaders create the environment where those ideas are used." },
      { type: "h", text: "Key Takeaway" },
      { type: "quote", text: "Continuous Improvement is a management system. Not an event." },
    ],
  },
];

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} | Alna Kurnia Sari` : "Insight | Alna Kurnia Sari";
    const description = a ? a.hero.join(" ") : "Insights for manufacturing leaders.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-3xl font-black tracking-tight">Article not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary hover:underline">← Back to Home</Link>
    </div>
  ),
  component: ArticlePage,
});

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{children}</span>;
}

function ArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
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
              hash="insights"
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Mark>— {article.tag} · {article.read}</Mark>
                <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {article.title}
                </h1>
                <div className="mt-8 space-y-2 border-l-2 border-primary pl-6">
                  {article.hero.map((line) => (
                    <p key={line} className="text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <article className="lg:col-span-8 lg:col-start-3">
                <div className="space-y-6">
                  {article.sections.map((s, i) => {
                    if (s.type === "h") {
                      return (
                        <h2 key={i} className="mt-6 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                          {s.text}
                        </h2>
                      );
                    }
                    if (s.type === "p") {
                      return (
                        <p key={i} className="text-base leading-relaxed text-foreground/80">
                          {s.text}
                        </p>
                      );
                    }
                    if (s.type === "list") {
                      return (
                        <ul key={i} className="space-y-3">
                          {s.items.map((item) => (
                            <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/80">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <blockquote key={i} className="border-l-2 border-primary bg-secondary/40 p-6 text-lg font-medium leading-snug tracking-tight text-foreground">
                        {s.text}
                      </blockquote>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-16 border-t border-border pt-10">
                  <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                      <Mark>— Next step</Mark>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                        Want to apply these ideas in your factory?
                      </h3>
                    </div>
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

                <div className="mt-12 border-t border-border pt-8">
                  <Link
                    to="/"
                    hash="insights"
                    className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 text-sm font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
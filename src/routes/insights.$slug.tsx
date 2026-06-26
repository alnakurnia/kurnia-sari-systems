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
    title: "The Hidden Cost of Poor Quality: Why Defects Hurt Profit More Than You Think",
    hero: [
      "Poor quality is rarely just a quality problem.",
      "It is often a profitability problem disguised as a production issue.",
    ],
    sections: [
      
      { type: "h", text: "Every Defect Costs More Than You Think" },
      { type: "p", text: "A rejected product is easy to see." },
      { type: "p", text: "The real cost is everything that happens because of that defect." },
      {
        type: "list",
        items: [
          "A food manufacturer delays shipment while waiting for replacement stock.",
          "A home care producer schedules overtime to recover lost output.",
          "A contract manufacturer performs 100% additional inspection before delivery.",
          "A personal care factory spends the morning sorting finished goods instead of running the next production order.",
        ],
      },
      { type: "quote", text: "The defect may be gone, but the business continues paying for it." },
      { type: "h", text: "What This Means for Your P&L" },
      { type: "p", text: "Most factories measure scrap and customer complaints." },
      { type: "p", text: "Few measure the business impact." },
      { type: "p", text: "Poor quality often creates costs such as:" },
      {
        type: "list",
        items: [
          "Rework and extra labor",
          "Production downtime",
          "Material waste",
          "Delayed deliveries",
          "Emergency freight",
          "Additional inspections",
          "Lost production capacity",
          "Customer claims and damaged trust",
        ],
      },
      { type: "p", text: "These costs rarely appear under one account. They are scattered across operations, making the true financial impact easy to underestimate." },
      { type: "h", text: "Executive Perspective" },
      { type: "quote", text: "Every recurring defect consumes capacity that could have been used to produce products, serve customers, or grow revenue. Quality is not only about compliance. It is about protecting profit." },
      { type: "h", text: "What I Look For During a Factory Assessment" },
      { type: "p", text: "When I walk through a factory, I rarely start by asking about reject rates." },
      { type: "p", text: "Instead, I ask questions such as:" },
      {
        type: "list",
        items: [
          "Which quality issue keeps coming back every month?",
          "How many production hours were lost because of quality last week?",
          "Where do supervisors spend most of their time?",
          "Which customer complaint would surprise no one if it happened again?",
          "Which problem has already been \"fixed\" more than once?",
        ],
      },
      { type: "p", text: "The answers often reveal that recurring problems are accepted as normal operations instead of opportunities for improvement." },
      { type: "h", text: "A Common Factory Scenario" },
      { type: "p", text: "One manufacturer reported only a 2% reject rate, which looked acceptable on paper." },
      { type: "p", text: "However, every week the team stopped production to sort finished goods before shipment. Operators worked overtime to recover lost output, and supervisors spent hours coordinating rework." },
      { type: "p", text: "The reject rate was low." },
      { type: "p", text: "The cost of poor quality was not." },
      { type: "p", text: "The biggest loss was hidden in lost productivity, not in scrap." },
      { type: "h", text: "Where Better Factories Focus" },
      { type: "p", text: "High-performing factories do not simply inspect quality at the end of production." },
      { type: "p", text: "They make problems visible earlier." },
      { type: "p", text: "They measure the operational impact of quality issues, investigate recurring failures, and strengthen the process instead of relying on additional inspection." },
      { type: "p", text: "Their goal is simple: prevent defects instead of managing them." },
      { type: "p", text: "That shift improves quality, productivity, delivery performance, and profitability at the same time." },
      { type: "h", text: "Ask Yourself" },
      { type: "p", text: "If the same quality problems appear every month, the issue is probably not your people." },
      { type: "p", text: "It is your operating system." },
      
    ],
  },
  {
    slug: "kpi-dashboards-that-drive-action",
    tag: "Analytics",
    read: "4 min read",
    title: "KPI Dashboards That Actually Drive Action",
    hero: [
      "A dashboard should not tell you what happened yesterday.",
      "It should help your team decide what to do today.",
    ],
    sections: [
      { type: "h", text: "When Reports Replace Decisions" },
      { type: "p", text: "Many factories produce excellent reports." },
      {
        type: "list",
        items: [
          "Production output",
          "Reject rate",
          "Downtime",
          "Customer complaints",
        ],
      },
      { type: "p", text: "Every KPI is available." },
      { type: "p", text: "Yet supervisors still spend their day reacting to unexpected problems." },
      { type: "p", text: "The issue is rarely the data." },
      { type: "p", text: "It is how the data is used." },
      { type: "h", text: "What This Means for Your Business" },
      { type: "p", text: "A dashboard that only reports performance creates little business value." },
      { type: "p", text: "Delayed decisions often result in:" },
      {
        type: "list",
        items: [
          "Longer production interruptions",
          "More overtime",
          "Missed delivery targets",
          "Higher operating costs",
          "Slow response to quality issues",
          "Reduced accountability",
        ],
      },
      { type: "h", text: "Executive Perspective" },
      { type: "quote", text: "Factories improve when data changes behaviour, not when it simply fills management reports." },
      { type: "h", text: "What I Look For on the Shop Floor Dashboard" },
      { type: "p", text: "When reviewing a factory dashboard, I rarely ask," },
      { type: "quote", text: "How many KPIs do you track?" },
      { type: "p", text: "Instead, I ask:" },
      {
        type: "list",
        items: [
          "Which KPI triggered action this morning?",
          "Which number worries the production manager most?",
          "Which trend has been ignored for weeks?",
          "Can supervisors explain yesterday's biggest production loss?",
          "Does every KPI have a clear owner?",
        ],
      },
      { type: "p", text: "Many dashboards answer management's questions." },
      { type: "p", text: "The best dashboards drive operational decisions." },
      { type: "h", text: "A Common Factory Scenario" },
      { type: "p", text: "One food manufacturer displayed more than ten KPIs every month." },
      { type: "p", text: "The reports looked professional." },
      { type: "p", text: "However, supervisors only reviewed them during monthly meetings." },
      { type: "p", text: "By the time quality or productivity problems appeared on the dashboard, the factory had already absorbed the cost." },
      { type: "p", text: "The dashboard measured performance." },
      { type: "p", text: "It did not improve performance." },
      { type: "h", text: "Where Better Factories Focus" },
      { type: "p", text: "High-performing factories use fewer KPIs, reviewed more frequently." },
      { type: "p", text: "They focus on indicators that trigger immediate action, clarify ownership, and support daily production decisions." },
      { type: "p", text: "Simple dashboards used consistently outperform complex dashboards that nobody acts upon." },
      { type: "h", text: "Ask Yourself" },
      { type: "p", text: "If one KPI disappeared from your dashboard tomorrow, would anyone change their decisions?" },
      { type: "p", text: "If the answer is no, the KPI may be measuring activity instead of driving improvement." },
    ],
  },
  {
    slug: "factory-keeps-solving-same-problem",
    tag: "Culture",
    read: "5 min read",
    title: "The Reason Your Factory Keeps Solving the Same Problem",
    hero: [
      "Recurring problems are rarely caused by people.",
      "They are usually caused by systems that allow the same issues to return.",
    ],
    sections: [
      { type: "h", text: "The Same Fire Keeps Coming Back" },
      { type: "p", text: "The customer complaint is closed." },
      { type: "p", text: "Production returns to normal." },
      { type: "p", text: "The team agrees on corrective actions." },
      { type: "p", text: "A few weeks later, the same issue appears again." },
      { type: "p", text: "It may involve a different machine, operator, or production line, but the pattern feels familiar." },
      { type: "p", text: "Many factories spend more time solving recurring problems than preventing new ones." },
      { type: "h", text: "What This Means for Your Business" },
      { type: "p", text: "Every recurring problem has a hidden cost." },
      { type: "p", text: "It consumes management attention, slows decision-making, reduces production stability, and weakens customer confidence." },
      { type: "p", text: "The financial impact often includes:" },
      {
        type: "list",
        items: [
          "Rework and repeated investigations",
          "Production interruptions",
          "Delayed improvement projects",
          "Lost capacity",
          "More supervision",
          "Customer complaints that continue over time",
        ],
      },
      { type: "h", text: "Executive Perspective" },
      { type: "quote", text: "Every hour spent solving yesterday's problem is an hour not spent improving tomorrow's performance. Factories grow faster when leaders reduce recurring problems, not simply respond to them faster." },
      { type: "h", text: "Questions I Ask Before Looking for Solutions" },
      { type: "p", text: "Before discussing corrective actions, I usually ask:" },
      {
        type: "list",
        items: [
          "Which issue has returned more than twice this year?",
          "Which corrective action was never fully implemented?",
          "Which problem is now considered \"normal\"?",
          "How do you know the solution actually worked?",
          "Which department owns long-term follow-up?",
        ],
      },
      { type: "p", text: "The answers often reveal that the factory is excellent at responding to problems but weak at preventing recurrence." },
      { type: "h", text: "A Common Factory Scenario" },
      { type: "p", text: "A contract manufacturer investigated the same packaging defect three times in six months." },
      { type: "p", text: "Each investigation identified a different immediate cause." },
      { type: "p", text: "However, the packaging standard had never been updated, operators received different instructions between shifts, and no one verified whether corrective actions remained effective after implementation." },
      { type: "p", text: "The investigations were completed." },
      { type: "p", text: "The problem was not." },
      { type: "h", text: "Where Better Factories Focus" },
      { type: "p", text: "Leading manufacturers build systems that make learning permanent." },
      { type: "p", text: "They standardize successful improvements, review corrective actions regularly, and measure whether problems stay solved over time." },
      { type: "p", text: "Instead of asking, \"Who fixed today's issue?\"" },
      { type: "p", text: "They ask," },
      { type: "quote", text: "\"What changed in the process so this cannot happen again?\"" },
      { type: "h", text: "Ask Yourself" },
      { type: "p", text: "Which problem has your factory solved more than once during the past year?" },
      { type: "p", text: "If the answer comes quickly, the issue may not be your people." },
      { type: "p", text: "It may be your improvement system." },
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
  const { article } = Route.useLoaderData() as { article: Article };

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
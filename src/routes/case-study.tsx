import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, LanguageToggle } from "@/i18n/LanguageProvider";
import { translations } from "@/i18n/strings";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: translations.en.meta.caseTitle },
      { name: "description", content: translations.en.meta.caseDescription },
      { property: "og:title", content: translations.en.meta.caseTitle },
      { property: "og:description", content: translations.en.meta.caseDescription },
    ],
  }),
  component: CaseStudyPage,
});

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{children}</span>;
}

function CaseStudyPage() {
  const { t } = useLang();
  const c = t.caseStudy;
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur print:hidden">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 md:px-10">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-foreground text-[11px] font-bold tracking-tight text-background">AK</span>
            <span className="truncate text-sm font-semibold tracking-tight">Alna Kurnia Sari</span>
            <span className="hidden truncate text-xs text-muted-foreground sm:inline">{t.nav.role}</span>
          </Link>
          <nav className="flex items-center gap-2 md:gap-4">
            <LanguageToggle />
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
            >
              {t.nav.backHome}
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
                <Mark>{c.mark}</Mark>
                <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {c.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
                  {c.intro}
                </p>
              </div>
              <aside className="lg:col-span-4 lg:col-start-9">
                <div className="border border-border bg-background p-6">
                  <Mark>{c.summaryMark}</Mark>
                  <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                    {c.summary.map(([k, v]) => (
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
                <Mark>{c.challengeMark}</Mark>
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {c.challengeTitle}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                  {c.challengeBody}
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                  {c.challengeCards.map(([k, v]) => (
                    <div key={k} className="bg-background p-6">
                      <div className="text-sm font-semibold tracking-tight text-foreground">{k}</div>
                      <div className="mt-2 text-sm leading-relaxed text-foreground/65">{v}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-8 border-l-2 border-primary bg-background p-6 text-lg font-medium leading-snug tracking-tight text-foreground">
                  {c.challengeQuote}
                </blockquote>
              </div>
            </div>

            {/* Root Cause + Solution */}
            <div className="mt-20 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
              <div className="bg-background p-8 md:p-10">
                <Mark>{c.rootMark}</Mark>
                <h3 className="mt-4 text-xl font-bold tracking-tight md:text-2xl">{c.rootTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {c.rootBody}
                </p>
                <ol className="mt-6 space-y-2 font-mono text-xs tracking-widest text-foreground/70 uppercase">
                  {c.rootFlow.map((step, i) => (
                    <Fragment key={step}>
                      <li>{step}</li>
                      {i < c.rootFlow.length - 1 && <li className="text-foreground/40">↓</li>}
                    </Fragment>
                  ))}
                  <li className="text-foreground/40">↓</li>
                  <li className="text-primary">{c.rootFlowAccent}</li>
                </ol>
              </div>
              <div className="bg-background p-8 md:p-10">
                <Mark>{c.builtMark}</Mark>
                <h3 className="mt-4 text-xl font-bold tracking-tight md:text-2xl">{c.builtTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {c.builtBody}
                </p>
                <ol className="mt-6 space-y-2 font-mono text-xs tracking-widest text-foreground/70 uppercase">
                  {c.builtFlow.map((step, i) => (
                    <Fragment key={step}>
                      <li>{step}</li>
                      {i < c.builtFlow.length - 1 && <li className="text-foreground/40">↓</li>}
                    </Fragment>
                  ))}
                  <li className="text-foreground/40">↓</li>
                  <li className="text-primary">{c.builtFlowAccent}</li>
                </ol>
              </div>
            </div>

            {/* Results */}
            <div className="mt-20">
              <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <Mark>{c.resultsMark}</Mark>
                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    {c.resultsTitle}
                  </h3>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
                {c.resultsCards.map(([k, v], i) => (
                  <div key={k} className="bg-background p-6">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <div className="mt-4 text-sm font-semibold tracking-tight text-foreground">{k}</div>
                    <div className="mt-2 text-sm leading-relaxed text-foreground/65">{v}</div>
                  </div>
                ))}
              </div>
              <blockquote className="mt-8 border-l-2 border-primary bg-background p-6 text-lg font-medium leading-snug tracking-tight text-foreground">
                {c.resultsQuote}
              </blockquote>
            </div>

            {/* Key Learning + Self-check */}
            <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Mark>{c.learningMark}</Mark>
                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {c.learningTitle}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                  {c.learningBody}
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="border border-border bg-background p-8">
                  <Mark>{c.selfCheckMark}</Mark>
                  <ul className="mt-5 space-y-3">
                    {c.selfCheckItems.map((q) => (
                      <li key={q} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  <SelfCheckClose />
                </div>
              </div>
            </div>

            {/* In-section CTA */}
            <div className="mt-16 border-t border-border pt-12">
              <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.02em] md:text-3xl">
                    {c.ctaTitle}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/70">
                    {c.ctaBody}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <a
                    href="https://calendly.com/alna_kurnia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary px-6 py-3.5 text-sm font-medium tracking-tight text-primary-foreground transition-colors hover:bg-foreground"
                  >
                    {c.ctaButton}
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
                {t.nav.backHome}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SelfCheckClose() {
  const { t, lang } = useLang();
  const yes = lang === "id" ? "ya" : "yes";
  const { before, yes: yesWord, after } = t.caseStudy.selfCheckClose(yes);
  return (
    <p className="mt-6 text-sm leading-relaxed text-foreground/70">
      {before}
      <span className="font-semibold text-foreground">{yesWord}</span>
      {after}
    </p>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import waQr from "@/assets/wa-qr.png";
import { useLang, LanguageToggle } from "@/i18n/LanguageProvider";
import { translations } from "@/i18n/strings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: translations.en.meta.siteTitle },
      { name: "description", content: translations.en.meta.siteDescription },
      { property: "og:title", content: translations.en.meta.siteTitle },
      { property: "og:description", content: translations.en.meta.siteDescription },
    ],
  }),
  component: Index,
});

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{children}</span>;
}

function Index() {
  const { t } = useLang();
  const services = t.services.items;
  const process = t.approach.steps;
  const insights = t.insights.cards;
  const projects = t.portfolio.projects;
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur print:hidden">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 md:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-foreground text-[11px] font-bold tracking-tight text-background">AK</span>
            <span className="truncate text-sm font-semibold tracking-tight">Alna Kurnia Sari</span>
            <span className="hidden truncate text-xs text-muted-foreground sm:inline">{t.nav.role}</span>
          </a>
          <nav className="flex items-center gap-1 md:gap-6">
            <a href="#services" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">{t.nav.services}</a>
            <a href="#case-study" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">{t.nav.caseStudies}</a>
            <a href="#approach" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">{t.nav.howIWork}</a>
            <a href="#insights" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">{t.nav.insights}</a>
            <a href="#about" className="hidden text-sm text-foreground/70 transition-colors hover:text-foreground md:inline">{t.nav.about}</a>
            <LanguageToggle className="ml-2" />
            <a href="#contact" className="ml-2 inline-flex shrink-0 items-center border border-foreground bg-foreground px-4 py-2 text-xs font-medium tracking-tight text-background transition-colors hover:bg-primary hover:border-primary">
              {t.nav.contact}
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ABOUT */}
        <section id="about" className="border-b border-border print:break-inside-avoid">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 print:grid-cols-12 print:gap-8 print:py-6 md:px-10 md:py-28 lg:grid-cols-12">
            <div className="print:col-span-4 lg:col-span-4">
              <Mark>{t.about.mark}</Mark>
              <img
                src={portrait}
                alt={t.about.portraitAlt}
                width={1024}
                height={1280}
                className="mt-6 block aspect-[4/5] w-full object-cover print:mt-3 print:w-[180px] print:max-w-none"
              />
            </div>
            <div className="print:col-span-8 print:col-start-5 lg:col-span-7 lg:col-start-6">
              <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                {t.about.headline}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/75">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {t.about.principles.map(([k, v]) => (
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
                <Mark>{t.experience.mark}</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {t.experience.headline}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-foreground/70">
                  {t.experience.intro}
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
              <article className="bg-background p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{t.experience.danoneRange}</span>
                  <span className="font-mono text-xs text-primary">01</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight">{t.experience.danoneTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {t.experience.danoneBody}
                </p>
              </article>
              <article className="bg-background p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{t.experience.unileverRange}</span>
                  <span className="font-mono text-xs text-primary">02</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight">{t.experience.unileverTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {t.experience.unileverBody}
                </p>
              </article>
            </div>

            <div className="mt-16 border-t border-border pt-12">
              <Mark>{t.experience.highlightsMark}</Mark>
              <div className="mt-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
                {t.experience.highlights.map(([n, label]) => (
                  <div key={label} className="bg-background p-6 md:p-8">
                    <div className="text-4xl font-black tracking-tight text-primary md:text-5xl">{n}</div>
                    <div className="mt-3 text-sm leading-relaxed text-foreground/70">{label}</div>
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
                <Mark>{t.purpose.mark}</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {t.purpose.headline}
                </h2>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
              <article className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary">01</span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{t.purpose.purposeTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {t.purpose.purposeBody}
                </p>
              </article>
              <article className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary">02</span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{t.purpose.visionTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {t.purpose.visionBody}
                </p>
              </article>
              <article className="bg-background p-8 md:p-10">
                <span className="font-mono text-xs text-primary">03</span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{t.purpose.missionTitle}</h3>
                <ul className="mt-4 space-y-3">
                  {t.purpose.missionItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* REPRESENTATIVE PROJECTS */}
        <section id="portfolio" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Mark>{t.portfolio.mark}</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {t.portfolio.headline}
                </h2>
              </div>
              <p className="self-end text-base leading-relaxed text-foreground/70 lg:col-span-5 lg:col-start-8">
                {t.portfolio.intro}
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
                        {t.portfolio.cardLabel}
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
                    <Mark>{t.portfolio.deliverablesMark}</Mark>
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

        {/* SERVICES */}
        <section id="services" className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Mark>{t.services.mark}</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {t.services.headline}
                </h2>
              </div>
              <p className="self-end text-base leading-relaxed text-foreground/70 lg:col-span-5 lg:col-start-8">
                {t.services.intro}
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
                    <Mark>{t.services.focusMark}</Mark>
                    <ul className="mt-3 space-y-2">
                      {s.focus.map((f) => (
                        <li key={f} className="flex gap-3 text-sm text-foreground/80">
                          <span className="mt-2 h-px w-3 shrink-0 bg-foreground/40" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <Mark>{t.services.outcomesMark}</Mark>
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

        {/* MY APPROACH */}
        <section id="approach" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Mark>{t.approach.mark}</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {t.approach.headline}
                </h2>
              </div>
              <p className="text-sm text-foreground/60 lg:col-span-4 lg:col-start-9">
                {t.approach.intro}
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
                <Mark>{t.caseStudyPreview.mark}</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {t.caseStudyPreview.headline}
                </h2>
              </div>
              <p className="text-sm text-foreground/60 lg:col-span-4 lg:col-start-9">
                {t.caseStudyPreview.intro}
              </p>
            </div>

            <div className="mt-14">
              <Link
                to="/case-study"
                className="group grid grid-cols-1 gap-px bg-border lg:grid-cols-12"
              >
                <div className="bg-background p-8 md:p-10 lg:col-span-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest text-primary uppercase">{t.caseStudyPreview.industryTag}</span>
                    <span className="font-mono text-[11px] text-foreground/40">01</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                    {t.caseStudyPreview.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/70">
                    {t.caseStudyPreview.body}
                  </p>
                  <div className="mt-10 flex items-center gap-3 border-t border-border pt-5">
                    <span className="text-sm font-medium tracking-tight text-primary">{t.caseStudyPreview.cta}</span>
                    <span className="text-sm text-foreground/40 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
                <div className="bg-background p-8 md:p-10 lg:col-span-4">
                  <Mark>{t.caseStudyPreview.summaryMark}</Mark>
                  <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 text-sm">
                    {t.caseStudyPreview.summary.map(([k, v]) => (
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
                <Mark>{t.insights.mark}</Mark>
                <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                  {t.insights.headline}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70">
                  {t.insights.intro}
                </p>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
              {insights.map((a, i) => (
                <Link key={a.title} to="/insights/$slug" params={{ slug: a.slug }} className="group flex flex-col justify-between bg-background p-6 transition-colors hover:bg-secondary/60 md:p-8">
                  <div>
                    <div className="flex items-center justify-end">
                      <span className="font-mono text-[11px] text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-primary md:text-xl">
                      {a.title}
                    </h3>
                  </div>
                  <div className="mt-10 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-foreground/60">{a.read}</span>
                    <span className="text-sm text-primary transition-transform group-hover:translate-x-1">{t.insights.read}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Mark>{t.cta.mark}</Mark>
                <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-7xl">
                  {t.cta.headlineA} <br /><span className="text-primary">{t.cta.headlineB}</span>
                </h2>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  {t.cta.body}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3 print:hidden">
                  <a
                    href="https://calendly.com/alna_kurnia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary px-6 py-3.5 text-sm font-medium tracking-tight text-primary-foreground transition-colors hover:bg-foreground"
                  >
                    {t.cta.schedule}
                  </a>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center border border-foreground/20 px-6 py-3.5 text-sm font-medium tracking-tight text-foreground transition-colors hover:border-foreground cursor-pointer"
                  >
                    {t.cta.download}
                  </button>
                </div>
              </div>
              <aside className="lg:col-span-4">
                <div className="border-l border-primary pl-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <Mark>{t.cta.contactMark}</Mark>
                      <a href="mailto:alna_kurnia@yahoo.co.id" className="block font-medium text-foreground hover:text-primary mt-1.5">alna_kurnia@yahoo.co.id</a>
                    </div>
                    <div>
                      <a href="tel:+628119226656" className="block text-foreground/70 hover:text-primary">{t.cta.phoneLabel} +628119226656</a>
                      <a
                        href="https://wa.me/628119226656"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-28 mt-2 transition-transform duration-300 hover:scale-105"
                        title={t.cta.qrTitle}
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
                    <a href="https://www.linkedin.com/in/alna-kurnia-sari/" target="_blank" rel="noopener noreferrer" className="block text-foreground/70 hover:text-primary">{t.cta.linkedIn}</a>
                  </div>
                  <div className="mt-8 text-xs leading-relaxed text-foreground/60">
                    {t.cta.fineprint}
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
            <span className="hidden truncate text-xs text-muted-foreground sm:inline">{t.nav.role}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-foreground/60">
            <a href="https://www.linkedin.com/in/alna-kurnia-sari/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">{t.footer.linkedIn}</a>
            <a href="mailto:alna_kurnia@yahoo.co.id" className="hover:text-primary">{t.footer.email}</a>
            <a href="#contact" className="hover:text-primary">{t.footer.contact}</a>
            <span className="text-foreground/40">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

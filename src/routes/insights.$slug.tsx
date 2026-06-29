import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useLang, LanguageToggle } from "@/i18n/LanguageProvider";
import { translations } from "@/i18n/strings";

const SLUGS = translations.en.articles.map((a) => a.slug);

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    if (!SLUGS.includes(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const slug = loaderData?.slug;
    const a = slug ? translations.en.articles.find((x) => x.slug === slug) : undefined;
    const title = a ? `${a.title} | Alna Kurnia Sari` : translations.en.meta.insightFallbackTitle;
    const description = a ? a.hero.join(" ") : translations.en.meta.insightFallbackDescription;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => <NotFound />,
  component: ArticlePage,
});

function NotFound() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-3xl font-black tracking-tight">{t.article.notFoundTitle}</h1>
      <Link to="/" className="mt-6 inline-block text-primary hover:underline">{t.article.backHome}</Link>
    </div>
  );
}

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{children}</span>;
}

function ArticlePage() {
  const { slug } = Route.useLoaderData() as { slug: string };
  const { t } = useLang();
  const article = t.articles.find((a) => a.slug === slug) ?? t.articles[0];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
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
              hash="insights"
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
            >
              {t.nav.backHome}
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <Mark>— {article.read}</Mark>
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

                <div className="mt-16 border-t border-border pt-10">
                  <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                      <Mark>{t.article.nextMark}</Mark>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                        {t.article.ctaTitle}
                      </h3>
                    </div>
                    <a
                      href="https://calendly.com/alna_kurnia/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary px-6 py-3.5 text-sm font-medium tracking-tight text-primary-foreground transition-colors hover:bg-foreground"
                    >
                      {t.article.bookCall}
                    </a>
                  </div>
                </div>

                <div className="mt-12 border-t border-border pt-8">
                  <Link
                    to="/"
                    hash="insights"
                    className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 text-sm font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
                  >
                    {t.nav.backHome}
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

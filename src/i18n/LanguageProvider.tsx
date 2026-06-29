import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type Strings } from "./strings";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Strings };

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "ak-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore saved preference after hydration.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "id") setLangState(saved);
    } catch {
      // ignore
    }
  }, []);

  // Reflect current language on <html lang="..."> for SEO & a11y.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe SSR/default fallback so non-wrapped components don't crash.
    return { lang: "en" as Lang, setLang: () => {}, t: translations.en };
  }
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      className={
        "inline-flex items-center gap-1 border border-border px-2 py-1 font-mono text-[11px] tracking-widest " +
        className
      }
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          "px-1 transition-colors " +
          (lang === "en" ? "font-bold text-foreground" : "text-foreground/40 hover:text-foreground")
        }
      >
        {t.langToggle.en}
      </button>
      <span className="text-foreground/30">|</span>
      <button
        type="button"
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
        className={
          "px-1 transition-colors " +
          (lang === "id" ? "font-bold text-foreground" : "text-foreground/40 hover:text-foreground")
        }
      >
        {t.langToggle.id}
      </button>
    </div>
  );
}
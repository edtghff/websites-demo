"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Locale, getTranslations, locales } from "@/lib/i18n/translations";

type Translations = ReturnType<typeof getTranslations>;

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
} | null>(null);

const STORAGE_KEY = "azul-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "az";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  return stored && locales.some((l) => l.code === stored) ? stored : "az";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: getTranslations(locale) }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

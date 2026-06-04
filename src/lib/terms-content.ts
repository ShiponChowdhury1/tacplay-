const termsContent: Record<string, () => Promise<string>> = {
  en: () => import("@/lib/terms/en").then((m) => m.termsText),
  de: () => import("@/lib/terms/de").then((m) => m.termsText),
  es: () => import("@/lib/terms/es").then((m) => m.termsText),
  fr: () => import("@/lib/terms/fr").then((m) => m.termsText),
};

export const getTermsContent = async (locale: string): Promise<string> => {
  const loader = termsContent[locale] || termsContent.en;
  return loader();
};
// Force reload triggers


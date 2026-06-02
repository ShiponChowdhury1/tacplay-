const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("../../dictionaries/en.json").then((module) => module.default),
  de: () => import("../../dictionaries/de.json").then((module) => module.default),
  es: () => import("../../dictionaries/es.json").then((module) => module.default),
  fr: () => import("../../dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const loader = dictionaries[locale] || dictionaries.en;
  return loader();
};

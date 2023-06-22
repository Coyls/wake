import "server-only";
import { Locale } from "../../../../i18n-config";

const dictionaries = {
  fr: () => import("./fr.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return locale == "fr" ? dictionaries.fr() : dictionaries.en();
};

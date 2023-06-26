import "server-only";
import { Locale } from "../../i18n-config";

export const getDictionary = async (locale: Locale) => {
  return import(`./${locale}.json`).then((module) => module.default);
};

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

/**
 * the Lod version from next-intl
 * import { notFound } from "next/navigation";
 * import { getRequestConfig } from "next-intl/server";
 * import { locales } from "./routing";
 * // Can be imported from a shared config
 * // const locales = ["en", "de"];
 * export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
 * 
 */

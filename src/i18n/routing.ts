import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar", "fr"], // A list of all locales that are supported
  localePrefix: "always", // to make language always visible in the navigation
  defaultLocale: "en", // Used when no locale matches
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

/**
 * the Lod version from next-intl
 * import { createSharedPathnamesNavigation } from "next-intl/navigation";
 * 
 * export const locales = ["en", "ar", "fr"];
 * export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
 * 
 */

/**********************
 * Note:
 * To Fix Pathname - Links
 * import Link from "next/link";
 * import { usePathname } from "next/navigation";
 * import { usePathname, Link } from "@/navigation";
 * import Navigation from next-init navigation file because it can read [locale] file and implement the inside of it
 **********************/

// ===================== //
// = layout for local  = //
// ===================== //

// === i18n Next-init === //
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
// === i18n Next-init === //
// === Next.Js === //
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// === Next.Js === //
// === Next 15 New Font === //
import localFont from "next/font/local";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// === Next 15 New Font === //
export const metadata: Metadata = {
  title: "React Hook Form",
  description: "",
};
// ===================== //
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
/**********************
 * Note:
 * to make the first page automatically go to a [local] folder and continue from there
 **********************/

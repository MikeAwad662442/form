// ===================== //
// 404 Page Page not Found //
// ===================== //

"use client";
// import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// === Theme Provider === //
// import { ThemeProvider } from "@/components/theme-provider";
// ===================== //
// Logo Images
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// Logo Images
// ===================== //

const NotFoundRootPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <html suppressHydrationWarning>
      <body className="flex items-center justify-center">
        {/* <ThemeProvider> */}
        <main className="my-10 flex flex-col items-center justify-center gap-2">
          {/* <Image
            src="/assets/MenuAppLogo.png"
            alt="LOGO"
            width={300}
            height={300}
            priority={true}
            className="mx-auto my-10"
          /> */}
          <h1 className="flex justify-center text-[3em] text-primary">
            MENU App
          </h1>
          <h1 className="justify-start">this Page not Found</h1>
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
};
export default NotFoundRootPage;
/**********************
 * Note:
 * Redirect to the homepage after 3 seconds.
 * =====================
 * import { useEffect } from "react";
 * import { useRouter } from "next/navigation";
  // ===================== //
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  });
  // ===================== //
 **********************/

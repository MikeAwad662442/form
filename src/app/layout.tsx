import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
/**********************
 * Note:
 * in this Root Layout, we just used {children} because the master Layout is in the Local folder.
 * and also to reach the "not-found.tsx" page
 **********************/

// === Internationalization Next-init i18n === //
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
// === Internationalization Next-init i18n === //

// === i18n Middleware === //
const intlMiddleware = createMiddleware(routing);
export default intlMiddleware;

// for Path
export const config = {
  // matcher: ["/((?!api|_next|.*\\..*).*)"],
  matcher: ["/((?!api|_next|.*\\..*).*)", "/(ar|en)/:path*"],
  // matcher: ["/", "/(de|en)/:path*"],
};
/*******************************
 * Notes:
 *
 *******************************/

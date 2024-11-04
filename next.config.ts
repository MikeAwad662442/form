import type { NextConfig } from "next";
// === Next Intl (i18n)=== //
import createNextIntlPlugin from "next-intl/plugin"; // used to wrappers the NextConfig

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);

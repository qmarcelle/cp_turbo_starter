
import withBundleAnalyzer from "@next/bundle-analyzer";
import { env } from "./env.mjs";

const config = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
    ]
  },
};

export default withBundleAnalyzer({ enabled: env.ANALYZE })(config);

import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

/** Founder: remove MEP + Sectors from public IA — keep old URLs from breaking */
const mepServiceRedirects = [
  "mechanical-utility-engineering",
  "hvac-engineering",
  "electrical-engineering",
  "fire-protection-engineering",
].map((slug) => ({
  source: `/services/${slug}`,
  destination: "/services",
  permanent: false,
}));

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      ...mepServiceRedirects,
      { source: "/sectors", destination: "/services", permanent: false },
      { source: "/sectors/:slug*", destination: "/services", permanent: false },
      { source: "/news", destination: "/knowledge-center", permanent: false },
      { source: "/news/:slug*", destination: "/knowledge-center", permanent: false },
      { source: "/estimator", destination: "/services", permanent: false },
      {
        source: "/vendor-registration",
        destination: "/clients",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          ...(process.env.NODE_ENV === "production"
            ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;

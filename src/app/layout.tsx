import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://myronjanssen.dev"
  ),
  title: {
    default: "Myron Janssen - Platform Engineer",
    template: "%s | Myron Janssen",
  },
  description:
    "Platform engineer focused on product-team platform/SRE work — calm systems, paved-road automation, and low-noise operations.",
  keywords: [
    "platform engineer",
    "SRE",
    "devops",
    "automation",
    "linux",
    "ansible",
    "docker",
    "monitoring",
    "infrastructure",
  ],
  authors: [{ name: "Myron Janssen" }],
  creator: "Myron Janssen",
  publisher: "Myron Janssen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://myronjanssen.dev",
    title: "Myron Janssen - Platform Engineer",
    description:
      "Platform engineer focused on product-team platform/SRE work — calm systems, paved-road automation, and low-noise operations.",
    siteName: "Myron Janssen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Myron Janssen - Platform Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Myron Janssen - Platform Engineer",
    description:
      "Platform engineer focused on product-team platform/SRE work — calm systems, paved-road automation, and low-noise operations.",
    images: ["/og-image.png"],
    creator: "@myronjanssen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://myronjanssen.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Resource hints for better performance */}
        <link rel="prefetch" href="/work" />
        <link rel="prefetch" href="/code" />
        <link rel="prefetch" href="/skills" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-[linear-gradient(135deg,#0d2875_0%,#370F37_100%)] text-slate-200 antialiased`}
      >
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        <Background />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

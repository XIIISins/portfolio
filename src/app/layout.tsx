import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    "vmware",
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
    url: "/",
    title: "Myron Janssen - Platform Engineer",
    description:
      "Platform engineer focused on product-team platform/SRE work — calm systems, paved-road automation, and low-noise operations.",
    siteName: "Myron Janssen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myron Janssen - Platform Engineer",
    description:
      "Platform engineer focused on product-team platform/SRE work — calm systems, paved-road automation, and low-noise operations.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-[linear-gradient(135deg,#0d2875_0%,#370F37_100%)] text-slate-200 antialiased`}
      >
        {/* Skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        <Background />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

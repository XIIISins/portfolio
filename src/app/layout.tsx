import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platform Engineer building paved roads for developers.",
  description:
    "Portfolio showcasing systems work, developer tooling, and reliability engineering — now pivoting deeper into software and SRE.",
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
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

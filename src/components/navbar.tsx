"use client";

import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { GithubIcon, ScrollText } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 container-width -translate-x-1/2">
      <nav
        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md shadow-glass"
        aria-label="Main navigation"
      >
        <div className="flex md:flex items-center gap-2 min-w-0 rounded-lg px-3 py-2 hover:text-white hover:bg-white/15 transition-colors">
          <div className="h-11 w-11 md:h-8 md:w-8 sm:h-8 sm:w-8 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center ">
            <Link
              href="/"
              className="text-sm font-semibold text-white"
              aria-label="Go to homepage"
            >
              MJ
            </Link>
          </div>
          <Link
            href="/"
            className="hidden md:inline text-sm font-semibold text-white/90 tracking-tight"
            aria-label="Go to homepage - Myron Janssen"
          >
            Myron Janssen
          </Link>
        </div>
        {/* Desktop menu */}
        <div
          className="hidden md:flex items-center gap-2"
          role="navigation"
          aria-label="Main menu"
        >
          <Link
            href="/work"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="View work portfolio"
          >
            Work
          </Link>
          <Link
            href="/skills"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="View skills and expertise"
          >
            Skills
          </Link>
          <Link
            href="/code"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/15 transition-colors"
            aria-label="View code examples"
          >
            Code
          </Link>
        </div>

        {/* Right cluster: Desktop pills + mobile hamburger menu */}
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="hidden md:flex items-center gap-2"
            role="navigation"
            aria-label="External links"
          >
            <Link
              href="https://github.com/XIIISins"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/15 transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <GithubIcon
                className="h-4 w-4 text-white/90"
                aria-hidden="true"
              />
              <span className="truncate max-w-[160px]">GitHub</span>
            </Link>
            <Button
              variant="gradient-accent"
              size="sm"
              className="hidden sm:inline-flex gap-2"
              asChild
            >
              <Link
                href="/resume.pdf"
                download="Myron_Janssen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume (PDF, opens in new tab)"
              >
                <ScrollText className="h-4 w-4" aria-hidden="true" />
                <span className="truncate max-w-[160px] sm:max-w-[220px]">
                  Resume
                </span>
              </Link>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

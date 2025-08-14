import { Button } from "@/components/ui/button";
import { GithubIcon, ScrollText } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[92%] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md shadow-glass">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center">
            <Link href="/" className="text-sm font-semibold text-white">
              MJ
            </Link>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-white/90 tracking-tight"
          >
            Myron Janssen
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/work"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/skills"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/code"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5 transition-colors"
          >
            Code
          </Link>
        </div>

        <div className="flex items-center gap-2 min-w-0">
          <Button
            variant="gradient-primary"
            size="sm"
            className="hidden sm:inline-flex gap-2"
          >
            <GithubIcon className="h-4 w-4 text-white/90" />
            <Link
              href="https://github.com/XIIISins"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="truncate max-w-[160px]">GitHub</span>
            </Link>
          </Button>
          <Button variant="gradient-accent" size="sm" className="gap-2">
            <ScrollText className="h-4 w-4" />
            <span className="truncate max-w-[160px] sm:max-w-[220px]">
              Resume
            </span>
          </Button>
        </div>
      </nav>
    </header>
  );
}

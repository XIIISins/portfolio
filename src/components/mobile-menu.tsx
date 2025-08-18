"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GithubIcon, Menu, ScrollText, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="md:hidden rounded-lg p-2 hover:bg-white/15 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-11 w-11 text-white/90" aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:max-w-xs bg-slate-900/80 border-white/10 backdrop-blur-md"
      >
        <SheetHeader className="space-y-0">
          <div className="flex items-center justify-between gap-2">
            <SheetTitle className="flex items-center gap-2 text-white">
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center text-sm font-semibold">
                MJ
              </span>
              <Link
                href="/"
                aria-label="Go to homepage"
                className="hover:underline"
              >
                Myron Janssen
              </Link>
            </SheetTitle>
            <SheetClose asChild>
              <button
                aria-label="Close menu"
                className="rounded-lg justify-between p-2 hover:bgwhite/10 transition-colors"
              >
                <X className="h5-w5 text-white/90" aria-hidden="true" />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        <nav
          className="mt-6 grid gap-2 text-slate-200"
          aria-label="Mobile menu"
        >
          {/* // inside <SheetContent> … */}
          <nav className="mt-6 grid gap-2" aria-label="Mobile menu">
            <MobileLink href="/work" label="Work" />
            <MobileLink href="/skills" label="Skills" />
            <MobileLink href="/code" label="Code" />
          </nav>
        </nav>

        <div className="mt-6 grid gap-2">
          <Link
            href="https://github.com/XIIISins"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-lg text-slate-200 hover:bg-white/10 flex items-center gap-2"
          >
            <GithubIcon className="h-6 w-6 mr-2" />
            GitHub
          </Link>
          <Link
            href="/resume.pdf"
            download="Myron_Janssen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-lg text-slate-200 hover:bg-white/10 flex items-center gap-2"
            aria-label="Download resume (PDF, opens in new tab)"
          >
            <ScrollText className="h-6 w-6 mr-2" />
            Resume
          </Link>
        </div>

        <div className="mt-auto pt-8 text-xs text-slate-400">
          Based in the Netherlands • Remote-first
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        // layout: big tap target, centered text
        "group flex w-full items-center rounded-xl px-4 py-3",
        // typography: crisp & predictable
        "text-[15px] leading-6 font-medium",
        // colors/states
        active
          ? "bg-white/10 text-white"
          : "text-white/90 hover:bg-white/10 hover:text-white",
        // a11y
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        "transition-colors"
      )}
    >
      {label}
    </Link>
  );
}
function CloseLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: React.ReactNode;
  external?: boolean;
}) {
  const pathname = usePathname();
  const active = !external && pathname === href;

  const classes = cn(
    "group flex w-full items-center rounded-xl px-4 py-3",
    "text-[15px] leading-6 font-medium transition-colors",
    active
      ? "bg-white/10 text-white"
      : "text-white/90 hover:bg-white/10 hover:text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
  );

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <SheetClose asChild>
      <Link href={href} className={classes} {...props}>
        {label}
      </Link>
    </SheetClose>
  );
}

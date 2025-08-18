"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GithubIcon, Mail, Menu, ScrollText, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Ensure the sheet closes if route changes for any reason.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger must be asChild to avoid button-in-button */}
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
        >
          <Menu
            className="h-11 w-11 md:h-8 md:w-8 sm:h-8 sm:w-8 text-white/90"
            aria-hidden="true"
          />
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
              <Link href="/" className="hover:underline">
                Myron Janssen
              </Link>
            </SheetTitle>

            <SheetClose asChild>
              <button
                aria-label="Close menu"
                className="rounded-lg p-2 hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5 text-white/90" aria-hidden="true" />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        {/* Primary nav */}
        <nav
          className="mt-6 grid gap-2 text-slate-200"
          aria-label="Mobile menu"
        >
          <NavItem href="/work" label="Work" />
          <NavItem href="/skills" label="Skills" />
          <NavItem href="/code" label="Code" />
        </nav>

        {/* External links */}
        <div className="mt-6 grid gap-2">
          <ExternalItem
            href="https://github.com/XIIISins"
            label="GitHub"
            icon={<GithubIcon className="h-5 w-5" aria-hidden="true" />}
          />
          <ExternalItem
            href="/resume.pdf"
            label="Resume"
            icon={<ScrollText className="h-5 w-5" aria-hidden="true" />}
            props={{ target: "_blank", rel: "noopener noreferrer" }}
          />
          <ExternalItem
            href="mailto:contact@myronjanssen.dev"
            label="Contact"
            icon={<Mail className="h-5 w-5" aria-hidden="true" />}
          />
        </div>

        <div className="mt-auto pt-8 text-xs text-slate-400">
          Based in the Netherlands • Remote-first
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* ---------- helpers ---------- */

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <SheetClose asChild>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={[
          "group flex w-full items-center rounded-xl px-4 py-3",
          "text-[15px] leading-6 font-medium transition-colors",
          active
            ? "bg-white/10 text-white"
            : "text-white/90 hover:text-white hover:bg-white/10",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        ].join(" ")}
      >
        {label}
      </Link>
    </SheetClose>
  );
}

function ExternalItem({
  href,
  label,
  icon,
  props,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}) {
  return (
    <SheetClose asChild>
      <a
        href={href}
        {...props}
        className="rounded-xl px-4 py-3 text-[15px] leading-6 font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors inline-flex items-center gap-3"
      >
        {icon}
        {label}
      </a>
    </SheetClose>
  );
}

import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CodePage() {
  return (
    <main className="relative mx-auto w-[92%] pt-36 md:pt-32">
      <section className="relative">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          My Code & Projects
        </h1>
      </section>

      <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Project Repositories
          </h4>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-brand-secondary" />
              <CardTitle className="text-lg">HeyLeaf</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span>
                  HeyLeaf is a privacy-focused plant care app. Allows users to
                  add and identify plants, keep track of their growth and setup
                  reminders via care schedules. It is built with React,
                  Capacitor, Tailwind CSS, and Supabase.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="gradient-primary"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <Link href="https://heyleaf.app">
                    <ExternalLink className="h-4 w-4" />
                    View App
                  </Link>
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="gradient-accent"
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <Link href="https://github.com/XIIISins/heyleaf">
                          <Code className="h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Source code not available yet as it&apos;s still in
                        development and not ready for release.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-brand-secondary" />
              <CardTitle className="text-lg">Portfolio</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span>
                  This portfolio is built with Next.js, Tailwind CSS, and Shadcn
                  UI.
                </span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant="gradient-accent"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <Link href="https://github.com/XIIISins/portfolio">
                    <Code className="h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

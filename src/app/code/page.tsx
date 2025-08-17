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
import { CodeBlock } from "../../components/ui/code-block";

export default function CodePage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
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
              <CardTitle className="text-lg">
                HeyLeaf (private, pre-release)
              </CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span>
                  Privacy-friendly plant care app. Guest mode (local data), fast
                  add flow, simple care schedules. Built as a React web app and
                  packaged to iOS with Capacitor.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>
                  <span className="font-bold">Status:</span> Private,
                  pre-release
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>
                  <span className="font-bold">Peek the code: </span>
                  Snippet below, request read-only access if needed
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>
                  <span className="font-bold">Stack:</span> React, Capacitor
                  (iOS), Tailwind CSS, Supabase
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CodeBlock
                  language="typescript"
                  className="mt-4"
                  filename="src/lib/identifyPlant.ts"
                >
                  {`export async function identifyPlant(api: string, file: File, organs='leaf') {
  const fd = new FormData()
  fd.append('images', file)
  fd.append('organs', organs)
  const r = await fetch(api, { method: 'POST', body: fd })
  if (!r.ok) throw new Error(\`HTTP \${r.status}\`)
  return r.json()
}`}
                </CodeBlock>
              </div>
              <div className="flex items-start gap-2 py-4">
                <span>
                  <span className="font-bold">Next steps: </span>
                  UI/UX redesign for web, polishing iOS app, start packaging
                  Android app, Easier sign-up (SSO with multiple providers)
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
              <CardTitle className="text-lg">Portfolio (Public)</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span>
                  <span className="font-bold">This site: </span>
                  Minimal, fast, accessible; outcome-first content with real
                  code receipts. Next.js 14 (App Router), TypeScript, Tailwind,
                  shadcn/ui, Lucide.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>
                  <span className="font-bold">Status: </span>
                  Public, open-source, in development
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span>
                  <span className="font-bold">Highlights: </span>
                  client-island terminal with syntax highlighting, 3 outcome
                  cards, strict TS
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CodeBlock
                  language="docker"
                  className="mt-4"
                  filename="Dockerfile"
                >
                  {`# Dockerfile (Next.js 14 standalone)
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm i --frozen-lockfile
COPY . . && pnpm build
FROM node:20-alpine AS run
ENV NODE_ENV=production
COPY --from=build /app/.next/standalone /app/.next/static /app/public ./
USER node
CMD ["node","server.js"]`}
                </CodeBlock>
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

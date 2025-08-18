"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Load syntax highlighter client-side only
const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  {
    ssr: false,
    loading: () => (
      <pre
        className="h-[200px] md:h-[280px] w-full rounded-2xl bg-slate-900/40 animate-pulse"
        aria-label="Loading code examples"
      />
    ),
  }
);

type Snippet = {
  id: string;
  label: string;
  language: "yaml" | "docker" | "bash";
  filename: string;
  code: string;
};

const SNIPPETS: Snippet[] = [
  {
    id: "ansible",
    label: "Ansible",
    language: "yaml",
    filename: "~/homelab/playbooks/baseline.yml",
    code: `- name: Harden CentOS 9 System
  hosts: all
  become: true
  gather_facts: true
  roles:
    - centos9-hardening-baseline
    - centos9-hardening-services
    - centos9-hardening-auditd
    - centos9-hardening-pam
    - centos9-hardening-firewall
    - centos9-hardening-crypto
    `,
  },
  {
    id: "dockerfile",
    label: "Dockerfile",
    language: "docker",
    filename: "~/Dev/portfolio/Dockerfile",
    code: `FROM node:20-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm i --frozen-lockfile
COPY . .
RUN pnpm build
FROM node:20-alpine AS run
ENV NODE_ENV=production
COPY --from=build /app/.next/standalone /app/.next/static /app/public ./
USER node
CMD ["node","server.js"]
`,
  },
  {
    id: "pre-commit",
    label: "git pre-commit",
    language: "bash",
    filename: "~/Dev/portfolio/.git/hooks/pre-commit",
    code: `#!/usr/bin/env bash
set -eu
files=$(git diff --cached --name-only); [ -z "$files" ] && exit 0
echo "$files" | while IFS= read -r f; do
  case "$f" in
    *.yml|*.yaml) yamllint "$f" ;;
    roles/*|*playbook*.yml|*playbook*.yaml) ansible-lint -q "$f" ;;
    *.sh) shellcheck -x "$f" ;;
    */Dockerfile|Dockerfile|*.Dockerfile) hadolint "$f" ;;
  esac
done && echo "✓ pre-commit checks passed"
`,
  },
];

function createCustomTheme() {
  return {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: "transparent",
      margin: 0,
      padding: "1rem",
      fontSize: "13px",
      lineHeight: 1.6,
      borderRadius: 0,
      fontFamily:
        'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: "transparent",
      textShadow: "none",
    },
  };
}

function TabButton({
  snippet,
  isActive,
  onSelect,
}: {
  snippet: Snippet;
  isActive: boolean;
  onSelect: (snippet: Snippet) => void;
}) {
  const baseClasses =
    "rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-white/10 transition";
  const activeClasses = isActive
    ? "bg-white/10 text-white"
    : "bg-transparent text-slate-300 hover:bg-white/5";

  return (
    <button
      onClick={() => onSelect(snippet)}
      aria-pressed={isActive}
      aria-label={`Switch to ${snippet.label} code example`}
      className={`${baseClasses} ${activeClasses}`}
    >
      {snippet.label}
    </button>
  );
}

function TerminalHeader({
  activeSnippet,
  snippets,
  onSnippetSelect,
}: {
  activeSnippet: Snippet;
  snippets: Snippet[];
  onSnippetSelect: (snippet: Snippet) => void;
}) {
  return (
    <div
      className="flex flex-wrap items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-white/10"
      role="toolbar"
      aria-label="Code example controls"
    >
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-red-500/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 rounded-full bg-green-500/90" />
      </div>
      <div className="ml-3 text-xs font-mono text-slate-300/90 truncate">
        {activeSnippet.language} — {activeSnippet.filename}
      </div>
      <div
        className="ml-auto flex items-center gap-1"
        role="tablist"
        aria-label="Code example tabs"
      >
        {snippets.map((snippet) => (
          <TabButton
            key={snippet.id}
            snippet={snippet}
            isActive={snippet.id === activeSnippet.id}
            onSelect={onSnippetSelect}
          />
        ))}
      </div>
    </div>
  );
}

export function Terminal() {
  const [activeSnippet, setActiveSnippet] = useState<Snippet>(SNIPPETS[0]!);
  const customTheme = createCustomTheme();

  return (
    <section className="relative">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl"
        role="region"
        aria-label="Interactive code examples"
        aria-describedby="terminal-description"
      >
        <div id="terminal-description" className="sr-only">
          Interactive terminal showing code examples in different programming
          languages. Use the tabs to switch between Ansible playbooks, Docker
          configurations, and shell scripts.
        </div>
        <TerminalHeader
          activeSnippet={activeSnippet}
          snippets={SNIPPETS}
          onSnippetSelect={setActiveSnippet}
        />
        <div className="relative bg-slate-900/60">
          <div className="max-h-[100px] md:max-h-[44vh] overflow-auto">
            <SyntaxHighlighter
              language={activeSnippet.language}
              style={customTheme}
              wrapLines
              showLineNumbers={true}
              aria-label={`${activeSnippet.language} code example from ${activeSnippet.filename}`}
            >
              {activeSnippet.code}
            </SyntaxHighlighter>
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-900/80 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

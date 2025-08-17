"use client";

import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  children,
  language = "yaml",
  filename,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md shadow-glass overflow-hidden",
        className
      )}
    >
      {filename && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <span className="text-m font-medium text-slate-300/80">
            {filename}
          </span>
        </div>
      )}
      <div className="p-4">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            background: "transparent",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            fontFamily:
              "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
          }}
          codeTagProps={{
            style: {
              fontFamily:
                "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
            },
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

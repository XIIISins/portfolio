"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  className?: string;
  defaultCollapsed?: boolean;
  maxHeight?: string;
}

export function CodeBlock({
  children,
  language = "yaml",
  filename,
  className,
  defaultCollapsed = false,
  maxHeight = "400px",
}: CodeBlockProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md shadow-glass overflow-hidden",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 hover:bg-white/5 rounded transition-colors"
            aria-label={isCollapsed ? "Expand code" : "Collapse code"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-slate-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-400" />
            )}
          </button>
          {filename && (
            <span className="text-m font-medium text-slate-300/80">
              {filename}
            </span>
          )}
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-200 ease-in-out overflow-hidden",
          isCollapsed ? "max-h-0 opacity-0" : "max-h-[800px] opacity-100"
        )}
      >
        <div className="p-4 overflow-auto code-scrollbar" style={{ maxHeight }}>
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
    </div>
  );
}

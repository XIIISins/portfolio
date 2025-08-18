"use client";

import { highlightHtml, type HighlightLanguage } from "@/lib/highlight";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  children: string;
  language?: HighlightLanguage | string;
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
  const lang: HighlightLanguage = (
    language === "sh" ? "shell" : language
  ) as HighlightLanguage;

  const highlightedCode = highlightHtml(children, lang);

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
      {!isCollapsed && (
        <div className="p-4 overflow-auto code-scrollbar" style={{ maxHeight }}>
          <pre className="text-sm leading-relaxed font-mono text-slate-200 m-0 overflow-auto">
            <code
              className={cn("language-" + lang, "whitespace-pre")}
              dangerouslySetInnerHTML={{
                __html: highlightedCode,
              }}
            />
          </pre>
        </div>
      )}
    </div>
  );
}

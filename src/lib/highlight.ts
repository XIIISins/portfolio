import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";

export type HighlightLanguage =
  | "text"
  | "yaml"
  | "docker"
  | "bash"
  | "shell"
  | "json"
  | "typescript"
  | "javascript";

export function highlightHtml(
  code: string,
  language: HighlightLanguage
): string {
  // Don't process if already highlighted
  if (code.includes("<span class=")) {
    return code;
  }

  // Map our language types to Prism language names
  const prismLanguage = language === "shell" ? "bash" : language;

  try {
    // Use Prism.js to highlight the code
    const grammar = Prism.languages[prismLanguage];
    if (grammar && typeof grammar === "object") {
      return Prism.highlight(code, grammar, prismLanguage);
    } else {
      // Fallback to plaintext if language not supported
      const plaintextGrammar = Prism.languages.plaintext;
      if (plaintextGrammar) {
        return Prism.highlight(code, plaintextGrammar, "plaintext");
      } else {
        // Ultimate fallback - just escape HTML
        return code
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
    }
  } catch (error) {
    // Fallback to plain text if highlighting fails
    console.warn(`Failed to highlight ${language} code:`, error);
    return code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
}

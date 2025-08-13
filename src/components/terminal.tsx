import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Terminal() {
  const code = `1. | const express = require('express');
2. | const app = express();
3. |
4. | app.get('/health', (req, res) => {
5. |   res.json({ 
6. |     status: 'ok', 
7. |     timestamp: new Date().toISOString(),
8. |     service: 'Proxy (Node.js)',
9. |     version: '1.0.1'
10.|   });
11.| });`

  // Create a custom style that overrides the oneDark theme's background
  const customStyle = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: 'transparent',
      margin: 0,
      padding: '1.5rem',
      fontSize: '14px',
      lineHeight: '1.6',
      borderRadius: 0,
      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: 'transparent',
      textShadow: 'none',
    },
  }

  return (
    <section className="relative">
      <div className="relative overflow-hidden rounded-xl border border-white/12 bg-black/20 backdrop-blur-sm shadow-2xl">
        {/* Terminal top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm"></span>
            <span className="h-3 w-3 rounded-full bg-green-500 shadow-sm"></span>
          </div>
          <div className="ml-3 text-xs font-mono text-slate-300/90 truncate">js — proxy.js</div>
        </div>

        {/* Code area with syntax highlighting */}
        <div className="relative bg-slate-900/60">
          <div className="max-h-[44vh] overflow-auto">
            <SyntaxHighlighter
              language="javascript"
              style={customStyle}
              showLineNumbers={false}
              wrapLines={true}
              lineNumberStyle={{
                color: '#6b7280',
                fontSize: '12px',
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  )
}

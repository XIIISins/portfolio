export function Terminal() {
  return (
    <section className="relative mt-10 md:mt-14">
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

        {/* Code area with proper terminal styling */}
        <div className="relative bg-slate-900/60">
          <pre className="relative m-0 max-h-[44vh] overflow-auto p-6 text-[14px] leading-relaxed font-mono text-slate-200 whitespace-pre">
{`const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'Proxy (Node.js)',
    version: '1.0.1'
  });
});`}
          </pre>
        </div>
      </div>
    </section>
  )
}

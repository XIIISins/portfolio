import { Button } from '@/components/ui/button'
import { Github, ScrollText } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[min(1200px,92%)] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md shadow-glass">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2d5ce0b3] to-[#2d5ce066] ring-1 ring-white/20">
            <div className="h-6 w-6 text-white justify-center items-center">MJ</div>
          </div>
          <span className="truncate text-sm font-semibold text-white/90 tracking-tight">Myron Janssen</span>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5 transition-colors">Work</a>
          <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5 transition-colors">Code</a>
          <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5 transition-colors">SKills</a>
        </div>

        <div className="flex items-center gap-2 min-w-0">
          <Button variant="outline-glass" size="sm" className="hidden sm:inline-flex gap-2" style={{  background: 'linear-gradient(to bottom right, #2d5ce0, #12D6C7)' }}>
            <Github className="h-4 w-4 text-white/90" />
            <span className="truncate max-w-[160px]">GitHub</span>
          </Button>
          <Button variant="gradient-primary" size="sm" className="gap-2" style={{  background: 'linear-gradient(to bottom right, #2d5ce0, #FF9A2E)' }}>
            <ScrollText className="h-4 w-4" />
            <span className="truncate max-w-[160px] sm:max-w-[220px]">Resume</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}

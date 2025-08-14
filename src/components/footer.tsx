import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 w-[92%] mx-auto md:flex-row mt-14 mb-10">
      <p className="text-xs text-slate-400/80">© 2025 Myron Janssen</p>
      <div className="flex items-center gap-2">
        <Button variant="outline-glass" size="sm" className="gap-2">
          <Github className="h-4 w-4" />
          <span className="truncate max-w-[160px]">GitHub</span>
        </Button>
        <Button variant="outline-glass" size="sm" className="gap-2">
          <Linkedin className="h-4 w-4" />
          <span className="truncate max-w-[160px]">LinkedIn</span>
        </Button>
        <Button variant="outline-glass" size="sm" className="gap-2">
          <Mail className="h-4 w-4" />
          <span className="truncate max-w-[160px]">Contact</span>
        </Button>
        <Button variant="outline-glass" size="sm" className="gap-2">
          <Shield className="h-4 w-4" />
          <span className="truncate max-w-[160px]">Privacy</span>
        </Button>
        <Button variant="outline-glass" size="sm" className="gap-2">
          <FileText className="h-4 w-4" />
          <span className="truncate max-w-[160px]">Terms</span>
        </Button>
      </div>
    </footer>
  );
}

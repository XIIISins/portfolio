import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 w-[92%] mx-auto md:flex-row mt-14 mb-10">
      <p className="text-xs text-slate-400/80">© 2025 Myron Janssen</p>
      <div className="flex items-center gap-2">
        <Button variant="outline-glass" size="sm" className="gap-2">
          <Github className="h-4 w-4" />
          <Link
            href="https://github.com/XIIISins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="truncate max-w-[160px]">GitHub</span>
          </Link>
        </Button>
        <Button variant="outline-glass" size="sm" className="gap-2">
          <Linkedin className="h-4 w-4" />
          <Link
            href="https://www.linkedin.com/in/myron-janssen-60335565/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="truncate max-w-[160px]">LinkedIn</span>
          </Link>
        </Button>
        <Button variant="outline-glass" size="sm" className="gap-2">
          <Mail className="h-4 w-4" />
          <Link href="mailto:contact@myronjanssen.dev">
            <span className="truncate max-w-[160px]">Contact</span>
          </Link>
        </Button>
      </div>
    </footer>
  );
}

import { Code, Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import { CardTitle } from "../../components/ui/card";

export default function SkillsPage() {
  return (
    <main className="relative mx-auto w-[92%] pt-36 md:pt-32">
      <section className="relative">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          My Skills
        </h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg text-slate-300/80">
          Linux/platform engineer who builds calm, reliable systems with
          Ansible/Rundeck/Docker, ships clear runbooks, and turns upgrades into
          paved roads.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="gradient-primary" size="sm" className="mt-4 gap-2">
            <Mail className="h-4 w-4" />
            <span className="truncate max-w-[220px] sm:max-w-none">
              Contact
            </span>
          </Button>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Primary skills & tools
          </h4>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-cyan-300" />
              <CardTitle className="text-lg">
                Enterprise Linux Migration
              </CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Led RHEL 7 to RHEL 9 migration for 500+ servers across
                  multiple environments.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

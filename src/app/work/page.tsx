import { CardTitle } from "@/components/ui/card";
import { Code, Globe, Shield, Zap } from "lucide-react";

export default function WorkPage() {
  return (
    <main className="relative mx-auto w-[92%] pt-36 md:pt-32">
      {/* Hero */}
      <section className="relative">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          My Work & Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
          Platform engineering solutions, automation tools, and infrastructure
          projects.
        </p>
      </section>

      {/* Project Experience */}
      <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Key Projects & Achievements
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
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Implemented automated testing and rollback procedures ensuring
                  zero downtime.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Reduced migration time by 60% through Ansible automation.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="h-5 w-5 text-fuchsia-300" />
              <CardTitle className="text-lg">
                High Availability Infrastructure
              </CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Designed and deployed multi-node MariaDB cluster with 99.99%
                  uptime SLA.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Implemented automated failover and disaster recovery
                  procedures.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>Reduced recovery time from 4 hours to 15 minutes.</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-emerald-300" />
              <CardTitle className="text-lg">Security & Compliance</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Implemented automated security patching and vulnerability
                  scanning.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Developed compliance and hardening automation using Ansible.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Reduced security incidents by 85% through proactive
                  monitoring.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="h-5 w-5 text-orange-300" />
              <CardTitle className="text-lg">Monitoring Optimization</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Reduced monitoring alerts by implementing logic to filter out
                  false positives.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Implemented automated fixes for alerts that were recurring and
                  had documented solutions but no structural fixes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

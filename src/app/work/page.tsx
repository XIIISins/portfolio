import { CardTitle } from "@/components/ui/card";
import { Code, Database, ExternalLink, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function WorkPage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
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
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-cyan-300" />
              <CardTitle className="text-lg">
                Enterprise Linux Migration
              </CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-4">
              <div className="flex flex-col">
                {/* <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span> */}
                <span className="font-semibold text-white">
                  Scope & windows:
                </span>
                <span>All VMs (hypervisor lifecycle owned by infra team).</span>
                <span>
                  Short non-prod windows for testing; no practical prod
                  downtime.
                </span>
              </div>
              <div className="flex flex-col items-start">
                {/* <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span> */}
                <div className="font-semibold text-white">Approach:</div>
                <span>EL9 baseline template (hardened/approved)</span>
                <span>provision per env</span>
                <span>install/config via Ansible</span>
                <span>OS preflights as tasks</span>
                <span>app preflights via Ansible ad-hoc (app-specific)</span>
                <span>rehearsed rollback in test</span>
                <span>blue/green cutover behind loadbalancers or proxies.</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-white">Results:</span>
                <span>No practical downtime in production upgrade</span>
                <span>Rollback plan documented and tested.</span>
                <span>No increase in alert noise post-cutover.</span>
              </div>
            </div>
            <div className="flex mt-4 gap-2 justify-end">
              <div className="flex-1">
                <Button
                  variant="gradient-primary"
                  className="w-1/4.5 gap-2"
                  asChild
                >
                  <Link href="/work/el-upgrade-factory">
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Database className="h-5 w-5 text-fuchsia-300" />
              <CardTitle className="text-lg">
                MariaDB Galera automated rolling updates
              </CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-4">
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  Scope & windows:
                </span>
                <span>
                  Multi-node MariaDB Galera cluster behind a load balancer
                </span>
                <span>
                  Rolling node ops during short windows; no write loss
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">Approach:</span>
                <span>
                  Opinionated lane with tags: preflight → change → validate.
                </span>
                <span>
                  Rolling execution with serial: 1 across the hostgroup;
                  any_errors_fatal: true.
                </span>
                <span>
                  LB drain per node via HAProxy runtime socket; wait until 0
                  live conns (runtime JSON).
                </span>
                <span>
                  wsrep gates before/after: Synced, ready=ON, cluster Primary.
                </span>
                <span>
                  Validate with retries/delays; enable on LB only after gates
                  pass; simple write probe.
                </span>
                <span>
                  Job logs = audit trail; runs pin a git ref for repeatability.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">Results:</span>
                <span>
                  Predictable windows; fewer manual steps; lower incident risk.
                </span>
                <span>
                  Clear pass/fail gates; easy to pause/rollback per node.
                </span>
                <span>Auditable runs (who/what/which ref).</span>
              </div>
              <div className="flex mt-4 gap-2 justify-end">
                <div className="flex-1">
                  <Button
                    variant="gradient-primary"
                    className="w-1/4.5 gap-2"
                    asChild
                  >
                    <Link href="/work/galera-cluster-automation">
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </Link>
                  </Button>
                </div>
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
        </div>
      </section>
    </main>
  );
}

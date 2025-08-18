import { CardTitle } from "@/components/ui/card";
import { Code, Database, ExternalLink, Shield } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export const metadata: Metadata = {
  title: "Work",
  description:
    "No-downtime migrations, MariaDB Galera automation, and calm operations — real runbooks and code receipts.",
};

export default function WorkPage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
      {/* Hero */}
      <section className="relative">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Work
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
          Platform engineering case studies — no-downtime migrations, automated
          DB updates, and calm on-call.
        </p>
      </section>

      {/* Project Experience */}
      {/* <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"> */}
      <section className="mt-8">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
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
                <span>
                  • Build EL9 golden image (hardened/approved); provision
                  env-by-env with Ansible.
                </span>
                <span>
                  • OS/app preflights; rehearsed rollback; blue-green cutover
                  via LB/proxies.
                </span>
                <span>
                  • Post-cutover validation and monitoring; rollback path stays
                  ready.
                </span>
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
                    See rollout plan
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Database className="h-5 w-5 text-fuchsia-300" />
              <CardTitle className="text-lg">MariaDB Automation</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-4">
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  Scope & windows:
                </span>
                <span>
                  Multi-node MariaDB Galera cluster behind a load balancer.
                </span>
                <span>
                  Rolling node ops during short windows; no write loss.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">Approach:</span>
                <span>
                  • Opinionated lane: preflight → change → validate;
                  <p className="font-mono text-xs text-slate-300 inline-block bg-white/15 px-2 rounded-md">
                    serial: 1, any_errors_fatal: true
                  </p>
                  .
                </span>
                <span>
                  • Drain per node via HAProxy socket; promote only when wsrep
                  Synced and ready=ON.
                </span>
                <span>
                  • Health-gated rejoin with retries/timeouts; audit via job
                  logs.
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
                      Read the runbook
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur hover:ring-white/15 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-emerald-300" />
              <CardTitle className="text-lg">Calm Operations</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-4">
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  Scope & windows:
                </span>
                <span>• Mixed estates/tools; mostly Zabbix.</span>
                <span>• Apps varied.</span>
                <span>• Logs centralized across varied stacks.</span>
                <span>
                  • On-call only for P1; P2/P4 routed to tickets/Slack.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">Approach:</span>
                <span>
                  • Predictive disks (TTF ladder); weekday-aware P1; weekend
                  static guard.
                </span>
                <span>
                  • AND-gated paging (e.g., LB 2/3 down = P1) + allow-listed
                  auto-remediation with health checks and cooldowns.
                </span>
                <span>
                  • Event-driven scale-out: add uniquely named instances (no
                  naming collisions) and merge into the app’s backend pool;
                  cooldowns apply.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">Results:</span>
                <span>Fewer false pages; calmer on-call.</span>
                <span>Earlier, clearer severities.</span>
                <span>Known faults self-recover; bursts absorbed.</span>
                <span>No alert floods; full audit via job logs.</span>
              </div>
            </div>
            <div className="flex mt-4 gap-2 justify-end">
              <div className="flex-1">
                <Button
                  variant="gradient-primary"
                  className="w-1/4.5 gap-2"
                  asChild
                >
                  <Link href="/work/calm-operations">
                    <ExternalLink className="h-4 w-4" />
                    See Receipts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

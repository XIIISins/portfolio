import {
  ClipboardCheck,
  Code2,
  Database,
  Mail,
  Server,
  Workflow,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { CardTitle } from "../../components/ui/card";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Linux/KVM, IaC, and ops — Ansible, Rundeck, Docker, monitoring, DR drills, databases, and platform-minded tooling.",
};

export default function SkillsPage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
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
            <Link
              href="mailto:contact@myronjanssen.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="truncate max-w-[220px] sm:max-w-none">
                Contact
              </span>
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Primary skills & tools
          </h4>
        </div>

        {/* 1 col (mobile) → 2 cols (md) → 3 cols (lg) */}
        <div className="mt-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Platforms & Virtualization */}
          <article className="min-w-0 w-full rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Server className="h-5 w-5 text-brand-secondary" />
              <CardTitle className="text-lg">
                Platforms &amp; Virtualization
              </CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Enterprise Linux (RHEL/OL/EL) — major upgrades via versioned
                  templates (e.g., EL7→EL9); minor releases patched in place;
                  documented rollback. (Advanced)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Virtualisation platforms — KVM/OLVM (Proficient); VMware
                  vSphere (Proficient). Templates, host lifecycle,
                  live-migration tests.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Core OS services — systemd · SELinux · firewalld ·
                  storage/networking basics. (Advanced)
                </span>
              </div>
            </div>
          </article>

          {/* Automation & Tooling */}
          <article className="min-w-0 w-full rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <Workflow className="h-5 w-5 text-brand-secondary" />
              <CardTitle className="text-lg">
                Automation &amp; Tooling
              </CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Ansible — roles and idempotent baselines; preflight checks;
                  linted, dry-run-first playbooks; clean inventories/vars.
                  (Advanced)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Rundeck — webhook-triggered, scheduled, and manual jobs; repo
                  sync; staged flows (preflight → run → post-validate); RBAC and
                  messenger/email notifications. (Advanced)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  CI pipelines — Jenkins / GitHub Actions / GitLab CI;
                  lint/test, build + scan images, tag &amp; promote; pre-commit
                  gates wired in. (Proficient)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Docker — multi-stage builds, minimal base, non-root runtime;
                  hardened images; small runtime footprint. (Proficient)
                </span>
              </div>
            </div>
          </article>

          {/* Release & Ops */}
          <article className="min-w-0 w-full rounded-lg border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <ClipboardCheck className="h-5 w-5 text-brand-secondary" />
              <CardTitle className="text-lg">Release &amp; Ops</CardTitle>
            </div>
            <div className="text-sm text-slate-300/80 space-y-2">
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Cutovers &amp; rollback — apps behind load balancers/reverse
                  proxies; blue/green rollbacks by switching traffic; checklists
                  and validation. (Advanced)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Monitoring &amp; alerting — tool-agnostic; deep hours on
                  Zabbix to Apr 2024; also Nagios and others; focus on
                  actionable signals, low noise. (Advanced)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                  aria-hidden="true"
                />
                <span>
                  Backup &amp; restore drills — executed restore drills;
                  verified recovery steps; acted as the technical subject-matter
                  expert (not the primary author of DR runbooks).
                </span>
              </div>
            </div>
          </article>

          {/* Second row — spans all columns only on lg+ */}
          <div className="lg:col-span-3">
            {/* stack on mobile, 2 cols from sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Databases */}
              <article className="min-w-0 w-full rounded-lg border border-white/10 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-brand-secondary" />
                  <CardTitle className="text-lg">Databases</CardTitle>
                </div>
                <div className="text-sm text-slate-300/80 space-y-2">
                  <div className="flex items-start gap-2">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                      aria-hidden="true"
                    />
                    <span>
                      MySQL/MariaDB — designed &amp; implemented HA setups:
                      multi-primary and primary-replica; read/write split;
                      traffic routed via load balancers for multi-write.
                      (Proficient)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                      aria-hidden="true"
                    />
                    <span>
                      PostgreSQL — administration: installation, configuration,
                      database &amp; role management, extension setup;
                      day-to-day maintenance. (Proficient)
                    </span>
                  </div>
                </div>
              </article>

              {/* Software & integrations */}
              <article className="min-w-0 w-full rounded-lg border border-white/10 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="h-5 w-5 text-brand-secondary" />
                  <CardTitle className="text-lg">
                    Software &amp; integrations
                  </CardTitle>
                </div>
                <div className="text-sm text-slate-300/80 space-y-2">
                  <div className="flex items-start gap-2">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                      aria-hidden="true"
                    />
                    <span>
                      TypeScript · React · Next.js — building this site and
                      small web apps; learning-focused and pragmatic; packaging
                      to iOS when needed. (Familiar)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                      aria-hidden="true"
                    />
                    <span>
                      Testing &amp; linters — enforce code quality with
                      ESLint/Prettier, pre-commit hooks, and CI gates; fail-fast
                      pipelines over ceremony. (Proficient)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                      aria-hidden="true"
                    />
                    <span>
                      Python — Ansible plugins/callbacks to securely integrate
                      systems without native support (Password Managers, IPAM,
                      etc.); REST API clients and glue tooling. (Proficient)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                      aria-hidden="true"
                    />
                    <span>
                      Systems messaging — co-developed the original alerting
                      service in C; co-developed the Perl refactor; later helped
                      maintain logic during the JS/TS refactor (service windows,
                      on-call escalation matrix). (Familiar)
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

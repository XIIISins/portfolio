import { Terminal } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform engineer building calm systems and paved-road automation.",
  description:
    "Platform engineer focused on product-team platform/SRE work — calm systems, paved-road automation, and low-noise operations.",
};

const about = `
I build calm systems and useful little tools.
Linux-first on KVM/OLVM/VMware.
Ansible, Rundeck, Docker; simple, readable pipelines.
Prefer clarity: tidy cutovers, tested rollback, clear docs.
Monitoring-agnostic; most hours on Zabbix to Apr '24, happy to adapt.
Current focus: internal platform work for product teams (non-MSP).
Off-hours: coffee, trails, a bit of tinkering.
`;

export default function HomePage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
      {/* Hero */}
      <section className="relative" aria-labelledby="hero-heading">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
        >
          Platform engineer. Calm systems, paved roads.
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
          Fewer contexts, calmer ops; internal platforms (non-MSP).
        </p>
      </section>

      {/* Terminal and About Section */}
      <section className="mt-10 md:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Terminal - takes 2/3 of the space */}
        <div className="lg:col-span-2">
          <Terminal />
        </div>

        {/* About - takes 1/3 of the space */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="h-8 w-8 py-4 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-sm font-semibold text-white">MJ</span>
                </div>
                <h2 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
                  About
                </h2>
              </div>
              <Button
                variant="gradient-primary"
                size="sm"
                className="gap-2"
                asChild
              >
                <Link
                  href="mailto:contact@myronjanssen.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send email to contact@myronjanssen.dev (opens in new tab)"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="truncate max-w-[220px] sm:max-w-none">
                    Contact
                  </span>
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-200/90 leading-relaxed">
                {about}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-300/80">
                  <span
                    className="inline-flex h-2 w-2 rounded-full bg-brand-secondary"
                    aria-hidden="true"
                  ></span>
                  <span>Based in the Netherlands</span>
                  <span
                    className="inline-flex h-2 w-2 rounded-full bg-brand-secondary"
                    aria-hidden="true"
                  ></span>
                  <span>Remote-first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards
      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-brand-secondary" />
              <CardTitle>Linux Platform & Virtualization</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              RHEL/OL, VMware/OLVM, capacity & performance
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Workflow className="h-4 w-4 text-brand-accent" />
              <CardTitle>Automation & IaC</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>Ansible, Terraform, Bash/Python</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-brand-secondary" />
              <CardTitle>Databases</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              MySQL/MariaDB HA (replication, multi-master), PostgreSQL
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Binoculars className="h-4 w-4 text-brand-secondary" />
              <CardTitle>Reliability & Observability</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              SRE practices, Zabbix, runbooks, incident response
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <History className="h-4 w-4 text-brand-secondary" />
              <CardTitle>Backup & DR</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              XtraBackup, Veeam, RMAN, PITR, recovery drills
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GitMerge className="h-4 w-4 text-brand-secondary" />
              <CardTitle>CI/CD & Software Development</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Jenkins, Rundeck, GitHub Actions, code quality, TypeScript/Node,
              Docker
            </CardDescription>
          </CardContent>
        </Card>
      </section> */}

      <section
        className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
        aria-labelledby="experience-heading"
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2
            id="experience-heading"
            className="text-base md:text-lg font-semibold tracking-tight text-white/90"
          >
            Professional experience
          </h2>
        </div>
        <div
          className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-4"
          role="list"
          aria-label="Professional experience timeline"
        >
          <div
            className="rounded-lg border border-white/10 p-3"
            role="listitem"
          >
            <div className="flex items-center justify-between gap-3">
              <CardTitle>SORSIT</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full bg-brand-accent"
                aria-hidden="true"
              ></span>
            </div>
            <div className="text-sm text-slate-300/80">
              <div>
                <span className="text-s text-slate-300/80">Linux Engineer</span>
              </div>
              <div>
                <span className="text-xs text-slate-300/80">2024-present</span>
              </div>
              <ul className="space-y-1" aria-label="Key achievements at SORSIT">
                <li className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span
                    className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    Lead Linux upgrade projects for enterprise customers.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span
                    className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                    aria-hidden="true"
                  ></span>
                  <span>Implemented high-availability OLVM environments.</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span
                    className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    Upgrade existing OLVM environments for improved performance
                    and reliability.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span
                    className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"
                    aria-hidden="true"
                  ></span>
                  <span>
                    Built custom Ansible interface to integrate with ZohoVault.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-lg border border-white/10 p-3"
            role="listitem"
          >
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Accenture</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full bg-brand-accent"
                aria-hidden="true"
              ></span>
            </div>
            <div className="text-sm text-slate-300/80">
              <div>
                <span className="text-s text-slate-300/80">IT Analyst</span>
              </div>
              <div>
                <span className="text-xs text-slate-300/80">2023-2024</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>
                  Maintained and optimized infrastructure for internal systems.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>Implemented automation with Ansible.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>
                  Supported containerized workloads on virtual machines.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>
                  Assisted in modernization initiatives for internal systems.
                </span>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg border border-white/10 p-3"
            role="listitem"
          >
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Sentia</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full bg-brand-orange"
                aria-hidden="true"
              ></span>
            </div>
            <div className="text-sm text-slate-300/80">
              <div>
                <span className="text-s text-slate-300/80">IT Consultant</span>
              </div>
              <div>
                <span className="text-xs text-slate-300/80">2015-2023</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>Managed VMware environments ensuring 99.9%+ uptime.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>
                  Automated provisioning, configuration management and
                  maintenance of systems using Ansible and Bash.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>Deployed HA services with HAProxy and Keepalived.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>Monitored systems with Zabbix.</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg border border-white/10 p-3"
            role="listitem"
          >
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Yenlo</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full bg-brand-primary"
                aria-hidden="true"
              ></span>
            </div>
            <div className="text-sm text-slate-300/80">
              <div>
                <span className="text-s text-slate-300/80">Consultant</span>
              </div>
              <div>
                <span className="text-xs text-slate-300/80">2012-2015</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>
                  Provided system administration and automation support for
                  internal and client environments.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>
                  Deployed and maintained Apache/Nginx web servers and backend
                  databases.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent"></span>
                <span>
                  Participated in infrastructure modernization projects.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

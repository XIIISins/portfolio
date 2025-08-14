import { Terminal } from "@/components/terminal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Binoculars,
  Database,
  GitMerge,
  History,
  Server,
  Workflow,
} from "lucide-react";

const about = `
I build calm systems and useful little tools.
Linux-first: RHEL/OL/EL on KVM/OLVM/VMware.
Ansible, Rundeck, Docker; simple pipelines.
Prefer clarity: tidy cutovers, readable docs.
Monitoring-agnostic; most time with Zabbix
(through Apr 2024), happy to adapt.
Alerts that matter; noise kept low.
Off-hours: coffee, trails, a bit of tinkering.
`;

export default function HomePage() {
  return (
    <main className="relative mx-auto w-[92%] pt-36 md:pt-32">
      {/* Hero */}
      <section className="relative">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Platform Engineer building paved roads for developers.
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
          Linux/KVM, IaC, and product-minded automation.
        </p>

        {/* <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="gradient-primary">
              <Play className="h-4 w-4" />
              <span className="truncate max-w-[220px] sm:max-w-none">Live demo</span>
            </Button>
            <Button variant="outline-glass">
              <FileText className="h-4 w-4" />
              <span className="truncate max-w-[240px] sm:max-w-none">Read the guide with a reasonably long title</span>
            </Button>
          </div> */}
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
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">MJ</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
                About
              </h4>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-300/80 leading-relaxed">
                {about}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-300/80">
                  <span
                    className="inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#12D6C7" }}
                  ></span>
                  <span>Based in the Netherlands</span>
                  {/* </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300/80"> */}
                  <span
                    className="inline-flex h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#12D6C7" }}
                  ></span>
                  <span>Remote-first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-cyan-300" />
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
              <Workflow className="h-4 w-4 text-fuchsia-300" />
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
              <Database className="h-4 w-4 text-emerald-300" />
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
              <Binoculars className="h-4 w-4 text-emerald-300" />
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
              <History className="h-4 w-4 text-emerald-300" />
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
              <GitMerge className="h-4 w-4 text-emerald-300" />
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
      </section>

      <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Professional experience
          </h4>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-4">
          <div className="rounded-lg border border-white/10 p-3">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>SORSIT</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full"
                style={{ backgroundColor: "#a100ff" }}
              ></span>
            </div>
            <div className="text-sm text-slate-300/80">
              <div>
                <span className="text-s text-slate-300/80">Linux Engineer</span>
              </div>
              <div>
                <span className="text-xs text-slate-300/80">2024-present</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Lead Linux upgrade projects for enterprise customers.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>Implemented high-availability OLVM environments.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Upgrade existing OLVM environments for improved performance
                  and reliability.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Built custom Ansible interface to integrate with ZohoVault.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-3">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Accenture</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full"
                style={{ backgroundColor: "#a100ff" }}
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
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Maintained and optimized infrastructure for internal systems.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>Implemented automation with Ansible.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Supported containerized workloads on virtual machines.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Assisted in modernization initiatives for internal systems.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-3">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Sentia</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full"
                style={{ backgroundColor: "#ffb423" }}
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
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>Managed VMware environments ensuring 99.9%+ uptime.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Automated provisioning, configuration management and
                  maintenance of systems using Ansible and Bash.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>Deployed HA services with HAProxy and Keepalived.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>Monitored systems with Zabbix.</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 p-3">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>Yenlo</CardTitle>
              <span
                className="inline-flex h-3 w-3 rounded-full"
                style={{ backgroundColor: "#5793db" }}
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
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Provided system administration and automation support for
                  internal and client environments.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
                <span>
                  Deployed and maintained Apache/Nginx web servers and backend
                  databases.
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300/80">
                <span
                  className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "#E02DB7" }}
                ></span>
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

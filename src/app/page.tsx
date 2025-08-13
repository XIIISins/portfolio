import { Background } from '@/components/background'
import { Navbar } from '@/components/navbar'
import { Terminal } from '@/components/terminal'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Flame, Github, Layers, Mail, MoveHorizontal, Play, Rocket, Shield, Sparkles, Zap, Linkedin } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="relative mx-auto w-[min(1200px,92%)] pt-36 md:pt-40">
        {/* Hero */}
        <section className="relative">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Senior Platform / Infrastructure Engineer → Software / SRE
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
            Portfolio showcasing systems work, developer tooling, and reliability engineering — now pivoting deeper into software and SRE.
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

        <Terminal />

        {/* Cards */}
        <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-cyan-300" />
                <CardTitle>Linux Platform & Virtualization</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>RHEL/OL, VMware/OLVM, capacity & performance</CardDescription>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-fuchsia-300" />
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
                <MoveHorizontal className="h-4 w-4 text-emerald-300" />
                <CardTitle>Databases</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>MySQL/MariaDB HA (replication, multi-master), PostgreSQL</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MoveHorizontal className="h-4 w-4 text-emerald-300" />
                <CardTitle>Reliability & Observability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>SRE practices, Zabbix, runbooks, incident response</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MoveHorizontal className="h-4 w-4 text-emerald-300" />
                <CardTitle>Backup & DR</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>XtraBackup, Veeam, RMAN, PITR, recovery drills</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MoveHorizontal className="h-4 w-4 text-emerald-300" />
                <CardTitle>CI/CD & Software Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Jenkins, Rundeck, GitHub Actions, code quality, TypeScript/Node, Docker</CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">Professional experience</h4>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-4">
            <div className="rounded-lg border border-white/10 p-3">
              <div className="flex items-center justify-between gap-3">
                  <CardTitle>SORSIT</CardTitle>
                  <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: '#a100ff' }}></span>
              </div>
              <div className="text-sm text-slate-300/80">
                  <div>
                    <span className="text-s text-slate-300/80">Linux Engineer</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-300/80">2024-present</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300/80">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                    <span>Lead Linux upgrade projects for enterprise customers.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300/80">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                    <span>Implemented high-availability OLVM environments.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300/80">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                    <span>Upgrade existing OLVM environments for improved performance and reliability.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300/80">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                    <span>Built custom Ansible interface to integrate with ZohoVault.</span>
                  </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-3">
              <div className="flex items-center justify-between gap-3">
                <CardTitle>Accenture</CardTitle>
                <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: '#a100ff' }}></span>
              </div>
              <div className="text-sm text-slate-300/80">
                <div>
                  <span className="text-s text-slate-300/80">IT Analyst</span>
                </div>
                <div>
                  <span className="text-xs text-slate-300/80">2023-2024</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Maintained and optimized infrastructure for internal systems.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Implemented automation with Ansible.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Supported containerized workloads on virtual machines.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Assisted in modernization initiatives for internal systems.</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-3">
              <div className="flex items-center justify-between gap-3">
                <CardTitle>Sentia</CardTitle>
                <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: '#ffb423' }}></span>
              </div>
              <div className="text-sm text-slate-300/80">
                <div>
                  <span className="text-s text-slate-300/80">IT Consultant</span>
                </div>
                <div>
                  <span className="text-xs text-slate-300/80">2015-2023</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Managed VMware environments ensuring 99.9%+ uptime.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Automated provisioning, configuration management and maintenance of systems using Ansible and Bash.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Deployed HA services with HAProxy and Keepalived.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Monitored systems with Zabbix.</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-3">
              <div className="flex items-center justify-between gap-3">
                <CardTitle>Yenlo</CardTitle>
                <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: '#5793db' }}></span>
              </div>
              <div className="text-sm text-slate-300/80">
                <div>
                  
                  <span className="text-s text-slate-300/80">Consultant</span>
                </div>
                <div>
                  <span className="text-xs text-slate-300/80">2012-2015</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Provided system administration and automation support for internal and client environments.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Deployed and maintained Apache/Nginx web servers and backend databases.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300/80">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#E02DB7' }}></span>
                  <span>Participated in infrastructure modernization projects.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary accent examples */}
        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">Secondary accent examples</h4>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-300/80">Primary: #2d5ce0</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Secondary: #E02DB7 */}
            <div className="rounded-lg border border-white/10 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300/80">Secondary #E02DB7</span>
                <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: '#E02DB7' }}></span>
              </div>
              <Button variant="gradient-primary" className="mt-3 w-full" style={{ background: 'linear-gradient(to bottom right, #2d5ce0, #E02DB7)' }}>
                <Zap className="h-4 w-4" />
                <span>Primary + Secondary</span>
              </Button>
            </div>

            {/* Secondary: #12D6C7 */}
            <div className="rounded-lg border border-white/10 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300/80">Secondary #12D6C7</span>
                <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: '#12D6C7' }}></span>
              </div>
              <Button variant="gradient-primary" className="mt-3 w-full">
                <Sparkles className="h-4 w-4" />
                <span>Primary + Secondary</span>
              </Button>
            </div>

            {/* Secondary: #FF9A2E */}
            <div className="rounded-lg border border-white/10 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300/80">Secondary #FF9A2E</span>
                <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: '#FF9A2E' }}></span>
              </div>
              <Button variant="gradient-primary" className="mt-3 w-full" style={{ background: 'linear-gradient(to bottom right, #2d5ce0, #FF9A2E)' }}>
                <Flame className="h-4 w-4" />
                <span>Primary + Secondary</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
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
      </main>
    </>
  )
}

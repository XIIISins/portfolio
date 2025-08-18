import { CodeBlock } from "@/components/ui/code-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calm operations",
  description:
    "Signals, not noise: predictive alerts, AND-gated paging, and safe auto-remediation with Zabbix→Rundeck→Ansible.",
};

export default function CalmOperationsPage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Calm operations
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
          Signals, recovery, low noise
        </p>
      </section>

      {/* Scope & windows */}
      <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            tl;dr
          </h4>
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-300/80">
            Predictive disk alerts, multi-signal gating, contract-aware paging,
            and safe automation:
          </p>
          <p className="text-sm text-slate-300/80">
            allow-listed auto-restarts and event-driven scale-out (golden image
            → configure → health → join LB).
          </p>
          <p className="text-sm text-slate-300/80">
            Fewer false pages; quieter on-call.
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Scope & windows
          </h4>
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-300/80">
            Mixed estates/tools; mostly Zabbix
          </p>
          <p className="text-sm text-slate-300/80">
            Apps varied; logs shipped centrally (not always journald).
          </p>
        </div>

        {/* Role */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Role
          </h4>
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-300/80">
            Implementer/SME: added checks, integrations, tuned alert policy
          </p>
        </div>

        {/* Approach */}
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Approach
          </h4>
        </div>
        <div className="mt-4">
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm font-bold text-slate-300/80">
              Predictive disks:
            </span>
            <span className="text-sm text-slate-300/80">
              <span className="italic">time-to-full (TTF)</span> with a severity
              ladder.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <div className="text-sm text-slate-300/80 space-y-1">
              <div>• P4 warning: TTF &lt; 14d (service desk FIFO).</div>
              <div>
                • P2 high: TTF &lt; 7d (prioritised ticket, no on-call).
              </div>
              <div>
                • P1 crit (weekday-aware):
                <div className="ml-4 mt-1 space-y-1">
                  <div>
                    • Fri 08:00–18:00: TTF &lt; 3d (gives runway pre-weekend).
                  </div>
                  <div>• Mon–Thu: TTF &lt; 1d.</div>
                  <div>
                    • Weekend: no TTF P1; rely on static &lt;5% free emergency
                    trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <div className="text-sm text-slate-300/80 space-y-1">
              <div>
                <span className="font-bold">Multi-signal LB gating:</span> only
                page when impact is likely (e.g., 2/3 backends down = P1, 1/3
                down = P2).
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <div className="text-sm text-slate-300/80">
              <span className="font-bold">Auto-remediation:</span> Zabbix Action
              → Rundeck webhook to restart known-safe services on the failed
              backend;
            </div>
            <div className="text-sm text-slate-300/80">full audit.</div>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              <span className="font-bold">Event-driven scale:</span> Triggered
              by monitoring, prolonged increased load triggers scale-out.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              <span className="font-bold">Deploy hygiene:</span> playbooks
              create monitoring maintenance via API.
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Results
          </h4>
        </div>
        <div className="mt-4">
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              “Disk full” late pages disappeared; priority escalates earlier,
              calmly.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              LB incidents escalate only when user impact is likely.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Known recurring faults self-heal; humans paged for true P1s.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              No alert floods during maintenance; on-call calmer after releases.
            </span>
          </div>
        </div>

        {/*confidentiality*/}
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Confidentiality
          </h4>
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-300/80">
            Client artifacts can&apos;t be shared.
          </p>
          <p className="text-sm text-slate-300/80">
            Examples are anonymized and recreated; configs, names, and IPs are
            placeholders.
          </p>
          <p className="text-sm text-slate-300/80">
            Receipts use the actual stack and are representative.
          </p>
        </div>

        {/*Code Snippets*/}
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Code snippets
          </h4>
        </div>
        <div className="mt-4">
          <div className="text-sm font-bold text-slate-300/80 pt-2 pb-4">
            Predictive disks (TTF ladder in Zabbix)
          </div>
          <CodeBlock
            defaultCollapsed={true}
            filename="Zabbix - Trigger"
            language="text"
          >{`# Items: vfs.fs.size[{#FSNAME},free] and vfs.fs.size[{#FSNAME},pfree]
# P1 (weekday-aware)
( dayofweek()=5 and time()>080000 and time()<180000 and
  timeleft(/{HOST.NAME}/vfs.fs.size[{#FSNAME},free],7d,0)<3d and timeleft(/{HOST.NAME}/...,7d,0)<>-1 )
or
( dayofweek()<5 and
  timeleft(/{HOST.NAME}/vfs.fs.size[{#FSNAME},free],7d,0)<1d and timeleft(/{HOST.NAME}/...,7d,0)<>-1 )
# P2: timeleft < 7d:
timeleft(/{HOST.NAME}/vfs.fs.size[{#FSNAME},free],7d,0)<7d
and timeleft(/{HOST.NAME}/vfs.fs.size[{#FSNAME},free],7d,0)<>-1

# P4: timeleft < 14d:
timeleft(/{HOST.NAME}/vfs.fs.size[{#FSNAME},free],7d,0)<14d
and timeleft(/{HOST.NAME}/vfs.fs.size[{#FSNAME},free],7d,0)<>-1

# Weekend emergency: 
last(/{HOST.NAME}/...pfree)<5`}</CodeBlock>
        </div>

        <div className="mt-4">
          <div className="text-sm font-bold text-slate-300/80 pt-2 pb-4">
            LB multi-signal gating (concept)
          </div>
          <CodeBlock
            defaultCollapsed={true}
            filename="Zabbix - Trigger"
            language="text"
          >{`# HIGH (P2): 2/3 OK, 1 down (example with TCP checks)
{lb:net.tcp.service[http,10.0.0.1,80].last()}=1 and
{lb:net.tcp.service[http,10.0.0.2,80].last()}=1 and
{lb:net.tcp.service[http,10.0.0.3,80].last()}=0

# CRIT (P1): 1/3 OK, 2 down
{lb:net.tcp.service[http,10.0.0.1,80].last()}=1 and
{lb:net.tcp.service[http,10.0.0.2,80].last()}=0 and
{lb:net.tcp.service[http,10.0.0.3,80].last()}=0`}</CodeBlock>
        </div>

        <div className="mt-4">
          <div className="text-sm font-bold text-slate-300/80 pt-2 pb-4">
            Allow-listed auto-remediation (manifest + Rundeck webhook)
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Zabbix - Action payload"
              language="text"
            >{`// Zabbix → Rundeck webhook payload (Action)
// POST /api/44/job/7b7e0e2e-9d7a-4f9a-9c2b-allowlist-restart/run
// Headers: X-Rundeck-Auth-Token: <TOKEN>, Content-Type: application/json
// Body:
{
  "options": {
    "env":        "{EVENT.TAGS.env}",
    "customer":   "{EVENT.TAGS.customer}",
    "target_host":"{HOST.NAME}",
    "service":    "{EVENT.TAGS.service}"
  }
} `}</CodeBlock>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Ansible - customer/ops/manifest.yml"
              language="yaml"
            >{`# /srv/ops/<customer>/manifest.yml
services:
  web:
    auto_restart: true
    service_name: "web"
    health_url: "http://localhost/health"
    cooldown_s: 600           # 10 minutes
    window_s: 3600            # 1 hour
    max_per_window: 3         # no more than 3 restarts/hour
  worker:
    auto_restart: false`}</CodeBlock>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Ansible - remediate.yml"
              language="yaml"
              maxHeight="500px"
            >{`# remediate.yml
# Remediate Service (allow-list + safety rails)
- hosts: "{{ target_host }}"
  become: true
  gather_facts: false
  vars_files:
    - "/srv/ops/{{ customer }}/manifest.yml"
  vars:
    svc_def: "{{ services[service] | default({}) }}"
    svc_name: "{{ svc_def.service_name | default(service) }}"
    health_url: "{{ svc_def.health_url | default('http://localhost/health') }}"
    cooldown_s: "{{ svc_def.cooldown_s | default(600) }}"     # 10m default
    window_s:   "{{ svc_def.window_s   | default(3600) }}"    # 1h default
    max_per_window: "{{ svc_def.max_per_window | default(3) }}"
    stamp_dir: "/var/lib/auto-remediation"
    stamp_file: "{{ stamp_dir }}/{{ svc_name }}.stamp"
    history_file: "{{ stamp_dir }}/{{ svc_name }}.history"
    now: "{{ ansible_date_time.epoch | int }}"

  tasks:
    - name: Allow-list must permit restart
      assert:
        that:
          - "svc_def.auto_restart | default(false)"
        fail_msg: "Blocked by manifest: {{ service }}"

    - name: Ensure state dir exists
      file: { path: "{{ stamp_dir }}", state: directory, mode: "0750" }

    - name: Check last remediation timestamp (cooldown)
      stat:
        path: "{{ stamp_file }}"
      register: stamp

    - name: Enforce cooldown
      assert:
        that:
          - "stamp.stat.exists | default(false) == false or (now - (stamp.stat.mtime|int)) >= cooldown_s"
        fail_msg: "Cooldown active for {{ svc_name }} (wait {{ cooldown_s - (now - (stamp.stat.mtime|int)) }}s)"
      when: stamp.stat.exists | default(false)

    - name: Read history file if present
      slurp:
        path: "{{ history_file }}"
      register: hist_raw
      when: "'exists' in (lookup('vars','history_stat', default={}))"
      ignore_errors: true

    - name: Load history (timestamps) safely
      set_fact:
        hist_lines: "{{ (hist_raw.content | default('') | b64decode).splitlines() if hist_raw is defined else [] }}"

    - name: Prune history to window and enforce rate limit
      set_fact:
        recent: "{{ hist_lines | map('int') | select('>=', now - window_s) | list }}"
    - name: Rate limit guard
      assert:
        that: "recent | length < max_per_window"
        fail_msg: "Restart cap reached: {{ recent|length }}/{{ max_per_window }} within {{ window_s }}s"

    - name: Restart service
      systemd:
        name: "{{ svc_name }}"
        state: restarted

    - name: Health check (retry)
      uri:
        url: "{{ health_url }}"
        status_code: 200
        validate_certs: false
      register: h
      retries: 3
      delay: 5
      until: h.status == 200

    - name: Touch cooldown stamp
      file: { path: "{{ stamp_file }}", state: touch }

    - name: Append timestamp to history
      lineinfile:
        path: "{{ history_file }}"
        line: "{{ now }}"
        create: true
        mode: "0640"`}</CodeBlock>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Rundeck - remediate-job.yml"
              language="yaml"
            >{`# Direct 
- group: ops/auto-remediation
  name: Remediate Service (allow-list)
  uuid: 7b7e0e2e-9d7a-4f9a-9c2b-allowlist-restart
  description: >
    Restart a service only if allowed in the customer manifest, then health-check.
  loglevel: INFO
  executionEnabled: true
  scheduleEnabled: true
  nodeFilterEditable: false
  sequence:
    keepgoing: false
    commands:
      - exec: >
          ansible-playbook -i inv/\${option.env} remediate.yml
          -l \${option.target_host}
          -e customer=\${option.customer}
          -e target_host=\${option.target_host}
          -e service=\${option.service}
  options:
    - name: env
      values: [dev, test, prod]
      required: true
    - name: customer
      required: true
    - name: target_host
      required: true
    - name: service
      required: true`}</CodeBlock>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm font-bold text-slate-300/80 pt-2 pb-4">
            Event-driven scale-in/out (provision → configure → validate → LB)
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Zabbix - Trigger"
              language="text"
            >{`# Trigger (AND-gated example)
min(/app/cpu.util[5m],5m)>80 and
percentile(/app/http.latency[p95],5m)>400 and
min(/app/queue.depth,5m)>100
# → Action: call Rundeck "scale_out" with app/env`}</CodeBlock>
            <CodeBlock
              defaultCollapsed={true}
              filename="Zabbix - Payload"
              language="json"
            >
              {`{
  "options": {
    "env":        "{EVENT.TAGS.env}",
    "customer":   "{EVENT.TAGS.customer}",
    "app":        "{EVENT.TAGS.app}",
    "count":      "1"
  }
}`}
            </CodeBlock>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Shell - name_gen.sh"
              language="bash"
            >{`# Naming: <cust>-<role>-<uuid8>  (marks temp/scale unit, avoids collisions)
cust="$CUSTOMER"; role="web"; uuid=$(uuidgen | cut -c1-8)
name="\${cust}-\${role}-\${uuid}" ; echo "$name"
`}</CodeBlock>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Ansible - scale_precheck.yml"
              language="yaml"
              maxHeight="600px"
            >{`# scale_precheck.yml — cooldown + capacity before any changes
- hosts: localhost
  connection: local
  gather_facts: false
  vars:
    stamp_dir: "/var/run/scale-out/{{ customer }}"
    stamp_file: "{{ stamp_dir }}/last.scale"
    now: "{{ ansible_date_time.epoch | int }}"
  tasks:
    - file: { path: "{{ stamp_dir }}", state: directory, mode: "0750" }

    - stat: { path: "{{ stamp_file }}" }
      register: s

    - name: Enforce cooldown
      assert:
        that:
          - "s.stat.exists is not defined or (now - (s.stat.mtime | default(0) | int)) >= (cooldown_s | int)"
        fail_msg: "Cooldown active. Wait {{ (cooldown_s|int) - (now - (s.stat.mtime|default(0)|int)) }}s"

    - name: Count current nodes for this app (inventory-based)
      command: ansible-inventory -i inv/{{ env }} --list
      register: inv
      changed_when: false

    - set_fact:
        inv_json: "{{ inv.stdout | from_json }}"
    - set_fact:
        current: "{{ (inv_json | json_query('groups.' ~ app ~ '.|length')) | default(0) | int }}"

    - name: Enforce max_nodes
      assert:
        that: "current + (count | int) <= (max_nodes | int)"
        fail_msg: "Refusing scale: current={{ current }}, requested={{ count }}, max={{ max_nodes }}"

    - name: Check IP pool capacity (placeholder)
      assert:
        that: "'ip_pool' in ip_pool"
        fail_msg: "No IP pool check implemented; wire to IPAM or pool service."

    - file: { path: "{{ stamp_file }}", state: touch }
      when: dry_run | bool == false`}</CodeBlock>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Rundeck - scale-out-job.yml"
              language="yaml"
              maxHeight="600px"
            >
              {`- group: ops/scale
  name: Scale Out (golden image → configure → validate → LB)
  uuid: 8f3a4c75-0c5b-4c1d-9a6d-scale-out-job
  loglevel: INFO
  executionEnabled: true
  scheduleEnabled: true
  multipleExecutions: false
  nodeFilterEditable: false

  options:
    - { name: env, values: [dev, test, prod], required: true }
    - { name: customer, required: true }
    - { name: app, required: true, description: "Application/service key" }
    - { name: count, value: "1", values: ["1","2","3"] }
    - { name: ip_pool, required: true, description: "Customer IP pool key/CIDR" }
    - { name: lb_group, value: "lb" }
    - { name: backend, required: false, description: "Default: <app>-backend" }
    - { name: backend_prefix, required: false, description: "Default: <app>-backend-" }
    - { name: cooldown_s, value: "900" }
    - { name: max_nodes,  value: "6" }
    - { name: dry_run, value: "false", values: ["true","false"] }
  sequence:
    keepgoing: false
    commands:
      # 0) Safety
      - exec: >
          ansible-playbook -i inv/\${option.env} scale_precheck.yml
          -e env=\${option.env}
             customer=\${option.customer}
             app=\${option.app}
             cooldown_s=\${option.cooldown_s}
             max_nodes=\${option.max_nodes}
             ip_pool=\${option.ip_pool}
             dry_run=\${option.dry_run}

      # 1) Provision N nodes — name prefix "<customer>-<app>-"
      - exec: >
          ansible-playbook -i inv/\${option.env} provision.yml
          -e customer=\${option.customer}
             app=\${option.app}
             count=\${option.count}
             ip_pool=\${option.ip_pool}
             name_prefix=\${option.customer}-\${option.app}-

      # 2) Configure
      - exec: >
          ansible-playbook -i inv/\${option.env} configure.yml
          -e app=\${option.app} customer=\${option.customer}

      # 3) Validate
      - exec: >
          ansible-playbook -i inv/\${option.env} validate.yml
          -e app=\${option.app} customer=\${option.customer}

      # 4) Join HAProxy
      - exec: >
          ansible-playbook -i inv/\${option.env} lb_join.yml
          -l \${option.lb_group}
          -e customer=\${option.customer}
             app=\${option.app}
             backend={{ "\${option.backend:-" }}\${option.app}{{ "-backend" }}{{ "\" }}" }}
             backend_prefix={{ "\${option.backend_prefix:-" }}\${option.app}{{ "-backend-" }}{{ "\" }}" }}
`}
            </CodeBlock>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Ansible - provision.yml"
              language="yaml"
              maxHeight="600px"
            >
              {`# expects: name_prefix, count, ip_pool, app
- hosts: localhost
  connection: local
  gather_facts: false
  vars:
    uuid8: "{{ lookup('password','/dev/null length=8 chars=hex') }}"
  tasks:
    - name: Build instance names
      set_fact:
        new_names: "{{ (new_names|default([])) + [ name_prefix ~ lookup('password','/dev/null length=8 chars=hex') ] }}"
      loop: "{{ range(0, count|int)|list }}"
      loop_control: { label: "{{ item }}" }

    # Allocate IPs from pool (stub; wire to IPAM if you have one)
    - set_fact:
        new_nodes: "{{ new_nodes|default([]) + [ { 'name': item, 'ip': 'POOL_ALLOCATED_IP' } ] }}"
      loop: "{{ new_names }}"

    # Create instances (cloud/kvm/vmware module here)
    # ...

    # Add to inventory group for app so configure/validate pick them up
    - add_host:
        name: "{{ item.name }}"
        groups: "{{ app }}"
        ansible_host: "{{ item.ip }}"
      loop: "{{ new_nodes }}"`}
            </CodeBlock>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Ansible - lb_join.yml"
              language="yaml"
              maxHeight="600px"
            >
              {`# lb_join.yml — discover → merge → render; fail-closed
- hosts: "{{ lb_group }}"
  become: true
  gather_facts: false
  vars:
    haproxy_socket: "/run/haproxy/admin.sock"
    haproxy_cfg: "/etc/haproxy/haproxy.cfg"
    haproxy_tmp: "/etc/haproxy/haproxy.cfg.new"
    check_retries: 30
    check_delay: 5
    promote_new: "{{ promote_new | default(true) }}"
  tasks:
    - name: Assert required vars
      assert:
        that:
          - new_backend is defined
          - backend_prefix is defined
        fail_msg: "Need 'new_backend' and 'backend_prefix' (e.g., app-backend-)"

    - name: Detect currently active backend (from config)
      command: awk '/^[ \t]*default_backend[ \t]+/ {print $2; exit}' {{ haproxy_cfg }}
      register: active_line
      changed_when: false

    - set_fact:
        old_backend: "{{ active_line.stdout | trim }}"
        declared_backends: "{{ backends | default([]) | list }}"

    - name: Discover backends via runtime JSON (matching prefix)
      shell: |
        printf 'show stat json\n' | socat - {{ haproxy_socket }} \
        | jq -r --arg p "{{ backend_prefix }}" '
            [ .[] | select(.svname=="BACKEND" and (.pxname|startswith($p))) | .pxname ]
            | unique | .[]'
      args: { executable: /bin/bash }
      register: discovered
      changed_when: false
      failed_when: false

    - name: Fallback discover via config (matching prefix)
      shell: awk '/^[ \t]*backend[ \t]+/ {print $2}' {{ haproxy_cfg }} | grep -E '^{{ backend_prefix }}'
      register: discovered_cfg
      changed_when: false
      failed_when: false
      when: discovered.rc != 0 or discovered.stdout == ""

    - set_fact:
        discovered_backends: >-
          {{ (discovered.stdout_lines if (discovered.rc==0 and discovered.stdout|length>0)
              else (discovered_cfg.stdout_lines|default([]))) | list }}

    - name: Build merged backend list (unique, stable)
      set_fact:
        backends_all: >-
          {{ (discovered_backends + declared_backends + [new_backend]) | unique }}

    - name: Safety — new_backend must differ from active
      assert:
        that: "new_backend != old_backend"
        fail_msg: "new_backend equals current active ({{ old_backend }}). Nothing to do."

    - block:
        # Phase 1: keep OLD active; ensure NEW exists
        - name: Render config (OLD active; NEW included)
          template:
            src: config.j2
            dest: "{{ haproxy_tmp }}"
          vars:
            active_backend: "{{ old_backend }}"
            backends_all: "{{ backends_all }}"
        - name: Validate new config
          command: haproxy -c -f {{ haproxy_tmp }}
          changed_when: false
        - name: Install new config
          copy:
            src: "{{ haproxy_tmp }}"
            dest: "{{ haproxy_cfg }}"
            owner: root
            group: root
            mode: "0644"
        - name: Reload HAProxy
          service: { name: haproxy, state: reloaded }

        - name: Wait for NEW backend servers to be UP
          shell: |
            printf 'show stat json\n' | socat - {{ haproxy_socket }} \
            | jq -e --arg bk "{{ new_backend }}" '
               [ .[] | select(.pxname==$bk and .svname!="BACKEND") | .status ] as $s
               | ($s|length)>0 and (all($s[]; .=="UP"))'
          args: { executable: /bin/bash }
          register: new_up
          retries: "{{ check_retries }}"
          delay: "{{ check_delay }}"
          until: new_up.rc == 0
          changed_when: false

        # Phase 2: optionally promote NEW as active
        - name: Render config (NEW active)
          when: promote_new | bool
          template:
            src: config.j2
            dest: "{{ haproxy_tmp }}"
          vars:
            active_backend: "{{ new_backend }}"
            backends_all: "{{ backends_all }}"
        - name: Validate config (post-switch)
          when: promote_new | bool
          command: haproxy -c -f {{ haproxy_tmp }}
          changed_when: false
        - name: Install config (post-switch)
          when: promote_new | bool
          copy:
            src: "{{ haproxy_tmp }}"
            dest: "{{ haproxy_cfg }}"
            owner: root
            group: root
            mode: "0644"
        - name: Reload HAProxy (activate NEW)
          when: promote_new | bool
          service: { name: haproxy, state: reloaded }

      rescue:
        - name: Roll back — keep OLD active (NEW stays defined)
          template:
            src: config.j2
            dest: "{{ haproxy_tmp }}"
          vars:
            active_backend: "{{ old_backend }}"
            backends_all: "{{ backends_all | difference([new_backend]) + [new_backend] }}"
        - command: haproxy -c -f {{ haproxy_tmp }}
          changed_when: false
        - copy: { src: "{{ haproxy_tmp }}", dest: "{{ haproxy_cfg }}" }
        - service: { name: haproxy, state: reloaded }
        - fail:
            msg: "Failed to validate/promote {{ new_backend }}. Restored {{ old_backend }} as active."

              `}
            </CodeBlock>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm font-bold text-slate-300/80 pt-2 pb-4">
            Deploy hygiene: playbooks create monitoring maintenance via API.
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="Ansible - zbx_maintenance.yml"
              language="yaml"
              maxHeight="600px"
            >{`# zbx_maintenance.yml
- hosts: localhost
  connection: local
  gather_facts: false
  vars:
    # --- set these via -e or defaults here ---
    zbx_url: "https://zabbix.example/api_jsonrpc.php"
    zbx_user: "{{ lookup('env','ZABBIX_USER') }}"
    zbx_pass: "{{ lookup('env','ZABBIX_PASS') }}"
    # e.g. ["app:web","env:prod"]  (match your Zabbix group names)
    group_names: []
    maintenance_name: "deploy {{ app | default('app') }} {{ env | default('env') }}"
    description: "Created by Ansible during deploy"
    duration_min: 60          # window length
    start_offset_min: 0       # 0 = start now
    maintenance_type: 0       # 0=with data collection, 1=without
  tasks:
    - set_fact:
        now_ts: "{{ ansible_date_time.epoch | int }}"
        start_ts: "{{ (ansible_date_time.epoch | int) + (start_offset_min|int)*60 }}"
        end_ts:   "{{ (ansible_date_time.epoch | int) + (start_offset_min|int + duration_min|int)*60 }}"

    - name: Zabbix login → auth token
      uri:
        url: "{{ zbx_url }}"
        method: POST
        body_format: json
        headers: { Content-Type: application/json }
        body:
          jsonrpc: "2.0"
          method: "user.login"
          id: 1
          params:
            user: "{{ zbx_user }}"
            password: "{{ zbx_pass }}"
      register: zbx_auth

    - set_fact:
        zbx_token: "{{ zbx_auth.json.result }}"

    - name: Resolve hostgroup IDs for provided names
      when: group_names | length > 0
      uri:
        url: "{{ zbx_url }}"
        method: POST
        body_format: json
        headers: { Content-Type: application/json }
        body:
          jsonrpc: "2.0"
          method: "hostgroup.get"
          auth: "{{ zbx_token }}"
          id: 2
          params:
            output: ["groupid","name"]
            filter: { name: "{{ group_names }}" }
      register: zbx_groups

    - name: Ensure all group names were found
      when: group_names | length > 0
      assert:
        that:
          - "(zbx_groups.json.result | map(attribute='name') | list) | length == (group_names | length)"
        fail_msg: "One or more hostgroups not found: {{ group_names }}"

    - set_fact:
        groupids: "{{ (zbx_groups.json.result | map(attribute='groupid') | list) | default([]) }}"

    - name: Check for an already active maintenance with same name
      uri:
        url: "{{ zbx_url }}"
        method: POST
        body_format: json
        headers: { Content-Type: application/json }
        body:
          jsonrpc: "2.0"
          method: "maintenance.get"
          auth: "{{ zbx_token }}"
          id: 3
          params:
            output: ["maintenanceid","name","active_since","active_till"]
            filter: { name: ["{{ maintenance_name }}"] }
      register: existing

    - name: Create one-time maintenance window (idempotent)
      when: >
        existing.json.result | length == 0 or
        not ( (now_ts >= (existing.json.result[0].active_since|int)) and
              (now_ts <= (existing.json.result[0].active_till|int)) )
      uri:
        url: "{{ zbx_url }}"
        method: POST
        body_format: json
        headers: { Content-Type: application/json }
        body:
          jsonrpc: "2.0"
          method: "maintenance.create"
          auth: "{{ zbx_token }}"
          id: 4
          params:
            name: "{{ maintenance_name }}"
            description: "{{ description }}"
            maintenance_type: "{{ maintenance_type }}"
            active_since: "{{ start_ts }}"
            active_till: "{{ end_ts }}"
            groupids: "{{ groupids | default([]) }}"
            timeperiods:
              - timeperiod_type: 0          # one-time
                start_date: "{{ start_ts }}"
                period: "{{ (duration_min|int) * 60 }}"
      register: created

    - debug:
        msg: >-
          {{ 'Created maintenance ID ' ~ (created.json.result.maintenanceids[0] | default('N/A'))
             if (created is defined and created.json.result is defined)
             else 'Maintenance already active or not needed' }}
              `}</CodeBlock>
          </div>
          <div className="flex flex-col gap-4 mb-4">
            <CodeBlock
              defaultCollapsed={true}
              filename="example call step"
              language="bash"
              maxHeight="600px"
            >{`# 1) App-only group, start now, 45 minutes
ansible-playbook zbx_maintenance.yml \
  -e "group_names=['app:web'] maintenance_name='deploy web prod' duration_min=45"

# 2) App + Env groups, start in 5 min, 1 hour
ansible-playbook zbx_maintenance.yml \
  -e "group_names=['app:web','env:prod'] start_offset_min=5 duration_min=60 maintenance_name='web prod deploy'"
              `}</CodeBlock>
          </div>
        </div>
        <div className="mt-4"></div>
      </section>
    </main>
  );
}

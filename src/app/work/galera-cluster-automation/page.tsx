import { CodeBlock } from "@/components/ui/code-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MariaDB Galera rolling operations",
  description:
    "Automated rolling updates for MariaDB Galera: preflight→change→validate, drain/rejoin, and audit-ready jobs.",
};

export default function GaleraClusterAutomationPage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          MariaDB Galera rolling operations (paved road)
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
          Paved road case study.
        </p>
      </section>

      {/* Scope & windows */}
      <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Scope & windows
          </h4>
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-300/80">
            Multi-node MariaDB Galera cluster behind a load balancer.
          </p>
          <p className="text-sm text-slate-300/80">
            Rolling node ops during short windows; no write loss.
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
            Platform/automation engineer (lane design + implementation).
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
            <span className="text-sm text-slate-300/80">
              Opinionated lane with tags: preflight → change → validate.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Rolling execution with serial: 1 across the hostgroup;
              any_errors_fatal: true.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              LB drain per node via HAProxy runtime socket; wait until 0 live
              conns (runtime JSON).
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              wsrep gates before/after: Synced, ready=ON, cluster Primary.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Validate with retries/delays; enable on LB only after gates pass;
              simple write probe.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Job logs = audit trail; runs pin a git ref for repeatability.
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
              Predictable windows; fewer manual steps; lower incident risk.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Clear pass/fail gates; easy to pause/rollback per node.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Auditable runs (who/what/which ref).
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
        <div className="mt-4">
          <span className="text-lg font-bold text-white/90 mb-3">
            Code snippets
          </span>
        </div>
        <div className="mt-8">
          <div>
            <p className="text-sm font-bold text-slate-300/80">Prereqs:</p>
            <p className="text-sm text-slate-300/80">
              HAProxy admin socket (e.g. /run/haproxy/admin.sock)
            </p>
            <p className="text-sm text-slate-300/80">socat & jq on LB nodes</p>
            <p className="text-sm text-slate-300/80">
              MySQL auth via ~/.my.cnf or vault
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-base md:text-base font-bold text-white/90 mb-2">
              1) Top-level playbook — roll 1-by-1, fail closed
            </h4>
            <CodeBlock
              filename="Ansible - galera-rolling-updates.yml"
              language="yaml"
            >{`# galera-rolling-updates.yml — rolling lane for the whole group
- hosts: galera_nodes
  become: true
  gather_facts: false
  serial: "{{ batch_size | default(1) }}"
  any_errors_fatal: true
  max_fail_percentage: 0
  vars:
    haproxy_socket: /run/haproxy/admin.sock
    backend: galera-backend
    server: "{{ inventory_hostname_short }}"
  tasks:
    - block:
        - import_tasks: preflight.yml     # cluster OK + drain this node
          tags: [preflight]
        - import_tasks: change.yml        # package/config/restart
          tags: [change]
        - import_tasks: validate.yml      # wait → wsrep gates → enable → probe
          tags: [validate]
      rescue:
        - name: Keep node drained on failure (fail closed)
          shell: |
            printf 'disable server {{ backend }}/{{ server }}\n' | socat - {{ haproxy_socket }}
          args: { executable: /bin/bash }
          changed_when: true
        - name: Stop rollout; investigate this node
          fail:
            msg: "Node {{ inventory_hostname }} failed and remains DISABLED on LB."
      always:
        - name: Report LB state for this node
          shell: |
            printf 'show stat json\\n' | socat - {{ haproxy_socket }} \\
            | jq -r --arg b "{{ backend }}" --arg s "{{ server }}" \\
                 '.[]|select(.pxname==$b and .svname==$s)|"\(.svname): \(.status) scur=\(.scur)"'
          args: { executable: /bin/bash }
          changed_when: false`}</CodeBlock>
          </div>
          <h4 className="text-base md:text-base font-bold text-white/90 mb-2 mt-2">
            2) Preflight.yml — cluster OK, then drain + wait to 0 live conns
          </h4>
          <div className="mt-4">
            <CodeBlock
              filename="Ansible - preflight.yml"
              language="yaml"
            >{`# 2.1 Cluster must be healthy before touching LB
- name: wsrep must be Primary, Synced, ready
  shell: |
    mysql -Nse "SHOW STATUS LIKE 'wsrep_cluster_status';
                SHOW STATUS LIKE 'wsrep_local_state_comment';
                SHOW STATUS LIKE 'wsrep_ready'" \
    | awk '
      NR==1 && $2!="Primary" {exit 1}
      NR==2 && $2!="Synced"  {exit 1}
      NR==3 && $2!="ON"      {exit 1}'
  args: { executable: /bin/bash }
  changed_when: false

# 2.2 Drain this node from HAProxy and wait until scur==0
- name: Drain and wait for 0 live connections (HAProxy runtime JSON)
  shell: |
    printf 'disable server %s/%s\\n' "$BACKEND" "$SERVER" | socat - "$HAPROXY_SOCKET"
    for i in {1..60}; do
      scur=$(printf 'show stat json\\n' | socat - "$HAPROXY_SOCKET" \\
        | jq -r --arg b "$BACKEND" --arg s "$SERVER" \\
          '.[]|select(.pxname==$b and .svname==$s)|.scur // 0')
      [ "\${scur:-0}" = "0" ] && exit 0
      sleep 1
    done
    echo "not drained"; exit 1
  args: { executable: /bin/bash }
  environment:
    HAPROXY_SOCKET: "{{ haproxy_socket }}"
    BACKEND: "{{ backend }}"
    SERVER: "{{ server }}"
  changed_when: true
            `}</CodeBlock>
          </div>
          <div className="mt-4">
            <h4 className="text-base md:text-base font-bold text-white/90 mb-2 mt-2">
              3) change.yml — example node ops (service update/restart)
            </h4>
          </div>
          <div className="mt-4">
            <CodeBlock
              filename="Ansible - change.yml"
              language="yaml"
            >{`# use package/service/etc. to update/restart the service
- name: Stop MariaDB
  service: { name: mariadb, state: stopped }

- name: Update MariaDB (dnf example; replace on apt-based)
  package: {name: MariaDB-server, state: latest}

- name: Start MariaDB
  service: { name: mariadb, state: started, enabled: true }
            `}</CodeBlock>
          </div>
          <div className="mt-4">
            <h4 className="text-base md:text-base font-bold text-white/90 mb-2 mt-2">
              4) validate.yml — retries + enable only when green
            </h4>
          </div>
          <div className="mt-4">
            <CodeBlock filename="Ansible - validate.yml" language="yaml">
              {`# 4.0 Vars for retry rhythm
- vars:
    validate_retries: 30    # ~2-3 min total
    validate_delay:   5

# 4.1 Wait for mysqld to accept connections
- name: Wait for MySQL (local ping)
  shell: "mysqladmin ping -h 127.0.0.1 --silent"
  register: ping
  retries: "{{ validate_retries }}"
  delay:   "{{ validate_delay }}"
  until: ping.rc == 0
  changed_when: false

# 4.2 Wait for wsrep gates (Synced/ON/Primary)
- name: Wait for wsrep gates
  shell: |
    mysql -Nse "SHOW STATUS LIKE 'wsrep_local_state_comment';
                SHOW STATUS LIKE 'wsrep_ready';
                SHOW STATUS LIKE 'wsrep_cluster_status'" \\
    | awk '
      NR==1 && $2!="Synced"  {exit 1}
      NR==2 && $2!="ON"      {exit 1}
      NR==3 && $2!="Primary" {exit 1}'
  register: wsrep
  retries: "{{ validate_retries }}"
  delay:   "{{ validate_delay }}"
  until: wsrep.rc == 0
  changed_when: false

# 4.3 Enable node on HAProxy (only after gates pass)
- name: Enable node on HAProxy
  shell: "printf 'enable server {{ backend }}/{{ server }}\\n' | socat - {{ haproxy_socket }}"
  args: { executable: /bin/bash }
  changed_when: true

# 4.4 Wait until HAProxy reports the server UP
- name: Wait for HAProxy to show UP
  shell: |
    printf 'show stat json\\n' | socat - {{ haproxy_socket }} \\
    | jq -e --arg b "{{ backend }}" --arg s "{{ server }}" \\
      '.[]|select(.pxname==$b and .svname==$s)|.status=="UP"'
  register: up
  retries: "{{ validate_retries }}"
  delay:   "{{ validate_delay }}"
  until: up.rc == 0
  args: { executable: /bin/bash }
  changed_when: false

# 4.5 Simple write probe
- name: Write probe (create/insert/delete)
  shell: |
    mysql -e "CREATE DATABASE IF NOT EXISTS health;
              CREATE TABLE IF NOT EXISTS health.t(i int);
              INSERT INTO health.t VALUES (1);
              DELETE FROM health.t;"
  register: probe
  retries: 3
  delay: 5
  until: probe.rc == 0
  args: { executable: /bin/bash }
  changed_when: true`}
            </CodeBlock>
          </div>
          <div className="mt-4">
            <h4 className="text-base md:text-base font-bold text-white/90 mb-2 mt-2">
              5) Rundeck job — run the whole hostgroup (serial in play)
            </h4>
          </div>
          <div className="mt-4">
            <CodeBlock filename="Rundeck - job.yml" language="yaml">
              {`- id: galera-rolling
  name: Galera rolling op (hostgroup)
  sequence:
    commands:
      # Phase 1: preflight only (sanity)
      - exec: ansible-playbook -i inv/\${option.env} galera-rolling-updates.yml \\
              -l \${option.hostgroup} -t preflight
      # Phase 2: full lane (preflight→change→validate), serial in play controls order
      - exec: ansible-playbook -i inv/\${option.env} galera-rolling-updates.yml \\
              -l \${option.hostgroup}
  options:
    - name: env;       values: [dev,test,prod]; required: true
    - name: hostgroup; values: [galera_nodes];  required: true`}
            </CodeBlock>
          </div>
        </div>
      </section>
    </main>
  );
}

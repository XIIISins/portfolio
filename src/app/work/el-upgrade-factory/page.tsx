import { CodeBlock } from "@/components/ui/code-block";

export default function ELUpgradeFactoryPage() {
  return (
    <main className="relative container-width mx-auto pt-36 md:pt-32">
      {/* Hero */}
      <section>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Enterprise Linux upgrade factory
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300/80">
          Enterprise Linux upgrade factory case study.
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
            All VMs (hypervisor lifecycle owned by a separate infra team).
          </p>
          <p className="text-sm text-slate-300/80">
            Short non-production windows for testing; no user-visible downtime
            in production.
          </p>
        </div>

        {/* Role */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Role
          </h4>
        </div>
        <div className="mt-4">
          <p className="text-sm text-slate-300/80">Platform engineer.</p>
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
              EL9 baseline template (hardened/compliance-approved)
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              provision new VMs per environments (development, test, staging,
              production)
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Ran installation/configuration playbooks per client/env/app.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Preflights via Ansible: OS checks as tasks; app checks via ad-hoc
              per application.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Rollback rehearsed in test with prod-like constraints.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Blue/green cutover behind LB/proxies; rollback = switch traffic to
              old VMs.
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
              No practical downtime in production upgrade
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              Rollback plan documented and tested.
            </span>
          </div>
          <div className="flex items-start gap-2">
            {/* <span className="inline-flex h-1.5 w-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-orange"></span> */}
            <span className="text-sm text-slate-300/80">
              No increase in alert noise post-cutover.
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
            All examples are newly written, generic, and tool-agnostic;
            originals remain private.
          </p>
          <p className="text-sm text-slate-300/80">
            Receipts shown are representative.
          </p>
        </div>
        {/*Code Snippets*/}
        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <h4 className="text-base md:text-lg font-semibold tracking-tight text-white/90">
            Code snippets
          </h4>
        </div>
        <div className="mt-4">
          <span className="text-sm font-medium text-slate-300/80 mb-3">
            VM Template preparation
          </span>
          <div className="mt-4">
            <CodeBlock
              filename="el9-template.yml"
              language="yaml"
            >{`# create ansible user/sudo; install python3, cloud-init, guest-agent; run hardening role; clear machine-id.
---
- hosts: el9-template
  become: true
  gather_facts: true
  vars:
    guest_packages:
      - python3
      - cloud-init
      - open-vm-tools
      - auditd
  tasks:
    - name: Install packages
      package:
        name: "{{ guest_packages }}"
        state: present

    - name: Create ansible user
      user:
        name: ansible
        groups: ansible
        state: present
        shell: /bin/bash
        create_home: true

    - name: Add SSH key for ansible user
      authorized_key:
        user: ansible
        state: present
        key: "{{ lookup('file', lookup('env','HOME') + '/.ssh/id_ed25519.pub') }}"

    - copy:
        dest: /etc/sudoers.d/99-ansible
        mode: '0440'
        content: "ansible ALL=(ALL) NOPASSWD: ALL\\n"
      notify: Validate sudoers

    - name: Import hardening role
      import_role:
        name: centos9-hardening-baseline

    - name: Clean up for template
      shell: |
        cloud-init clean --logs
        : > /etc/machine-id
        rm -f /var/lib/dbus/machine-id /etc/ssh/ssh_host_*
        args:
          warn: false
  handlers:
    - name: Validate sudoers
      command: visudo -cf /etc/sudoers`}</CodeBlock>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-slate-300/80 mb-3">
              OS Preflight
            </span>
          </div>
          <div className="mt-4">
            <CodeBlock
              filename="el9-preflight.yml"
              language="yaml"
            >{`# SELinux enforcing; agent active; cloud-init ready; auditd ok.
---
- hosts: new_pool
  gather_facts: false
  become: true
  tasks:
    - command: getenforce
      register: se
      changed_when: false
      failed_when: se.stdout != "Enforcing"

    - command: systemctl is-active auditd
      changed_when: false

    - command: cloud-init is-active --wait
      changed_when: false

    - command: systemctl is-active open-vm-tools
      changed_when: false

    - command: systemctl is-active zabbix-agent
      changed_when: false
            `}</CodeBlock>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-slate-300/80 mb-3">
              Application preflight (Ansible ad-hoc)
            </span>
          </div>
          <div className="mt-4">
            <CodeBlock
              filename="app-preflight.sh"
              language="shell"
            >{`# health endpoint 200.
ansible -m uri -a "url=http://app/health status_code=200"
# check application logs.
ansible -m shell -a "tail -n 100 /var/log/app.log"
# check backend/db connection
ansible -m shell -a "nc -zv backend 3306"
            `}</CodeBlock>
          </div>
          <div className="mt-4">
            <span className="text-sm font-medium text-slate-300/80 mb-3">
              Cutover (Ansible)
            </span>
          </div>
          <div className="mt-4">
            <CodeBlock
              filename="cutover.yaml"
              language="yaml"
            >{`# Cutover: add → verify → switch → verify
---
- hosts: lb
  gather_facts: false
  become: true
  vars:
    old_backend: "app-old"
    new_backend: "app-new"
    haproxy_socket: "/run/haproxy/admin.sock"
    vip_health_url: "http://vip/health"
  tasks:
    - name: Add new backend (keep old active)
      template:
        src: config.j2
        dest: /etc/haproxy/haproxy.cfg
      vars: { active_backend: "{{ old_backend }}" }

    - name: Validate HAProxy config
      command: haproxy -c -f /etc/haproxy/haproxy.cfg
      changed_when: false

    - name: Reload HAProxy
      service: { name: haproxy, state: reloaded }

    - name: Ensure new backend is healthy (runtime JSON)
      shell: |
        printf 'show stat json\\n' | socat - "$HAPROXY_SOCKET" \\
        | jq -e --arg bk "$NEW_BACKEND" '
            [ .[] | select(.pxname==$bk and .svname!="BACKEND") | .status ]
            | length>0 and all(.=="UP")'
      args: { executable: /bin/bash }
        
      environment:
        HAPROXY_SOCKET: "{{ haproxy_socket }}"
        NEW_BACKEND: "{{ new_backend }}"
      changed_when: false

    - name: Switch traffic to new backend
      template:
        src: config.j2
        dest: /etc/haproxy/haproxy.cfg
      vars: { active_backend: "{{ new_backend }}" }

    - name: Validate HAProxy config
      command: haproxy -c -f /etc/haproxy/haproxy.cfg
      changed_when: false
      
    - name: Reload HAProxy
      service: { name: haproxy, state: reloaded }

    - name: Verify VIP /health
      uri: { url: "{{ vip_health_url }}", status_code: 200 }

    - name: Drain old backend (runtime socket)
      shell: |
        for s in $(printf 'show stat json\\n' | socat - "$HAPROXY_SOCKET" \\
          | jq -r --arg bk "$OLD_BACKEND" '.[]|select(.pxname==$bk and .svname!="BACKEND")|.svname'); do
          printf 'disable server %s/%s\\n' "$OLD_BACKEND" "$s"
        done | socat - "$HAPROXY_SOCKET"
      args: { executable: /bin/bash }
      environment:
        HAPROXY_SOCKET: "{{ haproxy_socket }}"
        OLD_BACKEND: "{{ old_backend }}"
      changed_when: true

`}</CodeBlock>
          </div>
        </div>
      </section>
    </main>
  );
}

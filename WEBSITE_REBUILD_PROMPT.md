# Xops360 — Website Rebuild: Master Marketing & Design Prompt

> **Purpose:** A single source-of-truth brief for web designers, front-end developers, and copywriters to rebuild the Xops360 marketing site. It is grounded in a hands-on walkthrough of the live product demo (`demo.xops360.ai`) plus the product documentation, so every claim below traces back to a real capability.
>
> **Product:** Xops360 — *"Cloud Governance Simplified"* — by **AxiomIO**
> **Category:** Unified multi-cloud governance platform (FinOps + SecOps + CloudOps + Agentic AI)
> **Clouds covered:** AWS, Azure, Microsoft 365, Microsoft Entra ID, Kubernetes/EKS

---

## 0. What the product actually is (grounding for everyone writing copy)

Xops360 is a **single pane of glass** that unifies three disciplines that are normally three separate tools and three separate teams:

1. **FinOps** — see, forecast, and cut cloud spend across every account.
2. **SecOps** — continuous security posture, compliance, and workload/vulnerability scanning.
3. **CloudOps** — asset inventory, right-sizing, backup posture, and Infrastructure-as-Code automation.

Tying them together are two differentiators competitors rarely combine:

- **Agentic AI ("Xara Agent")** — a conversational copilot that *explains* spend spikes, *runs* Well-Architected reviews, and *recommends* fixes in plain language.
- **The Xhub Remediation Board** — every finding (a compliance failure, a CVE, a cost leak) becomes a tracked, SLA-bound issue you can push to **Jira or ServiceNow** and resolve with one click.

The one-line mental model: **"Know what you're spending, what's at risk, and what to fix — and fix it — from one screen."**

---

## STEP 1 — Feature inventory (verified in the live demo)

### Unified Overview Dashboard
A single landing view aggregating: total spend to date + forecast + month-over-month delta; potential yearly savings; total resources with tag-compliance %; security benchmark status (CIS / GDPR / SOC2 / PCI-DSS); compliance pass/fail counts; total vulnerabilities by severity; OSINT snapshot (SSL grade, subdomains, DNS security); cloud security-service status (GuardDuty, Security Hub, Inspector, Macie); IAM security (MFA gaps, root MFA, excessive privileges); alarms/alerts health; and backup coverage. One-click **Email Report**.

### Agentic AI — "Xara Agent"
Natural-language cloud copilot ("Ask anything about your cloud. Get instant insights, recommendations and answers."). Observed capabilities: AWS cost anomaly detection & analysis, monthly cost breakdowns, AWS **and** Azure Well-Architected Reviews, deep-dive security assessments, sensitive-port protection audits, unused-EC2 detection, cost-optimization strategy. Persistent conversation history, pinned conversations, search.

### FinOps
Four sections — **Overview**, **AWS Cost Analyzer**, **Saving Opportunities**, **AWS Cost Map**.
- Multi-account cost aggregation (20+ linked accounts observed) with master-account rollup.
- Total spend + forecast + MoM comparison (demo showed **−12.9%** vs last month).
- Cost anomaly detection (day / month views, per-account).
- Six-month spend history; spend by region; spend by service (top-5 breakdown); spend by account; daily cost trend.
- Concrete savings identified (demo banner: **"up to $5,081.08/year"**) via Reserved Instances / Savings Plans across RDS, Redshift, ElastiCache, MemoryDB, OpenSearch.
- AWS Cost Map: daily distribution, service counts, CSV export, filter by date range & resource tags.
- Budget monitoring with threshold alerts (5 budgets, over-budget flagging).

### SecOps
- **Compliance** — posture score (demo: **47%**), **107 controls** evaluated, mapped simultaneously across **CIS v5.0, PCI-DSS, GDPR, SOC2** (one control → all four framework IDs). Severity tiers (Critical/High/Medium/Low), scheduled scans, scan history & compare, per-control resource counts, remediation actions.
- **Cyber Security** — OSINT (SSL certificate grade, subdomain discovery, DNS security: SPF/DMARC), DAST (web-app vulnerability testing incl. injection), Network Security Analysis (exposed ports, security-group weaknesses).
- **Workload Security** — vulnerability scanning of AMIs and container images: **ECR (AWS)** and **ACR (Azure)**, region-selectable, producing CVE-level findings.

### CloudOps
- **Resource Manager** — "Discover and manage your AWS assets across regions from one place." 453 resources inventoried across 25+ service types (IAM, Config, Lambda, RDS, S3, CloudFormation, KMS, API Gateway, etc.), tag compliance, tag editor, active alarms, budgets-at-risk, backup coverage.
- **AI Quick Insights** — actionable nudges: untagged resources → cost-allocation tags; resources lacking backup; budgets at risk; unutilized resources → right-size or remove.
- **Resource Optimizer** — right-sizes EC2, EBS, storage.
- **CloudOps Automation (IaC)** — Terraform provisioning for VPC, ECS, EC2, RDS, CloudFront, IAM.
- **Azure WAR** — Well-Architected Review across reliability, security, cost optimization, operational excellence, performance.
- **AWS & Azure Automation Suites** (production/enterprise-ready services) and **Kubernetes/EKS** deployment automation.

### Issues Board — "Xhub Board"
- **Risk posture at a glance:** per-account cards showing **Governance score %**, monthly **cost Leakage ($/mo)**, and **SLA breach** count — across AWS, Azure, Entra ID, and M365.
- **Account Remediation Board** (Kanban): columns Triage → Assigned → In Remediation → SLA Breaches → Resolved → Exceptions (demo: **1,123 issues** triaged; 17 Critical / 268 High / 814 Medium / 98 Low; 74 resolved).
- Unified feed of **SecOps + CloudOps** findings (compliance control failures *and* CVEs) with SLA breach timers, resource counts, and a **one-click "Remediate"** action.
- **Jira** and **ServiceNow** integrations for ITSM workflows.

### Audit & Reports / Administration
AI-generated FinOps and Cyber-Security reports with historical report access; account integration (AWS, Azure, M365, Entra ID, EKS); credential & user management; flexible subscription plans.

---

## STEP 2 — Pain-point & value-proposition mapping

### Core buyer personas
| Persona | Title(s) | Primary job-to-be-done |
|---|---|---|
| **The Economic Buyer** | CTO, VP Infrastructure, VP Cloud, CIO | One trustworthy view of cost + risk; defensible spend; board-ready reporting |
| **The FinOps / Finance Lead** | FinOps Lead, Cloud Cost Analyst, Finance/Procurement | Attribute spend, kill waste, forecast accurately, hit budgets |
| **The Security Owner** | CISO, SecOps Lead, Compliance/GRC Manager | Continuous compliance, fast vuln/misconfig detection, audit readiness |
| **The Engineering Owner** | DevOps/Platform Lead, SRE, Cloud Engineer | Fix issues fast without tool-sprawl; automate remediation; stay in Jira/ServiceNow |

### Pain points the platform resolves
- **Fragmented tooling & context-switching** — cost in one tool, security in another, ops in a third; no shared truth.
- **Cost opacity & silent leakage** — bills rise with no attribution; idle/over-provisioned resources drain budget unnoticed.
- **Reactive, point-in-time security** — annual reviews and periodic audits leave long windows of undetected drift.
- **Compliance sprawl** — the same control re-checked separately for CIS, PCI-DSS, GDPR, SOC2; audits are fire-drills.
- **Multi-account / multi-cloud chaos** — dozens of AWS accounts plus Azure/M365/Entra ID with no unified posture.
- **Findings that die in a dashboard** — issues are surfaced but not owned, tracked, SLA'd, or fixed.

### Core value propositions & ROI drivers
1. **One 360° view** — cost, security, compliance, and ops in a single pane across every cloud and account.
2. **Cut cloud spend** — quantified savings (RI/Savings-Plan opportunities, right-sizing, leakage detection) with forecasting and anomaly alerts.
3. **Continuous, always-on compliance** — one scan maps to CIS/PCI-DSS/GDPR/SOC2; scheduled, scored, and audit-ready year-round.
4. **From insight to action** — every finding becomes an SLA-tracked, one-click-remediable ticket, synced to Jira/ServiceNow.
5. **An AI co-pilot for your cloud** — ask in plain English; get the "why" behind a spike or risk and the recommended fix.

---

## STEP 3 — THE MASTER WEBSITE PROMPT (hand this to design + dev + copy)

> **Role:** You are building the new marketing website for **Xops360**, an enterprise multi-cloud governance platform by AxiomIO. Tone: confident, outcome-led, enterprise-credible — not buzzword soup. Every section leads with a business outcome and backs it with a concrete platform capability. Design language: modern SaaS, clean, data-rich, trustworthy; dark-mode-capable; generous whitespace; real product UI screenshots over stock art. Accessibility AA, fully responsive, fast (Core Web Vitals green).

### 3.1 Brand positioning & Hero section brief
- **Eyebrow:** `AI-POWERED MULTI-CLOUD GOVERNANCE`
- **H1 (outcome-led):** *"Cut cloud spend, close security gaps, and stay audit-ready — from one 360° view."*
- **Sub-headline:** *"Xops360 unifies FinOps, security, and compliance across AWS, Azure, and Microsoft 365 — with an AI co-pilot that explains every spend spike, flags every risk, and turns findings into one-click fixes."*
- **Primary CTA:** `Request a Demo`
- **Secondary CTA:** `Explore the Platform` (or `Talk to a Cloud Expert`)
- **Hero visual:** live Overview dashboard (cost + savings + compliance score + resources) — the "single pane" made literal. Optionally an animated Xara Agent prompt: *"Why did my AWS bill jump 12% this month?"*
- **Trust strip beneath hero:** cloud badges (AWS, AWS Marketplace, Azure Marketplace) + "Trusted by enterprises in finance, banking, and gaming."

### 3.2 Core feature-to-benefit architecture (reframe features → benefits)
Group into **four market-ready pillars**. Each: benefit headline, one-line promise, 3–4 proof points, product screenshot, "See it in action" link.

**Pillar 1 — FinOps Intelligence** · *"See every dollar. Save on autopilot."*
- Multi-account spend in one rollup with forecasting and month-over-month trends.
- Automatic savings opportunities (Reserved Instances, Savings Plans) with dollar estimates.
- Real-time cost-anomaly detection before the bill lands.
- Budgets with threshold alerts; spend by service, region, and account.

**Pillar 2 — Continuous Security & Compliance Posture** · *"Always audit-ready. Never surprised."*
- One scan, mapped to CIS, PCI-DSS, GDPR, and SOC2 (AWS) or CIS, ISO 27001, SOC2 (Azure) simultaneously — with a live posture score.
- Full security posture: IAM/MFA gaps, S3 exposure, CloudTrail, open security-group ports, and cloud-native services (GuardDuty, Inspector, Defender for Cloud, WAF).
- Vulnerability & misconfiguration detection across workloads (AMI, ECR, ACR) down to the CVE.
- Cyber suite: OSINT (domain/SSL/DNS), DAST (API/web/mobile pentesting), Network scanning, and **SCA** — dependency/supply-chain scanning with **CI/CD pipeline integration** (shift-left).
- **Scan Scheduler:** automate any scan on a 12h / 24h / weekly / monthly / custom cadence — continuous, not annual.

**Pillar 3 — CloudOps & Automation** · *"Discover everything. Right-size anything."*
- Full cross-region asset inventory (25+ service types) with tag-compliance and backup posture.
- AI-driven right-sizing and cleanup of idle/over-provisioned resources.
- **Self-service IaC catalog:** one-click Terraform provisioning for VPC, ECS, EC2, RDS, S3, ALB, CloudFront, IAM, and **EKS**.
- **ProbeView** uptime monitoring: synthetic checks across endpoints with response-time and SSL-cert-expiry tracking.
- Azure & AWS Well-Architected Reviews on demand.

**Pillar 4 — Agentic AI + One-Click Remediation** · *"From 'what's wrong' to 'it's fixed.'"*
- **Xara Agent:** ask your cloud anything; get the root cause and the recommended action.
- **Xhub Remediation Board:** every finding becomes an SLA-tracked ticket.
- One-click remediation; unified triage of security + cost + ops issues.
- Native **Jira** and **ServiceNow** sync.

### 3.3 Customer pain points vs. Xops360 solution (build as a two-column comparison table)
| The frustration today | How Xops360 solves it |
|---|---|
| Cost, security, and ops live in separate tools — no shared truth | One 360° pane unifying FinOps, SecOps, and CloudOps across all clouds |
| Cloud bills climb with no clear "why" | AI-explained spend, anomaly detection, and multi-account attribution |
| Idle & over-provisioned resources quietly drain budget | Right-sizing + leakage detection with dollar-value savings |
| Compliance is a once-a-year fire drill, re-done per framework | One continuous scan mapped to CIS/PCI-DSS/GDPR/SOC2, always scored |
| Vulnerabilities surface late, buried in scans | Continuous AMI/ECR/ACR CVE scanning surfaced by severity |
| Dozens of accounts across AWS, Azure, M365, Entra ID | Unified per-account governance posture in the Xhub Board |
| Findings sit in a dashboard and never get fixed | SLA-tracked, one-click remediation synced to Jira/ServiceNow |
| Answers require an expert and a spreadsheet | Xara Agent answers in plain English, instantly |

### 3.4 Target-persona messaging guide (value prop per audience)
**Finance / FinOps** — *"Turn cloud spend from a mystery into a managed line item."* Multi-account visibility, forecasting, anomaly alerts, and quantified RI/Savings-Plan and right-sizing opportunities — so every dollar is attributed and defensible.

**Security / SecOps / GRC** — *"Continuous compliance, not annual panic."* One scan covering CIS, PCI-DSS, GDPR, and SOC2 with a live posture score, CVE-level workload scanning, and IAM/OSINT/DAST coverage — audit-ready every day of the year.

**Engineering / DevOps / Platform** — *"Fix cloud issues without leaving your workflow."* A unified triage board of cost + security + ops findings, IaC automation, right-sizing, and one-click remediation that syncs straight to Jira and ServiceNow.

### 3.5 Updated website architecture & UX layout (page-by-page wireframe)
**Home / Landing page — top to bottom:**
1. **Hero** — H1/sub-head/dual CTA + Overview dashboard visual (§3.1).
2. **Social proof strip** — cloud/marketplace badges + industry trust line; logo wall if available.
3. **The Challenge** (brief, empathetic) — 3–5 pain cards (cost opacity, reactive security, compliance drift, multi-account chaos, findings-that-die). Keep tight; don't wallow.
4. **Core value pillars** — the four pillars from §3.2 as alternating image/text rows, each with a "See it in action" link.
5. **Pain-point vs. solution table** — the §3.3 comparison as a scannable two-column block.
6. **Deep-dive feature showcase** — tabbed/animated module tour: FinOps → SecOps → CloudOps → Agentic AI → Xhub Board, each with a real screenshot and 2–3 bullets. Spotlight the Xara Agent (conversational demo) and one-click remediation (Jira/ServiceNow) as the differentiators.
7. **Persona strip** — three cards (Finance / Security / Engineering) linking to tailored sub-pages using §3.4 copy.
8. **ROI / Savings calculator** — interactive: input monthly cloud spend → estimate savings (anchor to observed savings ranges; label assumptions honestly). Capture email to unlock full report.
9. **Integrations & clouds** — AWS, Azure, M365, Entra ID, EKS + Jira, ServiceNow.
10. **Security & trust** — frameworks supported (CIS/PCI-DSS/GDPR/SOC2), "Powered by AxiomIO," any certifications.
11. **Final CTA band** — *"See your cloud's true cost and risk in one view."* → `Request a Demo` (primary) + `Talk to a Cloud Expert` (secondary).
12. **Footer** — product modules, personas, docs, company, legal.

**Supporting pages to scaffold:** Platform overview; four module pages (FinOps, SecOps, CloudOps, Agentic AI); three persona pages; Pricing/Plans; Integrations; Docs (link to existing docs site); Request Demo; About/Company.

---

## APPENDIX A — Deep feature inventory (verified page-by-page in the live demo)

> Captured across both an **AWS** management account (`mgmt_acc`, 20+ linked accounts) and an **Azure** subscription (`ECI_Learning`). The account switcher makes every view **cloud-aware** — the same screens re-render with AWS-native or Azure-native data, frameworks, and services. Routes are listed so devs can map old→new.

### SecOps — individual features
| Feature | Route | What it does (observed) |
|---|---|---|
| **Security Posture (Overview)** | `/secops/overview` | Posture scorecards (CIS high-severity count, open non-443 ports, users-without-MFA, active services); **IAM Security** (excessive privileges, users w/o MFA, inactive users, root MFA); **S3 Security** (buckets, MFA-delete, versioning, public buckets); **CloudTrail** (multi-region, log validation, last event); **Security Groups** (open inbound `0.0.0.0/0`, non-443 exposure); **Security Services** (GuardDuty, Security Hub, Inspector, Macie, AWS Shield, WAF) |
| **Compliance** | `/secops/compliance` | AWS: 107 controls, 47% score, CIS/GDPR/SOC2/PCI-DSS; Azure: 185 controls, CIS/SOC2/ISO 27001. **One control → all frameworks** (e.g. `X-AWS-1.1` → CIS-1.4 + PCI-DSS-12.3 + GDPR-1.10 + SOC2-1.10; `X-AZURE-*` covers Entra ID security defaults, MFA, tenant/guest restrictions). Severity tiers, scheduled scans, history, compare |
| **Cyber → OSINT** | `/secops/cybersecurity/osint-analysis` | Domain digital-footprint: subdomain discovery, SSL audit grade (A–F), SSL expiry, DNS security (SPF/DMARC); scan any domain; history |
| **Cyber → DAST** | `/secops/cybersecurity/dast` | Secure APIs/web/mobile apps — Basic / Advanced / Scheduled scans + manual pentesting; Medium/Low/Informational findings |
| **Cyber → Network Security** | `/secops/cybersecurity/network-security` | Host/IP/open-port/vulnerability assessment; scan + schedule; history |
| **Cyber → SCA** | `/secops/cybersecurity/sca` | **Software Composition Analysis** — upload dependency lock files (`package-lock.json`, `pnpm-lock.yaml`, `poetry.lock`, `go.sum`, `Cargo.lock`, `yarn.lock`), auto language detection, **Basic + CI/CD Integration** modes |
| **Cyber → Web Directory** | *(via scheduler)* | Web directory & endpoint enumeration |
| **Workload Security** | `/secops/workload-security/aws/ami`, `/aws/ecr`, `/azure/acr` | CVE scanning of machine images (AMI) and container registries (ECR / ACR), region-selectable |

### CloudOps — individual features
| Feature | Route | What it does (observed) |
|---|---|---|
| **Cloud Operations (Overview)** | `/cloudops/overview` | Infra monitoring, backups, resource mgmt; resource status (running/stopped/other); per-type backup coverage; tag compliance; alarms (metric/activity); **budget monitoring with 80/90/100% threshold alerts** |
| **Resource Manager** | `/cloudops/assestsManagement` | Cross-region asset inventory (453 resources, 25+ services: IAM, Config, Lambda, RDS, S3, KMS, etc.), tag compliance, **Tag Editor**, **AI Quick Insights**, on-demand Scan |
| **Unutilized Resources** | `/cloudops/unutilised-resources` | Idle / underutilized resource detection for cleanup |
| **Resource Optimizer** | `/cloudops/resource-optimizer` | AWS right-sizing & cost-saving analysis with recent/previous reports |
| **IaC Automations** | `/devops/iac-automation` | Self-service **Terraform module catalog**: VPC, ECS, S3, ALB, RDS, CloudFront, EC2, **EKS (one-click Deploy)**, IAM |
| **ProbeView** | `/ProbeView` | Uptime / synthetic monitoring: 17 endpoints, overall-health %, avg/slowest response, active issues, **next SSL-cert renewal**, 24h/30d/1y windows |

### Azure-specific behavior (the platform is genuinely multi-cloud, not AWS-only)
- **Overview** re-renders with Azure resources (Virtual Machines, disks, SQL Databases, File Share) and Azure spend (top resource: VMs).
- **Security** uses Azure frameworks (**CIS / ISO 27001 / SOC2**) and Azure-native services (**DDoS Protection, WAF, Defender for Cloud**); IAM maps to **Entra ID** (excessive privileges, users without MFA).
- **Backups** track VM / SQL / File Share coverage; **Workload Security** scans **ACR**.
- Also integrable: **Microsoft 365** and **Microsoft Entra ID** tenants with their own compliance scans.

### Settings & Administration
| Area | Route | What it does |
|---|---|---|
| **User Management** | `/administration` | RBAC — invite teammates, assign roles (Engineer / User), Active/Pending status, resend invite, deactivate |
| **Cloud Integrations** | `/administration?tab=integrations` | One place to connect **AWS Organizations** (management + linked accounts), **AWS EKS**, **Azure Management Groups**, **M365**, **Entra ID** — connection status per account |
| **Scan Scheduler** | `/administration?tab=scan-scheduler` | Toggle & schedule **10 scan types** (12h/24h/weekly/monthly/custom) across Compliance (AWS/Azure/M365/Entra ID), Cyber (DAST/OSINT/Network/Web Directory), and Workload (ECR+AMI / ACR) |
| **Audit & Reports** | `/reports` | Centralized report repository (424+ reports), filter by scan type & date range, view/export; AI-generated FinOps & Cyber reports |
| **Edit Profile / Security** | `/settings/profile` | Account security: **MFA** (authenticator app, email OTP), org-enforced MFA, change password |
| **Need Help** | *(support widget)* | Submit support requests |

### New differentiators these deep features unlock (use in messaging)
- **Genuinely multi-cloud** — AWS, Azure, M365, and Entra ID governed from one workspace, each with native frameworks and services (not a thin AWS wrapper).
- **Shift-left supply-chain security** — SCA with CI/CD integration puts Xops360 in the developer pipeline, not just the ops dashboard.
- **Self-service infrastructure** — one-click Terraform/EKS provisioning turns governance into a build-and-run platform.
- **Built-in uptime monitoring (ProbeView)** — availability + SSL-cert tracking alongside cost and security.
- **Automation-first** — the Scan Scheduler makes "continuous compliance" literally true (set-and-forget cadences).
- **Enterprise-ready governance** — RBAC roles + org-enforced MFA + unified multi-account/tenant onboarding.

---

## Copy & claims guardrails (important)
- **Verify every metric before publishing.** Numbers in this brief (−12.9% MoM, $5,081/yr, 47% score, 1,123 issues, 453 resources) are **demo-environment values**, not universal customer results. Use them as *illustrations of what the product measures*, not as guaranteed outcomes.
- For headline ROI claims (e.g., "reduce cloud spend by X%"), source them from real customer data or a defensible benchmark, and footnote the basis. Do not invent percentages.
- Prefer real product screenshots over stock imagery; the product's data-density is itself a selling point.
- Keep the AI framed as an assistant that recommends and accelerates — avoid implying it acts without human approval on destructive changes.

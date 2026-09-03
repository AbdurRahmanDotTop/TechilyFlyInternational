# Techily Fly International — Production-Ready Job Hunting & International Hiring Platform
## Cloudflare-First + Free-Tools Architecture PRD

**Document status:** Production Blueprint / Master PRD  
**Product:** Techily Fly International Jobs & Talent Platform  
**Primary market:** Gulf / GCC + South Asia talent mobility + international hiring  
**Launch countries:** UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, India  
**Architecture principle:** Fast, secure, admin-manageable, SEO-first, Cloudflare-first, zero paid vendor dependency for the core MVP

> This document is an implementation-oriented revision of the supplied Techily Fly International PRD. The original PRD already defines the marketplace vision, roles, ATS, candidate/recruiter workflows, trust and safety, SEO, security, analytics, and long-term roadmap; this version makes those requirements concrete for an all-free, Cloudflare-first implementation and adds a first-class vacancy expiry/archive lifecycle. fileciteturn2file0L11-L57

---

# 1. Executive Product Definition

Techily Fly International is a **trust-first international job marketplace and lightweight hiring operating system**.

The platform must support the complete core loop:

**Discover → Search → View → Apply → Track → Screen → Interview → Offer → Hire**

It must also support the employer loop:

**Verify → Create vacancy → Publish → Receive applicants → Screen → Shortlist → Interview → Hire**

The product is not merely a job listing directory. It must combine:

- verified employers
- high-quality job vacancies
- candidate profiles and CVs
- structured job search and filters
- recruiter candidate search
- application tracking
- messaging
- interview scheduling
- trust and anti-scam controls
- SEO/Google JobPosting distribution
- complete job lifecycle management
- automatic expiry and archive handling
- full admin governance

The existing PRD specifically positions the product around verified Gulf hiring, mobility-aware matching, salary transparency, proactive recruiter sourcing, application transparency and safety-by-design. fileciteturn3file0L377-L434

---

# 2. Non-Negotiable Product Requirements

These are hard requirements, not optional enhancements.

## 2.1 Technology requirements

1. Core application must run on **free Cloudflare services and open-source software** during MVP.
2. No paid SaaS dependency may be required for normal candidate registration, job search, employer posting, application tracking, moderation, expiry, archive or admin operations.
3. Architecture must be portable so the platform can later migrate individual components without rewriting the entire product.
4. All secrets must remain server-side.
5. Public pages must be optimized for edge delivery and caching.
6. JavaScript must be minimal on public pages.
7. Search, filtering and job detail pages must work on low-end/mobile devices.

## 2.2 Vacancy lifecycle requirements

Every vacancy/job/recruitment campaign MUST have:

- `published_at`
- `expiry_at`
- `closed_at` optional
- `expired_at` optional
- `status`
- `auto_expire_enabled`
- `auto_renew_enabled` configurable by admin; default OFF
- `archive_at` / retention policy
- timezone-aware expiry handling

There must be **no permanently active vacancy without an explicit expiry policy**.

## 2.3 Archive requirements

When a vacancy reaches its expiry timestamp:

1. It must stop accepting new applications.
2. It must immediately stop appearing in active job search.
3. It must stop being eligible for active matching/recommendation.
4. It must be removed from active job feeds/sitemaps where appropriate.
5. It must become `expired` automatically.
6. It must be available under a dedicated **Expired Jobs / Archived Jobs** page.
7. Its historical applications and employer records must remain intact.
8. Admin must be able to restore/reopen it with a new expiry date.
9. Re-opening must create a clear audit event.
10. Expired pages must use correct SEO lifecycle handling.

The original supplied PRD already requires expiry information and accurate expiration handling for Google JobPosting pages; this revision turns that into a mandatory system workflow. fileciteturn0file0L1496-L1518

---

# 3. Goals and Success Criteria

## 3.1 Candidate goals

A candidate must be able to:

- create an account
- build a profile
- upload/manage CV
- search jobs
- filter by country/city/remote/experience/salary/visa/etc.
- view complete job information
- save jobs
- apply quickly
- track every application
- receive status updates
- receive job alerts
- control recruiter visibility
- report suspicious jobs

The supplied PRD defines the candidate journey, profile, mobility, work authorization, salary, CV, visibility and application tracking as core product capabilities. fileciteturn0file0L482-L575

## 3.2 Employer/recruiter goals

An employer/recruiter must be able to:

- register organization
- verify company
- create company page
- create/edit/delete/archive jobs
- set expiry dates
- receive applicants
- manage pipeline
- search candidates
- message candidates
- schedule interviews
- manage team members
- view analytics

## 3.3 Admin goals

Admin must be able to manage the application end-to-end without direct database editing for routine operations.

Admin must have configurable CRUD and permissions over:

- users
- roles
- permissions
- candidates
- recruiters
- employers
- employer verification
- jobs
- expired jobs
- categories
- industries
- departments
- countries
- cities
- currencies
- salary periods
- employment types
- skills
- tags
- screening questions
- applications
- pipeline stages
- messages where moderation access is legally/policy appropriate
- interviews
- reviews
- reports
- moderation cases
- notifications/templates
- SEO metadata
- static pages
- navigation
- homepage sections
- banners
- FAQs
- legal/policy pages
- system settings
- feature flags
- scheduled tasks
- retention rules
- audit logs
- analytics dashboards
- imports/integrations

---

# 4. Product Scope

## 4.1 Public platform

- Home
- Find Jobs
- Gulf Jobs
- Jobs by country
- Jobs by city
- Jobs by category/role
- Jobs by salary
- Remote Jobs
- Verified Employers
- Company pages
- Expired Jobs / Archives
- Career Guides
- Safety / Scam Prevention
- Salary Guides
- About
- Contact
- Login
- Register

## 4.2 Candidate platform

- Dashboard
- Profile
- CV / Resume
- Saved Jobs
- Applications
- Application Timeline
- Messages
- Alerts
- Interviews
- Career Tools
- Privacy / Visibility
- Security settings
- Data export/delete request

## 4.3 Employer/recruiter platform

- Dashboard
- Company
- Verification
- Jobs
- New Job
- Draft Jobs
- Pending Jobs
- Published Jobs
- Expired Jobs
- Archived Jobs
- Applicants
- Pipeline
- Candidate Search
- Shortlists
- Messages
- Interviews
- Analytics
- Team
- Settings

## 4.4 Admin platform

- Overview
- Users
- Candidates
- Recruiters
- Employers
- Jobs
- Expiry Queue
- Archived Jobs
- Reports
- Moderation
- Verification
- Applications
- Reviews
- Categories
- Skills
- Locations
- Content
- SEO
- Notifications
- Analytics
- Security
- System Settings
- Roles & Permissions
- Audit Logs
- Backups / Restore tools where available
- Import / Export
- Feature Flags
- Maintenance Mode

The source PRD already specifies candidate, recruiter, employer, moderator and platform-admin roles, including audited privileged actions. fileciteturn0file0L344-L451

---

# 5. Recommended Free Technology Stack

## 5.1 Frontend

**Astro + TypeScript**

Why:

- excellent static output
- minimal client-side JavaScript by default
- island architecture for only the interactive areas that need it
- strong SEO for job pages
- excellent fit for a public-heavy marketplace
- direct Cloudflare deployment support

Cloudflare's current documentation supports Astro on Workers through the official Cloudflare adapter and explicitly describes Astro's minimal-JavaScript/islands model. citeturn945391search0

## 5.2 Styling

Use:

- Tailwind CSS
- PostCSS only if necessary
- CSS variables for design tokens
- no large UI framework by default

## 5.3 Backend/API

**Hono + TypeScript on Cloudflare Workers**

Responsibilities:

- REST API
- authentication
- authorization
- business logic
- admin APIs
- job lifecycle
- application workflows
- validation
- rate limiting hooks
- signed upload/download URLs
- scheduled tasks

## 5.4 Database

**Cloudflare D1 (SQLite)**

Use D1 as the system of record for:

- users
- jobs
- employers
- candidate profiles
- applications
- permissions
- settings
- moderation
- audit logs
- notifications metadata

Current Workers Free/D1 documentation lists 5 million rows read/day, 100,000 rows written/day, and 5 GB total D1 storage on the Workers Free plan. citeturn417363view0

This means the application must be designed around indexed queries, pagination, batch operations and small writes.

## 5.5 Object storage

**Cloudflare R2**

Store:

- CV files
- employer logos
- profile images
- certificates
- controlled application attachments
- exported reports
- generated PDFs

Current R2 free tier includes 10 GB-month Standard storage, 1 million Class A operations/month, 10 million Class B operations/month, and free egress. citeturn759338view2

## 5.6 Scheduled jobs

**Cloudflare Cron Triggers**

Use for deterministic periodic maintenance:

- vacancy expiry sweep
- alert generation
- stale draft cleanup
- reminder processing
- notification digest preparation
- archive retention checks
- moderation SLA checks
- cache invalidation jobs

Cloudflare Cron Triggers execute Workers through the `scheduled()` handler and operate on UTC. citeturn945391search2

## 5.7 Background jobs

**Cloudflare Queues**

Use for:

- email abstraction jobs if an email provider is connected later
- CV parsing
- bulk notifications
- search re-index tasks
- heavy report generation
- import processing
- AI tasks when enabled

Current Workers Free includes 10,000 Queue operations/day, with 24-hour message retention on the free plan. citeturn417363view1

## 5.8 Bot protection

**Cloudflare Turnstile**

Use on:

- register
- login when risk is elevated
- forgot password
- employer onboarding
- job publishing
- bulk messaging
- reporting
- contact forms

Turnstile's current Free plan supports most production applications and includes up to 20 widgets with unlimited challenges/verification requests. citeturn759338view4

## 5.9 CDN/DNS/security

- Cloudflare DNS
- Cloudflare CDN/cache
- Workers security headers
- WAF rules that are available on the free plan
- Turnstile
- HTTPS

## 5.10 Development tools

All free/open-source:

- Node.js LTS
- pnpm or npm
- Wrangler
- Git
- GitHub Free
- VS Code / VSCodium
- Vitest
- Playwright
- ESLint
- Prettier
- TypeScript

---

# 6. Free-Tier Architecture Rules

The app must remain functional if paid Cloudflare services are unavailable.

## 6.1 Services allowed in MVP

| Component | Technology | Role | Free-first status |
|---|---|---|---|
| Public frontend | Astro | SEO/public UI | Yes |
| Interactive UI | Astro Islands + small TypeScript modules | Search/forms/dashboard | Yes |
| API | Hono on Workers | Backend/API | Yes |
| DB | D1 | Relational data | Yes |
| Files | R2 | CV/assets | Yes, within quota |
| Bot protection | Turnstile | Abuse prevention | Yes |
| Scheduler | Cron Triggers | Expiry/maintenance | Yes |
| Async jobs | Queues | Background work | Yes, within quota |
| Auth | Custom secure auth using Web Crypto | Login/session | Yes |
| Search | D1 indexed SQL + FTS5 | MVP search | Yes |
| Testing | Vitest + Playwright | QA | Yes |

## 6.2 Services deliberately deferred

- paid vector database
- paid search cluster
- paid Redis
- paid email vendor
- paid SMS
- paid WhatsApp provider
- paid identity verification provider
- paid AI API
- paid observability SaaS

These can be adapter modules later without changing the data model.

## 6.3 Scaling rule

When a free-tier quota approaches a defined safety threshold, admin must see a warning in the system dashboard.

Suggested warning thresholds:

- 70% = notice
- 85% = warning
- 95% = critical

Admin dashboard must show current approximate usage where APIs permit it.

---

# 7. Core Job Lifecycle — Mandatory Design

## 7.1 Job statuses

```text
DRAFT
  ↓
PENDING_REVIEW
  ↓
APPROVED
  ↓
PUBLISHED
  ↓
EXPIRING_SOON
  ↓
EXPIRED
  ↓
ARCHIVED
```

Alternative terminal/manual statuses:

```text
REJECTED
PAUSED
CLOSED
SUSPENDED
DELETED
```

## 7.2 Meaning of each status

### DRAFT
Not publicly accessible.

### PENDING_REVIEW
Submitted for moderation/approval.

### APPROVED
Passed moderation but waiting for publication or scheduled publish time.

### PUBLISHED
Visible and active.

### EXPIRING_SOON
Optional derived state used for reminders, not necessarily stored.

### EXPIRED
`expiry_at <= now()` and no explicit manual close occurred before expiry.

### ARCHIVED
Historical inactive record retained according to retention policy.

### CLOSED
Employer/admin intentionally stopped hiring before the expiry date.

### SUSPENDED
Removed from public visibility due to trust/safety/compliance action.

## 7.3 Mandatory date fields

```text
published_at
expiry_at
closed_at
expired_at
archived_at
last_reopened_at
next_expiry_at
publish_at optional
```

## 7.4 Expiry timezone

Every job must store:

- timezone identifier, e.g. `Asia/Dubai`
- expiry local date/time
- normalized UTC expiry timestamp

The application must never compare date-only strings for expiry decisions.

---

# 8. Automatic Expiry Engine

## 8.1 Primary mechanism

Run a Cloudflare Cron Trigger every 5 minutes or 15 minutes depending on quota and traffic.

Recommended first release:

**every 15 minutes**

The Cron Worker executes:

```sql
SELECT id
FROM jobs
WHERE status = 'PUBLISHED'
  AND expiry_at <= CURRENT_TIMESTAMP
ORDER BY expiry_at ASC
LIMIT 200;
```

Then each job is processed in a transaction/batched mutation.

## 8.2 Expiry transaction

For each job:

1. Re-check status and expiry timestamp.
2. Set status to `EXPIRED`.
3. Set `expired_at = now`.
4. Set `closed_at` only if policy requires; otherwise keep null.
5. Set `accepting_applications = 0`.
6. Remove from search result eligibility.
7. Remove from active recommendations.
8. Update employer job counters.
9. Create `job_expired` event.
10. Create an audit log event.
11. Queue candidate/employer notification if enabled.
12. Mark sitemap/index cache as stale where applicable.
13. Make the job visible in `/jobs/expired` and archive views.

## 8.3 Race-condition protection

The expiry worker must use optimistic/conditional update semantics:

```sql
UPDATE jobs
SET status='EXPIRED', expired_at=?, accepting_applications=0
WHERE id=?
  AND status='PUBLISHED'
  AND expiry_at <= ?;
```

Only the worker execution that successfully changes the row is allowed to create the primary expiry event.

## 8.4 Request-path safety net

Even if Cron has not run yet, every active-job read endpoint/page must enforce:

```text
if status = PUBLISHED AND expiry_at <= current_time
then treat as EXPIRED
```

This guarantees that an expired vacancy cannot remain functionally active due to scheduler delay.

## 8.5 Application endpoint safety

Before creating an application:

```text
job must be PUBLISHED
AND accepting_applications = true
AND expiry_at > now()
```

Otherwise return:

```text
JOB_EXPIRED
```

and show:

> This vacancy is no longer accepting applications.

## 8.6 Expiry reminders

Configurable default reminders:

- 7 days before expiry
- 3 days before expiry
- 24 hours before expiry
- 1 hour before expiry where appropriate

Admin can globally enable/disable each reminder.

## 8.7 Reopening expired jobs

Employer/admin may reopen a job only by selecting a new expiry date.

Reopen flow:

```text
Expired
→ Review
→ Set new expiry
→ Optional edit
→ Moderation check
→ Re-publish
```

Every reopen creates an immutable audit entry.

---

# 9. Dedicated Expired Jobs / Archive Experience

## 9.1 Public route

```text
/jobs/expired
/jobs/expired/:country
/jobs/expired/:country/:city
/jobs/expired/:slug
```

## 9.2 Archive page behavior

Show:

- expired date
- original publish date
- employer
- location
- salary if historically published
- original job title
- verification level at time of publication
- closure reason where public-safe
- related active jobs
- employer's current active jobs

Do NOT show an expired listing's Apply button.

## 9.3 Expired job detail

The job detail page should clearly state:

> **This job has expired and is no longer accepting applications.**

Optional actions:

- Search similar jobs
- View employer
- Create job alert
- Report historical problem

## 9.4 Archived vs deleted

Never hard-delete ordinary expired jobs merely because they expired.

Recommended model:

```text
active data → expired data → archived data → retention purge
```

Hard deletion is reserved for:

- valid data-deletion requests
- policy/security events
- retention expiry
- legal instruction
- admin permanent deletion action

---

# 10. SEO Rules for Active and Expired Jobs

Every job receives a stable canonical URL.

Example:

```text
/jobs/uae/dubai/senior-software-engineer/abc123
```

Active job:

- indexable when eligible
- canonical URL
- `JobPosting` JSON-LD
- sitemap inclusion

Expired job:

- no longer represented as an active job opportunity
- `validThrough` is populated with the expiry timestamp
- excluded from active job sitemap
- archive page may remain indexable when useful
- detail page must state that applications are closed
- avoid misleading structured data implying current availability

The source PRD specifically requires indexable job URLs, `JobPosting` structured data and correct expired-job treatment. fileciteturn0file0L1496-L1518

## 10.1 SEO admin controls

Admin can edit:

- title template
- meta title
- meta description
- canonical URL
- robots index/noindex
- Open Graph title
- Open Graph description
- OG image
- schema toggles
- sitemap inclusion
- slug
- redirect target

---

# 11. Job Creation PRD

Employer job wizard:

### Step 1 — Job identity

- title
- department
- category
- function
- seniority
- openings
- reference code

### Step 2 — Location

- country
- city
- multiple locations
- remote/hybrid/onsite
- candidate location restrictions
- timezone

### Step 3 — Employment

- full-time
- part-time
- contract
- temporary
- internship
- apprenticeship
- freelance/contractor where appropriate

### Step 4 — Compensation

- salary min
- salary max
- currency
- monthly/annual/hourly
- base salary
- commission
- bonus
- allowance
- equity
- total compensation

### Step 5 — Requirements

- skills
- experience
- education
- certifications
- languages
- authorization

### Step 6 — Mobility

- visa sponsorship
- work permit support
- relocation
- housing
- transport
- medical
- flights
- joining support

### Step 7 — Screening

- screening questions
- knockout questions
- scoring weights

### Step 8 — Application method

- Techily Fly native application
- external ATS
- external company site

### Step 9 — Publication lifecycle

Mandatory:

- `publish_at` optional
- `expiry_at` mandatory
- timezone mandatory
- auto-expire enabled by default

### Step 10 — Preview & policy checks

- duplicate check
- scam check
- content completeness
- salary validation
- expiry validation
- external URL validation
- SEO preview
- schema validation
- moderation score

---

# 12. Candidate Experience

Candidate onboarding should complete core profile information without forcing a huge form up front.

Required:

- name
- country of residence
- city
- target country
- target title
- experience level
- primary skills
- employment type
- work mode
- verified email
- CV or structured profile

International fields:

- work authorization
- sponsorship need
- relocation willingness
- notice period
- availability
- expected salary
- salary currency
- languages

Candidate visibility modes:

- public to verified recruiters
- matching recruiters only
- applications only
- anonymous until contact is accepted

The source PRD explicitly includes these profile, authorization, mobility and visibility controls. fileciteturn0file0L484-L551

---

# 13. Application Tracking System

Each application gets a persistent ID.

Canonical candidate-facing stages:

```text
DRAFT
APPLIED
RECEIVED
RECRUITER_REVIEW
SHORTLISTED
SCREENING
INTERVIEW_SCHEDULED
INTERVIEW_COMPLETED
ASSESSMENT
FINAL_REVIEW
OFFER
OFFER_ACCEPTED
BACKGROUND_VERIFICATION
VISA_MOBILITY
JOINING_SCHEDULED
HIRED
REJECTED
WITHDRAWN
JOB_CLOSED
JOB_EXPIRED
```

The source PRD already defines a canonical candidate pipeline and timeline. fileciteturn0file0L750-L792

## 13.1 Expiry impact on applications

When a job expires:

- existing applications remain active
- employer can still process historical applications
- new applications are blocked
- candidate timeline records `JOB_EXPIRED` only when relevant
- employer sees a banner: `Job expired — existing applicants can still be managed`

This is critical: **job expiry must not delete or automatically reject existing applicants.**

---

# 14. Employer / Recruiter PRD

## Employer verification

Verification levels:

```text
UNVERIFIED
CONTACT_VERIFIED
BUSINESS_VERIFIED
HIGH_TRUST
SUSPENDED
```

The supplied PRD uses a similar trust-level model and requires verification badges to explain what was actually checked. fileciteturn0file0L1319-L1350

## Employer workspace

Employer admin can manage:

- company profile
- team members
- jobs
- job drafts
- published jobs
- expired jobs
- archived jobs
- applicants
- pipeline
- candidate shortlists
- interviews
- messages
- analytics
- account settings

## Team roles

Default organization roles:

- Organization Owner
- Employer Admin
- Recruiter
- Hiring Manager
- Interviewer
- Analyst / Read-only

All permissions are configurable by platform admin.

---

# 15. Complete Admin Control System

This is a primary product requirement.

## 15.1 RBAC

Permission format:

```text
resource.action
```

Examples:

```text
jobs.create
jobs.read
jobs.update
jobs.delete
jobs.publish
jobs.unpublish
jobs.expire
jobs.reopen
jobs.archive
jobs.restore
jobs.export
users.read
users.update
users.suspend
employers.verify
employers.suspend
reports.resolve
settings.update
roles.manage
permissions.manage
audit.read
```

## 15.2 Default admin roles

### Super Admin
Full system control.

### Platform Admin
Operational control, without system-owner secrets.

### Content Admin
Pages, categories, locations, SEO/content.

### Moderation Admin
Jobs, reports, verification, abuse.

### Support Admin
User/application support; restricted financial/security access.

### Analytics Admin
Analytics and reports, no mutation permissions.

### Technical Admin
System/integration/settings access.

## 15.3 Permission granularity

Each permission can be scoped by:

- global
- organization
- own records
- assigned records
- region/country
- resource type

## 15.4 Admin CRUD matrix

Every major entity must support as applicable:

```text
Create
Read
Update
Delete/Soft Delete
Publish
Unpublish
Archive
Restore
Suspend
Verify
Reject
Approve
Export
Import
Bulk Edit
Bulk Status Change
```

## 15.5 System configuration center

Admin must be able to change without code deployment:

- site name
- logo
- favicon
- colors
- contact details
- social links
- default language
- timezone
- pagination sizes
- vacancy default expiry duration
- minimum/maximum expiry duration
- reminder schedule
- retention periods
- allowed countries
- currencies
- job categories
- skills
- job types
- employment types
- screening types
- application stages
- verification rules
- trust labels
- report reasons
- notification rules
- homepage sections
- navigation menu
- footer menu
- SEO templates
- robots rules
- sitemap settings
- feature flags
- registration settings
- employer approval rules
- candidate visibility defaults
- attachment limits
- image limits
- file type allowlist
- rate limits
- maintenance mode

## 15.6 No-code-ish content management

Admin should have a CMS-like interface for:

- static pages
- FAQs
- careers guides
- country guides
- safety notices
- banners
- announcements
- homepage blocks
- featured jobs
- featured employers
- footer content

---

# 16. Admin Job Management Screens

## Jobs list

Columns:

- ID
- title
- employer
- location
- status
- published date
- expiry date
- days remaining
- applications
- reports
- verification
- quality score
- last updated

Filters:

- active
- draft
- pending
- approved
- published
- expiring soon
- expired
- archived
- suspended
- rejected
- employer
- country
- category
- date range

Bulk actions:

- publish
- pause
- expire now
- extend expiry
- archive
- restore
- feature
- unfeature
- assign moderator
- export
- delete

## Expiry Queue

Dedicated admin screen showing:

```text
Expiring today
Expiring in 24h
Expiring in 3 days
Expired in last 24h
Expired but not archived
Expiry processing failures
Jobs with invalid expiry dates
```

Each row includes the automatic lifecycle reason.

---

# 17. Search Architecture

## MVP

Use D1 full-text search and indexed columns.

Indexes required on:

```text
jobs.status
jobs.expiry_at
jobs.published_at
jobs.country_id
jobs.city_id
jobs.category_id
jobs.employer_id
jobs.employment_type
jobs.work_mode
jobs.min_salary
jobs.max_salary
jobs.created_at
applications.job_id
applications.candidate_id
users.role
```

Do NOT perform unindexed wildcard scans against large tables.

## Search behavior

Search must exclude:

- expired jobs
- archived jobs
- suspended jobs
- rejected jobs
- draft jobs

unless the search is explicitly for admin/archive views.

## Search ranking

Initial ranking concept from the supplied PRD can be retained:

```text
30% relevance
20% candidate fit
10% freshness
10% job quality
10% employer trust
10% salary transparency
5% application quality
5% personalization
```

The source PRD recommends experimental tuning and clear sponsored labeling. fileciteturn2file0L150-L170

---

# 18. Trust and Anti-Scam

High-risk signals:

- candidate payment request
- visa/payment demand without clear lawful context
- bank/card credentials
- crypto payment
- gift cards
- fake government association
- impersonation
- unrealistic salary
- unverified WhatsApp-only contact
- suspicious domain
- duplicate jobs
- suspicious mass posting

The source PRD already establishes these anti-scam rules and a moderation escalation ladder. fileciteturn0file0L1352-L1399

## Moderation workflow

```text
Reported / Flagged
→ Risk Score
→ Moderation Queue
→ Investigate
→ Action
→ Notify
→ Appeal
```

Risk actions:

- warning
- hide listing
- freeze employer
- suspend recruiter
- reject job
- delete content
- escalate

---

# 19. Security Architecture

## Authentication

- password hashing with a modern memory-hard algorithm available in the runtime/library stack
- session rotation after login and privilege elevation
- secure HTTP-only cookies
- SameSite protection
- CSRF protection for cookie-authenticated state-changing requests
- Turnstile on risky forms
- rate limits
- login abuse detection
- admin MFA requirement where available/appropriate

## Authorization

Never rely on hidden UI controls.

Every API route must independently enforce permissions.

## File security

- private R2 objects
- signed short-lived URLs
- file size limits
- MIME/type validation
- extension validation
- safe filenames
- malware scanning adapter
- retention policy
- deletion capability
- no public CV bucket

## OWASP baseline

Protect against:

- SQL injection
- XSS
- CSRF
- SSRF
- IDOR
- broken access control
- session fixation
- credential stuffing
- file upload abuse
- path traversal
- insecure direct object access
- webhook spoofing

---

# 20. Data Model

Primary entities:

```text
users
roles
permissions
role_permissions
user_roles
sessions
login_events
organizations
employers
employer_verifications
employer_team_members
candidate_profiles
candidate_preferences
candidate_authorizations
candidate_mobility
resumes
resume_versions
skills
skill_aliases
candidate_skills
work_experiences
education
certifications
languages
projects
jobs
job_locations
job_skills
job_compensation
job_benefits
job_screening_questions
job_visibility
job_events
job_status_history
job_revisions
applications
application_answers
application_stages
application_events
conversations
messages
interviews
interview_scorecards
offers
reviews
reports
moderation_cases
notifications
saved_jobs
saved_searches
job_alerts
countries
regions
cities
industries
categories
employment_types
currencies
salary_periods
pages
page_revisions
faqs
menus
menu_items
site_settings
feature_flags
notification_templates
seo_settings
integrations
import_jobs
audit_logs
system_jobs
system_job_runs
usage_metrics
```

The supplied PRD's core data model already includes User, CandidateProfile, Employer, RecruiterProfile, Job, Application, messaging, interviews, moderation, notifications, billing and audit entities. fileciteturn2file0L1881-L1929

---

# 21. Critical Job Table Design

Example logical schema:

```sql
jobs (
  id TEXT PRIMARY KEY,
  employer_id TEXT NOT NULL,
  created_by_user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  status TEXT NOT NULL,
  visibility TEXT NOT NULL DEFAULT 'public',
  accepting_applications INTEGER NOT NULL DEFAULT 0,
  publish_at TEXT,
  published_at TEXT,
  expiry_at TEXT NOT NULL,
  expiry_timezone TEXT NOT NULL DEFAULT 'UTC',
  closed_at TEXT,
  expired_at TEXT,
  archived_at TEXT,
  last_reopened_at TEXT,
  auto_expire_enabled INTEGER NOT NULL DEFAULT 1,
  auto_renew_enabled INTEGER NOT NULL DEFAULT 0,
  country_id TEXT,
  city_id TEXT,
  category_id TEXT,
  employment_type_id TEXT,
  work_mode TEXT,
  quality_score INTEGER,
  verification_snapshot TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

Important indexes:

```sql
CREATE INDEX idx_jobs_active_expiry
ON jobs(status, expiry_at);

CREATE INDEX idx_jobs_search
ON jobs(status, country_id, city_id, category_id, created_at);

CREATE INDEX idx_jobs_employer
ON jobs(employer_id, status);
```

---

# 22. Audit Logging

Every privileged or lifecycle-sensitive action must produce an audit log.

Audit fields:

```text
audit_id
actor_user_id
actor_role
action
resource_type
resource_id
before_snapshot_hash
after_snapshot_hash
reason
ip_hash / privacy-safe network signal
user_agent_summary
timestamp
request_id
```

Mandatory events:

- job created
- job edited
- job published
- job extended
- job expired automatically
- job expired manually
- job reopened
- job archived
- job restored
- job deleted
- employer verified
- employer suspended
- user suspended
- permission changed
- admin setting changed
- moderation decision
- data export
- data deletion

---

# 23. Notifications

Channels in free-first MVP:

- in-app notification center
- browser push where implemented

Optional provider adapters:

- email
- WhatsApp
- SMS

Core notification events:

- job saved
- new matching job
- application submitted
- application status changed
- recruiter message
- recruiter invite
- interview scheduled
- interview reminder
- job expiring
- job expired
- job reopened
- security event
- moderation/report result

Notifications must be idempotent.

---

# 24. Performance / Lightning-Fast Requirements

## 24.1 Public pages

Public pages must prefer:

- static generation for truly static content
- cached server rendering for semi-dynamic pages
- edge rendering only when personalization/data requires it
- HTML-first delivery
- minimal hydration

Cloudflare's Astro guidance specifically emphasizes minimal JavaScript and supports server rendering through the Cloudflare adapter. citeturn945391search0

## 24.2 Asset rules

- WebP/AVIF where possible
- responsive image sizes
- lazy-load below-the-fold images
- SVG for logos/icons where possible
- avoid autoplay video on homepage
- limit third-party scripts
- no heavy analytics SDK in the critical path

## 24.3 Database rules

- every frequent filter must have an index
- no `SELECT *` for large result lists
- cursor pagination for high-volume data
- batch writes where practical
- avoid N+1 queries
- cache taxonomy data
- use small JSON payloads

## 24.4 JavaScript rules

Default public job page should require almost no client JavaScript.

Interactive JS is permitted for:

- filters
- saved jobs
- apply flow
- login forms
- dashboards
- messaging

## 24.5 Caching

Cache:

- country lists
- city lists
- categories
- public employer pages
- static content
- public job pages for safe durations

Never cache personalized/private responses.

## 24.6 Performance budgets

Target:

- excellent Core Web Vitals
- small JS bundle
- fast server response
- no blocking third-party script on primary content
- image payload minimized
- public job pages usable on budget mobile networks

---

# 25. Admin-Controlled Performance Settings

Admin-configurable where technically safe:

- public page cache duration
- image size presets
- listing page size
- search result limit
- prefetch toggles
- feature flags
- notification batch size
- queue batch size
- cron batch size
- expiry sweep batch size

Dangerous performance settings must have validation and hard upper limits.

---

# 26. API Architecture

Base:

```text
/api/v1
```

## Auth

```text
POST /auth/register
POST /auth/login
POST /auth/logout
POST /auth/forgot-password
POST /auth/reset-password
GET  /auth/me
```

## Candidate

```text
GET   /candidate/me
PATCH /candidate/me
POST  /candidate/resumes
GET   /candidate/resumes
DELETE /candidate/resumes/:id
```

## Jobs

```text
GET   /jobs
GET   /jobs/:id
POST  /jobs/:id/save
DELETE /jobs/:id/save
POST  /jobs/:id/apply
```

## Employers

```text
POST  /employers
GET   /employers/:id
PATCH /employers/:id
POST  /employers/:id/verify
```

## Recruiter

```text
GET  /candidates/search
POST /candidates/:id/invite
POST /applications/:id/message
POST /applications/:id/interview
PATCH /applications/:id/stage
```

## Admin

```text
GET   /admin/jobs
POST  /admin/jobs
PATCH /admin/jobs/:id
DELETE /admin/jobs/:id
POST  /admin/jobs/:id/publish
POST  /admin/jobs/:id/expire
POST  /admin/jobs/:id/reopen
POST  /admin/jobs/:id/archive
POST  /admin/jobs/:id/restore
GET   /admin/jobs/expiry-queue
GET   /admin/jobs/expired
GET   /admin/users
PATCH /admin/users/:id
GET   /admin/reports
PATCH /admin/reports/:id
GET   /admin/audit-log
GET   /admin/settings
PATCH /admin/settings
```

---

# 27. Error Handling

Standard JSON error format:

```json
{
  "error": {
    "code": "JOB_EXPIRED",
    "message": "This vacancy is no longer accepting applications.",
    "requestId": "..."
  }
}
```

Required lifecycle error codes include:

```text
JOB_NOT_FOUND
JOB_NOT_PUBLISHED
JOB_EXPIRED
JOB_CLOSED
JOB_SUSPENDED
APPLICATIONS_DISABLED
FORBIDDEN
RATE_LIMITED
VALIDATION_ERROR
UPLOAD_REJECTED
DUPLICATE_JOB
VERIFICATION_REQUIRED
```

---

# 28. Admin Analytics

## Platform KPIs

- active users
- active candidates
- active employers
- verified employers
- published jobs
- expiring jobs
- expired jobs/day
- archived jobs
- applications/day
- hires/month
- report volume
- scam rate
- employer response time
- candidate response time
- search-to-apply conversion
- application-to-interview conversion
- interview-to-offer conversion
- offer-to-hire conversion

## Expiry analytics

Mandatory dashboard cards:

- active vacancies
- expiring in 24h
- expiring in 3 days
- expired today
- expired this week
- expired this month
- average vacancy lifetime
- median time-to-first-application
- % vacancies expired without applications
- % reopened after expiry
- top employers by expired vacancies
- expiry processing failures

The source PRD defines the broader marketplace funnel and qualified hiring connection metric; the expiry metrics above extend that analytics layer to the requested vacancy lifecycle. fileciteturn2file0L538-L590

---

# 29. Data Retention

Retention must be configurable by admin policy, subject to applicable legal review.

Categories:

- accounts
- applications
- messages
- CVs
- moderation evidence
- audit logs
- expired jobs
- archived jobs
- payment records if later added

The supplied PRD already recommends separate retention categories with configurable, policy-based periods. fileciteturn3file0L30-L42

Recommended technical behavior:

```text
expired → archived
archived → retention eligible
retention eligible → purge queue
purge queue → irreversible deletion
```

Permanent deletion must require a privileged permission and an audit log.

---

# 30. Backup and Disaster Recovery

Free-first architecture means backups require special care.

Requirements:

- version-controlled migration files
- daily logical database export where feasible
- periodic R2 object inventory/export plan
- backup status visible to admin
- restore runbook
- test restore environment
- encrypted backup storage
- no backup secrets in repository

Admin dashboard:

```text
Last successful DB backup
Last successful asset backup
Last restore test
Backup failure count
```

---

# 31. CI/CD

GitHub-based workflow:

```text
Pull Request
→ Lint
→ Typecheck
→ Unit Tests
→ API Tests
→ Build
→ Playwright Smoke Tests
→ Deploy Preview
→ Manual/Automated Approval
→ Production Deploy
```

Recommended branches:

```text
main
staging
feature/*
fix/*
```

Use Wrangler for deployment.

Cloudflare's current documentation supports direct Astro deployment to Workers and automatic configuration through Wrangler. citeturn945391search0turn945391search5

---

# 32. Testing Strategy

## Unit tests

Cover:

- expiry calculation
- timezone conversion
- permission checks
- salary formatting
- job status transitions
- validation
- ranking functions

## Integration tests

Cover:

- job publish
- job expiry
- application blocking after expiry
- reopen flow
- employer permissions
- admin override
- moderation
- R2 upload authorization

## E2E tests

Critical path:

```text
Candidate registers
→ searches
→ opens active job
→ applies
→ sees application
```

Employer path:

```text
Employer registers
→ verifies
→ creates job
→ publishes
→ receives application
→ interviews candidate
```

Expiry path:

```text
Admin creates/publishes job
→ time advances / scheduler mocked
→ job expires
→ search excludes it
→ Apply is blocked
→ archive page shows it
→ admin reopens it
→ job becomes active again with new expiry
```

---

# 33. Abuse and Rate Limiting

Limit by IP + account + action.

Important actions:

- register
- login
- password reset
- apply
- job creation
- publish
- messages
- invites
- reports
- CV upload
- bulk export

The supplied PRD includes rate limits, application velocity detection, job publishing limits, outreach limits, duplicate detection and malicious-link scanning. fileciteturn2file0L893-L908

---

# 34. Internationalization

Architecture must be i18n-ready from day one.

Launch:

- English

Next:

- Arabic
- Hindi
- Urdu
- Bengali
- Malayalam
- Tamil
- Telugu
- Tagalog

Arabic requires real RTL support.

The source PRD explicitly requires i18n readiness and true RTL support. fileciteturn2file0L372-L391

---

# 35. UI / Design System

Use the supplied brand direction:

- TF Graphite `#212121`
- Signal Coral `#FF7759`
- Cloud Surface `#FAFAFA`
- Manrope for UI/body/headings
- Geist Mono for technical/data layers

The supplied PRD defines these tokens and specifically asks for a calm, high-trust and fast interface without noisy decoration. fileciteturn0file0L39-L64 fileciteturn2file0L440-L490

Design principles:

- professional
- data-rich
- calm
- trustworthy
- fast
- accessible
- mobile-first

Avoid:

- fake urgency
- excessive gradients
- excessive glassmorphism
- decorative animation
- crowded job cards
- misleading trust badges

---

# 36. Accessibility

Target WCAG 2.2 AA where feasible.

Requirements:

- keyboard navigation
- visible focus
- semantic HTML
- accessible labels
- contrast
- reduced motion
- accessible errors
- accessible tables
- screen-reader-friendly status changes
- no color-only meaning

The source PRD has the same accessibility baseline. fileciteturn2file0L352-L369

---

# 37. Admin Homepage / CMS

Admin can arrange homepage modules:

```text
Hero Search
Trust Strip
Featured Jobs
Latest Gulf Jobs
Jobs by Country
Jobs by Category
Visa Sponsorship Jobs
Remote Jobs
Verified Employers
Salary Guides
Career Guides
Safety Guides
CTA
```

Each block has:

- enabled/disabled
- display order
- title
- subtitle
- destination URL
- image
- background mode
- visibility rules

---

# 38. Admin Settings Architecture

Store non-secret configuration in D1.

Sensitive secrets must be stored as Cloudflare Worker secrets, never in the database.

Settings groups:

```text
GENERAL
BRANDING
SEO
AUTH
SECURITY
REGISTRATION
JOBS
EXPIRY
APPLICATIONS
EMPLOYERS
MODERATION
NOTIFICATIONS
FILES
SEARCH
ANALYTICS
LOCALIZATION
MAINTENANCE
INTEGRATIONS
```

Each settings change must create an audit record.

---

# 39. Feature Flags

Use a database-driven feature flag system.

Example:

```text
ai_matching = false
candidate_search = true
whatsapp = false
reviews = false
salary_guides = true
public_expired_jobs = true
employer_auto_publish = false
```

Admin can enable/disable features without deployment.

---

# 40. AI Strategy — Free-First

AI cannot be a mandatory dependency for MVP.

MVP must function without paid LLM/API usage.

Phase 1:

- keyword skill extraction
- rule-based matching
- deterministic templates
- lightweight heuristics

Phase 2:

- optional external/local AI adapter
- resume parsing
- semantic job matching
- recruiter natural language search

The supplied PRD already requires provider abstraction, explainability, human override and prevention of fabricated candidate facts. fileciteturn2file0L316-L349

---

# 41. Candidate Matching

MVP matching:

```text
Hard eligibility
+ skills
+ experience
+ location
+ work authorization
+ salary fit
+ employment type
+ work mode
```

Do not use protected/sensitive traits for ranking.

Explain matches:

```text
Strong skill match
Required experience satisfied
Location compatible
Work authorization compatible
Salary within expectation
```

---

# 42. Billing / Monetization Readiness

Billing is **not required for MVP core functionality**.

Architecture should be billing-ready with:

- plans
- entitlements
- subscriptions
- invoices
- payments
- sponsored jobs
- quotas

But no candidate should have to pay to apply to an ordinary vacancy.

The source PRD makes free core job search/application a product principle. fileciteturn0file0L1614-L1630

---

# 43. Import / Job Aggregation

Later integrations may ingest jobs from:

- employer feeds
- ATS integrations
- authorized APIs
- permitted public career pages

Never depend on unauthorized scraping.

Imported job fields:

- source
- original URL
- source timestamp
- import timestamp
- employer mapping
- canonical ID
- duplicate hash
- source expiry detection

The source PRD explicitly recommends permitted feed/API/career-page ingestion and says unauthorized scraping should be avoided. fileciteturn0file0L1469-L1492

---

# 44. Sitemap Architecture

Dynamic sitemaps:

```text
/sitemap.xml
/sitemaps/jobs-1.xml
/sitemaps/jobs-2.xml
/sitemaps/companies.xml
/sitemaps/countries.xml
/sitemaps/categories.xml
/sitemaps/guides.xml
```

Rules:

- active eligible jobs included
- expired jobs excluded from active job sitemap
- archived pages optional based on SEO policy
- removed URLs redirected or return appropriate status

Admin can trigger sitemap refresh/invalidation.

---

# 45. Suggested Sitemap / Route Structure

```text
/
/jobs
/jobs/expired
/jobs/:country
/jobs/:country/:city
/jobs/:country/:city/:role
/jobs/:country/:city/:role/:slug
/companies
/company/:slug
/gulf-jobs
/gulf-jobs/uae
/gulf-jobs/saudi-arabia
/gulf-jobs/qatar
/gulf-jobs/kuwait
/gulf-jobs/oman
/gulf-jobs/bahrain
/candidates
/career-guides
/safety
/salaries
/about
/contact
/login
/register

/app
/app/profile
/app/cv
/app/saved
/app/applications
/app/messages
/app/interviews
/app/alerts
/app/settings

/recruiter
/recruiter/dashboard
/recruiter/jobs
/recruiter/jobs/new
/recruiter/jobs/:id
/recruiter/jobs/expired
/recruiter/candidates
/recruiter/pipelines
/recruiter/interviews
/recruiter/messages
/recruiter/analytics
/recruiter/company
/recruiter/team
/recruiter/settings

/admin
/admin/dashboard
/admin/jobs
/admin/jobs/new
/admin/jobs/:id
/admin/jobs/expiry
/admin/jobs/expired
/admin/jobs/archive
/admin/employers
/admin/candidates
/admin/recruiters
/admin/applications
/admin/reports
/admin/moderation
/admin/verification
/admin/reviews
/admin/categories
/admin/skills
/admin/locations
/admin/content
/admin/seo
/admin/notifications
/admin/analytics
/admin/settings
/admin/roles
/admin/permissions
/admin/audit
/admin/system
```

---

# 46. Homepage Product Definition

Hero:

> **Find the right international job.**

Search:

```text
Job title, skills or company | Country, city or remote | Search Jobs
```

Trust strip:

- Verified employers
- Salary transparency
- International hiring information
- Scam reporting

Primary sections:

- Jobs for you
- Latest Gulf jobs
- Verified employers
- Visa sponsorship jobs
- Remote international jobs
- High-demand roles
- Salary guides
- Safety guides

This structure is adapted directly from the supplied PRD's candidate homepage concept. fileciteturn3file0L279-L305

---

# 47. Production Monitoring

Monitor:

- Worker errors
- API latency
- database failures
- expiry task failures
- queue failures
- auth failures
- file upload failures
- search failures
- application creation failures
- notification failures
- sitemap failures
- moderation backlog

Cloudflare Workers currently provides built-in observability/logging on the platform, while free limits still apply and therefore the application should keep structured logs compact. citeturn945391search0turn417363view1

---

# 48. Health Checks

Endpoints:

```text
/health
/health/db
/health/storage
/health/queue
```

Admin health panel must show:

```text
Application: OK
Database: OK/DEGRADED
R2: OK/DEGRADED
Queue: OK/DEGRADED
Scheduler: LAST RUN / FAILED
```

---

# 49. Cron Schedule

Recommended first release schedule:

```text
*/15 * * * *     Vacancy expiry sweep
0 * * * *        Reminder/notification sweep
*/30 * * * *     Moderation/time-sensitive checks
0 2 * * *        Retention/cleanup checks
0 3 * * *        Search maintenance
0 4 * * 0        Weekly integrity checks
```

All timestamps are evaluated/stored in UTC with job-local timezone metadata for display. Cloudflare Cron execution itself is UTC. citeturn945391search2

Only a maximum of five Cron Triggers per free account should be assumed from current documented free limits, so related tasks may need to be multiplexed through one Worker. citeturn945391search1

---

# 50. Expiry Worker Pseudocode

```ts
export default {
  async scheduled(event, env, ctx) {
    await expirePublishedJobs(env.DB);
    await processDueNotifications(env.DB);
    await processRetentionQueue(env.DB);
  }
};

async function expirePublishedJobs(db: D1Database) {
  const now = new Date().toISOString();

  const result = await db.prepare(`
    SELECT id
    FROM jobs
    WHERE status = 'PUBLISHED'
      AND auto_expire_enabled = 1
      AND expiry_at <= ?
    ORDER BY expiry_at ASC
    LIMIT 200
  `).bind(now).all();

  for (const row of result.results) {
    await db.batch([
      db.prepare(`
        UPDATE jobs
        SET status='EXPIRED',
            accepting_applications=0,
            expired_at=?,
            updated_at=?
        WHERE id=?
          AND status='PUBLISHED'
          AND expiry_at <= ?
      `).bind(now, now, row.id, now),

      db.prepare(`
        INSERT INTO audit_logs (...)
        VALUES (...)
      `)
    ]);
  }
}
```

Implementation must include idempotency, concurrency protection, metrics and failure logging.

---

# 51. Admin Bulk Operations

Admin must be able to safely bulk-manage jobs.

Examples:

```text
Publish selected
Pause selected
Expire selected
Extend expiry by N days
Set exact expiry date
Archive selected
Restore selected
Change category
Change employer
Add tag
Remove tag
Feature
Unfeature
Export CSV
```

Bulk actions must:

- require permission
- show preview count
- require confirmation for destructive actions
- process in chunks
- record audit logs
- report successes/failures

---

# 52. Import / Export

Supported exports:

- users
- employers
- candidates
- jobs
- applications
- moderation cases
- audit logs
- analytics summaries

CSV exports must be permission-controlled.

Sensitive candidate fields must be excluded unless specifically authorized.

Imports must support:

- CSV job import
- employer import
- taxonomy import

All imports go through validation and dry-run preview.

---

# 53. Privacy Controls

Candidate controls:

- profile visibility
- recruiter discovery
- message permissions
- contact sharing
- data export
- delete account
- resume deletion
- application data controls where legally possible

The source PRD emphasizes data minimization, purpose limitation, candidate visibility control, retention, deletion and cross-border review. fileciteturn2file0L264-L292

---

# 54. Legal / Policy Pages

Admin-manageable pages:

- Terms of Use
- Candidate Terms
- Employer Agreement
- Recruiter Agreement
- Privacy Policy
- Cookie Policy where required
- Anti-Fraud Policy
- Content Moderation Policy
- Refund Policy if paid services are later enabled
- Safety / Scam Policy
- Data Deletion Policy

Legal guidance must be reviewed per jurisdiction before launch.

---

# 55. Launch Security Gates

Before production:

- no debug endpoints
- no exposed environment variables
- no hardcoded secrets
- secure cookies
- CSRF tests
- permission tests
- IDOR tests
- file upload abuse tests
- rate-limit tests
- admin privilege escalation tests
- expired-job application block tests
- audit log tests
- restore/reopen tests

---

# 56. Launch Readiness Gates

## Gate A — Candidate

```text
Register → Profile → Search → View → Apply → Track
```

## Gate B — Employer

```text
Register → Verify → Post → Publish → Receive → Review → Interview
```

## Gate C — Expiry

```text
Publish → Expiry time reached → Auto expire → Search removal → Archive page
```

## Gate D — Admin

```text
Create/Edit/Delete/Publish/Expire/Reopen/Archive/Restore
```

## Gate E — Trust

```text
Report → Flag → Moderate → Hide/Restore → Audit
```

## Gate F — SEO

```text
Indexable active job → valid schema → expiry lifecycle → sitemap handling
```

The source PRD's release gates already define the core Discover→Apply→Track, Verify→Post→Receive→Review→Contact→Interview and Report→Flag→Moderate flows. fileciteturn3file0L102-L128

---

# 57. MVP Scope

## Must-have

### Candidate

- registration/login
- profile
- CV upload
- job search
- filters
- job detail
- save job
- native apply
- application tracker
- notifications center
- job alerts
- report job
- privacy controls

### Employer

- company registration
- verification
- company profile
- job CRUD
- mandatory expiry date
- publish/unpublish
- automatic expiry
- expired/archived job views
- applicants
- pipeline
- messaging
- interview scheduling
- basic analytics

### Admin

- dashboard
- full job CRUD
- job moderation
- expiry queue
- expired jobs
- archive management
- reopen/restore
- employer verification
- user management
- candidate management
- taxonomy management
- CMS pages
- SEO controls
- reports/moderation
- roles & permissions
- settings
- notifications/templates
- audit logs
- analytics

### Platform

- Astro + TypeScript
- Hono + Workers
- D1
- R2
- Turnstile
- Cron
- Queues where needed
- D1 search
- SEO structured data
- sitemap
- robots
- responsive UI
- accessibility baseline
- tests

---

# 58. Post-MVP Roadmap

## Phase 2

- AI match scoring
- recruiter natural language search
- invite-to-apply
- advanced screening
- employer reviews
- salary intelligence
- WhatsApp adapter
- ATS adapters

## Phase 3

- offer management
- mobility workflow
- agency portal
- document vault
- talent pools
- recruitment services

## Phase 4

- global jobs
- multilingual expansion
- mobile apps
- assessments
- career fairs
- AI recruiter assistant
- AI career assistant

This preserves the original source PRD's phased vision while keeping the free-first MVP intentionally smaller. fileciteturn3file0L486-L528

---

# 59. What NOT to Build in MVP

Do not build initially:

- social feed
- generic community forum
- gamification
- full HRIS
- complex payroll
- crypto wallet
- applicant payment wall
- fully autonomous AI hiring
- large paid vendor dependency
- enterprise SSO before core marketplace validation

The supplied PRD similarly advises keeping the core marketplace loop ahead of social/community, complex wallet, fully autonomous AI and oversized HRIS features. fileciteturn3file0L417-L434

---

# 60. Recommended Project Structure

```text
techily-fly-jobs/
├─ apps/
│  ├─ web/                 # Astro public + candidate/employer/admin UI
│  └─ worker/              # Hono API + scheduled handlers
├─ packages/
│  ├─ db/                  # D1 schema/migrations/queries
│  ├─ auth/                # auth/session/authorization
│  ├─ jobs/                # job lifecycle domain logic
│  ├─ search/              # search/ranking
│  ├─ validation/          # shared schemas
│  ├─ ui/                  # design-system components
│  ├─ storage/             # R2 helpers
│  ├─ notifications/       # notification abstraction
│  └─ config/              # feature flags/taxonomy
├─ migrations/
├─ scripts/
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  └─ e2e/
├─ public/
├─ docs/
├─ wrangler.jsonc
├─ astro.config.mjs
├─ package.json
└─ README.md
```

---

# 61. Definition of Done for Any Feature

A feature is not complete until:

1. UI exists.
2. API exists.
3. Database model exists.
4. Permission rules exist.
5. Validation exists.
6. Error states exist.
7. Audit event exists where applicable.
8. Mobile layout works.
9. Accessibility is tested.
10. Unit/integration tests exist.
11. Admin can manage relevant configuration.
12. Documentation is updated.

---

# 62. Critical Expiry Acceptance Tests

### Test 1 — Mandatory expiry

Given a recruiter creates a job without expiry date:

**Expected:** publish is blocked.

### Test 2 — Automatic expiry

Given a published job with expiry at 10:00 UTC:

At or after 10:00:

**Expected:** status becomes `EXPIRED` automatically.

### Test 3 — Search removal

Expired job:

**Expected:** absent from public active search.

### Test 4 — Apply block

Expired job:

**Expected:** no new application can be created.

### Test 5 — Archive page

Expired job:

**Expected:** visible under `/jobs/expired` according to archive policy.

### Test 6 — Existing applications

Expired job with existing applicants:

**Expected:** applications remain accessible to employer/candidate.

### Test 7 — Reopen

Admin sets a future new expiry date:

**Expected:** audit event + job can be republished.

### Test 8 — Cache safety

A cached job page must not allow the expired job to function as active.

### Test 9 — Race condition

Two expiry executions occur together:

**Expected:** exactly one authoritative status transition and one primary expiry event.

### Test 10 — Manual close

Employer closes a job before expiry:

**Expected:** status becomes `CLOSED`, not `EXPIRED`.

---

# 63. Free-First Operational Limits to Design Around

Current documented Cloudflare free limits relevant to this architecture include:

- Workers: 100,000 requests/day and 10 ms CPU time/invocation on Free.
- D1: 5 million rows read/day, 100,000 rows written/day, 5 GB total storage.
- R2: 10 GB-month Standard storage, 1 million Class A and 10 million Class B operations/month; egress is free.
- Queues: 10,000 operations/day; 24-hour retention on Free.
- Cron Triggers: 5 per account on Workers Free.
- Workers Logs: 200,000 log events/day with 3-day retention on Free.

These are current documented limits and can change; the implementation must keep configuration values outside business logic so migration to a paid tier later does not require architectural rewrites. citeturn417363view0turn759338view2turn417363view1turn945391search1

---

# 64. Recommended Production Architecture Diagram

```text
                   Internet
                       │
                Cloudflare DNS/CDN
                       │
             ┌─────────┴─────────┐
             │                   │
        Astro Web          Hono API Worker
             │                   │
             │          ┌────────┼─────────┐
             │          │        │         │
             │         D1       R2       Queues
             │          │        │         │
             │          │        │         │
             │          └────┬───┴────┬────┘
             │               │        │
             │          Cron Scheduler│
             │               │        │
             └───────────────┴────────┘

Public pages → cache/edge
Private dashboards → Worker auth + D1
Files → private R2 + signed URLs
Expiry → Cron → D1 transaction → archive state
Heavy tasks → Queue → background consumer
Abuse protection → Turnstile
```

Cloudflare's current platform documentation supports this general pattern: Astro on Workers, D1, R2, Queues, Cron and Turnstile are all available in the relevant current Cloudflare ecosystem, with their respective free limits. citeturn945391search0turn417363view0turn759338view2turn417363view1turn759338view4

---

# 65. Final Product Principle

> **Do not optimize Techily Fly International to have the most jobs. Optimize it to have the highest number of trustworthy, relevant and actionable hiring opportunities.**

And operationally:

> **Every vacancy has a lifecycle: draft → review → publish → expire/close → archive → restore or retention purge.**

The platform must be manageable from the admin panel to the maximum practical extent, while privileged security secrets and infrastructure-level controls remain protected outside ordinary CMS-style settings.

The supplied PRD's long-term product principle is a Gulf-first, verified, salary-transparent, mobility-aware, recruiter-enabled hiring operating system. fileciteturn3file0L588-L596

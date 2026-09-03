# Techily Fly International — Job & Talent Platform
## Complete Product Requirements Document (PRD) + Platform Blueprint

**Product:** Techily Fly International Jobs & Talent Platform  
**Company:** Techily Fly International  
**Founder:** AbdurRahman Dot Top  
**Primary market:** Gulf / GCC + South Asia talent mobility + international hiring  
**Primary countries at launch:** UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, India  
**Expansion:** MENA, Asia, Europe, North America and global remote hiring

---

## 0. Executive Product Definition

Techily Fly International should not be built as another generic job board.

It should be a **trust-first international hiring marketplace** designed around the real complexity of cross-border hiring:

- Where is the job actually located?
- Can the candidate legally work there?
- Does the employer appear genuine and authorized to hire?
- Is the salary clear, comparable and shown in a useful currency?
- Does the job include visa sponsorship, relocation or employer-provided accommodation?
- What happens after the application is submitted?
- Can a recruiter proactively contact a qualified candidate rather than waiting for applications?
- Can a candidate track the complete journey from discovery to interview to offer to joining?
- Can a company manage sourcing, screening, interviews and hiring from one workspace?

The product should combine the strongest patterns visible across large platforms while creating a clear Gulf/international specialization:

**Job discovery + professional profiles + proactive sourcing + AI matching + applicant tracking + recruiter tools + employer verification + salary intelligence + mobility/visa context + anti-scam controls.**

The experience must feel serious, modern, technical and human.

> **Brand identity:** Serious technology. Intelligent systems. Human energy.

---

# 1. Brand and Company System

## 1.1 Brand Identity

### Core identity

> **Serious technology. Intelligent systems. Human energy.**

### Mandatory color palette

| Token | Hex | Intended use |
|---|---|---|
| TF Graphite | `#212121` | Primary text, navigation, dark surfaces, high-contrast UI |
| Signal Coral | `#FF7759` | Primary CTA, active states, key highlights, notifications |
| Cloud Surface | `#FAFAFA` | Page backgrounds and light surfaces |

Do not add arbitrary brand colors. Semantic states may use accessibility-safe derived system colors only where required for success/warning/error information; they must not become additional brand colors.

### Typography

| Role | Typeface |
|---|---|
| Brand, headings, UI, body | **Manrope** |
| Technical, code, machine/data layer | **Geist Mono** |

No other font family should be introduced without a design-system revision.

## 1.2 Contact Identity

**Name:** Techily Fly International  
**Owner/Founder:** AbdurRahman Dot Top  
**WhatsApp / Contact:** +91 8825164657  
**Email:** International.TechilyFly.Com@gmail.com  
**Address:** Techily Fly By AbdurRahman Ibn Ghufran, Ward No. 07, Lahsaniya, Khoripakar, Dewapur, Pachpakari, Patahi, Dhaka, Motihari, East Champaran, Bihar, India - 845427  
**Website:** http://international.techilyfly.com/  
**Social:** https://linktr.ee/techilyflyinternational

### Public privacy principle

The public marketing site may show official business contact channels. Individual candidate contact information must never become public by default.

---

# 2. Research Basis and Competitive Findings

This PRD is based on current product patterns from the named platforms and current regional hiring products. It deliberately separates enduring product patterns from platform claims that change over time.

## 2.1 High-value patterns observed

### LinkedIn

LinkedIn's recruiter products emphasize proactive candidate search, deep filters, InMail/outreach, candidate recommendations, shared projects, ATS integration, applicant management and analytics. Recruiter includes substantially deeper sourcing than Recruiter Lite. This validates the need for a **candidate-first professional profile and recruiter sourcing layer**, not only job posts.

Source: LinkedIn Recruiter / Recruiter Lite feature comparison: https://business.linkedin.com/en-in/talent-solutions/recruiter-lite/tour

### Indeed

Indeed combines job posting, matched candidates, screening, dashboard management, interviewing and employer tooling in one workflow. Its current employer materials explicitly emphasize sponsored jobs, screener questions, Smart Sourcing and a unified Employer Dashboard.

Sources:
- https://www.indeed.com/hire/how-it-works
- https://www.indeed.com/hire/resources/howtohub/hiring-guide-using-employer-tools

### Naukri

Naukri's recruiter ecosystem centers on large candidate pools, job posting, resume database/search, employer branding and recruiter intelligence. Its Resdex product advertises a large searchable talent database and recruiter services.

Source: https://www.naukri.com/recruit/resume-database-access-resdex

### Glassdoor

Glassdoor differentiates through employer reviews, employer brand storytelling and labor-market/salary context alongside jobs. This supports a Techily Fly strategy where an employer page is more than a logo and job list.

Source: https://www.glassdoor.com/employers/

### Wellfound

Wellfound demonstrates a strong startup-specific version of two-sided hiring: employer job posts, candidate discovery, advanced filters, candidate data, outbound sourcing, promotion and recruiter automation. It also supports ATS integrations and an in-platform ATS workflow.

Sources:
- https://wellfound.com/recruit/products/recruit-pro
- https://wellfound.com/recruit/all-features/post-a-job
- https://wellfound.com/recruit/all-features/autopilot

### Cutshort

Cutshort shows the value of an AI-assisted recruiter shortlist. Its product emphasizes finding a small number of top matches quickly, matching salary/location/skills/competencies, moving candidates into a hiring pipeline and integrating with external ATS systems. It also provides an assisted-recruiting service.

Source: https://cutshort.io/hiring

### Dice

Dice is particularly relevant for specialized recruiting. Its current products combine candidate search, technical taxonomy, match scoring, work-authorization and location filters, remote/time-zone sourcing, outreach, alerts, screeners, applicant management and ATS integrations. Dice's 2026 product updates specifically highlight AI Applicant Score, Application Management Filters and role-specific Screeners.

Sources:
- https://www.dice.com/hiring/
- https://www.dice.com/hiring/find-candidates/
- https://www.dice.com/hiring/whats-new

### FlexJobs

FlexJobs' model demonstrates the value of **job-quality curation and scam screening**. Its terms state that job postings are reviewed against quality and relevance criteria before inclusion.

Source: https://www.flexjobs.com/termsofuse.aspx

### ZipRecruiter

ZipRecruiter strongly emphasizes distribution, matching, candidate invitations and an employer dashboard. Its workflow is essentially: create one job → distribute → match candidates → invite → review.

Sources:
- https://www.ziprecruiter.com/Hiring
- https://www.ziprecruiter.com/invite

### foundit / Monster

foundit provides talent search, job posting, social job ads and employer branding; its career-site offering adds application management, interview scheduling and one-click publishing. Monster currently offers job ads, resume search, employer branding, ATS/feed integrations and on-demand sourcing/screening support.

Sources:
- https://recruiter.foundit.in/in/home/
- https://recruiter.foundit.in/micro-sites-services.html
- https://hiring.monster.com/solutions/enterprise

### Handshake

Handshake demonstrates a complete lifecycle for early-career recruiting: sourcing, messaging, automation, employer branding, measurement, school relationships, events/career fairs and ATS integration.

Sources:
- https://joinhandshake.com/employers/
- https://joinhandshake.com/employers/recruiting-toolkit/

### We Work Remotely / Remote OK

These platforms show that remote jobs require more than a generic "remote" label. Employers need country/time-zone restrictions, salary/compensation information, skills/tags, remote policy, promotion and distribution. Remote OK also exposes auto-matching, job alerts/distribution and Google for Jobs visibility.

Sources:
- https://weworkremotely.com/employers
- https://remoteok.com/hire-remotely

### GulfTalent

This is the most important regional model for Techily Fly. GulfTalent combines job listings with professional candidate profiles, advanced CV search, AI-powered job descriptions, automatic candidate invitations, applicant screening, bulk messaging, candidate chat, WhatsApp messaging, salary tools, employer branding and Middle East-specific labor/career content.

Sources:
- https://www.gulftalent.com/recruitment-solutions
- https://www.gulftalent.com/recruitment-solutions/job-postings
- https://www.gulftalent.com/

### NaukriGulf

NaukriGulf demonstrates the importance of Gulf-focused categories and hiring demand such as recruiters, HR, oil & gas, healthcare, construction, real estate and other regional functions. Its job pages also include employer-active signals, Easy Apply, experience, location, education, vacancy and role information.

Sources:
- https://www.naukrigulf.com/
- https://www.naukrigulf.com/recruiter-jobs-in-gulf

### Google Jobs

Google Jobs is best understood as a **distribution/discovery channel**, not a marketplace that Techily Fly should copy as a user-account product. The strategic requirement is to publish individual jobs with valid `JobPosting` structured data, correct locations, salary where available, application method and accurate expiration information so jobs can be eligible for Google's job-search experience.

Source: https://developers.google.com/search/docs/appearance/structured-data/job-posting

### Hired

Hired is no longer a standalone competitor in the form listed in the original 20-platform list. It became part of LHH Recruitment Solutions in June 2024. The product lesson worth retaining is the **two-sided marketplace + pre-screened talent + salary/offer transparency + matching** pattern, not the old brand itself.

Source: https://www.linkedin.com/company/hired-com

---

# 3. Competitive Feature Matrix

Legend: **● core / strong**, **○ partial / niche**, **— not core**, **→ strategic lesson for Techily Fly**

| Platform | Core strength | Candidate profile | Employer job posting | Proactive sourcing | Screening / matching | ATS / workflow | Reviews / salary | Gulf / mobility | Strategic lesson |
|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| LinkedIn Jobs | Professional network + recruiting | ● | ● | ● | ● | ● | ○ | ○ | Build professional identity + recruiter network |
| Indeed | High-volume general hiring | ● | ● | ● | ● | ● | ○ | ○ | Make core funnel extremely simple |
| Naukri | India mass hiring + resume DB | ● | ● | ● | ● | ● | ○ | ○ | Build searchable candidate database |
| Glassdoor | Jobs + employer intelligence | ● | ● | ○ | ○ | ○ | ● | ○ | Make employer pages useful and trustworthy |
| Wellfound | Startup matching | ● | ● | ● | ● | ● | ○ | ○ | Strong two-sided marketplace |
| Cutshort | AI shortlist for tech hiring | ● | ● | ● | ● | ● | ○ | ○ | Give recruiters a small set of high-quality matches |
| Dice | Technical sourcing | ● | ● | ● | ● | ● | ○ | ○ | Build deep skills/authorization filters |
| FlexJobs | Curated remote quality | ● | ● | ○ | ● | ○ | ○ | ○ | Trust and quality filtering |
| ZipRecruiter | Matching + distribution | ● | ● | ● | ● | ● | ○ | — | Auto-match + Invite-to-Apply |
| foundit | Talent search + branding | ● | ● | ● | ● | ● | ○ | ○ | Career site + employer brand |
| Handshake | Early career | ● | ● | ● | ● | ● | ○ | — | Events, messaging, career lifecycle |
| Hired | Two-sided tech matching | ● | ● | ● | ● | ● | ● | ○ | Transparent matching/offer data |
| We Work Remotely | Remote-only jobs | ○ | ● | ○ | ○ | ○ | ● | ○ | Remote-specific job schema |
| Remote OK | Remote jobs + syndication | ○ | ● | ● | ● | ○ | ● | ○ | Location/timezone/salary/distribution |
| SimplyHired | General search | ● | ● | ○ | ○ | ○ | ○ | — | Search aggregation/discovery |
| Monster | Enterprise recruiting | ● | ● | ● | ● | ● | ○ | ○ | Combine ads + resume + services |
| USAJOBS | Government careers | ● | ● | ● | ● | ● | ● | — | Structured eligibility and compliance workflows |
| CareerBuilder | Recruiting/HCM | ● | ● | ● | ● | ● | ○ | ○ | Enterprise workflow and recruiting services |
| Hirect | Startup/SME direct hiring | ● | ● | ● | ● | ○ | ○ | ○ | Direct employer/candidate conversations |
| Google Jobs | Search/discovery layer | — | ○ | — | ● via search | — | ○ | ● | SEO/indexing is a product capability |

**Important:** Feature descriptions above summarize current public positioning and are not intended as a one-to-one replication specification. Product availability, names, pricing and regional coverage can change.

---

# 4. Product Opportunity

## 4.1 Problem Statement

International and Gulf job seekers face a fragmented and high-risk hiring environment:

1. The same job may appear across multiple sites with inconsistent salary, location and status.
2. Candidates often cannot quickly tell whether a company is genuine.
3. Cross-border eligibility is unclear: nationality preference, existing work authorization, sponsorship, relocation, transferability and residency requirements may be missing.
4. Recruitment scams and payment requests create high candidate risk.
5. Applicants frequently lose visibility after pressing Apply.
6. Recruiters waste time reviewing low-fit CVs.
7. Employers need both inbound applications and proactive candidate sourcing.
8. Salary data is difficult to compare across countries and currencies.
9. Local Gulf communication often happens by WhatsApp, yet job platforms may not integrate the complete workflow.
10. Candidates need one place to manage CV, applications, interviews, offer details, documents and relocation preparation.

## 4.2 Product Promise

> **One trusted place to find international jobs, prove your fit, understand the offer, connect with verified employers, and move from application to joining.**

## 4.3 Strategic Wedge

Start with **Gulf employment mobility**, not the whole world.

Priority geography:

1. UAE
2. Saudi Arabia
3. Qatar
4. Kuwait
5. Oman
6. Bahrain
7. India as the major source-talent market

Then expand to:

- Egypt
- Jordan
- Pakistan
- Bangladesh
- Philippines
- Africa
- Europe
- Global remote
- Wider MENA / Asia

---

# 5. Product Goals

## 5.1 Business goals

- Build a trusted Gulf-first jobs marketplace.
- Attract high-quality candidates through free job seeking.
- Acquire verified employers and recruiters.
- Generate revenue from employers, recruiters, sponsored visibility and premium sourcing services.
- Create a defensible candidate graph and job intelligence layer.
- Become a distribution hub for international jobs, not just another listing directory.

## 5.2 User goals

### Candidate

- Find relevant jobs quickly.
- Know salary, location, work mode, sponsorship and eligibility.
- Trust the employer.
- Apply in minutes.
- Track progress.
- Be discovered by recruiters.
- Prepare for interviews.
- Manage international job moves.

### Recruiter / HR

- Publish high-quality vacancies quickly.
- Search candidate profiles.
- Receive ranked matches.
- Screen candidates.
- Contact candidates.
- Coordinate interviews.
- Maintain a pipeline.
- Reduce time-to-hire.
- Keep hiring data organized.

### Employer

- Build verified company presence.
- Advertise roles.
- Receive high-intent candidates.
- Brand the workplace.
- Share salary/benefits transparently.
- Track hiring ROI.

### Platform admin

- Prevent fraud and spam.
- Verify organizations.
- Enforce policies.
- Resolve reports.
- Monitor quality.
- Analyze marketplace health.

---

# 6. User Roles and Permissions

## 6.1 Candidate / Job Seeker

Can:

- Create profile
- Upload CV
- Generate CV from profile
- Add skills and experience
- Add preferred countries
- Add work authorization status
- Add relocation preference
- Add sponsorship need
- Search jobs
- Save jobs
- Apply
- Message eligible recruiters
- Receive recruiter invitations
- Track applications
- Schedule interviews
- Manage interview notes
- View offer
- Report scam
- Manage privacy visibility

## 6.2 Recruiter

Can:

- Create recruiter profile
- Join verified employer
- Create/post jobs
- Search candidate database
- Shortlist candidates
- Invite candidate to apply
- Send structured outreach
- Ask screening questions
- Move candidates through pipeline
- Schedule interviews
- Maintain notes
- Assign candidates to teammates
- Export permissible candidate data
- View recruiter analytics

## 6.3 Hiring Manager

Can:

- View assigned requisitions
- Review shortlisted candidates
- Provide scorecards
- Submit interview feedback
- Collaborate with recruiter
- Approve/reject candidates

## 6.4 Employer Admin

Can:

- Verify company
- Manage team
- Manage company page
- Manage jobs
- Billing
- Employer branding
- Analytics
- Compliance controls

## 6.5 Recruitment Agency

Additional permissions:

- Manage client companies
- Manage multiple requisitions
- Candidate pools
- Placement pipeline
- Client sharing permissions
- Placement outcomes

Agency workflows must explicitly identify that a recruiter/agency is acting on behalf of an employer or client.

## 6.6 Career Partner / Training Provider

Can:

- Publish approved learning opportunities
- Provide employer-linked training
- Offer candidate preparation

Do not allow training providers to disguise paid courses as jobs.

## 6.7 Moderator

Can:

- Review flagged jobs
- Review employer verification
- Freeze content
- Request evidence
- Resolve scam reports
- Escalate legal/privacy issues

## 6.8 Platform Admin

Full control with audited privileged actions.

---

# 7. Core Product Modules

1. Global Job Search
2. Gulf Job Search
3. Candidate Profiles
4. CV Builder / CV Parser
5. Recruiter Candidate Search
6. AI Job Matching
7. Employer Pages
8. Employer Verification
9. Job Posting
10. Application Tracking System
11. Screening
12. Recruiter Messaging
13. Interview Scheduling
14. Offer Management
15. Salary Intelligence
16. Mobility & Visa Context
17. Trust & Safety
18. Reviews & Workplace Insights
19. Alerts & Notifications
20. Billing / Subscriptions
21. Admin & Moderation
22. Analytics
23. SEO / Google Jobs Distribution
24. API / ATS Integrations

---

# 8. Candidate Experience PRD

## 8.1 Candidate onboarding

### Goals

Create a useful candidate profile in under 10 minutes while encouraging progressive completion rather than a long blocking form.

### Required onboarding fields

- Full name
- Country of residence
- Current city
- Target country/countries
- Target job title(s)
- Experience level
- Main skills
- Employment type
- Work mode preference
- Phone/email verification
- CV or profile information

### International hiring fields

- Current work authorization country
- Work authorization type
- Sponsorship required? yes/no/unsure
- Willing to relocate? yes/no
- Preferred relocation countries
- Notice period
- Availability date
- Expected salary
- Salary currency
- Salary period
- Current salary: optional and privacy-controlled
- Languages
- Passport/nationality: optional, controlled and collected only when legally/operationally necessary
- Country-specific eligibility fields: only where justified and policy-reviewed

Never ask for sensitive identity documents during initial profile creation.

## 8.2 Candidate profile

Sections:

1. Headline
2. About
3. Skills
4. Work experience
5. Education
6. Certifications
7. Languages
8. Projects
9. Portfolio / GitHub / LinkedIn links
10. CV
11. Preferences
12. Mobility
13. Work authorization
14. Salary expectations
15. Availability
16. Career goals
17. Recruiter visibility
18. Application activity

### Candidate visibility modes

- Public to verified recruiters
- Visible only to matching recruiters
- Private / applications only
- Anonymous talent profile until candidate accepts contact

## 8.3 CV parser

Upload PDF/DOCX.

System extracts:

- Name
- Headline
- Contact information
- Location
- Summary
- Skills
- Employment history
- Titles
- Companies
- Dates
- Education
- Certifications
- Languages
- URLs
- Salary information if explicitly included

Candidate must approve extracted content before it becomes visible.

## 8.4 CV builder

Templates:

- ATS-friendly
- Gulf professional
- Technical
- Executive
- Entry-level

The system must not invent experience, education or certifications.

AI suggestions must be clearly marked and user-approved.

## 8.5 Job search

Primary search inputs:

- Job title / keyword
- Location
- Country
- Remote mode

Filters:

- Country
- City
- GCC country
- Remote / Hybrid / Onsite
- Employer verified
- Recruiter verified
- Salary range
- Currency
- Salary period
- Experience
- Education
- Employment type
- Industry
- Department
- Job category
- Posted date
- Sponsorship
- Relocation support
- Accommodation
- Transport
- Health insurance
- Annual leave
- Shift type
- Travel requirement
- Language requirement
- Nationality eligibility where legally appropriate
- Work authorization requirement
- Company size
- Employer rating / review signal
- Easy Apply
- Recruiter actively hiring
- Urgent hiring
- Women-friendly / inclusive attributes only where legally and ethically supported

## 8.6 Job card

Must show, when available:

- Job title
- Company
- Verified employer badge
- Location
- Country
- Work mode
- Salary range
- Currency / period
- Experience
- Employment type
- Sponsorship / relocation badge
- Posted age
- Match score
- Application method

Do not show an invented salary.

## 8.7 Match score

Candidate-facing score should answer:

> "Why am I a match?"

Break into explainable factors:

- Skills match
- Experience match
- Location eligibility
- Work authorization
- Salary alignment
- Work mode alignment
- Industry relevance
- Education/certification match
- Language match
- Candidate preferences

Example:

**92% strong match**

- 9/10 required skills
- 5 years vs 4 years required
- UAE work authorization compatible
- Expected salary fits employer range
- Hybrid preference matches

Never make the score the only decision mechanism.

---

# 9. Job Detail Page PRD

## 9.1 Required sections

1. Header
2. Employer identity
3. Verification status
4. Job summary
5. Responsibilities
6. Required skills
7. Preferred skills
8. Experience
9. Education
10. Salary
11. Benefits
12. Location
13. Work mode
14. Working hours / shifts
15. Visa/sponsorship
16. Relocation
17. Application process
18. Screening questions
19. Recruiter information
20. Company overview
21. Similar jobs
22. Report job

## 9.2 Transparency card

Create a visible section:

**International Hiring Details**

- Hiring country
- Work location
- Candidate location restrictions
- Visa sponsorship: Yes / No / Not specified
- Relocation support: Yes / No / Not specified
- Work permit responsibility: employer/candidate/not specified
- Accommodation: Yes / No / Not specified
- Transport: Yes / No / Not specified
- Medical insurance: Yes / No / Not specified
- Air ticket / relocation support: Yes / No / Not specified
- Probation: specified / not specified

This section must never provide legal advice; it communicates employer-provided information and can link to official government resources.

## 9.3 Application trust banner

Example states:

- **Verified employer**
- **Identity verified**
- **Contact verified**
- **Recruiter verified**
- **Application submitted through Techily Fly**
- **External application — destination checked**

---

# 10. Application Tracking System (ATS)

Every application gets a persistent ID.

### Candidate pipeline

1. Draft
2. Applied
3. Received
4. Recruiter review
5. Shortlisted
6. Screening
7. Interview scheduled
8. Interview completed
9. Assessment
10. Final review
11. Offer
12. Offer accepted
13. Background/verification
14. Visa / mobility process
15. Joining scheduled
16. Hired
17. Rejected
18. Withdrawn
19. Job closed

Candidates must see meaningful status updates.

Employers can configure internal stages, but public candidate-facing status must map to a controlled canonical stage.

## 10.1 Application timeline

Every candidate sees a chronological event stream:

- Applied on date/time
- Application viewed
- Recruiter message
- Screening invitation
- Interview scheduled
- Interview changed
- Assessment requested
- Decision status
- Offer received

## 10.2 Application documents

Candidate can attach:

- CV
- Cover letter
- Portfolio
- Certifications
- Optional role-specific documents

Never allow a job application to silently request bank card, banking credentials or unrelated financial information.

---

# 11. Recruiter / Employer Platform PRD

## 11.1 Employer onboarding

Required:

- Company legal name
- Brand name
- Country
- Company website
- Business email
- Business category
- Company size
- Address
- Primary contact
- Legal/business verification status

Verification options, depending on jurisdiction:

- Domain/email verification
- Website ownership or domain validation
- Business registration evidence
- Government/registry cross-check where available
- Manual review
- Phone verification

## 11.2 Employer profile

- Company logo
- Company name
- About
- Website
- Industry
- Size
- Headquarters
- Other locations
- Culture
- Benefits
- Work mode
- Photos/media
- Open jobs
- Hiring departments
- Salary ranges where voluntarily published
- Reviews
- Hiring responsiveness
- Verification badges

## 11.3 Job creation wizard

### Step 1 — Role

- Job title
- Department
- Function
- Seniority
- Number of openings

### Step 2 — Location

- Country
- City
- Multiple locations
- Remote eligibility
- Candidate location restrictions
- Time zone

### Step 3 — Employment

- Full-time
- Part-time
- Contract
- Temporary
- Internship
- Apprenticeship
- Freelance/contractor only where appropriate

### Step 4 — Compensation

- Currency
- Minimum
- Maximum
- Monthly/annual/hourly
- Base salary
- Commission
- Bonus
- Equity
- Allowances
- Total compensation

### Step 5 — Requirements

- Required skills
- Preferred skills
- Years of experience
- Education
- Certifications
- Languages
- Work authorization

### Step 6 — Mobility

- Visa sponsorship
- Work permit support
- Relocation
- Housing
- Transport
- Medical
- Flights
- Joining support

### Step 7 — Screening

- Custom questions
- Yes/no knockout questions
- Numeric questions
- Experience questions
- Work authorization question
- Availability / notice period

### Step 8 — Application method

- Native Techily Fly apply
- External ATS
- External company site

### Step 9 — Publish

- Preview
- Trust checks
- Policy scan
- SEO preview
- Google JobPosting validation
- Publish

---

# 12. Recruiter Candidate Search

## 12.1 Search modes

### Structured search

Filters for:

- Job title
- Skills
- Experience
- Industry
- Country
- City
- Current location
- Preferred destination
- Work authorization
- Sponsorship need
- Salary
- Availability
- Employment type
- Remote preference
- Language
- Education
- Certification
- Last active
- Profile completeness
- Verified profile

### Natural-language recruiter search

Example:

> "Find senior civil engineers in India or GCC, 7+ years, oil & gas experience, ready to relocate to Saudi Arabia, salary expectation under SAR 30,000, English fluent."

System converts this into a structured search query and shows the interpreted filters before executing.

## 12.2 Candidate result card

- Match score
- Top matching skills
- Current title
- Years of experience
- Current country
- Target country
- Work authorization
- Salary expectation
- Availability
- Languages
- Last active
- Profile completeness
- Verification
- Outreach actions

## 12.3 Invite to Apply

Recruiter can send a structured invite:

> "We think your profile fits [Role] at [Company]. The role is in [Country]. Salary range: [X–Y]. Sponsorship: [Yes/No]. Would you like to review it?"

Candidate choices:

- Apply
- Interested
- Not interested
- Ask recruiter a question
- Hide future invites from this recruiter/company

---

# 13. AI Matching and Recommendation Engine

## 13.1 Matching architecture

Use a hybrid model:

1. Hard eligibility rules
2. Structured feature matching
3. Semantic embedding similarity
4. Behavioral signals
5. Employer/candidate preferences
6. Fairness constraints
7. Human review signals

## 13.2 Hard constraints

Examples:

- Required country
- Required license/certification
- Required language
- Minimum experience
- Work authorization
- Employment type
- Availability

Hard constraints should be explicit and inspectable.

## 13.3 Soft signals

- Similar job experience
- Skills adjacency
- Industry similarity
- Company size preference
- Salary fit
- Commute / relocation preference
- Career progression
- Profile activity

## 13.4 Prohibited or restricted inference

Do not infer sensitive personal characteristics to rank people for hiring.

Do not use:

- religion
- race/ethnicity
- protected health data
- sexual orientation
- political affiliation
- protected characteristics

for job ranking.

## 13.5 AI explainability

Every recommendation should include:

- Why matched
- Missing requirement
- Strongest evidence
- Confidence
- Any data that may be stale

## 13.6 AI recruiter assistant

Can:

- Generate job draft
- Rewrite job description
- Suggest skills
- Generate boolean search
- Summarize candidate
- Generate outreach
- Suggest interview questions
- Summarize interview feedback
- Detect missing hiring information
- Draft candidate rejection message
- Generate hiring analytics explanations

AI must not fabricate candidate facts.

---

# 14. Screening System

## 14.1 Question types

- Yes/no
- Single select
- Multi-select
- Numeric
- Free text
- Date
- Salary
- Location
- Authorization
- Experience

## 14.2 Knockout rules

Example:

> Requires a valid professional engineering license: Yes

If No, candidate can be marked as non-matching. The candidate should be told when a knockout rule is used where appropriate.

## 14.3 Recruiter scoring

Each answer can be weighted.

Example:

| Requirement | Weight |
|---|---:|
| Required certification | 25% |
| Relevant experience | 25% |
| Core skills | 25% |
| Language | 10% |
| Location/authorization | 10% |
| Notice period | 5% |

Weights must remain secondary to mandatory eligibility rules.

---

# 15. Interview Management

Features:

- Interview request
- Candidate availability
- Time zone conversion
- Calendar invitation
- Online meeting link
- Interview panel
- Interview type
- Reminder
- Reschedule
- Cancellation
- Interview scorecard
- Feedback deadline
- Candidate notes

## 15.1 Interview scorecard

- Role knowledge
- Technical skills
- Communication
- Problem solving
- Relevant experience
- Culture/team collaboration
- Candidate questions
- Final recommendation

Use neutral, job-relevant language. Avoid questions that could encourage illegal or discriminatory hiring decisions.

---

# 16. Recruiter and Candidate Messaging

## 16.1 Messaging channels

Phase 1:

- In-platform messaging
- Email notifications

Phase 2:

- WhatsApp integration where legally and operationally appropriate
- SMS

Phase 3:

- Optional verified recruiter phone/contact workflows

## 16.2 Candidate protection

- Block user
- Report recruiter
- Report job
- Restrict unsolicited messages
- Rate-limit outreach
- Anti-spam templates
- Message audit trail for moderation

## 16.3 WhatsApp policy

WhatsApp must be a controlled communication surface, not a free-for-all lead scraper.

The platform should:

- Require consent before sharing personal phone number where appropriate.
- Record outreach source.
- Provide platform-hosted reporting.
- Apply recruiter messaging limits.
- Detect mass unsolicited messaging patterns.

---

# 17. Salary Intelligence

## 17.1 Salary model

Store salary as normalized structured data:

- min
- max
- currency
- period
- base/total
- bonus
- commission
- allowances
- equity
- accommodation
- transport
- other benefits

## 17.2 Currency support

Initial:

- AED
- SAR
- QAR
- KWD
- OMR
- BHD
- INR
- USD
- EUR
- GBP

The system should display the employer's original currency first and may provide a user-selected conversion second.

Conversion timestamps must be stored.

## 17.3 Compensation comparison

Example:

**AED 12,000–15,000/month**

Estimated annual base: AED 144,000–180,000.

Additional package items:

- Housing: Included
- Transport: Included
- Medical: Included
- Annual ticket: Included

Do not estimate market salary in a way that appears to be employer-confirmed.

---

# 18. Gulf / International Mobility Intelligence

## 18.1 Candidate mobility profile

Fields:

- Current location
- Target country
- Target city
- Willing to relocate
- Sponsorship required
- Current work authorization
- Notice period
- Availability
- Relocation budget/support expected
- Family relocation preference: optional and privacy-controlled

## 18.2 Employer mobility package

- Visa sponsorship
- Work permit assistance
- Relocation support
- Temporary accommodation
- Long-term accommodation
- Transport
- Flights
- Medical insurance
- Joining allowance

## 18.3 Country information

Each country page should contain:

- General employment overview
- Official government links
- Work permit/residency overview
- Employment contract resources
- Official labor authority
- Scam warnings
- Candidate safety information

Do not present legal guidance as legal advice.

For high-risk legal topics, link to official sources and date-stamp the content.

---

# 19. Trust, Verification and Anti-Scam System

This is one of the core differentiators of Techily Fly International.

## 19.1 Employer trust levels

### Level 0 — Unverified

Limited publishing rights.

### Level 1 — Contact verified

Business email/domain/phone checks.

### Level 2 — Business verified

Evidence or registry/domain verification.

### Level 3 — High-trust employer

Additional checks, strong hiring history, low complaint rate, verified representative.

The badge must explain what was actually verified; do not imply government certification unless the platform actually has such authority.

## 19.2 Recruiter verification

- Identity verification where justified
- Business affiliation
- Company email
- Employer relationship
- Role title
- Manual review for higher-risk accounts

## 19.3 Scam detection rules

Flag jobs containing:

- Requests for money to apply
- Training fee as a hiring requirement
- Visa fee demanded from candidate without clear legal/contractual basis
- Banking credentials
- Card numbers
- Crypto payment
- Gift cards
- MLM language
- Fake government affiliation
- Impersonation
- Unrealistic salary
- Contact-only WhatsApp with no verifiable employer
- Copy/pasted jobs with suspicious domains
- Recruitment for data harvesting rather than employment
- Repeated reposting from newly created accounts

Google's job posting policies explicitly reject fake jobs, misleading postings, payment-required applications, and jobs with no way to apply. Techily Fly should adopt similarly strong baseline principles while adding Gulf-specific safety controls.

Source: https://developers.google.com/search/docs/appearance/structured-data/job-posting

## 19.4 Candidate reporting

Report reasons:

- Scam
- Fake employer
- Fake job
- Payment request
- Harassment
- Discrimination
- Misleading salary
- Wrong location
- Expired job
- Spam
- Data collection concern
- Other

## 19.5 Safety escalation

Risk levels:

- Low: warning + monitoring
- Medium: moderation queue
- High: posting hidden + account restricted pending review
- Critical: account suspension + evidence preservation + legal/safety escalation process

---

# 20. Reviews and Employer Intelligence

## 20.1 Employer reviews

Candidates/employees may submit reviews subject to moderation.

Dimensions:

- Work environment
- Management
- Growth
- Compensation
- Work-life balance
- Interview experience
- Hiring transparency

## 20.2 Candidate reviews

Optional employer-side feedback about recruitment process must never become a hidden blacklist.

Use structured hiring feedback, not unbounded reputation scores that can create discriminatory outcomes.

## 20.3 Review integrity

- One review per verified interaction per defined time window
- Abuse detection
- Conflict-of-interest controls
- No paid positive reviews
- Right-to-report
- Moderation appeal

---

# 21. Job Quality System

Every job receives an internal quality score before publication.

Example dimensions:

- Employer trust
- Description completeness
- Salary transparency
- Location completeness
- Responsibilities quality
- Requirements quality
- Application method
- Sponsorship clarity
- Contact legitimacy
- Duplicate probability
- Spam risk
- Expiration validity

Candidate-facing label:

**Job Quality: High**

with an explanation such as:

- Salary provided
- Verified employer
- Clear work location
- Complete application instructions

---

# 22. Job Aggregation / Import Strategy

Techily Fly may eventually ingest jobs from:

- employer feeds
- ATS integrations
- public employer career pages where permitted
- partner APIs
- licensed job feeds

Avoid unauthorized scraping of services that prohibit it.

Every imported job must have:

- source
- original URL
- source timestamp
- import timestamp
- expiration detection
- canonical job ID
- employer mapping
- duplicate hash

Imported jobs must be clearly labeled when appropriate.

---

# 23. Google for Jobs / SEO Requirements

Each job needs a dedicated indexable URL.

Example:

`/jobs/saudi-arabia/riyadh/senior-software-engineer/company-role-id`

Implement `JobPosting` JSON-LD on individual job pages only.

Required/important structured data fields include, according to Google:

- datePosted
- description
- jobLocation or appropriate remote-location fields
- title
- hiringOrganization

Recommended additions include salary, employment type, validThrough and other supported information.

Expired jobs must be removed from active job search or correctly marked as expired.

Source: https://developers.google.com/search/docs/appearance/structured-data/job-posting

SEO pages:

- Jobs by country
- Jobs by city
- Jobs by role
- Jobs by industry
- Jobs by salary
- Remote jobs
- Gulf jobs
- Employer pages
- Salary guides
- Career guides
- Country hiring guides

---

# 24. Notifications

Channels:

- In-app
- Email
- Push later
- WhatsApp where consented
- SMS only for high-value alerts where justified

Notification types:

- New matching job
- Application update
- Recruiter invite
- Recruiter message
- Interview
- Interview reminder
- Offer
- Job closing
- Saved search
- Profile viewed
- Recruiter interest
- Security alert
- Scam/report update

User controls frequency and categories.

---

# 25. Admin Platform

## 25.1 Admin dashboard

KPIs:

- Active candidates
- Active employers
- Verified employers
- Active jobs
- Applications/day
- Hires/month
- Job acceptance/rejection rate
- Scam reports
- Response rate
- Employer response time
- Candidate response time
- Revenue
- Churn
- Search-to-apply conversion

## 25.2 Moderation queues

- New employer verification
- New high-risk employer
- Flagged job
- Scam report
- Review dispute
- Suspicious messaging
- Duplicate jobs
- AI moderation review
- Payment complaints

## 25.3 Administrative controls

- User suspend
- Employer suspend
- Job unpublish
- Domain block
- Keyword watchlist
- Refund
- Billing adjustment
- Verification badge management
- Policy strike
- Audit log

---

# 26. Billing and Monetization

## 26.1 Candidate pricing

Core job search and basic application should be **free**.

Optional paid candidate services can include:

- Premium CV templates
- CV quality review
- Interview preparation
- Career coaching
- Profile boost
- Verified profile badge (only when meaningful and not misleading)
- Application analytics

Do not make payment a prerequisite to apply to a job.

## 26.2 Employer pricing

Recommended starting structure:

### Free

- Employer page
- Limited verified job posting
- Basic applicants
- Basic analytics

### Starter

- More active jobs
- Advanced screening
- Candidate matching
- Employer branding

### Growth

- Candidate search
- Bulk messaging
- Shortlists
- Advanced analytics
- Team members
- ATS integrations

### Recruiter Pro

- Large candidate search quota
- AI sourcing
- Invite to Apply
- Advanced filters
- Talent pipelines
- Automated alerts

### Enterprise

- Unlimited/reasonable negotiated usage
- Multi-brand / multiple locations
- SSO
- API
- ATS integrations
- Dedicated support
- Custom reporting
- Compliance controls

## 26.3 Services revenue

Potential later revenue:

- Verified recruiting services
- Assisted hiring
- Employer branding
- Salary benchmarking
- Recruitment campaigns
- Career fairs
- Sponsored job campaigns
- Talent events

---

# 27. MVP Scope

The MVP must prove the marketplace loop before adding every possible HR feature.

## MVP must include

### Candidate

- Sign up/login
- Profile
- CV upload
- CV parser
- Job search
- Job detail
- Filters
- Save job
- Apply
- Application tracker
- Job alerts
- Recruiter visibility control
- Report job

### Employer

- Company account
- Employer verification
- Company page
- Job posting
- Applicant list
- Application pipeline
- Candidate search with core filters
- Messaging
- Interview scheduling
- Basic analytics

### Platform

- Admin dashboard
- Job moderation
- Employer verification
- Anti-scam rules
- Search index
- Email notification
- SEO pages
- Google JobPosting structured data
- Audit log

### Gulf-specific MVP

- UAE
- Saudi Arabia
- Qatar
- Kuwait
- Oman
- Bahrain
- India as source talent market

Country-specific fields:

- work authorization
- sponsorship
- relocation
- salary currency
- accommodation
- transport
- benefits

---

# 28. Post-MVP Scope

## Phase 2

- AI match scoring
- Recruiter natural-language search
- Invite to Apply
- advanced screening
- salary intelligence
- employer reviews
- WhatsApp integration
- ATS integrations
- employer branding pages
- candidate profile search

## Phase 3

- international mobility workflow
- offer management
- onboarding checklist
- document vault
- verified employer network
- recruitment agency portal
- hiring marketplace
- talent pools
- recruitment services
- salary benchmark API

## Phase 4

- Global jobs
- localized languages
- video interview integrations
- assessments
- career fairs
- candidate communities
- AI recruiter agent
- AI career agent
- marketplace APIs

---

# 29. Key Candidate User Stories

### US-01
As a candidate, I want to search jobs by country and city so that I can find realistic opportunities.

**Acceptance criteria:**
- Search supports country + city.
- Results show work location.
- Remote is explicit.

### US-02
As a candidate, I want to know salary before applying when the employer provides it.

**Acceptance criteria:**
- Salary appears in the job card and detail page.
- Original currency is preserved.
- Base vs variable pay is distinguished.

### US-03
As a candidate, I want to know whether visa sponsorship is available.

**Acceptance criteria:**
- Job has a sponsorship field.
- Unknown is visibly different from No.

### US-04
As a candidate, I want to track my application.

**Acceptance criteria:**
- Every application has a timeline.
- Candidate can see canonical status.

### US-05
As a candidate, I want to know whether the employer is verified.

**Acceptance criteria:**
- Badge is visible.
- Badge explains verification level.

### US-06
As a candidate, I want to report a scam job.

**Acceptance criteria:**
- Report action is always accessible.
- High-risk reports enter moderation queue.

---

# 30. Key Recruiter User Stories

### RS-01
As a recruiter, I want to create a job quickly.

### RS-02
As a recruiter, I want to search candidates using skills, experience, location and work authorization.

### RS-03
As a recruiter, I want matching candidates presented automatically.

### RS-04
As a recruiter, I want to invite strong candidates to apply.

### RS-05
As a recruiter, I want to screen candidates with knockout questions.

### RS-06
As a recruiter, I want to move candidates through a pipeline.

### RS-07
As a recruiter, I want to schedule interviews.

### RS-08
As a recruiter, I want to collaborate with hiring managers.

---

# 31. Core Data Model

## Primary entities

- User
- CandidateProfile
- CandidatePreference
- CandidateAuthorization
- CandidateMobility
- Resume
- ResumeVersion
- Skill
- SkillAlias
- WorkExperience
- Education
- Certification
- Language
- Project
- Employer
- EmployerVerification
- RecruiterProfile
- EmployerTeamMember
- Job
- JobSkill
- JobLocation
- JobCompensation
- JobBenefit
- JobScreeningQuestion
- Application
- ApplicationStage
- ApplicationEvent
- CandidateMessage
- Conversation
- Interview
- InterviewScorecard
- Offer
- SalaryBenchmark
- Review
- Report
- ModerationCase
- Notification
- SavedSearch
- JobAlert
- Subscription
- Payment
- Invoice
- AuditLog
- Organization
- Integration
- ATSConnection

---

# 32. Example Relational Relationships

```text
User
 ├── CandidateProfile
 │    ├── Resume
 │    ├── Experience
 │    ├── Education
 │    ├── Skills
 │    ├── Mobility
 │    └── Preferences
 │
 └── RecruiterProfile
      └── EmployerTeamMembership

Employer
 ├── EmployerVerification
 ├── EmployerTeamMembership
 ├── EmployerPage
 └── Job
       ├── JobLocation
       ├── JobCompensation
       ├── JobBenefit
       ├── JobSkill
       ├── ScreeningQuestion
       └── Application
              ├── ApplicationEvents
              ├── Interviews
              ├── Messages
              └── Offer
```

---

# 33. Recommended Technical Architecture

## 33.1 Architecture principle

Use a modular, API-first architecture so that the initial web app can later support mobile apps, recruiter apps and partner integrations.

## 33.2 Recommended web stack

### Frontend

- Next.js / React
- TypeScript
- Manrope
- Geist Mono
- Accessible component system
- Responsive-first UX

### Edge / platform

Preferred Cloudflare-centered deployment:

- Cloudflare Pages / Workers where suitable
- Cloudflare R2 for documents/assets
- Cloudflare Turnstile for abuse protection
- Cloudflare Queues for asynchronous jobs
- Cloudflare caching/CDN
- Cloudflare DNS

### Backend

Two viable patterns:

**Option A — Cloudflare-native**

- Hono or equivalent lightweight API layer
- D1 for relational core data where scale/requirements fit
- R2 for object storage
- Queues for async processing

**Option B — Managed Postgres**

- PostgreSQL
- Next.js API / server functions
- Object storage
- Redis-compatible cache if needed

For a serious multi-tenant hiring product, PostgreSQL is the safer long-term relational default if budget permits.

### Search

Start with a relational search + full-text implementation only for MVP.

Then move to:

- Typesense
- OpenSearch
- Elasticsearch
- Meilisearch

based on traffic and operational complexity.

### Auth

- Email/password
- Magic link
- Google login
- Optional Microsoft login
- Phone verification for higher-risk workflows

### AI

Use an abstraction layer so the AI provider can be changed later.

AI tasks:

- resume parsing
- job parsing
- skill extraction
- embeddings
- match explanations
- recruiter search parsing
- generation

Never make AI provider credentials accessible in the browser.

---

# 34. API Design

## Candidate APIs

```text
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/candidate/me
PATCH  /api/v1/candidate/me
POST   /api/v1/candidate/resumes
GET    /api/v1/candidate/resumes
POST   /api/v1/jobs/search
GET    /api/v1/jobs/:id
POST   /api/v1/jobs/:id/save
DELETE /api/v1/jobs/:id/save
POST   /api/v1/jobs/:id/apply
GET    /api/v1/applications
GET    /api/v1/applications/:id
POST   /api/v1/reports
```

## Employer APIs

```text
POST   /api/v1/employers
GET    /api/v1/employers/:id
POST   /api/v1/employers/:id/verify
POST   /api/v1/jobs
PATCH  /api/v1/jobs/:id
POST   /api/v1/jobs/:id/publish
POST   /api/v1/jobs/:id/close
GET    /api/v1/jobs/:id/applicants
PATCH  /api/v1/applications/:id/stage
POST   /api/v1/applications/:id/message
POST   /api/v1/applications/:id/interview
GET    /api/v1/candidates/search
POST   /api/v1/candidates/:id/invite
```

## Admin APIs

```text
GET    /api/v1/admin/moderation/jobs
GET    /api/v1/admin/moderation/employers
PATCH  /api/v1/admin/jobs/:id/status
PATCH  /api/v1/admin/users/:id/status
POST   /api/v1/admin/employers/:id/verify
GET    /api/v1/admin/audit-log
```

---

# 35. Search Ranking System

## Job ranking score

Recommended initial formula conceptually:

```text
JobScore =
  30% relevance
+ 20% candidate fit
+ 10% freshness
+ 10% job quality
+ 10% employer trust
+ 10% salary transparency
+ 5% application quality
+ 5% personalization
```

These weights should be experimentally tuned.

Avoid ranking paid jobs solely above all organic jobs; sponsored placement should be clearly labeled.

## Candidate ranking

```text
CandidateScore =
  hard eligibility gate
  + skills match
  + experience match
  + industry match
  + location fit
  + authorization fit
  + compensation fit
  + availability fit
  + profile quality
  + engagement / recent activity
```

Do not use protected characteristics.

---

# 36. Employer Quality Score

Internal only initially.

Possible features:

- verification level
- company-domain verification
- account age
- hiring history
- application response rate
- candidate complaint rate
- suspicious content flags
- job completeness
- expired-job behavior
- moderation history
- refund/chargeback behavior

Candidate-facing badge:

- Verified
- Trusted employer
- New employer

The exact score should not be exposed until the methodology is mature and explainable.

---

# 37. Security Requirements

## Authentication

- Secure password hashing if passwords are supported
- MFA for employers/admins
- Session rotation
- Rate limiting
- Login abuse detection

## Authorization

Use strict role-based and organization-based access control.

Every employer object must have tenant-aware access rules.

## File security

Uploaded resumes can contain sensitive personal data.

Use:

- private object storage
- signed URLs
- antivirus scanning
- content-type validation
- size limits
- malware scanning
- retention rules
- deletion capability

## API security

- Input validation
- Rate limiting
- CSRF protection as applicable
- Secure headers
- SQL injection prevention
- SSRF protection
- webhook signing
- audit logs

---

# 38. Privacy and Compliance Requirements

Techily Fly will operate across jurisdictions and will therefore need a formal privacy program rather than one generic privacy paragraph.

Relevant baseline frameworks include:

- India Digital Personal Data Protection Act, 2023
- UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection
- Saudi Arabia Personal Data Protection Law and related regulatory materials
- Other country-specific privacy and employment requirements as the service expands

Sources:
- India: https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf
- UAE official legislation: https://www.uaelegislation.gov.ae/en/legislations/1972/download

Design principles:

1. Data minimization
2. Purpose limitation
3. Candidate control over profile visibility
4. Clear consent where required
5. Retention policies
6. Data deletion requests
7. Access/correction workflows
8. Vendor/subprocessor register
9. Cross-border transfer review
10. Auditability

This is product guidance, not legal advice. Before launch in each country, obtain jurisdiction-specific legal review.

---

# 39. Gulf Employment Safety Rules

The platform should clearly distinguish between:

- **platform policy**
- **employer-provided job information**
- **government/legal information**

For Saudi Arabia, official ministry materials state that employers bear specified recruitment and employment-related fees for non-Saudi workers under the cited labor rules; the product should therefore be very cautious about any job or recruiter asking candidates to pay employer-side recruitment costs and should provide an official-source warning/education layer.

Source: Saudi Ministry of Human Resources and Social Development, Article 40 guidance: https://www.hrsd.gov.sa/en/knowledge-centre/articles/64434-0

For the UAE, official labor legislation states that an employer is prohibited from charging a worker recruitment/employment fees or collecting them directly or indirectly in the cited provision.

Source: UAE Federal Decree-Law No. 33 of 2021: https://www.uaelegislation.gov.ae/en/legislations/1541/download

These rules can change and differ by employment type and jurisdiction; country pages must link to current official government sources.

---

# 40. AI Governance

## AI must assist, not secretly decide

The platform should avoid an automated rejection architecture where AI becomes the final hiring authority.

Recommended model:

**AI recommendation → recruiter review → documented decision**

## AI requirements

- Explainability
- Source evidence
- Human override
- Confidence score
- Data freshness
- Bias monitoring
- Prompt injection defenses
- Candidate data isolation
- No training on candidate private data without a lawful basis/appropriate agreement

## AI safety examples

Never allow AI to invent:

- experience
- degrees
- employers
- certifications
- salary
- work authorization
- visa eligibility

---

# 41. Accessibility

Target: WCAG 2.2 AA where feasible.

Requirements:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Screen-reader labels
- Sufficient contrast
- Error messages
- Captions/transcripts for media
- Accessible forms
- No critical information conveyed by color alone
- Large touch targets
- Reduced-motion support

---

# 42. Localization

Initial language:

- English

Next:

- Arabic
- Hindi
- Urdu
- Malayalam
- Bengali
- Tamil
- Telugu
- Tagalog

Architecture must be i18n-ready from the first release.

Arabic requires true RTL support, not only translation.

---

# 43. UX / Navigation Architecture

## Candidate navigation

- Home
- Find Jobs
- Saved
- Applications
- Messages
- My Profile
- My CV
- Alerts
- Career Tools

## Recruiter navigation

- Dashboard
- Jobs
- Candidates
- Shortlists
- Pipeline
- Interviews
- Messages
- Talent Alerts
- Company
- Analytics
- Billing

## Admin navigation

- Overview
- Jobs
- Employers
- Candidates
- Reports
- Moderation
- Verification
- Reviews
- Payments
- Analytics
- System
- Audit Logs

---

# 44. Design System Rules

## UI personality

- Minimal
- Data-rich
- Professional
- Calm
- High-trust
- Fast
- Not noisy

## Avoid

- exaggerated gradients
- excessive glassmorphism
- decorative animations
- emoji-heavy enterprise screens
- crowded job cards
- misleading badges
- fake urgency

## Signal Coral usage

Use as a decision/action signal:

- Apply
- Publish
- Invite
- Primary CTA
- Selected filter
- Important alert

## TF Graphite

Use for:

- navigation
- typography
- dark surfaces
- enterprise dashboards

## Cloud Surface

Use for:

- base page backgrounds
- content areas
- neutral sections

---

# 45. Performance Requirements

Targets for key pages:

- Fast server response
- Optimized Core Web Vitals
- Search results interactive quickly
- Job detail page indexable without login
- Application flow minimal latency

MVP engineering budget should favor:

- server-side rendering where SEO matters
- edge caching
- image optimization
- lazy loading
- asynchronous AI processing
- background job queues

---

# 46. Observability

Track:

- Errors
- latency
- queue failures
- search performance
- application creation failures
- email delivery
- webhook delivery
- AI extraction failures
- moderation backlog
- suspicious activity

Use:

- structured logs
- metrics
- traces
- alerting
- incident runbooks

---

# 47. Core Product Analytics

## North Star Metric

**Qualified Hiring Connections per Month**

Definition:

A candidate and employer connection that results from a relevant job match or recruiter outreach and includes a meaningful next step such as application, recruiter response, screening or interview.

## Candidate funnel

```text
Visit
→ Search
→ Job View
→ Save / Apply
→ Application Viewed
→ Shortlisted
→ Interview
→ Offer
→ Accepted
→ Joined
```

## Recruiter funnel

```text
Job Created
→ Published
→ Candidate Reach
→ Application
→ Screening
→ Shortlist
→ Interview
→ Offer
→ Hire
```

## Marketplace metrics

- Time to first qualified applicant
- Time to first recruiter response
- Application completion rate
- Employer response rate
- Interview conversion
- Offer conversion
- Join conversion
- Job fraud rate
- Report rate
- Job quality score
- Candidate match precision

---

# 48. Business Metrics

- CAC by candidate/employer
- Cost per qualified candidate
- Customer activation
- Employer activation
- Paid conversion
- ARPA
- Gross revenue
- Churn
- LTV
- Payback period
- Sponsored job revenue
- Recruiter subscription revenue
- Assisted hiring revenue

---

# 49. Marketplace Flywheel

```text
Verified Employers
       ↓
Better Jobs
       ↓
More Candidate Traffic
       ↓
More Candidate Profiles
       ↓
Better Matching Data
       ↓
Better Recruiter Outcomes
       ↓
More Employers
```

The product should optimize for trust and successful matches, not raw listing volume.

---

# 50. Go-To-Market Strategy

## 50.1 Candidate acquisition

Focus on:

- India → GCC migration paths
- Gulf-based existing professionals
- fresh graduates
- experienced technical professionals
- construction
- oil & gas
- healthcare
- IT/software
- finance/accounting
- hospitality
- sales
- retail
- logistics
- engineering
- HR/recruitment

## 50.2 Employer acquisition

Start with:

- SMEs in UAE
- recruitment agencies hiring across GCC
- Indian agencies serving Gulf clients
- GCC mid-market employers
- technology companies
- construction/engineering firms
- hospitality groups
- healthcare employers

## 50.3 Distribution

- SEO job pages
- Country pages
- WhatsApp communities
- LinkedIn content
- employer referrals
- candidate referrals
- university/career center partnerships
- recruiter partnerships
- job fairs
- social channels

---

# 51. SEO Content Strategy

Priority pages:

### Job pages

- Software Engineer jobs in Dubai
- Civil Engineer jobs in Saudi Arabia
- Nurse jobs in Qatar
- Accountant jobs in UAE

### Country pages

- Jobs in UAE
- Jobs in Saudi Arabia
- Jobs in Qatar
- Jobs in Kuwait
- Jobs in Oman
- Jobs in Bahrain

### Guidance

- How to get a job in Dubai from India
- UAE interview preparation
- Saudi hiring process overview
- Gulf salary guide
- What to check before accepting a Gulf job
- How to spot recruitment scams

All legal/employment guidance must be date-stamped and linked to official sources.

---

# 52. Integrations Roadmap

## ATS

Potential integrations:

- Greenhouse
- Lever
- Workable
- Ashby
- SmartRecruiters
- Workday
- Bullhorn
- JobDiva
- Oorwin
- Ceipal

The integration layer should use adapters so a failed third-party integration does not break the core application system.

## Communication

- Email provider
- WhatsApp Business / approved provider
- SMS provider
- Calendar providers
- Video meeting providers

## Identity / verification

- Business verification providers
- domain verification
- phone verification
- identity verification provider only for workflows where justified

---

# 53. Employer ATS-lite Pipeline

If small employers do not have an ATS, Techily Fly should offer one.

Columns:

- New
- Screen
- Shortlist
- Interview
- Assessment
- Final
- Offer
- Hired
- Rejected

Features:

- drag/drop or stage controls
- notes
- tags
- scorecards
- activity timeline
- interview schedule
- team mentions
- candidate comparison

---

# 54. Candidate Comparison

Recruiters can compare candidates across:

- Required skills
- Experience
- Location
- Authorization
- Salary
- Availability
- Education
- Certifications
- Match explanation

Do not create a simplistic single-number "winner" as the only decision tool.

---

# 55. Offer Management

Later phase.

Offer fields:

- Position
- Employer
- Start date
- Probation
- Salary
- Currency
- Bonus
- Allowances
- Benefits
- Work location
- Employment type
- Sponsorship statement
- Joining requirements

Candidate can:

- view
- accept
- decline
- request clarification

Electronic signatures require a dedicated legal/e-signature provider and jurisdiction review.

---

# 56. Onboarding / Joining Workflow

Later phase.

After offer accepted:

1. Joining date
2. Documents requested by employer
3. Visa/work permit stage where applicable
4. Travel planning
5. Accommodation
6. Joining instructions
7. First-day details

The platform should only manage/document workflows it is legally and operationally authorized to facilitate.

---

# 57. Candidate Document Vault

Later phase.

Possible documents:

- CV
- Certificates
- degree documents
- work references
- employer letters
- identity/visa documents only where strictly necessary

Security:

- encryption
- access log
- expiry metadata
- sharing consent
- automatic deletion/retention controls

Do not collect passport/ID documents just because they are convenient.

---

# 58. Notification Intelligence

The system should avoid notification spam.

Candidate digest options:

- instant
- daily
- weekly

Recruiter alerts:

- New strong candidate
- Candidate replied
- Application threshold reached
- Interview overdue
- Job performance alert

---

# 59. Abuse Prevention

Controls:

- IP rate limits
- device/browser signals
- email/domain reputation
- account velocity
- job publishing limits
- outreach limits
- application velocity detection
- duplicate detection
- malicious-link scanning
- suspicious salary pattern detection

Do not use invasive surveillance without clear legal/ethical justification.

---

# 60. Duplicate Job Detection

Job similarity features:

- title similarity
- description fingerprint
- employer
- location
- salary
- posting date
- source URL

Possible outcome:

- duplicate → merge/reference canonical job
- likely duplicate → moderation
- distinct role → allow

---

# 61. Data Retention

Define separate retention categories:

- user account data
- application data
- messages
- CVs
- moderation evidence
- payment records
- audit logs

Retention periods should be policy-based, configurable and jurisdiction-reviewed.

---

# 62. Launch Readiness Checklist

## Product

- Candidate onboarding works
- Employer onboarding works
- Job publishing works
- Search works
- Apply works
- Application tracking works
- Messaging works
- Verification works
- Reporting works
- Notifications work

## Trust & safety

- Scam rules enabled
- Moderation queue operational
- Employer verification operational
- Report flow tested
- Security incident process written

## SEO

- Sitemap
- robots
- canonical tags
- JobPosting structured data
- expiry handling
- company pages
- country pages

## Legal

- terms
- privacy policy
- cookie policy as required
- employer agreement
- recruiter agreement
- candidate terms
- content moderation policy
- anti-fraud policy
- refund policy

## Operations

- support email
- WhatsApp support
- admin escalation
- incident response
- backup/restore
- monitoring

---

# 63. MVP Release Gates

### Gate 1 — Candidate quality

At least one complete journey can happen:

**Discover → Apply → Track.**

### Gate 2 — Employer quality

One employer can:

**Verify → Post → Receive → Review → Contact → Interview.**

### Gate 3 — Trust

A suspicious employer/job can be:

**Reported → Flagged → Moderated → Hidden/Restored.**

### Gate 4 — Search

A job can be discovered through internal search and indexed publicly.

### Gate 5 — Safety

No job may require a candidate payment merely to apply through Techily Fly.

---

# 64. Suggested Development Epics

## Epic 1 — Design system

- tokens
- components
- responsive layout
- accessibility
- dark/light support only if needed

## Epic 2 — Auth and identity

- candidate login
- recruiter login
- organization accounts
- roles

## Epic 3 — Candidate profile

- profile
- CV upload
- parsing
- visibility

## Epic 4 — Employer

- employer onboarding
- verification
- employer page

## Epic 5 — Job system

- job CRUD
- moderation
- publish/close
- structured compensation

## Epic 6 — Search

- filters
- ranking
- location
- remote

## Epic 7 — Applications

- apply
- tracker
- stages
- event timeline

## Epic 8 — Recruiter

- candidate search
- shortlist
- invite
- messaging

## Epic 9 — Interviews

- scheduling
- reminders
- scorecards

## Epic 10 — Trust

- reports
- anti-scam rules
- moderation

## Epic 11 — Analytics

- candidate funnel
- employer funnel
- marketplace metrics

## Epic 12 — SEO

- indexable pages
- structured data
- sitemap
- job expiry

---

# 65. Example MVP Sitemap

```text
/
/jobs
/jobs/:country
/jobs/:country/:city
/jobs/:country/:city/:role
/job/:slug
/companies
/company/:slug
/salaries
/salaries/:country/:role
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
/app/alerts
/app/settings

/recruiter
/recruiter/dashboard
/recruiter/jobs
/recruiter/jobs/new
/recruiter/candidates
/recruiter/pipelines
/recruiter/interviews
/recruiter/messages
/recruiter/analytics
/recruiter/company
/recruiter/billing

/admin
/admin/dashboard
/admin/jobs
/admin/employers
/admin/candidates
/admin/reports
/admin/moderation
/admin/verification
/admin/audit
```

---

# 66. Example Candidate Homepage

### Header

**Find the right international job.**

Search:

`Job title, skills or company` | `Country, city or remote` | **Search Jobs**

### Trust strip

- Verified employers
- Salary transparency
- International hiring information
- Scam reporting

### Sections

- Jobs for you
- Latest Gulf jobs
- Verified employers
- Jobs with visa sponsorship
- Remote international jobs
- High-demand roles
- Salary guides
- Career safety guides

---

# 67. Example Recruiter Dashboard

Top cards:

- Active Jobs
- New Applicants
- Strong Matches
- Interviews Today
- Offers

Main:

**Needs Attention**

- 7 candidates waiting for review
- 2 interview feedbacks overdue
- 15 new strong matches
- 1 job missing salary information

**Talent Feed**

Candidate cards ranked by fit.

---

# 68. Example Job Page Copy Structure

```text
Senior Software Engineer
ABC Technologies
✓ Verified Employer
Dubai, UAE · Hybrid
AED 18,000–25,000 / month
Visa sponsorship: Yes
Relocation: Available

[Apply Now]
[Save]
[Report]

Why you match
92% strong match

Role overview
...

Responsibilities
...

Required skills
...

International hiring details
...

Benefits
...

Application process
1. Application
2. Recruiter review
3. Technical interview
4. Final interview
5. Offer
```

---

# 69. Product Differentiators

Techily Fly should own these ideas:

## 1. Verified Gulf hiring

Trust is a first-class product feature.

## 2. Mobility-aware job matching

Not just "Dubai job" but:

**Can this person realistically work there?**

## 3. Compensation transparency

Show base, variable pay and benefits clearly.

## 4. Recruiter-first sourcing

Candidates should not have to apply to everything; verified recruiters can approach good candidates.

## 5. Application transparency

Candidates should not disappear into an application black box.

## 6. Gulf-native communication

In-platform + consent-based WhatsApp workflows.

## 7. Safety by design

No candidate-pay-to-apply model.

## 8. International career intelligence

Jobs + salary + country + employer + mobility context.

---

# 70. What NOT to Build First

Do not build these before the core marketplace works:

- social-media feed
- generic discussion forums
- complex gamification
- massive course marketplace
- crypto payments
- complicated digital wallet
- unverified recruiter directories
- fully autonomous AI hiring decisions
- applicant fees for ordinary job applications
- huge enterprise HRIS

The core loop is more important:

**Verified job → qualified candidate → recruiter response → interview → hire.**

---

# 71. Long-Term Platform Vision

Techily Fly International can evolve from a job board into a **cross-border talent infrastructure platform**.

Potential future ecosystem:

```text
Jobs
  ↓
Talent Profiles
  ↓
AI Matching
  ↓
Recruiter Workspace
  ↓
Interview
  ↓
Offer
  ↓
Mobility
  ↓
Joining
  ↓
Career Growth
```

And on the employer side:

```text
Requisition
  ↓
Job Creation
  ↓
Talent Sourcing
  ↓
Screening
  ↓
Interview
  ↓
Offer
  ↓
Onboarding
  ↓
Talent Analytics
```

---

# 72. Recommended Product Priorities

## P0 — Mandatory

- Candidate profiles
- Employer profiles
- Verified employer
- Job posting
- Search
- Filters
- Apply
- Application tracker
- Candidate search
- Basic recruiter pipeline
- Messaging
- Anti-scam/reporting
- Salary structure
- GCC location model
- SEO / Google JobPosting

## P1 — High value

- AI match
- Invite to Apply
- Screening
- Interview scheduling
- ATS integrations
- Salary intelligence
- Employer reviews
- WhatsApp workflows
- Career guides

## P2 — Scale

- Offers
- Mobility workflows
- Agency portal
- Candidate document vault
- Recruiting services
- Career fairs
- Multilingual expansion
- Mobile apps

---

# 73. Definition of Success After First Release

The first release is successful when the market can observe three things:

### Candidate side

> "I can find legitimate Gulf jobs with the information I actually need."

### Employer side

> "I can receive candidates and manage hiring without needing five separate tools."

### Trust side

> "This platform is safer and more transparent than the average job listing site."

That should become the Techily Fly International product promise.

---

# 74. Research Sources

Primary/reference sources used for the competitive and compliance sections:

1. LinkedIn Recruiter / Recruiter Lite — https://business.linkedin.com/en-in/talent-solutions/recruiter-lite/tour
2. Indeed for Employers — https://www.indeed.com/hire/how-it-works
3. Indeed Employer Guide — https://www.indeed.com/hire/resources/howtohub/hiring-guide-using-employer-tools
4. Naukri Resdex — https://www.naukri.com/recruit/resume-database-access-resdex
5. Glassdoor Employers — https://www.glassdoor.com/employers/
6. Wellfound Recruit Pro — https://wellfound.com/recruit/products/recruit-pro
7. Wellfound Job Posting — https://wellfound.com/recruit/all-features/post-a-job
8. Wellfound Autopilot — https://wellfound.com/recruit/all-features/autopilot
9. Cutshort Hiring — https://cutshort.io/hiring
10. Dice Hiring — https://www.dice.com/hiring/
11. Dice Candidate Search — https://www.dice.com/hiring/find-candidates/
12. Dice Product Updates — https://www.dice.com/hiring/whats-new
13. FlexJobs Terms / Job Postings — https://www.flexjobs.com/termsofuse.aspx
14. ZipRecruiter Hiring — https://www.ziprecruiter.com/Hiring
15. Handshake Employers — https://joinhandshake.com/employers/
16. We Work Remotely Employers — https://weworkremotely.com/employers
17. Remote OK Hiring — https://remoteok.com/hire-remotely
18. foundit Recruiter — https://recruiter.foundit.in/in/home/
19. foundit Career Site — https://recruiter.foundit.in/micro-sites-services.html
20. Monster Enterprise — https://hiring.monster.com/solutions/enterprise
21. CareerBuilder Recruiting Solutions — https://hiring.careerbuilder.com/recruiting-solutions
22. GulfTalent Recruitment Solutions — https://www.gulftalent.com/recruitment-solutions
23. GulfTalent Jobs — https://www.gulftalent.com/
24. NaukriGulf — https://www.naukrigulf.com/
25. Google JobPosting Structured Data — https://developers.google.com/search/docs/appearance/structured-data/job-posting
26. UAE Personal Data Protection Law — https://www.uaelegislation.gov.ae/en/legislations/1972/download
27. UAE Labour legislation — https://www.uaelegislation.gov.ae/en/legislations/1541/download
28. Saudi HRSD Article 40 guidance — https://www.hrsd.gov.sa/en/knowledge-centre/articles/64434-0
29. India Digital Personal Data Protection Act, 2023 — https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf
30. Hired current status / LHH — https://www.linkedin.com/company/hired-com

---

# 75. Final Product Principle

> **Do not optimize Techily Fly International to have the most jobs. Optimize it to have the highest number of trustworthy, relevant, actionable hiring opportunities.**

The winning architecture is not "another LinkedIn/Indeed clone."

It is:

**a Gulf-first, international, verified, salary-transparent, mobility-aware, recruiter-enabled hiring operating system.**


# AI Agent Web Development Skills & Tools Reference

**Purpose:** This file contains all the essential web development skills, official documentation URLs, GitHub repositories, and AI agent skill registries that should be referenced or installed to give AI coding agents the best possible capabilities for building web applications.

**How to install skills:** If an install command (e.g., `npx skills add <url>`) is provided, use it to install the skill into the workspace so the AI agent can learn from it.

---

## 1. Web Development (Core & Frameworks)

### Frontend Core
- **HTML5**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript (ES6+)**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **TypeScript**: https://www.typescriptlang.org/docs/

### Frontend Frameworks & Build Tools
- **React.js**: https://react.dev/
- **Next.js**: https://nextjs.org/docs
- **Vite**: https://vitejs.dev/guide/
- **Nuxt.js**: https://nuxt.com/docs

### Styling & Aesthetics
- **TailwindCSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **GSAP**: https://gsap.com/docs/v3/

### Backend Core & Frameworks
- **Node.js**: https://nodejs.org/en/docs/
- **Express.js**: https://expressjs.com/
- **Hono (Edge Optimized)**: https://hono.dev/
- **FastAPI (Python)**: https://fastapi.tiangolo.com/
- **Django (Python)**: https://docs.djangoproject.com/

---

## 2. Cloudflare Ecosystem (Free & Edge Services)

### Official Cloudflare Agent Skills
- **Cloudflare Skills Repository**: https://github.com/cloudflare/skills
- **Install**: `npx skills add cloudflare/skills`

### Official Documentation
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Cloudflare Workers**: https://developers.cloudflare.com/workers/
- **Cloudflare D1 (SQL)**: https://developers.cloudflare.com/d1/
- **Cloudflare KV**: https://developers.cloudflare.com/kv/
- **Cloudflare R2 (Storage)**: https://developers.cloudflare.com/r2/
- **Cloudflare Workers AI**: https://developers.cloudflare.com/workers-ai/

---

## 3. GitHub Ecosystem (Version Control & CI/CD)

### GitHub Tools & Docs
- **Git**: https://git-scm.com/doc
- **GitHub Actions (CI/CD)**: https://docs.github.com/en/actions
- **GitHub Pages**: https://docs.github.com/en/pages
- **GitHub CLI**: https://cli.github.com/manual/

---

## 4. Free / Open-Source Tech Stacks & Databases

### Databases & DBaaS (Generous Free Tiers)
- **PostgreSQL**: https://www.postgresql.org/docs/
- **Supabase (Postgres + Auth)**: https://supabase.com/docs
- **Neon (Serverless Postgres)**: https://neon.tech/docs
- **Turso (Edge SQLite)**: https://docs.turso.tech/
- **MongoDB Atlas**: https://www.mongodb.com/docs/atlas/
- **Redis**: https://redis.io/docs/

### ORMs / Query Builders
- **Prisma**: https://www.prisma.io/docs
- **Drizzle ORM (Great for Edge/Cloudflare)**: https://orm.drizzle.team/docs/overview
- **Mongoose**: https://mongoosejs.com/docs/

---

## 5. Web App Essential Free Services

### Authentication & Identity
- **Clerk (Drop-in UI)**: https://clerk.com/docs
- **Supabase Auth**: https://supabase.com/docs/guides/auth
- **Auth0**: https://auth0.com/docs

### Email & Notifications
- **Resend (Developer friendly)**: https://resend.com/docs
- **EmailJS**: https://www.emailjs.com/docs/

### Headless CMS
- **Strapi (Open Source)**: https://docs.strapi.io/
- **Sanity**: https://www.sanity.io/docs
- **Contentful**: https://www.contentful.com/developers/docs/

### Analytics
- **PostHog (Open Source Product Analytics)**: https://posthog.com/docs
- **Vercel Web Analytics**: https://vercel.com/docs/analytics

---

## 6. Testing, Monitoring, and Security

### Quality & Testing Agent Skills
- **Web Quality Skills (Addy Osmani)** (SEO, Performance, CWV): 
  - URL: https://github.com/niccolocase/web-quality-skills
  - **Install**: `npx skills add addyosmani/web-quality-skills`
- **Vercel Agent Browser** (Testing/Browser Verification): 
  - URL: https://github.com/vercel-labs/agent-browser
  - **Install**: `npx skills add vercel-labs/agent-browser`

### Testing Frameworks
- **Jest**: https://jestjs.io/docs/getting-started
- **Vitest (Fast Vite-native)**: https://vitest.dev/guide/
- **Playwright (E2E)**: https://playwright.dev/docs/intro
- **Cypress (E2E)**: https://docs.cypress.io/guides/overview/why-cypress

### Monitoring & Security
- **Sentry (Error Tracking)**: https://docs.sentry.io/
- **Helmet.js (Express Security)**: https://helmetjs.github.io/
- **OWASP Top 10**: https://owasp.org/www-project-top-ten/

---

## 7. Design & UI Agent Skills

- **Vercel Agent Skills (Web Design Guidelines)**: 
  - URL: https://github.com/vercel-labs/agent-skills
  - **Install**: `npx skills add vercel-labs/agent-skills`
- **Skills.sh Design Topic**: https://www.skills.sh/topic/design

---

## 🎨 Crucial Directives for AI Agents: Building "Wow" Interfaces
When generating code for web applications, AI Agents **MUST** adhere to the following design principles to ensure a premium user experience:

1. **Prioritize Visual Excellence**: Do not build simple, basic, or generic layouts. The design must feel state-of-the-art and "Wow" the user at first glance.
2. **Curated Color Palettes**: Avoid default primary colors (plain red, blue, green). Use harmonious palettes, deep sleek dark modes, and modern gradients.
3. **Typography Matters**: Never use browser default fonts. Always integrate modern Google Fonts (e.g., *Inter, Roboto, Outfit, Poppins*).
4. **Dynamic & Alive**: Interfaces should react to the user. Include:
   - Smooth hover states for all interactive elements.
   - Glassmorphism (blur effects) where appropriate.
   - Micro-animations for entering/exiting elements (e.g., sliding, fading).
5. **No Placeholders**: If an image or asset is needed, generate a working demonstration asset or use high-quality Unsplash source URLs.
6. **SEO & Semantics**: Automatically implement SEO best practices (Title tags, Meta descriptions, `<h1>` hierarchy, semantic HTML5 tags). Ensure fully responsive, mobile-first layouts.

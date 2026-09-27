# CareerOS

CareerOS is a personal Job Acquisition & Career Execution System built around six connected systems: **Market → Proof → Distribution → Relationships → Interviews → Conversion**.

It is designed to turn a 30/60/90-day software-career search strategy into a measurable daily operating system rather than a generic job tracker.

## Current build

The current repository contains a runnable browser-based CareerOS v1 with:

- Command Center dashboard
- Today / priority execution page
- Applications tracker
- Company intelligence tiers
- Networking CRM
- Interview pipeline and failure log
- Technical preparation tracker
- InsightOps recruiter-readiness tracker
- Weekly scorecard
- Funnel analytics and deterministic diagnostics
- 30/60/90 roadmap
- Unified activity feed
- Global search (`Ctrl/Cmd + K`)
- Quick-add flows
- Dark/light themes
- Responsive layout
- Supabase email/password authentication
- Cloud-backed workspace persistence through Supabase, with `localStorage` as the in-browser working cache
- Fictional demo data
- PostgreSQL migration schema

## Structure

```text
CareerOS/
├── index.html
├── README.md
├── serve.py
├── db/
│   └── schema.sql
└── src/
    ├── app.js
    ├── bootstrap.js
    ├── data.js
    ├── styles.css
    └── supabase.js
```

## Run locally

No package installation is required.

```bash
python serve.py
```

Then open:

```text
http://localhost:8765
```

You can also use any static web server, for example:

```bash
python -m http.server 8080
```

## Persistence

CareerOS authenticates users with Supabase and stores each signed-in user's workspace in the `workspace_state` table. The browser still uses the `careeros-state-v1` localStorage key as its working cache, and changes are mirrored back to Supabase for cross-device persistence.

For a fuller production version, likely next steps include:

1. Next.js / TypeScript application shell
2. Server-side validated CRUD
3. Stronger error handling and sync conflict handling
4. Deployment on Vercel
5. Expanded relational data modeling beyond the current workspace-state document

## Demo data

The included jobs, companies, people, and interview activity are fictional demonstration data. They are not presented as real personal history.

## Product model

CareerOS connects four weekly outputs:

- **Proof** — engineering work shipped
- **Reach** — relevant opportunities entered into the market
- **Relationships** — professional contacts, conversations and referrals
- **Readiness** — interview and technical preparation

Applications feed funnel analytics, contacts feed relationship metrics, project milestones update Proof, and interview stages drive conversion diagnostics.

## Production roadmap

The next major version can build on the existing Supabase authentication and cloud persistence by moving more application logic and validation server-side while keeping the same domain model and workflows. Later extensions can include job-description parsing, resume matching, calendar integrations, email workflows and LLM-assisted interview/job-search analysis.

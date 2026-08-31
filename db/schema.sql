-- CareerOS production PostgreSQL schema

create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  start_date date default current_date,
  weekly_hours integer default 30,
  created_at timestamptz not null default now()
);

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  name text not null,
  website text,
  careers_url text,
  industry text,
  location text,
  company_size text,
  remote_policy text,
  tier smallint check (tier between 1 and 3),
  tech_stack text,
  why_interested text,
  relationship_strength smallint default 1 check (relationship_strength between 1 and 5),
  last_contact date,
  next_action date,
  notes text,
  created_at timestamptz not null default now()
);
create index if not exists companies_user_tier_idx on companies(user_id,tier);

create table if not exists resume_variants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  name text not null,
  file_url text,
  created_at timestamptz not null default now()
);

create table if not exists job_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  company_id uuid references companies(id) on delete set null,
  resume_variant_id uuid references resume_variants(id) on delete set null,
  company_name text not null,
  position text not null,
  job_url text,
  location text,
  province text,
  work_arrangement text,
  role_family text,
  company_tier smallint check (company_tier between 1 and 3),
  source text,
  date_discovered date,
  date_posted date,
  date_applied date,
  application_type text,
  referral boolean not null default false,
  salary_range text,
  qualification_match smallint check (qualification_match between 0 and 100),
  status text not null default 'Saved',
  current_stage text,
  last_action text,
  next_action text,
  followup_date date,
  outcome text,
  rejection_reason text,
  job_description text,
  important_keywords text,
  tech_stack text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists jobs_user_status_idx on job_applications(user_id,status);
create index if not exists jobs_user_applied_idx on job_applications(user_id,date_applied desc);

create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  company_id uuid references companies(id) on delete set null,
  name text not null,
  company_name text,
  position text,
  linkedin_url text,
  email text,
  contact_type text,
  first_contact_date date,
  last_contact date,
  next_followup date,
  relationship_stage text default 'Recognition',
  referral_potential boolean default false,
  referral_requested boolean default false,
  referral_received boolean default false,
  notes text,
  created_at timestamptz not null default now()
);
create index if not exists contacts_user_followup_idx on contacts(user_id,next_followup);

create table if not exists contact_interactions (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references contacts(id) on delete cascade,
  occurred_at timestamptz not null default now(),
  interaction_type text,
  summary text not null
);

create table if not exists interviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  job_application_id uuid references job_applications(id) on delete cascade,
  company_name text not null,
  job_title text,
  stage text not null,
  interviewer text,
  scheduled_at timestamptz,
  format text,
  expected_topics text,
  preparation_notes text,
  questions_to_ask text,
  outcome text default 'Pending',
  feedback text,
  next_stage text,
  created_at timestamptz not null default now()
);

create table if not exists interview_failures (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  interview_id uuid references interviews(id) on delete set null,
  company_name text,
  question text not null,
  category text,
  my_answer text,
  answer_quality smallint check (answer_quality between 0 and 100),
  missing_concept text,
  better_answer text,
  difficulty text,
  retest_date date,
  retest_status text,
  created_at timestamptz not null default now()
);

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  title text not null,
  category text,
  due_at timestamptz,
  priority smallint default 50 check (priority between 1 and 100),
  status text default 'Open',
  linked_entity_type text,
  linked_entity_id uuid,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);
create index if not exists tasks_user_due_idx on tasks(user_id,status,due_at);

create table if not exists time_blocks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  starts_at timestamptz not null,
  duration_minutes integer not null,
  category text,
  description text,
  completed boolean default false
);

create table if not exists technical_topics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  topic text not null,
  confidence smallint check (confidence between 0 and 100),
  interview_readiness smallint check (interview_readiness between 0 and 100),
  notes text,
  last_practiced date,
  next_review date
);

create table if not exists coding_problems (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  problem text not null,
  platform text,
  category text,
  difficulty text,
  solved boolean default false,
  hints_used boolean default false,
  solution_quality smallint check (solution_quality between 0 and 100),
  time_complexity text,
  space_complexity text,
  notes text,
  completed_on date,
  revisit_date date
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  name text not null,
  subtitle text,
  description text,
  recruiter_readiness smallint default 0 check (recruiter_readiness between 0 and 100),
  repository_url text,
  live_url text,
  created_at timestamptz not null default now()
);

create table if not exists project_milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  category text,
  completed boolean default false,
  completed_at timestamptz
);

create table if not exists weekly_goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  week_start date not null,
  metric_key text not null,
  target_value numeric not null,
  unique(user_id,week_start,metric_key)
);

create table if not exists weekly_reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  week_start date not null,
  opportunity_sources text,
  funnel_dropoffs text,
  highest_roi text,
  avoidance text,
  next_improvement text,
  created_at timestamptz not null default now()
);

create table if not exists activity_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  activity_type text not null,
  description text not null,
  entity_type text,
  entity_id uuid,
  created_at timestamptz not null default now()
);
create index if not exists activity_user_created_idx on activity_log(user_id,created_at desc);

create table if not exists roadmap_milestones (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  phase smallint not null check (phase between 1 and 3),
  title text not null,
  target_date date,
  completed boolean default false,
  completed_at timestamptz
);

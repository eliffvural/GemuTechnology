create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  source_page text default 'website',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.project_requests (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  contact_name text not null,
  email text not null,
  phone text,
  service_type text not null,
  budget_range text,
  timeline text,
  description text not null,
  source_page text default 'services',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  cover_image text,
  category text,
  tags text[] default '{}',
  status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  summary text,
  content text,
  service_type text,
  industry text,
  result_metric text,
  image_url text,
  status text not null default 'draft',
  is_featured boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;
alter table public.project_requests enable row level security;
alter table public.blog_posts enable row level security;
alter table public.case_studies enable row level security;

drop policy if exists "Anyone can create contact messages" on public.contact_messages;
create policy "Anyone can create contact messages"
on public.contact_messages for insert
to anon
with check (true);

drop policy if exists "Anyone can create project requests" on public.project_requests;
create policy "Anyone can create project requests"
on public.project_requests for insert
to anon
with check (true);

drop policy if exists "Anyone can read published blog posts" on public.blog_posts;
create policy "Anyone can read published blog posts"
on public.blog_posts for select
to anon
using (status = 'published');

drop policy if exists "Anyone can read published case studies" on public.case_studies;
create policy "Anyone can read published case studies"
on public.case_studies for select
to anon
using (status = 'published');

drop policy if exists "Authenticated users can manage contact messages" on public.contact_messages;
create policy "Authenticated users can manage contact messages"
on public.contact_messages for all
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated users can manage project requests" on public.project_requests;
create policy "Authenticated users can manage project requests"
on public.project_requests for all
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated users can manage blog posts" on public.blog_posts;
create policy "Authenticated users can manage blog posts"
on public.blog_posts for all
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated users can manage case studies" on public.case_studies;
create policy "Authenticated users can manage case studies"
on public.case_studies for all
to authenticated
using (true)
with check (true);

create index if not exists contact_messages_created_at_idx
on public.contact_messages (created_at desc);

create index if not exists project_requests_created_at_idx
on public.project_requests (created_at desc);

create index if not exists blog_posts_published_at_idx
on public.blog_posts (published_at desc);

create index if not exists case_studies_published_at_idx
on public.case_studies (published_at desc);

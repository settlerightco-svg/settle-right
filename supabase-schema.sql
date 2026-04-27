-- Supabase waitlist table schema for the SettleRight landing page

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  country text not null,
  emirate text not null,
  reason text,
  subscribe boolean not null,
  created_at timestamptz not null default now()
);

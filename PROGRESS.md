# SettleRight Progress

Last updated: 2026-04-27 13:31 CEST

## Current Status

The SettleRight landing page is deployed on Vercel and publicly reachable at:

```text
https://settle-right-tfyl.vercel.app
```

The app builds successfully and the Supabase-backed waitlist form is preserved.

## Implemented UI Changes

- Refined the hero section with a premium two-column desktop layout.
- Added a right-side `Why SettleRight` card in the hero.
- Updated the top-right header badge into one unified pill:
  `UAE Relocation • AI-guided planning`.
- Moved the `Coming Soon` badge below the `Subscribe for early access` CTA.
- Removed the secondary hero prompt:
  `Scroll down to fill the early access form below.`
- Restored and refined the `What is SettleRight?` section.
- Restored and refined the `Why SettleRight` content.
- Added four relocation feature cards:
  - Visa Roadmap
  - Financial Setup
  - Settling In
  - 24x7 Assistance
- Added a `Traditional vs SettleRight` workflow comparison section covering:
  - Transparency
  - Cost clarity
  - Legal issues
  - Time consuming
  - Lack of trust
- Reduced the overall font scale so the site feels less oversized.
- Tightened section spacing and header height.
- Added desktop/tablet text justification via `.copy-justified`, while keeping mobile text natural.

## Functional Pieces

- The waitlist form remains connected to `/api/waitlist`.
- The API stores submissions in Supabase using:
  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
- The form captures:
  - Name
  - Email
  - Current country
  - Emirate
  - Reason to move
  - Early access subscription checkbox

## Verification

The following checks have passed during this work:

```bash
npm run lint
npm run build
```

One build initially failed because the sandbox could not fetch Google Fonts. Re-running with network access passed successfully.

## Current Local Changes

Main changed files:

```text
app/page.tsx
app/globals.css
```

This file documents progress only:

```text
PROGRESS.md
```

## Deployment Commands

When ready to push all current changes:

```bash
git add app/page.tsx app/globals.css PROGRESS.md
git commit -m "Refine SettleRight landing page"
git push origin main
```

Vercel should redeploy automatically after the push.

## Domain Notes

The current production domain is:

```text
https://settle-right-tfyl.vercel.app
```

Domains checked through Vercel:

- `settleright.co` unavailable
- `settleright.com` unavailable
- `settleright.ai` unavailable
- `settleright.app` unavailable
- `settleright.io` unavailable
- `settleright.ae` unavailable

Available options included:

- `getsettleright.com` - $11.25/year
- `usesettleright.com` - $11.25/year
- `settlerightapp.com` - $11.25/year
- `settlerightuae.com` - $11.25/year
- `settle-right.com` - $11.25/year
- `settle-right.co` - $17.99/year
- `settle-right.app` - $14.99/year
- `settle-right.ai` - $160/2 years

Recommended domain options:

```text
getsettleright.com
usesettleright.com
```

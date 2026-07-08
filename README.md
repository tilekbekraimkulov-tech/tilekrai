# Passes Help Center — Redesign Prototype (Next.js)

A working prototype that implements the P0/P1 fixes from the UX audit v2:

| Audit finding | Fix in prototype |
|---|---|
| Two help centers, 5+ answer surfaces | One canonical center, one progressive search (instant → AI fallback → human) |
| Search fails "refund / cancel / password / 2FA" | Synonym map + fuzzy matching + the missing articles are written (marked **New**) |
| "Other" junk drawer | Dissolved — Safety & reporting is top-level, tax → billing, insurance → earnings |
| Folder-over-file, 4-click depth | Flat categories, every article ≤ 2 clicks from home |
| No role context | Fan / Creator / Both badges on every card, category and article |
| Articles are dead ends | TOC, last-updated date, feedback widget, related articles, deep links into the app |
| Marketing footer noise | Support-only footer + system status in the header |

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel (2 minutes)
1. Push this folder to a GitHub repo (or `npx vercel` from the folder).
2. On vercel.com → Add New → Project → import the repo.
3. Framework preset: **Next.js** — no settings needed. Deploy.

## Where things live
- `lib/content.js` — the redesigned IA + all 53 articles + synonym map (single source of truth)
- `app/page.js` — triage home (role split, quick actions, popular/recent)
- `app/search/results.js` — progressive search incl. zero-result recovery state
- `app/a/[slug]/page.js` — article template with the full "article kit"
- `app/globals.css` — design tokens (mirrored in Figma page "03 · Redesign screens")

Try in search: `refund`, `cancel subscription`, `pasword` (typo on purpose), `qwerty` (recovery state).

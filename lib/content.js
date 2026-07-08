// Passes Help — redesigned IA.
// Fixes from audit v2: no "Other" junk drawer, flat 2-click depth,
// audience tags everywhere, missing critical articles written (marked isNew).

export const CATEGORIES = [
  { slug: "fan-start",      title: "Getting started",      audience: "fan",     blurb: "Create an account, find creators, learn how Passes works." },
  { slug: "fan-billing",    title: "Payments & billing",   audience: "fan",     blurb: "Charges, refunds, payment methods and receipts." },
  { slug: "fan-membership", title: "Memberships & purchases", audience: "fan",  blurb: "Subscribe, manage, pause or cancel memberships." },
  { slug: "fan-account",    title: "Account & sign-in",    audience: "fan",     blurb: "Password, 2FA, account data and troubleshooting." },
  { slug: "cr-start",       title: "Getting started",      audience: "creator", blurb: "Eligibility, sign-up, KYC and profile setup." },
  { slug: "cr-earnings",    title: "Earnings & payouts",   audience: "creator", blurb: "Payouts, taxes, chargebacks and benefits." },
  { slug: "cr-content",     title: "Content & tools",      audience: "creator", blurb: "Livestreams, vault, merch, scheduling and protection." },
  { slug: "cr-audience",    title: "Audience & messaging", audience: "creator", blurb: "DMs, automations, Discord and growing your fanbase." },
  { slug: "safety",         title: "Safety & reporting",   audience: "both",    blurb: "Report content or behavior, block users, stay secure." },
];

export const ARTICLES = [
  // ——— Fans · Getting started
  { slug: "get-started-fan", title: "Get started as a fan", cat: "fan-start", audience: "fan", updated: "2026-06-12", summary: "Create your account and set up your profile in a few minutes." },
  { slug: "passes-101", title: "Passes 101: how the platform works", cat: "fan-start", audience: "fan", updated: "2026-05-30", summary: "Memberships, DMs, livestreams and purchases explained." },
  { slug: "find-creators", title: "Find and follow creators", cat: "fan-start", audience: "fan", updated: "2026-04-18", summary: "Search, discover and follow the creators you love." },
  { slug: "watch-livestreams", title: "Find and watch livestreams", cat: "fan-start", audience: "fan", updated: "2026-06-02", summary: "Where livestreams live and how to join one." },
  { slug: "passes-mobile", title: "Passes on mobile", cat: "fan-start", audience: "fan", updated: "2026-03-25", summary: "Get the iOS or Android app and what differs from the web." },
  { slug: "migrate-fanhouse", title: "Migrate from Fanhouse", cat: "fan-start", audience: "fan", updated: "2025-11-10", summary: "Moving your account and purchases from Fanhouse." },

  // ——— Fans · Payments & billing
  { slug: "refunds", title: "Refunds: policy and how to request one", cat: "fan-billing", audience: "fan", updated: "2026-07-06", isNew: true, keywords: "refund money back return purchase dispute", summary: "When purchases are refundable and how to submit a request." },
  { slug: "unrecognized-charge", title: "Unrecognized charge on your statement", cat: "fan-billing", audience: "fan", updated: "2026-06-20", keywords: "charge unknown card statement fraud unauthorized", summary: "Identify a Passes charge and report one you didn't make." },
  { slug: "payment-failures", title: "Troubleshooting payment failures", cat: "fan-billing", audience: "fan", updated: "2026-06-28", keywords: "declined card failed payment error", summary: "Why cards get declined and how to fix it." },
  { slug: "fan-payments", title: "Payment methods and billing cycles", cat: "fan-billing", audience: "fan", updated: "2026-05-14", keywords: "paypal apple pay card billing", summary: "Cards, PayPal, Apple Pay and how recurring billing works." },
  { slug: "guest-checkout", title: "Guest checkout", cat: "fan-billing", audience: "fan", updated: "2026-02-08", summary: "Buying without an account and claiming purchases later." },
  { slug: "sales-tax", title: "Sales tax on purchases", cat: "fan-billing", audience: "fan", updated: "2026-01-20", keywords: "tax vat", summary: "Why tax appears at checkout and how it's calculated." },

  // ——— Fans · Memberships & purchases
  { slug: "cancel-membership", title: "Cancel your membership", cat: "fan-membership", audience: "fan", updated: "2026-07-06", isNew: true, keywords: "cancel subscription unsubscribe stop renewal", summary: "Cancel any membership in three steps — takes under a minute." },
  { slug: "fan-subscriptions", title: "Manage your subscriptions", cat: "fan-membership", audience: "fan", updated: "2026-05-22", keywords: "subscription tier renew upgrade downgrade", summary: "Change tiers, switch billing periods, view renewal dates." },
  { slug: "memberships-orders", title: "Access memberships and orders", cat: "fan-membership", audience: "fan", updated: "2026-04-30", summary: "Find everything you've purchased in one place." },
  { slug: "message-creators", title: "Message creators and DM limits", cat: "fan-membership", audience: "fan", updated: "2026-03-15", keywords: "dm direct message chat", summary: "How paid DMs work and what limits apply." },
  { slug: "member-discord", title: "Access a creator's Discord", cat: "fan-membership", audience: "fan", updated: "2026-02-27", summary: "Connect Discord perks that come with a membership." },

  // ——— Fans · Account & sign-in
  { slug: "reset-password", title: "Reset your password", cat: "fan-account", audience: "both", updated: "2026-07-06", isNew: true, keywords: "password forgot login sign in signin locked", summary: "Reset a forgotten password from the sign-in screen." },
  { slug: "two-factor", title: "Two-factor authentication (2FA)", cat: "fan-account", audience: "both", updated: "2026-07-06", isNew: true, keywords: "2fa two factor security code authenticator", summary: "Add a second layer of security to your account." },
  { slug: "signin-troubleshooting", title: "Sign-in troubleshooting", cat: "fan-account", audience: "both", updated: "2026-06-05", keywords: "login can't sign in error", summary: "Fix the most common sign-in problems." },
  { slug: "hacked-account", title: "Hacked or compromised account", cat: "fan-account", audience: "both", updated: "2026-05-19", keywords: "hacked stolen compromised", summary: "Lock down your account and recover access." },
  { slug: "manage-fan-account", title: "Manage your account settings", cat: "fan-account", audience: "fan", updated: "2026-04-02", summary: "Email, notifications, privacy and profile options." },
  { slug: "export-data", title: "Export and download your account data", cat: "fan-account", audience: "both", updated: "2026-06-25", summary: "Request a copy of your data." },
  { slug: "deactivate-account", title: "Deactivate your account", cat: "fan-account", audience: "fan", updated: "2026-03-08", keywords: "delete close account", summary: "Temporarily deactivate or permanently close your account." },

  // ——— Creators · Getting started
  { slug: "creator-eligibility", title: "Creator eligibility", cat: "cr-start", audience: "creator", updated: "2026-05-01", summary: "Requirements to open a creator account." },
  { slug: "signup-creator", title: "Sign up as a creator", cat: "cr-start", audience: "creator", updated: "2026-05-01", summary: "The application flow, step by step." },
  { slug: "complete-kyc", title: "Complete identity verification (KYC)", cat: "cr-start", audience: "creator", updated: "2026-04-11", keywords: "kyc identity verification id", summary: "Verify your identity to unlock payouts." },
  { slug: "creator-profile", title: "Set up your creator profile", cat: "cr-start", audience: "creator", updated: "2026-03-29", summary: "Bio, media, links and pricing basics." },
  { slug: "creators-plus", title: "Creators+ plan", cat: "cr-start", audience: "creator", updated: "2026-02-14", summary: "What the premium creator plan includes." },

  // ——— Creators · Earnings & payouts
  { slug: "setup-payouts", title: "Set up payouts", cat: "cr-earnings", audience: "creator", updated: "2026-06-18", keywords: "payout bank withdraw money earnings", summary: "Connect a bank account and choose a payout schedule." },
  { slug: "chargebacks", title: "Understanding chargebacks", cat: "cr-earnings", audience: "creator", updated: "2026-06-01", keywords: "chargeback dispute refund", summary: "What happens when a fan disputes a charge." },
  { slug: "tax-forms", title: "Tax forms and W-9", cat: "cr-earnings", audience: "creator", updated: "2026-01-31", keywords: "tax w9 1099", summary: "The tax documents Passes collects and issues." },
  { slug: "health-insurance", title: "Health insurance with Stride", cat: "cr-earnings", audience: "creator", updated: "2025-12-12", summary: "Estimate coverage as an independent creator." },
  { slug: "analytics-dashboard", title: "Creator analytics dashboard", cat: "cr-earnings", audience: "creator", updated: "2026-05-27", summary: "Track revenue, subscribers and content performance." },

  // ——— Creators · Content & tools
  { slug: "livestream-guide", title: "Livestreaming setup & management", cat: "cr-content", audience: "creator", updated: "2026-06-30", keywords: "live stream broadcast", summary: "Everything from scheduling to going live." },
  { slug: "obs-setup", title: "OBS setup for livestreams", cat: "cr-content", audience: "creator", updated: "2026-06-30", summary: "Stream from desktop with OBS." },
  { slug: "start-livestream", title: "Start a livestream", cat: "cr-content", audience: "creator", updated: "2026-04-22", summary: "Go live from the app in a few taps." },
  { slug: "organize-vault", title: "Organize your vault", cat: "cr-content", audience: "creator", updated: "2026-03-10", summary: "Keep content organized and avoid duplicate sends." },
  { slug: "sell-merch", title: "Sell merch", cat: "cr-content", audience: "creator", updated: "2026-02-19", summary: "Set up a shop and fulfil orders." },
  { slug: "screenshot-protection", title: "Screenshot protection", cat: "cr-content", audience: "creator", updated: "2026-01-15", summary: "How Passes deters screenshots and recordings." },
  { slug: "report-dmca", title: "Report stolen content (DMCA)", cat: "cr-content", audience: "creator", updated: "2026-05-08", keywords: "dmca stolen leak copyright", summary: "File a takedown for leaked content." },

  // ——— Creators · Audience & messaging
  { slug: "manage-memberships", title: "Create and manage membership tiers", cat: "cr-audience", audience: "creator", updated: "2026-06-10", summary: "Design tiers, pricing and perks." },
  { slug: "retain-members", title: "Retain members with discounts and pausing", cat: "cr-audience", audience: "creator", updated: "2026-05-16", summary: "Win-back offers instead of cancellations." },
  { slug: "mass-dms", title: "Build audiences with mass DMs", cat: "cr-audience", audience: "creator", updated: "2026-04-07", summary: "Send targeted messages at scale." },
  { slug: "smart-pricing", title: "Smart pricing for mass messaging", cat: "cr-audience", audience: "creator", updated: "2026-06-27", summary: "Let Passes optimize message pricing." },
  { slug: "automated-messages", title: "Automated messages", cat: "cr-audience", audience: "creator", updated: "2026-03-21", summary: "Welcome flows and scheduled sends." },
  { slug: "connect-discord", title: "Connect Discord", cat: "cr-audience", audience: "creator", updated: "2026-02-05", summary: "Offer Discord roles as membership perks." },
  { slug: "referral-program", title: "Creator referral program", cat: "cr-audience", audience: "creator", updated: "2026-01-09", summary: "Earn by referring other creators." },

  // ——— Safety & reporting (both)
  { slug: "report-behavior", title: "Report inappropriate behavior", cat: "safety", audience: "both", updated: "2026-06-15", keywords: "report abuse harassment", summary: "Flag messages, content or accounts for review." },
  { slug: "block-restrict", title: "Block and restrict users", cat: "safety", audience: "both", updated: "2026-05-25", summary: "Control who can reach you." },
  { slug: "promotions-discounts", title: "Promotions and discounts", cat: "safety", audience: "fan", updated: "2026-04-14", keywords: "promo code discount coupon", summary: "How promo pricing works and common issues." },
  { slug: "contact-support", title: "Contact Passes support", cat: "safety", audience: "both", updated: "2026-06-08", keywords: "help support human email ticket", summary: "Reach a human: hours, channels and what to include." },
  { slug: "app-troubleshooting", title: "Troubleshooting general app issues", cat: "safety", audience: "both", updated: "2026-06-22", keywords: "bug crash not working", summary: "First steps when something misbehaves." },
];

// Synonym map — the P0 search fix. Query terms expand before matching.
export const SYNONYMS = {
  refund: ["refunds", "money back", "chargeback", "dispute", "return"],
  cancel: ["cancel-membership", "unsubscribe", "stop", "end membership", "subscription"],
  password: ["reset-password", "sign in", "login", "signin", "locked out"],
  login: ["sign in", "signin", "password", "access"],
  "2fa": ["two-factor", "two factor", "authenticator", "security code"],
  payout: ["withdraw", "bank", "earnings", "money"],
  charge: ["unrecognized-charge", "billing", "statement", "payment"],
  delete: ["deactivate", "close account", "remove account"],
  subscription: ["membership", "tier", "renew"],
};

export const QUICK_ACTIONS = [
  { title: "Cancel a membership", slug: "cancel-membership", audience: "fan" },
  { title: "Request a refund", slug: "refunds", audience: "fan" },
  { title: "Fix a failed payment", slug: "payment-failures", audience: "fan" },
  { title: "Request a payout", slug: "setup-payouts", audience: "creator" },
  { title: "Report content or behavior", slug: "report-behavior", audience: "both" },
  { title: "Reset your password", slug: "reset-password", audience: "both" },
];

export const BODIES = {
  refunds: {
    toc: ["What's refundable", "Request a refund", "Timelines", "If you disagree"],
    deepLink: { label: "Open payment history", href: "#app/settings/payments" },
    related: ["unrecognized-charge", "cancel-membership", "payment-failures"],
    sections: [
      { h: "What's refundable", p: "One-time purchases (DMs, unlocks, tips) are reviewed case by case within 14 days. Recurring membership charges are refundable if the request is made within 48 hours of billing and the tier's content wasn't consumed." },
      { h: "Request a refund", p: "Go to Settings → Payment history, pick the transaction, and choose Request refund. Add a short reason — it goes straight to the billing team, not a bot." },
      { h: "Timelines", p: "Decisions land within 2 business days. Approved refunds return to the original payment method in 5–10 business days depending on your bank." },
      { h: "If you disagree", p: "Reply to the decision email and a senior agent re-reviews it. Filing a bank dispute pauses the account while it's investigated, so contacting us first is usually faster." },
    ],
  },
  "cancel-membership": {
    toc: ["Cancel in three steps", "What happens next", "Pause instead"],
    deepLink: { label: "Open your memberships", href: "#app/settings/memberships" },
    related: ["fan-subscriptions", "refunds", "retain-members"],
    sections: [
      { h: "Cancel in three steps", p: "Settings → Memberships → choose the creator → Cancel membership. Confirm once. No calls, no chat with support required." },
      { h: "What happens next", p: "You keep access until the end of the paid period. No further charges. You can re-subscribe anytime and your DM history stays." },
      { h: "Pause instead", p: "Some creators offer a pause (1–3 months) or a discounted tier — you'll see those options on the cancel screen if available." },
    ],
  },
  "reset-password": {
    toc: ["From the sign-in screen", "If the email never arrives", "Locked out completely"],
    deepLink: { label: "Go to sign-in", href: "#app/signin" },
    related: ["two-factor", "signin-troubleshooting", "hacked-account"],
    sections: [
      { h: "From the sign-in screen", p: "Choose Forgot password, enter your account email, and follow the link within 30 minutes. The link works once." },
      { h: "If the email never arrives", p: "Check spam, then confirm you're using the email tied to the account (receipts from Passes show which one that is). Corporate inboxes sometimes quarantine the message." },
      { h: "Locked out completely", p: "If you've lost access to the email itself, contact support from any inbox with proof of a recent receipt and we'll verify you manually." },
    ],
  },
  "two-factor": {
    toc: ["Turn on 2FA", "Signing in with 2FA", "Lost your device"],
    deepLink: { label: "Open security settings", href: "#app/settings/security" },
    related: ["reset-password", "hacked-account", "export-data"],
    sections: [
      { h: "Turn on 2FA", p: "Settings → Security → Two-factor authentication. Scan the QR code with any authenticator app and store the backup codes somewhere safe." },
      { h: "Signing in with 2FA", p: "After your password, enter the 6-digit code from the app. Trusted devices can skip the code for 30 days." },
      { h: "Lost your device", p: "Use a backup code to sign in and re-enroll a new device. Out of backup codes? Support can reset 2FA after identity verification." },
    ],
  },
  "unrecognized-charge": {
    toc: ["Identify the charge", "Charges you didn't make", "Report it"],
    deepLink: { label: "Open payment history", href: "#app/settings/payments" },
    related: ["refunds", "two-factor", "payment-failures"],
    sections: [
      { h: "Identify the charge", p: "Passes appears on statements as PASSES* followed by the creator handle. Check Payment history for the matching date and amount — renewals are the most common surprise." },
      { h: "Charges you didn't make", p: "Ask family members who share the card, then change your password and enable two-factor authentication immediately." },
      { h: "Report it", p: "If it's still unrecognized, report it from the transaction page or email help@passes.com with the date, amount and last four digits of the card. We investigate within 2 business days." },
    ],
  },
};

export const byCat = (catSlug) => ARTICLES.filter((a) => a.cat === catSlug);
export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);
export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug);
export const POPULAR = ["cancel-membership", "refunds", "reset-password", "setup-payouts", "unrecognized-charge", "payment-failures"];

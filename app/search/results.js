"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SearchBox from "../../components/SearchBox";
import ArticleCard from "../../components/ArticleCard";
import { ARTICLES, SYNONYMS } from "../../lib/content";

// Progressive search: normalize → expand synonyms → score titles/keywords/summaries
// with fuzzy tolerance → if nothing clears the bar, show the recovery state.
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

function lev(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return m[a.length][b.length];
}

function expand(tokens) {
  const out = new Set(tokens);
  for (const t of tokens) {
    for (const [k, syns] of Object.entries(SYNONYMS)) {
      if (t === k || syns.some((s) => norm(s).split(" ").includes(t))) {
        out.add(norm(k));
        syns.forEach((s) => norm(s).split(" ").forEach((w) => out.add(w)));
      }
    }
  }
  return [...out].filter(Boolean);
}

function score(article, tokens) {
  const hay = {
    title: norm(article.title).split(" "),
    kw: norm(article.keywords || "").split(" "),
    sum: norm(article.summary).split(" "),
  };
  let s = 0;
  for (const t of tokens) {
    if (hay.title.some((w) => w === t)) s += 10;
    else if (hay.title.some((w) => w.startsWith(t) || lev(w, t) <= 1)) s += 6;
    else if (hay.kw.some((w) => w === t || lev(w, t) <= 1)) s += 5;
    else if (hay.sum.some((w) => w === t)) s += 2;
  }
  return s;
}

export default function Results() {
  const q = useSearchParams().get("q") || "";
  const tokens = expand(norm(q).split(" ").filter(Boolean));
  const ranked = q
    ? ARTICLES.map((a) => ({ a, s: score(a, tokens) })).filter((r) => r.s >= 5).sort((x, y) => y.s - x.s).slice(0, 8)
    : [];

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1 style={{ fontSize: 30 }}>Search help</h1>
          <SearchBox defaultValue={q} autoFocus />
        </div>
      </section>
      <div className="wrap results" style={{ paddingTop: 28 }}>
        {q && ranked.length > 0 && (
          <>
            <div className="rstate">{ranked.length} result{ranked.length > 1 ? "s" : ""} for “{q}” — instant matches, best first.</div>
            <div className="list" style={{ padding: 0 }}>
              {ranked.map(({ a }) => <ArticleCard key={a.slug} a={a} />)}
            </div>
          </>
        )}
        {q && ranked.length === 0 && (
          <div className="recovery">
            <h4>No exact matches for “{q}” — here's what happens next</h4>
            <p>Instead of a dead end, search escalates: an AI answer drafted from the whole help base, then a human if that misses.</p>
            <div className="steps">
              <div className="stepcard">
                <div className="k">Step 1 · AI answer</div>
                <div className="v">Ask Passes AI about “{q}”</div>
                <p>Drafts an answer from all 51 articles and cites its sources.</p>
              </div>
              <div className="stepcard">
                <div className="k">Step 2 · Human</div>
                <div className="v"><Link href="/a/contact-support">Contact support →</Link></div>
                <p>Replies within one business day, 5am–9pm PT. Your query is attached automatically.</p>
              </div>
            </div>
          </div>
        )}
        {!q && <div className="rstate">Type a query — synonyms, typos and plain language all work.</div>}
      </div>
    </>
  );
}

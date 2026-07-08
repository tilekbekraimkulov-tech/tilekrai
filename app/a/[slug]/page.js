import Link from "next/link";
import Feedback from "../../../components/Feedback";
import ArticleCard from "../../../components/ArticleCard";
import { ARTICLES, BODIES, getArticle, getCategory } from "../../../lib/content";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Article({ params }) {
  const a = getArticle(params.slug);
  if (!a) return <main className="wrap sec">Article not found.</main>;
  const cat = getCategory(a.cat);
  const body = BODIES[a.slug];
  const audLabel = a.audience === "both" ? "Fans & creators" : a.audience === "fan" ? "For fans" : "For creators";
  const sections = body?.sections || [
    { h: "Overview", p: a.summary },
    { h: "Steps", p: "Prototype stub — the production article content migrates here from the canonical help center, one source of truth per topic." },
  ];
  const related = (body?.related || ARTICLES.filter((x) => x.cat === a.cat && x.slug !== a.slug).slice(0, 3).map((x) => x.slug));

  return (
    <main>
      <div className="wrap">
        <div className="crumbs">
          <Link href="/">Help</Link> / <Link href={`/c/${cat.slug}`}>{cat.title}</Link> / {a.title}
        </div>
        <div className="article-grid">
          <aside className="toc">
            <div className="t">On this page</div>
            {sections.map((s) => (
              <a key={s.h} href={`#${slugify(s.h)}`}>{s.h}</a>
            ))}
          </aside>
          <article className="art">
            <h1>{a.title}</h1>
            <div className="meta">
              <span className={`badge ${a.audience}`}>{audLabel}</span>
              {a.isNew && <span className="badge new">New</span>}
              <span>Last updated {a.updated}</span>
            </div>
            {sections.map((s) => (
              <section key={s.h} id={slugify(s.h)}>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </section>
            ))}
            {body?.deepLink && (
              <a className="deep" href={body.deepLink.href}>{body.deepLink.label} ↗</a>
            )}
            <Feedback />
          </article>
        </div>
        <div className="related">
          <h3 style={{ fontSize: 20, marginBottom: 14 }}>Related articles</h3>
          <div className="grid3">
            {related.map((s) => { const r = getArticle(s); return r ? <ArticleCard key={s} a={r} /> : null; })}
          </div>
        </div>
      </div>
    </main>
  );
}

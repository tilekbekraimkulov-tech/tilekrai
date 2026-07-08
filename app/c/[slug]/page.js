import Link from "next/link";
import ArticleCard from "../../../components/ArticleCard";
import { CATEGORIES, byCat, getCategory } from "../../../lib/content";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default function Category({ params }) {
  const cat = getCategory(params.slug);
  if (!cat) return <main className="wrap sec">Category not found.</main>;
  const items = byCat(cat.slug);
  const audLabel = cat.audience === "both" ? "Fans & creators" : cat.audience === "fan" ? "For fans" : "For creators";
  return (
    <main>
      <div className="wrap">
        <div className="crumbs"><Link href="/">Help</Link> / {audLabel} / {cat.title}</div>
        <div className="pagehead">
          <h1>{cat.title}</h1>
          <p className="sub">{cat.blurb}</p>
          <div style={{ marginTop: 10 }}><span className={`badge ${cat.audience}`}>{audLabel}</span></div>
        </div>
        {/* Flat list — no sub-categories. Every article is 2 clicks from home. */}
        <div className="list">
          {items.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </div>
    </main>
  );
}

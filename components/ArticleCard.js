import Link from "next/link";

export default function ArticleCard({ a }) {
  return (
    <Link className="card" href={`/a/${a.slug}`}>
      <h4>{a.title}</h4>
      <p>{a.summary}</p>
      <div className="meta">
        <span className={`badge ${a.audience}`}>{a.audience === "both" ? "Fans & creators" : a.audience === "fan" ? "For fans" : "For creators"}</span>
        {a.isNew && <span className="badge new">New</span>}
        <span>Updated {a.updated}</span>
      </div>
    </Link>
  );
}

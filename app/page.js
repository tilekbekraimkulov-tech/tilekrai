import Link from "next/link";
import SearchBox from "../components/SearchBox";
import ArticleCard from "../components/ArticleCard";
import { CATEGORIES, QUICK_ACTIONS, POPULAR, ARTICLES, getArticle } from "../lib/content";

export default function Home() {
  const fanCats = CATEGORIES.filter((c) => c.audience === "fan");
  const crCats = CATEGORIES.filter((c) => c.audience === "creator");
  const recent = [...ARTICLES].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <h1>How can we help?</h1>
          <p>One search across everything — answers first, humans one click away.</p>
          <SearchBox />
        </div>
      </section>

      <div className="wrap">
        <div className="roles">
          <Link className="role fan" href="/#fans">
            <div className="tag">I'm a fan</div>
            <h2>Purchases, memberships &amp; billing</h2>
            <p>Cancel or manage subscriptions, fix payments, get refunds.</p>
          </Link>
          <Link className="role creator" href="/#creators">
            <div className="tag">I'm a creator</div>
            <h2>Earnings, content &amp; audience</h2>
            <p>Payouts, livestreams, messaging tools and protection.</p>
          </Link>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <h3>Fix it fast</h3>
          <p className="sub">The five things people come here for most.</p>
          <div className="grid3">
            {QUICK_ACTIONS.map((qa) => (
              <Link key={qa.slug} className="qa" href={`/a/${qa.slug}`}>
                {qa.title} <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec mist" id="fans">
        <div className="wrap">
          <h3>For fans</h3>
          <div className="grid2">
            {fanCats.map((c) => (
              <Link key={c.slug} className="card" href={`/c/${c.slug}`}>
                <h4>{c.title}</h4>
                <p>{c.blurb}</p>
                <div className="meta"><span className="badge fan">For fans</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="creators">
        <div className="wrap">
          <h3>For creators</h3>
          <div className="grid2">
            {crCats.map((c) => (
              <Link key={c.slug} className="card" href={`/c/${c.slug}`}>
                <h4>{c.title}</h4>
                <p>{c.blurb}</p>
                <div className="meta"><span className="badge creator">For creators</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec mist">
        <div className="wrap">
          <div className="grid2">
            <div>
              <h3>Popular right now</h3>
              <div className="list" style={{ padding: 0 }}>
                {POPULAR.slice(0, 4).map((s) => <ArticleCard key={s} a={getArticle(s)} />)}
              </div>
            </div>
            <div>
              <h3>Recently updated</h3>
              <div className="list" style={{ padding: 0 }}>
                {recent.map((a) => <ArticleCard key={a.slug} a={a} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

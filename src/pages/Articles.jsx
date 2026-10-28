import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import { articles } from "../data/content.js";
export default function Articles() {
  const [query, setQuery] = useState("");
  const shown = useMemo(
    () =>
      articles.filter((a) =>
        `${a.title} ${a.excerpt} ${a.category}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );
  return (
    <>
      <SEO
        title="Journal & Articles"
        path="/articles"
        description="Panduan dan insight perencanaan wedding serta event dari Dream Comes True."
      />
      <PageHero
        eyebrow="THE JOURNAL"
        title={
          <>
            Thoughts for the
            <br />
            <em>moments ahead.</em>
          </>
        }
        text="Practical ideas, planning notes, and perspectives to help you approach your next event with more clarity."
        image={articles[0].image}
      />
      <section className="section-pad">
        <div className="container">
          <div className="filter-bar article-filter">
            <div>
              <span className="eyebrow">NOTES & INSIGHTS</span>
              <p>Explore our latest articles.</p>
            </div>
            <label className="search-field">
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                placeholder="Search articles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          {shown.length ? (
            <div className="article-grid article-grid--listing">
              {shown.map((a) => (
                <ArticleCard article={a} key={a.slug} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No articles found</h3>
              <p>Try a different keyword.</p>
              <button
                className="button button--green"
                onClick={() => setQuery("")}
              >
                Clear search
              </button>
            </div>
          )}
          <p className="sample-note">
            Article copy is starter content for the website prototype. Review
            and approve it before publication.
          </p>
        </div>
      </section>
      <section className="final-cta section-pad">
        <div className="container final-cta__inner">
          <span className="eyebrow">HAVE A QUESTION?</span>
          <h2>Let’s talk about your event.</h2>
          <p>Our team can help you explore the right next step.</p>
          <Link to="/#contact" className="button button--gold">
            Contact our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

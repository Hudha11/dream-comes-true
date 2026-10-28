import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import ArticleCard from "../components/ArticleCard.jsx";
import { articles } from "../data/content.js";
export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article)
    return (
      <main className="not-found container">
        <h1>Article not found</h1>
        <p>This article may have moved or is not available yet.</p>
        <Link className="text-link" to="/articles">
          <ArrowLeft size={16} /> Back to articles
        </Link>
      </main>
    );
  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);
  return (
    <>
      <SEO
        title={article.title}
        path={`/articles/${article.slug}`}
        description={article.excerpt}
        image={article.image}
      />
      <section className="article-detail-hero">
        <div className="container">
          <Link className="back-link" to="/articles">
            <ArrowLeft size={15} /> All articles
          </Link>
          <div className="article-detail-heading">
            <span className="eyebrow">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            {article.date && <time>{article.date}</time>}
          </div>
          <img src={article.image} alt={article.title} fetchPriority="high" />
        </div>
      </section>
      <article className="article-body section-pad">
        <div className="article-body__inner">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="article-body__note">
            <span className="eyebrow">A NOTE FROM DREAM COMES TRUE</span>
            <p>
              Every event is different. Confirm the specific requirements and
              service scope with your event team before making decisions.
            </p>
          </div>
          <Link className="text-link" to="/articles">
            <ArrowLeft size={16} /> Back to journal
          </Link>
        </div>
      </article>
      <section className="section-pad section-pad--soft">
        <div className="container">
          <div className="section-row">
            <div>
              <span className="eyebrow">KEEP READING</span>
              <h2 className="related-heading">More from the journal.</h2>
            </div>
            <Link className="text-link section-row__link" to="/articles">
              All articles <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="article-grid">
            {related.map((a) => (
              <ArticleCard article={a} key={a.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

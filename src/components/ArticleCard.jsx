import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <Link className="article-card__image" to={`/articles/${article.slug}`}>
        <img src={article.image} alt={article.title} loading="lazy" />
        <span className="image-arrow">
          <ArrowUpRight size={19} />
        </span>
      </Link>
      <div className="article-card__body">
        <span className="eyebrow">{article.category}</span>
        <h3>
          <Link to={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <Link className="text-link" to={`/articles/${article.slug}`}>
          Read article <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}

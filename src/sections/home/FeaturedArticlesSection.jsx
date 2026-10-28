import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import ArticleCard from "../../components/ArticleCard.jsx";
import { articles } from "../../data/content.js";

export default function FeaturedArticlesSection() {
  return (
    <section className="journal-section section-pad">
      <div className="container">
        <div className="section-row">
          <SectionHeading
            eyebrow="THE JOURNAL"
            title="A little more thoughtful planning."
            text="Ideas and practical notes for the moments you’re preparing for."
          />
          <Link className="text-link section-row__link" to="/articles">
            Read all articles <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="article-grid">
          {articles.slice(0, 2).map((a) => (
            <ArticleCard article={a} key={a.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

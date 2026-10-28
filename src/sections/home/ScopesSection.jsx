import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import { scopes } from "../../data/content.js";

export default function ScopesSection() {
  return (
    <section className="scopes-section section-pad section-pad--soft">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Different occasions.
One thoughtful approach."
          text="From intimate celebrations to professional gatherings, we plan with purpose and care."
        />
        <div className="scope-grid">
          {scopes.map((s, i) => (
            <Link
              to={`/events?category=${s.title === "Corporate Events" ? "Corporate" : s.title === "Government Events" ? "Government" : "Wedding"}`}
              className={`scope-card ${s.featured ? "scope-card--featured" : ""}`}
              key={s.id}
            >
              <img src={s.image} alt={`${s.title} event`} loading="lazy" />
              <span className="scope-card__number">0{i + 1}</span>
              <div className="scope-card__content">
                <span className="eyebrow">{s.eyebrow}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className="circle-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

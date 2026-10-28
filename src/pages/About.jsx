import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { scopes } from "../data/content.js";
export default function About() {
  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Kenali pendekatan Dream Comes True dalam merencanakan wedding, corporate, dan government events."
      />
      <PageHero
        eyebrow="ABOUT DREAM COMES TRUE"
        title={
          <>
            Good events begin
            <br />
            <em>with understanding.</em>
          </>
        }
        text="We take time to understand the people, purpose, and feeling behind every gathering—then bring the details together with care."
        image={scopes[1].image}
      />
      <section className="section-pad">
        <div className="container about-story">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>
              Clear in the details.
              <br />
              <em>Personal in the experience.</em>
            </h2>
          </div>
          <div>
            <p>
              Dream Comes True is an event organizer based in Balikpapan,
              Indonesia, supporting wedding celebrations as well as corporate
              and government events.
            </p>
            <p>
              We believe thoughtful planning is more than a checklist. It is a
              process of listening, aligning expectations, coordinating the
              moving parts, and creating space for people to be present in the
              moments that matter.
            </p>
            <p>
              Our services are discussed around each event’s needs. Scope,
              schedule, responsibilities, and deliverables are confirmed
              directly before any engagement.
            </p>
            <Link to="/events" className="text-link">
              Explore selected events <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad section-pad--soft">
        <div className="container">
          <SectionHeading
            eyebrow="OUR EVENT SCOPES"
            title="One team, different kinds of occasions."
            text="Each event has its own rhythm, audience, and purpose. Our planning starts there."
          />
          <div className="scope-grid">
            {scopes.map((s, i) => (
              <article
                className={`scope-card ${s.featured ? "scope-card--featured" : ""}`}
                key={s.id}
              >
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="scope-card__number">0{i + 1}</span>
                <div className="scope-card__content">
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link
                    to={`/events?category=${s.title === "Corporate Events" ? "Corporate" : s.title === "Government Events" ? "Government" : "Wedding"}`}
                    className="scope-card__link"
                  >
                    Explore portfolio <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="final-cta section-pad">
        <div className="container final-cta__inner">
          <span className="eyebrow">LET’S TALK</span>
          <h2>Start with a conversation.</h2>
          <p>
            Share the event you have in mind and the kind of support you’re
            looking for.
          </p>
          <Link to="/#contact" className="button button--gold">
            Consult with Us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

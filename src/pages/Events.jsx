import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import EventCard from "../components/EventCard.jsx";
import { events } from "../data/content.js";
const filters = ["All", "Wedding", "Corporate", "Government"];
export default function Events() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("category") || "All";
  const [filter, setFilter] = useState(
    filters.includes(initial) ? initial : "All",
  );
  const shown = useMemo(
    () =>
      filter === "All" ? events : events.filter((e) => e.category === filter),
    [filter],
  );
  function change(v) {
    setFilter(v);
    setParams(v === "All" ? {} : { category: v });
  }
  return (
    <>
      <SEO
        title="Events & Portfolio"
        path="/events"
        description="Jelajahi portofolio event Dream Comes True untuk wedding, corporate, dan government events."
      />
      <PageHero
        eyebrow="OUR PORTFOLIO"
        title={
          <>
            A collection of
            <br />
            <em>moments made meaningful.</em>
          </>
        }
        text="Every event has its own story. Explore a selection of wedding celebrations and gatherings shaped around the people and purpose behind them."
        image={events[0].image}
      />
      <section className="section-pad">
        <div className="container">
          <div className="filter-bar">
            <div>
              <span className="eyebrow">BROWSE BY EVENT</span>
              <p>Find the kind of gathering you’re planning.</p>
            </div>
            <div className="filter-buttons" aria-label="Filter events">
              {filters.map((f) => (
                <button
                  key={f}
                  className={filter === f ? "is-active" : ""}
                  onClick={() => change(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="event-grid event-grid--listing">
            {shown.map((e) => (
              <EventCard event={e} key={e.slug} />
            ))}
          </div>
          <p className="sample-note">
            The event cards currently use illustrative imagery and sample copy
            to demonstrate the site layout. Replace with verified portfolio
            content before publishing.
          </p>
        </div>
      </section>
      <section className="final-cta section-pad">
        <div className="container final-cta__inner">
          <span className="eyebrow">YOUR EVENT, YOUR STORY</span>
          <h2>Let’s plan what comes next.</h2>
          <p>
            Tell us about your date, goals, and the kind of support you need.
          </p>
          <Link to="/#contact" className="button button--gold">
            Discuss your event <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

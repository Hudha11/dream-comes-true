import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import EventCard from "../../components/EventCard.jsx";
import { events } from "../../data/content.js";

export default function FeaturedEventsSection() {
  const featured = events.filter((e) => e.featured).slice(0, 3);

  return (
    <section className="events-section section-pad">
      <div className="container">
        <div className="section-row">
          <SectionHeading
            eyebrow="SELECTED STORIES"
            title="Moments we helped bring to life."
            text="A glimpse into the gatherings, details, and stories behind each event."
          />
          <Link className="text-link section-row__link" to="/events">
            View all events <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="event-grid">
          {featured.map((e) => (
            <EventCard event={e} key={e.slug} />
          ))}
        </div>
        <p className="sample-note">
          Portfolio imagery is currently illustrative. Replace with approved
          Dream Comes True event documentation before launch.
        </p>
      </div>
    </section>
  );
}

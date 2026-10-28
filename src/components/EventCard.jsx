import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <Link to={`/events/${event.slug}`} className="event-card__image">
        <img src={event.image} alt={event.title} loading="lazy" />
        <span className="image-arrow">
          <ArrowUpRight size={19} />
        </span>
      </Link>
      <div className="event-card__meta">
        <span>{event.category}</span>
        {event.date && <time>{event.date}</time>}
      </div>
      <h3>
        <Link to={`/events/${event.slug}`}>{event.title}</Link>
      </h3>
      <p>{event.excerpt}</p>
    </article>
  );
}

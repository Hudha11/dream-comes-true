import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import WhatsAppChooser from "../components/WhatsAppChooser.jsx";
import { events } from "../data/content.js";
export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  if (!event)
    return (
      <main className="not-found container">
        <h1>Event not found</h1>
        <p>This event may have moved or is not available yet.</p>
        <Link className="text-link" to="/events">
          <ArrowLeft size={16} /> Back to events
        </Link>
      </main>
    );
  return (
    <>
      <SEO
        title={event.title}
        path={`/events/${event.slug}`}
        description={event.excerpt}
        image={event.image}
      />
      <section className="detail-hero">
        <div className="container">
          <Link className="back-link" to="/events">
            <ArrowLeft size={15} /> All events
          </Link>
          <div className="detail-heading">
            <span className="eyebrow">
              {event.category}
              {event.location ? ` · ${event.location}` : ""}
            </span>
            <h1>{event.title}</h1>
            <p>{event.excerpt}</p>
            {event.date && <span className="detail-date">{event.date}</span>}
          </div>
          <img
            className="detail-cover"
            src={event.image}
            alt={event.title}
            fetchPriority="high"
          />
        </div>
      </section>
      <section className="section-pad">
        <div className="container detail-content">
          <div>
            <span className="eyebrow">THE STORY</span>
            <h2>Every detail has a purpose.</h2>
          </div>
          <div>
            <p>
              This portfolio page is designed to tell the story behind the
              event, the priorities that shaped it, and the moments the team
              helped coordinate.
            </p>
            <p className="sample-note">
              {event.status} Replace this text with approved event details,
              scope of work, and original photography. Do not publish unverified
              client names or claims.
            </p>
            <WhatsAppChooser
              compact
              message={`Halo Dream Comes True, saya melihat portofolio “${event.title}” dan ingin berdiskusi tentang event saya.`}
            />
          </div>
        </div>
      </section>
      <section className="section-pad section-pad--soft">
        <div className="container">
          <Link to="/events" className="text-link">
            Explore more events <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90"
          alt="Wedding celebration with elegant floral details"
          fetchPriority="high"
        />
        <div className="hero__shade" />
      </div>
      <div className="container hero__content">
        <span className="hero-kicker">
          <span /> EVENT ORGANIZER · BALIKPAPAN
        </span>
        <h1>
          Every Moment,
          <br />
          <em>Beautifully</em> Planned.
        </h1>
        <p>
          Thoughtful planning for celebrations that stay with you. From
          once-in-a-lifetime weddings to meaningful corporate and institutional
          gatherings.
        </p>
        <div className="hero-actions">
          <a className="button button--gold" href="#contact">
            Plan Your Event <ArrowUpRight size={17} />
          </a>
          <Link className="button button--outline-light" to="/events">
            Explore Our Events <ArrowDownRight size={17} />
          </Link>
        </div>
        <div className="hero-note">
          <span className="hero-note__line" /> A good event is felt long after
          it ends.
        </div>
      </div>
      <div className="hero-index">
        01 <span /> 03
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function PancaPreviewSection() {
  return (
    <section className="panca-preview section-pad">
      <div className="container panca-preview__grid">
        <div className="panca-photo">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
            alt="Portrait placeholder for Panca Bakri"
            loading="lazy"
          />
          <span>PERSONAL BRAND / 001</span>
        </div>
        <div className="panca-copy">
          <span className="eyebrow">MEET THE VOICE BEHIND THE MOMENT</span>
          <h2>
            Panca Bakri.
            <br />
            <em>On the mic, in the moment.</em>
          </h2>
          <p>
            Alongside his work with Dream Comes True, Panca Bakri offers a
            dedicated MC presence for events that call for a confident, engaging
            host. Explore his profile, hosting approach, and verified event
            experience.
          </p>
          <Link className="button button--green" to="/panca-bakri">
            Meet Panca Bakri <ArrowUpRight size={16} />
          </Link>
          <p className="sample-note">
            Portrait and profile details are placeholders until official
            materials are supplied.
          </p>
        </div>
      </div>
    </section>
  );
}

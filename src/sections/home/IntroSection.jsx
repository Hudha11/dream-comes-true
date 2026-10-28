import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="intro section-pad">
      <div className="container intro-grid">
        <div className="intro-label">
          <span className="eyebrow">A LITTLE ABOUT US</span>
          <span className="intro-number">01 / 04</span>
        </div>
        <div className="intro-copy">
          <h2>
            Not just an event.
            <br />
            <em>A moment that means something.</em>
          </h2>
          <p>
            At Dream Comes True, we believe every gathering carries a story. Our
            approach starts by understanding what matters to you—then shaping
            the details into an experience that feels considered, seamless, and
            genuinely yours.
          </p>
          <Link className="text-link" to="/about">
            Get to know us <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="intro-aside">
          <span className="aside-mark">“</span>
          <p>
            Good planning makes room for you to be fully present in the moment.
          </p>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, CalendarHeart, Mic2, Sparkles } from "lucide-react";
import { services } from "../../data/content.js";

const icons = { "wo-only": CalendarHeart, mc: Mic2, bundling: Sparkles };

export default function ServicesSection() {
  return (
    <section className="services-section section-pad">
      <div className="container services-layout">
        <div className="services-intro">
          <span className="eyebrow">WAYS TO WORK WITH US</span>
          <h2>
            Support that fits
            <br />
            <em>your kind of day.</em>
          </h2>
          <p>
            Every event is different. Let’s start with the kind of support you
            need, then discuss the details together.
          </p>
          <a href="#contact" className="text-link text-link--light">
            Talk through your plans <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="service-list">
          {services.map((s, i) => {
            const Icon = icons[s.id];
            return (
              <article className="service-item" key={s.id}>
                <span className="service-item__num">0{i + 1}</span>
                <span className="service-item__icon">
                  <Icon size={23} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <a
                    href="#contact"
                    onClick={() => {}}
                    className="service-link"
                  >
                    Discuss this service <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "../../components/SectionHeading.jsx";
import { testimonials } from "../../data/content.js";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-pad section-pad--soft">
      <div className="container">
        <SectionHeading
          eyebrow="KIND WORDS, REAL STORIES"
          title="The best part is how it felt."
          text="Client stories will be featured here with permission, in their own words."
        />
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div className="testimonial-placeholder" key={t.id}>
              <div className="placeholder-art">
                <span>“</span>
                <small>{t.type.toUpperCase()} / CLIENT STORY</small>
              </div>
              <div className="placeholder-copy">
                <span className="eyebrow">TESTIMONIAL PLACEHOLDER</span>
                <p>Approved client feedback image will appear here.</p>
              </div>
            </div>
          ))}
        </div>
        <p className="sample-note">
          No client reviews are fabricated. Add approved testimonial screenshots
          or artwork in src/data/content.js.
        </p>
      </div>
    </section>
  );
}

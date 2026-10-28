import { Link } from "react-router-dom";
import { ArrowUpRight, Mic2, MessageCircle, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO.jsx";
import WhatsAppChooser from "../components/WhatsAppChooser.jsx";
import { clients } from "../data/content.js";
export default function PancaBakri() {
  return (
    <>
      <SEO
        title="Panca Bakri — MC & Event Host"
        path="/panca-bakri"
        description="Kenali Panca Bakri, MC dan event host yang menjadi bagian dari Dream Comes True."
      />
      <section className="panca-hero">
        <div className="container panca-hero__grid">
          <div className="panca-hero__copy">
            <span className="eyebrow">PERSONAL BRAND / EVENT HOST</span>
            <h1>
              Panca Bakri.
              <br />
              <em>
                Make every word
                <br />
                part of the moment.
              </em>
            </h1>
            <p>
              MC & event host for meaningful gatherings—bringing a clear voice,
              thoughtful presence, and a considered flow to the occasion.
            </p>
            <div className="hero-actions">
              <a href="#panca-contact" className="button button--green">
                <MessageCircle size={17} /> Discuss MC service
              </a>
              <Link to="/events" className="button button--outline-dark">
                Explore DCT events <ArrowUpRight size={16} />
              </Link>
            </div>
            <span className="sample-note">
              Profile copy is a draft positioning statement. Confirm biography
              and experience with Panca Bakri before publishing.
            </span>
          </div>
          <div className="panca-hero__portrait">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85"
              alt="Portrait placeholder for Panca Bakri"
            />
            <span className="portrait-caption">
              PANCA BAKRI · MC & EVENT HOST
            </span>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container panca-about">
          <div>
            <span className="eyebrow">THE PRESENCE</span>
            <h2>
              A host who understands
              <br />
              <em>the rhythm of a room.</em>
            </h2>
          </div>
          <div>
            <p>
              A good MC does more than announce what comes next. They help
              guests feel oriented, connect one moment to another, and support
              the tone of the event.
            </p>
            <p>
              This page is dedicated to Panca Bakri’s individual MC service,
              separate from the broader Wedding Organizer and Bundling options
              offered by Dream Comes True.
            </p>
            <div className="panca-points">
              <span>
                <CheckCircle2 size={17} /> Clear, audience-aware communication
              </span>
              <span>
                <CheckCircle2 size={17} /> Thoughtful event flow
              </span>
              <span>
                <CheckCircle2 size={17} /> Service scope discussed per event
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad section-pad--soft">
        <div className="container">
          <div className="section-row">
            <div>
              <span className="eyebrow">SELECTED EXPERIENCE</span>
              <h2 className="related-heading">Events and clients.</h2>
              <p className="section-subcopy">
                Verified experience will be added as official materials are
                confirmed.
              </p>
            </div>
          </div>
          {clients.length ? (
            <div className="client-list">
              {clients.map((c) => (
                <div key={c.name} className="client-item">
                  {c.name}
                </div>
              ))}
            </div>
          ) : (
            <div className="client-placeholder">
              <Mic2 size={27} />
              <div>
                <strong>Experience portfolio coming soon</strong>
                <p>
                  Add confirmed event names, approved client logos, and event
                  photos to <code>src/data/content.js</code>.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="section-pad" id="panca-contact">
        <div className="container panca-contact">
          <div>
            <span className="eyebrow">BOOKING & INQUIRIES</span>
            <h2>
              Let’s find the right voice
              <br />
              <em>for your event.</em>
            </h2>
            <p>
              Share your event date, format, audience, and the kind of hosting
              support you’re looking for.
            </p>
          </div>
          <WhatsAppChooser message="Halo, saya ingin menanyakan layanan MC Panca Bakri. Detail acara saya akan saya sampaikan lebih lanjut." />
        </div>
      </section>
    </>
  );
}

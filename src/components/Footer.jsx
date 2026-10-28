import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site.js";
import WhatsAppChooser from "./WhatsAppChooser.jsx";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="brand brand--light">
              <span className="brand-mark">
                D<span>·</span>C
              </span>
              <span className="brand-name">
                DREAM COMES TRUE<small>EVENT ORGANIZER</small>
              </span>
            </Link>
            <p>
              Thoughtful planning for moments that matter. Wedding, corporate,
              and government events.
            </p>
            <span className="footer-location">{site.location}</span>
          </div>
          <div className="footer-nav">
            <h3>Explore</h3>
            <Link to="/about">About us</Link>
            <Link to="/events">Our events</Link>
            <Link to="/articles">Journal & insights</Link>
            <Link to="/panca-bakri">Panca Bakri — MC</Link>
          </div>
          <div className="footer-nav">
            <h3>Event scopes</h3>
            <Link to="/events?category=Wedding">Wedding</Link>
            <Link to="/events?category=Corporate">Corporate</Link>
            <Link to="/events?category=Government">Government</Link>
          </div>
          <div className="footer-contact">
            <h3>Let’s make it meaningful.</h3>
            <p>Tell us a little about the event you have in mind.</p>
            <WhatsAppChooser
              compact
              message="Halo Dream Comes True, saya ingin konsultasi mengenai kebutuhan event."
            />
            {site.instagramUrl && (
              <a
                className="social-link"
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {/* Mengganti ikon Instagram dari lucide-react dengan SVG manual */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                {">"} Instagram <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dream Comes True.</span>
          <span>Made for moments that matter.</span>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import WhatsAppChooser from "./WhatsAppChooser.jsx";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/articles", label: "Articles" },
  { to: "/panca-bakri", label: "Our MC" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Dream Comes True home"
        >
          <span className="brand-mark">
            D<span>·</span>C
          </span>
          <span className="brand-name">
            DREAM COMES TRUE<small>EVENT ORGANIZER</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Consult with Us <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
      {open && (
        <div className="mobile-contact container">
          <p>Start a conversation with our team.</p>
          <WhatsAppChooser
            compact
            message="Halo Dream Comes True, saya ingin konsultasi mengenai kebutuhan event."
          />
        </div>
      )}
    </header>
  );
}

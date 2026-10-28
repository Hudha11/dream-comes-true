import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import WhatsAppChooser from "../components/WhatsAppChooser.jsx";
import { scopes } from "../data/content.js";
export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Hubungi Dream Comes True untuk konsultasi wedding, corporate, dan government event."
      />
      <PageHero
        eyebrow="START A CONVERSATION"
        title={
          <>
            Tell us what you’re
            <br />
            <em>dreaming of.</em>
          </>
        }
        text="A few details about your event will help us understand what matters most and how we might support you."
        image={scopes[0].image}
      />
      <section className="section-pad">
        <div className="container contact-page-grid">
          <div>
            <span className="eyebrow">LET’S BEGIN</span>
            <h2>
              Every good plan
              <br />
              <em>starts with a conversation.</em>
            </h2>
            <p>
              Choose the admin contact that works best for you. Our team can
              continue the discussion through WhatsApp.
            </p>
          </div>
          <div className="contact-panel">
            <h3>Contact our team</h3>
            <p>For wedding, MC, corporate, and government event inquiries.</p>
            <WhatsAppChooser message="Halo Dream Comes True, saya ingin konsultasi mengenai kebutuhan event." />
            <small>
              WhatsApp contacts need to be configured by the website owner
              before launch.
            </small>
          </div>
        </div>
      </section>
    </>
  );
}

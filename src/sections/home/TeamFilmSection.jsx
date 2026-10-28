import { ArrowUpRight, Play } from "lucide-react";
import SectionHeading from "../../components/SectionHeading.jsx";
import { site } from "../../data/site.js";

export default function TeamFilmSection() {
  return (
    <section className="film-section section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="BEHIND EVERY BEAUTIFUL MOMENT"
          title="The moments you see.<br/>The care you don’t."
          text="One story, told in three chapters—from the ceremony to the celebration and the team bringing every detail together."
        />
        <div className="film-layout">
          <div
            className="film-player"
            style={{ backgroundImage: `url(${site.teamVideoPoster})` }}
          >
            {site.teamVideoUrl ? (
              <video controls poster={site.teamVideoPoster} preload="metadata">
                <source src={site.teamVideoUrl} />
              </video>
            ) : (
              <div className="film-placeholder">
                <span className="play-circle">
                  <Play size={22} fill="currentColor" />
                </span>
                <span>OUR EVENT FILM</span>
                <small>Final event video coming soon</small>
              </div>
            )}
            <span className="film-label">DCT / FILM 001</span>
          </div>
          <div className="film-chapters">
            {[
              {
                n: "01",
                title: "Akad",
                text: "The quiet, meaningful moments at the heart of the day.",
                time: 0,
              },
              {
                n: "02",
                title: "Resepsi",
                text: "A joyful gathering filled with family, friends, and celebration.",
                time: 0,
              },
              {
                n: "03",
                title: "Crew in Action",
                text: "The coordination and care that help the day flow.",
                time: 0,
              },
            ].map((ch) => (
              <div className="film-chapter" key={ch.n}>
                <span>{ch.n}</span>
                <div>
                  <h3>{ch.title}</h3>
                  <p>{ch.text}</p>
                </div>
                <ArrowUpRight size={17} />
              </div>
            ))}
            <p className="sample-note">
              Video chapter timestamps can be configured once the final edited
              video is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

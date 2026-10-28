import WhatsAppChooser from "../../components/WhatsAppChooser.jsx";

export default function FinalCTASection() {
  return (
    <section id="contact" className="final-cta section-pad">
      <div className="container final-cta__inner">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>Have a moment in mind?</h2>
        <p>
          Tell us what you’re planning. We’ll help you explore the next steps.
        </p>
        <WhatsAppChooser message="Halo Dream Comes True, saya ingin mulai berdiskusi tentang event yang akan saya selenggarakan." />
        <span className="final-cta__ornament">DCT · EST. WITH CARE</span>
      </div>
    </section>
  );
}

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {image && (
          <div className="page-hero__image">
            <img src={image} alt="" fetchPriority="high" />
          </div>
        )}
      </div>
    </section>
  );
}

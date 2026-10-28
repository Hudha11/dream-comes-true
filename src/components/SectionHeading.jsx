export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "left",
}) {
  return (
    <div
      className={`section-heading ${light ? "section-heading--light" : ""} section-heading--${align}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

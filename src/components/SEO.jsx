import { Helmet } from "react-helmet-async";
import { site } from "../data/site.js";
export default function SEO({ title, description, path = "/", image }) {
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} — ${site.tagline}`;
  const canonical = `${site.siteUrl.replace(/\/$/, "")}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={
          description ||
          "Wedding organizer, corporate events, dan government events di Balikpapan."
        }
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || "Every Moment, Beautifully Planned."}
      />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

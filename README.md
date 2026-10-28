# Dream Comes True — React Website

Responsive React + Vite website prototype for Dream Comes True, an event organizer based in Balikpapan.

## Included

- React Router routes: Home, About, Events listing/detail, Articles listing/detail, Panca Bakri personal brand, Contact, 404.
- Responsive editorial design using the brief's dark green (`#063F16`) and gold (`#FDA800`) palette.
- Event category filtering and article search.
- Configurable WhatsApp buttons for Admin 1 and Admin 2.
- Centralized data in `src/data/content.js` and brand/contact config in `src/data/site.js`.
- Page-level metadata, canonical URLs, Open Graph tags, robots.txt, sitemap starter, and Vercel SPA rewrite.
- No invented client testimonials or client logos; these are clearly marked placeholders.

## Run locally

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Validate and build

```bash
npm run lint
npm run build
npm run preview
```

## Before publishing — required content setup

1. Open `src/data/site.js`.
   - Replace `siteUrl` with the actual production domain.
   - Fill `whatsapp.admin1` and `whatsapp.admin2` with official WhatsApp phone numbers in international format, digits only, e.g. Indonesia `62...` (no plus sign or spaces).
   - Add the final team film URL to `teamVideoUrl` when available.
   - Add the official Instagram URL if desired.
2. Open `src/data/content.js`.
   - Replace illustrative Unsplash imagery with approved event photos and update event titles, dates, locations, descriptions, and article copy.
   - Add only client-approved testimonial screenshots/images. Do not publish the placeholder testimonial cards as if they were real reviews.
   - Add verified client names/logos to `clients` and confirm Panca Bakri's biography and experience.
3. Update `public/robots.txt` and `public/sitemap.xml` with the actual domain and all final event/article URLs.
4. Update image alt text to describe the actual photos.
5. Confirm service scope with the business. The current descriptions are intentionally high-level and avoid claiming unconfirmed package inclusions.

## SEO note

The site currently uses Vite's client-rendered React SPA, route-level titles/descriptions/canonical tags, semantic HTML, Open Graph tags, sitemap/robots starters, and a Vercel rewrite for direct route access. This is a useful baseline but **is not full static prerendering**. For best organic-search coverage, add prerendering/SSG for public routes (including each event/article slug) or migrate the content routes to a framework with static generation before relying on SEO at scale. Keep the metadata in sync with the rendered page and submit the final sitemap in Google Search Console.

## Deploy to Vercel

1. Push the project to a Git repository or import the folder into Vercel.
2. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
3. The included `vercel.json` rewrite supports direct navigation to client-side routes.
4. Configure the production domain in `src/data/site.js`, update sitemap and robots, then redeploy.

## Notes

- Images are currently remote Unsplash URLs and require internet access; replace them with licensed/approved brand photography before production.
- The video section is a placeholder until an official video is configured. The chapter list is descriptive; chapter seeking/timestamps should be wired to the final video once its timeline is confirmed.
- This project does not include a backend or CMS. Add a CMS only if the team needs to update events/articles without code changes.

import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" />
      <main className="not-found container">
        <span className="eyebrow">404 / PAGE NOT FOUND</span>
        <h1>
          This page took
          <br />
          <em>a different turn.</em>
        </h1>
        <p>The page you’re looking for may have moved or may not exist yet.</p>
        <Link to="/" className="button button--green">
          Back to home
        </Link>
      </main>
    </>
  );
}

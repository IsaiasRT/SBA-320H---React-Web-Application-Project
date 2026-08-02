import { Link } from "react-router-dom";

const FEATURES = [
  {
    title: "Monster Encyclopedia",
    text: "Browse the monsters of the New World with search and pagination.",
  },
  {
    title: "Hunter Journal",
    text: "Log every hunt with weapon, result, difficulty, and notes.",
  },
  {
    title: "Favorites & Wishlist",
    text: "Build a list of favorite monsters and a wishlist of targets to hunt next.",
  },
  {
    title: "Theme Switching",
    text: "Dark and light themes for hunting day or night, persisted across sessions.",
  },
];

const STACK = [
  { name: "React", detail: "UI library with hooks" },
  { name: "React Router", detail: "Client-side routing" },
  { name: "Context + useReducer", detail: "Global state" },
  { name: "Vite", detail: "Build tool & dev server" },
  { name: "localStorage", detail: "Persistence" },
  { name: "mhw-db.com", detail: "Live monster data API" },
];

export default function About() {
  return (
    <section className="page about">
      <header className="page-header">
        <h1>About Hunter Journal</h1>
        <p className="page-sub">
          A companion app for Monster Hunter: World hunters, built as a React
          single-page application.
        </p>
      </header>

      <section className="panel">
        <h2>What is this?</h2>
        <p>
          Hunter Journal combines live monster data from{" "}
          <a href="https://mhw-db.com" target="_blank" rel="noreferrer noopener">
            mhw-db.com
          </a>{" "}
          with a personal hunting log. It helps players keep track of the
          monsters they&apos;ve encountered, defeated, and still want to hunt.
        </p>
        <p>
          All of your progress — favorites, wishlist, journal, and theme — is
          stored locally in your browser, so your hunter card travels with you.
        </p>
      </section>

      <section className="panel">
        <h2>Features</h2>
        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p className="muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Tech Stack</h2>
        <ul className="detail-list">
          {STACK.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              <span className="muted"> - {item.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel cta-panel">
        <h2>Ready to Hunt?</h2>
        <p className="muted">
          Explore the encyclopedia and log your hunts.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/monsters">
            Browse Monsters
          </Link>
          <Link className="btn btn-secondary" to="/journal">
            Start a Journal
          </Link>
        </div>
      </section>
    </section>
  );
}

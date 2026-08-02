import { Link } from "react-router-dom";
import { useHunter } from "../context/HunterContext.jsx";
import MonsterCard from "../components/MonsterCard.jsx";

export default function Favorites() {
  const { state } = useHunter();

  const sections = [
    {
      key: "favorites",
      title: "Favorite Monsters",
      empty: "No favorites yet. Favorite any monster to see it here.",
      items: state.favorites,
    },
    {
      key: "wishlist",
      title: "Hunting Wishlist",
      empty: "No monsters on your wishlist yet.",
      items: state.wishlist,
    },
  ];

  return (
    <section className="page favorites">
      <header className="page-header">
        <h1>Favorites</h1>
        <p className="page-sub">
          The monsters you love and the ones you still need to hunt.
        </p>
      </header>

      {sections.map((section) => (
        <div key={section.key} className="favorites-section">
          <div className="panel-header">
            <h2>{section.title}</h2>
            <span className="panel-sub">{section.items.length}</span>
          </div>

          {section.items.length > 0 ? (
            <div className="favorite-grid">
              {section.items.map((monster) => (
                <MonsterCard key={monster.id} monster={monster} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>{section.empty}</p>
              <Link className="btn btn-primary" to="/monsters">
                Browse Monsters
              </Link>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

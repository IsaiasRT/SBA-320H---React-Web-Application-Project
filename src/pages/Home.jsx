import { Link } from "react-router-dom";
import { useHunter } from "../context/HunterContext.jsx";
import StatsCard from "../components/StatsCard.jsx";
import JournalCard from "../components/JournalCard.jsx";

export default function Home() {
  const { state, dispatch } = useHunter();
  const recentEntries = state.journal.slice(0, 3);

  const removeEntry = (id) => dispatch({ type: "DELETE_ENTRY", payload: id });

  return (
    <section className="page home">
      <header className="hero">
        <p className="hero-kicker">Monster Hunter: World Companion</p>
        <h1>Hunter Journal</h1>
        <p className="hero-sub">
          Track the monsters you&apos;ve felled, the hunts you&apos;ve logged, and the
          ones still on your list — all in one place.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/monsters">
            Browse Monsters
          </Link>
          <Link className="btn btn-secondary" to="/journal">
            Open the Journal
          </Link>
        </div>
      </header>

      <div className="stats-grid">
        <StatsCard label="Hunts Logged" value={state.journal.length} />
        <StatsCard label="Monsters Defeated" value={state.defeated.length} />
        <StatsCard label="Favorites" value={state.favorites.length} />
        <StatsCard label="Wishlist" value={state.wishlist.length} />
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>Recent Entries</h2>
          <Link className="btn btn-small btn-ghost" to="/journal">
            View all →
          </Link>
        </div>

        {recentEntries.length > 0 ? (
          <div className="entry-list">
            {recentEntries.map((entry) => (
              <JournalCard
                key={entry.id}
                entry={entry}
                onDelete={() => removeEntry(entry.id)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No hunts logged yet.</p>
            <Link className="btn btn-primary" to="/journal">
              Write your first entry
            </Link>
          </div>
        )}
      </section>
    </section>
  );
}

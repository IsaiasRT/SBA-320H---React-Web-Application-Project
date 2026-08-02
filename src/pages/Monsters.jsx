import { useEffect, useState, useMemo } from "react";
import getMonsters from "../services/mhwApi.js";
import { useHunter } from "../context/HunterContext.jsx";
import MonsterCard from "../components/MonsterCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

const PAGE_SIZE = 12;

export default function Monsters() {
  const { state, dispatch } = useHunter();
  const search = state.search;

  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getMonsters()
      .then((data) => {
        if (!active) return;
        setMonsters(data);
        setError(null);
      })
      .catch((err) => active && setError(err.message))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return monsters;
    return monsters.filter((monster) => monster.name.toLowerCase().includes(q));
  }, [monsters, search]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <section className="page monsters">
      <header className="page-header">
        <h1>Monster Encyclopedia</h1>
        <p className="page-sub">
          All {monsters.length} monsters of the New World. Search and mark your
          hunts.
        </p>
      </header>

      <SearchBar
        value={search}
        onChange={(value) => dispatch({ type: "SET_SEARCH", payload: value })}
        placeholder="Search by name"
      />

      {error && <p className="error-text">Couldn&apos;t load monsters.</p>}

      {loading ? (
        <p className="muted">Loading the New World...</p>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <p>No monsters match your search.</p>
        </div>
      ) : (
        <>
          <p className="results-count">
            Showing {visible.length} of {filtered.length} monsters
          </p>
          <div className="monster-grid">
            {visible.map((monster) => (
              <MonsterCard key={monster.id} monster={monster} />
            ))}
          </div>

          {pageCount > 1 && (
            <div className="pagination">
              <button
                type="button"
                className="btn btn-small"
                disabled={currentPage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </button>
              <span className="pagination-info">
                Page {currentPage} of {pageCount}
              </span>
              <button
                type="button"
                className="btn btn-small"
                disabled={currentPage === pageCount}
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

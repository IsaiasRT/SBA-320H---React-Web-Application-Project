import { useHunter } from "../context/HunterContext.jsx";
import { formatDate, stars } from "../utils/helpers.js";

export default function JournalCard({ entry, onEdit, onDelete }) {
  const { isDefeated, dispatch } = useHunter();
  const defeated = entry.monster && isDefeated(entry.monster.id);

  const toggleDefeated = () => {
    if (!entry.monster) return;
    dispatch({ type: "TOGGLE_DEFEATED", payload: entry.monster });
  };

  return (
    <article className="journal-card">
      <div className="journal-card-header">
        <div className="journal-card-title">
          <h3>{entry.monster?.name ?? "Unknown Monster"}</h3>
          <span className="journal-card-date">{formatDate(entry.date)}</span>
        </div>
        <span className="tag tag-result">{entry.result}</span>
      </div>

      <div className="journal-card-meta">
        <span>{entry.weapon}</span>
        <span>{entry.difficulty}</span>
        <span title="Difficulty rating">{stars(entry.rating)}</span>
      </div>

      {entry.notes && <p className="journal-card-notes">{entry.notes}</p>}

      <div className="journal-card-actions">
        <button type="button" className="btn btn-small" onClick={onEdit}>
          Edit
        </button>
        <button
          type="button"
          className="btn btn-small"
          onClick={toggleDefeated}
          disabled={!entry.monster}
          title={entry.monster ? "Toggle defeated status" : "No linked monster"}
        >
          {defeated ? "Mark alive" : "Mark defeated"}
        </button>
        <button
          type="button"
          className="btn btn-small btn-danger"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

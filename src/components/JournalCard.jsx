import { formatDate } from "../utils/helpers.js";

export default function JournalCard({ entry, onDelete }) {
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
      </div>

      {entry.notes && <p className="journal-card-notes">{entry.notes}</p>}

      <div className="journal-card-actions">
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

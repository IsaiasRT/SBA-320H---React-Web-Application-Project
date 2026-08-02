export default function StatsCard({ label, value, hint }) {
  return (
    <article className="stats-card">
      <div className="stats-card-content">
        <span className="stats-card-value">{value}</span>
        <span className="stats-card-label">{label}</span>
        {hint && <span className="stats-card-hint">{hint}</span>}
      </div>
    </article>
  );
}

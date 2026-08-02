export default function ProgressBar({ value, max, label }) {
  const safeMax = max > 0 ? max : 1;
  const percent = Math.max(0, Math.min(100, (value / safeMax) * 100));

  return (
    <div className="progress">
      <div className="progress-label">
        <span>{label}</span>
        <span>
          {value} / {max}
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

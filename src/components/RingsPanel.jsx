function fmt(v) {
  if (v === null || v === undefined) return '--';
  if (typeof v === 'string') return v;
  if (!Number.isFinite(v)) return '--';
  return v.toFixed(2);
}

export default function RingsPanel({ activeLabel, rings }) {
  const main = rings?.true_club_rings;
  return (
    <div className="card">
      <div className="subtle">Active</div>
      <div style={{ fontSize: 14, fontWeight: 700 }}>{activeLabel || 'No selection'}</div>
      <div style={{ marginTop: 10 }}>
        <div className="subtle">Rings</div>
        <div className="bigValue">{fmt(main)}</div>
      </div>

      <div className="mmmStack" aria-label="Rings">
        <div className="mmmRow">
          <span className="mmmLabel">MIN</span>
          <span className="mmmValue">{fmt(rings?.min_rings)}</span>
        </div>
        <div className="mmmRow">
          <span className="mmmLabel">MID</span>
          <span className="mmmValue">{fmt(rings?.mid_rings)}</span>
        </div>
        <div className="mmmRow">
          <span className="mmmLabel">MAX</span>
          <span className="mmmValue">{fmt(rings?.max_rings)}</span>
        </div>
      </div>
    </div>
  );
}

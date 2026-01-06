import { clubShortNames } from '../data/clubsData.js';

function fmt(v) {
  if (v === null || v === undefined || !Number.isFinite(v)) return '--';
  return v.toFixed(2);
}

export default function MinInterface({ selected, activeCategory, onSetActive, wind, elevation, ballPower, onWind, onElevation, onBallPower, rings, onExit }) {
  return (
    <div className="container">
      <div className="header">
        <div className="title">GCaddy (Minimal)</div>
        <button className="btn" onClick={onExit}>Exit</button>
      </div>

      <div className="card">
        <div className="pillRow">
          {Object.entries(selected || {}).map(([cat, s]) => {
            if (!s?.club || !s?.level) return null;
            const text = `${clubShortNames[s.club] ?? s.club} L${s.level}`;
            return (
              <button
                key={cat}
                className={'pill' + (cat === activeCategory ? ' active' : '')}
                onClick={() => onSetActive(cat)}
              >
                {text}
              </button>
            );
          })}
        </div>

        <div className="controls" style={{ marginTop: 12 }}>
          <div className="field">
            <label>Wind</label>
            <input type="text" value={wind} onChange={(e) => onWind(e.target.value)} />
          </div>
          <div className="field">
            <label>Elevation %</label>
            <input type="number" value={elevation} onChange={(e) => onElevation(e.target.value)} />
          </div>
          <div className="field">
            <label>Ball Power</label>
            <input type="number" value={ballPower} min={0} max={10} onChange={(e) => onBallPower(e.target.value)} />
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div className="subtle">Rings</div>
          <div className="bigValue">{fmt(rings?.true_club_rings)}</div>
        </div>

        <div className="kv stacked">
          <div className="kvItem"><div className="kvLabel">Max</div><div className="kvValue">{fmt(rings?.max_rings)}</div></div>
          <div className="kvItem"><div className="kvLabel">Mid</div><div className="kvValue">{fmt(rings?.mid_rings)}</div></div>
          <div className="kvItem"><div className="kvLabel">Min</div><div className="kvValue">{fmt(rings?.min_rings)}</div></div>
          <div className="kvItem"><div className="kvLabel">Max</div><div className="kvValue">{fmt(rings?.max_rings)}</div></div>
          <div className="kvItem"><div className="kvLabel">Mid</div><div className="kvValue">{fmt(rings?.mid_rings)}</div></div>
          <div className="kvItem"><div className="kvLabel">Max</div><div className="kvValue">{fmt(rings?.max_rings)}</div></div>
        </div>
      </div>
    </div>
  );
}

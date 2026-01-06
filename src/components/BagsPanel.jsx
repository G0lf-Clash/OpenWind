export default function BagsPanel({ bagCount = 5, activeBag, bagExists, canSave, onSave, onLoad }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>Bags</div>
        <div className="subtle">LocalStorage</div>
      </div>

      <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {Array.from({ length: bagCount }, (_, i) => i + 1).map((idx) => {
          const exists = !!bagExists?.[idx];
          const isActive = activeBag === idx;
          return (
            <div key={idx} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <button
                className={'btn' + (isActive ? ' primary' : '')}
                onClick={() => exists && onLoad(idx)}
                disabled={!exists}
              >
                Load {idx}
              </button>
              <button
                className="btn"
                onClick={() => onSave(idx)}
                disabled={!canSave}
              >
                Save
              </button>
            </div>
          );
        })}
      </div>

      {!canSave && (
        <div className="subtle" style={{ marginTop: 10 }}>
          Select all 7 clubs (club + level) to enable saving.
        </div>
      )}
    </div>
  );
}

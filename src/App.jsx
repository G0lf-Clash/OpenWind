import React from 'react';

import ClubGrid from './components/ClubGrid.jsx';
import ShortcutBar from './components/ShortcutBar.jsx';
import RingsPanel from './components/RingsPanel.jsx';
import ClubInfoPanel from './components/ClubInfoPanel.jsx';
import BagsPanel from './components/BagsPanel.jsx';
import MinInterface from './components/MinInterface.jsx';
import Toast from './components/Toast.jsx';
import useToast from './hooks/useToast.js';

import { computeActiveRings } from './calc/rings.js';
import {
  loadBallPower,
  saveBallPower,
  loadLastBagIndex,
  saveLastBagIndex,
  loadLastClub,
  saveLastClub,
  loadBag,
  saveBag,
  bagExists as bagExistsLS
} from './storage/storage.js';
import { clubCats } from './data/clubsData.js';

const CATEGORIES = Object.keys(clubCats);

function sanitizeWindInput(raw) {
  let v = String(raw ?? '').trim();
  v = v.replace(/[^0-9.]/g, '');
  if (!v) return '';

  // Collapse multiple dots to a single first dot
  const firstDot = v.indexOf('.');
  if (firstDot !== -1) {
    const left = v.slice(0, firstDot).replace(/\./g, '');
    const right = v.slice(firstDot + 1).replace(/\./g, '');
    const digitsAll = (left + right).replace(/\./g, '');

    // If more than 3 digits total, treat it as "4th digit starts over"
    if (digitsAll.length > 3) {
      return digitsAll.slice(-1); // the 4th digit becomes the first
    }

    // If user typed more than one digit after the dot, treat it like quick typing (digit stream)
    if (right.length > 1) {
      if (digitsAll.length >= 2) return `${digitsAll.slice(0, -1)}.${digitsAll.slice(-1)}`;
      return digitsAll;
    }

    // Otherwise honor explicit decimal entry (allow "" or one tenths digit)
    return right.length ? `${left}.${right.slice(0, 1)}` : `${left}.`;
  }

  // Quick typing digit stream (no dot):
  const digits = v.replace(/\./g, '');

  // 4th digit starts over
  if (digits.length > 3) return digits.slice(-1);

  if (digits.length >= 2) return `${digits.slice(0, -1)}.${digits.slice(-1)}`;
  return digits;
}




function allClubsSelected(selected) {
  return CATEGORIES.every((cat) => {
    const s = selected?.[cat];
    return !!(s?.club && s?.level);
  });
}

export default function App() {
  const toast = useToast();

  const [selected, setSelected] = React.useState(() => ({}));
  const [activeCategory, setActiveCategory] = React.useState('Drivers');

  const [windStr, setWindStr] = React.useState('');
  const [elevation, setElevation] = React.useState(0);
  const [elevationStr, setElevationStr] = React.useState('0');
  const [ballPower, setBallPowerState] = React.useState(0);
  const [distancePct, setDistancePct] = React.useState(100);
  const [distancePctStr, setDistancePctStr] = React.useState('100%');

  const [showClubs, setShowClubs] = React.useState(true);
  const [minMode, setMinMode] = React.useState(false);

  const [activeBag, setActiveBag] = React.useState(0);
  const [bagsExist, setBagsExist] = React.useState(() => ({}));

  // Init from LocalStorage
  React.useEffect(() => {
    try {
      const bp = loadBallPower();
      setBallPowerState(bp);
    } catch {
      // ignore
    }

    const existsMap = {};
    for (let i = 1; i <= 5; i++) existsMap[i] = bagExistsLS(i);
    setBagsExist(existsMap);

    const lastBag = loadLastBagIndex();
    if (lastBag) {
      const bagDoc = loadBag(lastBag);
      if (bagDoc) {
        setSelected(bagDoc);
        setActiveBag(lastBag);
        setShowClubs(false);
      }
    }

    const lastClub = loadLastClub();
    if (lastClub?.category && lastClub?.club && lastClub?.level) {
      setSelected((prev) => ({
        ...prev,
        [lastClub.category]: {
          ...(prev?.[lastClub.category] || {}),
          club: lastClub.club,
          level: Number(lastClub.level) || 1
        }
      }));
      setActiveCategory(lastClub.category);
    }
  }, []);

  const activeSel = selected?.[activeCategory];
  const wind = parseFloat(windStr) || 0;

  const rings = React.useMemo(() => {
    if (!activeCategory || !activeSel?.club || !activeSel?.level) return null;
    return computeActiveRings({
      category: activeCategory,
      club: activeSel.club,
      level: activeSel.level,
      wind,
      elevation: Number(elevation) || 0,
      ballPower: Number(ballPower) || 0,
      clubDistancePct: Number(distancePct) || 0
    });
  }, [activeCategory, activeSel?.club, activeSel?.level, wind, elevation, ballPower, distancePct]);

  const canSave = allClubsSelected(selected);

  const activeLabel = React.useMemo(() => {
    if (!activeCategory) return 'No selection';
    const s = selected?.[activeCategory];
    if (!s?.club || !s?.level) return 'No selection';
    return `${s.club.replace(/_/g,' ')} (Level ${s.level})`;
  }, [selected, activeCategory]);

  const onSelectClub = (category, club) => {
    const prevLevel = selected?.[category]?.level;
    setSelected((prev) => {
      const next = { ...prev, [category]: { ...(prev?.[category] || {}), club } };
      // If rarity change invalidates level, clear it
      // (ClubGrid already disables buttons, but this keeps state consistent.)
      // We'll keep level if still present.
      return next;
    });
    setActiveCategory(category);
    saveLastClub(category, club, prevLevel || 1);
  };

  const onSelectLevel = (category, level) => {
    setSelected((prev) => {
      const next = { ...prev, [category]: { ...(prev?.[category] || {}), level } };
      return next;
    });
    setActiveCategory(category);
    const club = selected?.[category]?.club;
    if (club) saveLastClub(category, club, level);
  };

  const onSetActiveCategory = (cat) => {
    setActiveCategory(cat);
    const s = selected?.[cat];
    if (s?.club && s?.level) saveLastClub(cat, s.club, s.level);
  };

  const onWindChange = (raw) => {
    const v = sanitizeWindInput(raw);
    setWindStr(v);
  };

  const onBallPowerChange = (raw) => {
    const n0 = Number(raw);
    if (!Number.isFinite(n0)) return;
    const n = Math.max(0, Math.min(10, Math.round(n0)));
    setBallPowerState(n);
    saveBallPower(n);
  };

  // Keep the text input in sync when the slider/presets change.

const commitDistancePctStr = React.useCallback(() => {
    const cleaned = String(distancePctStr ?? '').trim().replace('%', '');
    const n = Number.parseFloat(cleaned);
    if (!Number.isFinite(n)) {
      setDistancePctStr(`${distancePct}%`);
      return;
    }
    // Allow any numeric value (including decimals and values outside 0-100)
    setDistancePct(n);
    setDistancePctStr(`${n}%`);
  }, [distancePctStr, distancePct]);

  const setElevationSafe = React.useCallback((raw) => {
    const n = Number(raw);
    if (!Number.isFinite(n)) return;
    // Snap elevation to 5% increments for the slider/presets
    const snapped = Math.round(n / 5) * 5;
    const clamped = Math.max(-40, Math.min(40, snapped));
    setElevation(clamped);
    setElevationStr(String(clamped));
  }, []);

const onSaveBag = (idx) => {
    saveBag(idx, selected);
    saveLastBagIndex(idx);
    setActiveBag(idx);

    setBagsExist((m) => ({ ...m, [idx]: true }));
    toast.show(`Saved bag ${idx}.`, 1800);
  };

  const onLoadBag = (idx) => {
    const bagDoc = loadBag(idx);
    if (!bagDoc) return;
    setSelected(bagDoc);
    setActiveBag(idx);
    saveLastBagIndex(idx);
    toast.show(`Loaded bag ${idx}.`, 1600);

    // Try to set a sensible active category
    const first = CATEGORIES.find((c) => bagDoc?.[c]?.club && bagDoc?.[c]?.level) || 'Drivers';
    setActiveCategory(first);
    setShowClubs(false);
  };

  if (minMode) {
    return (
      <>
        <MinInterface
          selected={selected}
          activeCategory={activeCategory}
          onSetActive={onSetActiveCategory}
          wind={windStr}
          elevation={elevation}
          ballPower={ballPower}
          onWind={onWindChange}
          onElevation={setElevationSafe}
          onBallPower={onBallPowerChange}
          rings={rings}
          onExit={() => setMinMode(false)}
        />
        <Toast message={toast.message} onClose={toast.clear} />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title"></div>      
        </div>

        <div className="row">
          <div className="card" style={{ flex: 1 }}>
            <div className="controls">
              <div className="field">
                <label>Wind</label>
                <input
                  type="text"
                  value={windStr}
                  onFocus={() => setWindStr('')}
                  onChange={(e) => onWindChange(e.target.value)}
                  placeholder="e.g. 5.3"
                />
              </div>

              <div className="field wide">
                <label>Ball Power (0–10)</label>

                <div className="distanceGrid">
                  <input
                    className="rangeInput"
                    type="range"
                    min={0}
                    max={10}
                    step={1}
                    value={Math.max(0, Math.min(10, Math.round(Number(ballPower) || 0)))}
                    onChange={(e) => onBallPowerChange(e.target.value)}
                    aria-label="Ball power slider"
                  />

                  <input
                    className="pctInput"
                    type="number"
                    value={ballPower}
                    min={0}
                    max={10}
                    step={1}
                    onChange={(e) => onBallPowerChange(e.target.value)}
                    aria-label="Ball power"
                  />

                  <div className="rangeMarks dense10" role="group" aria-label="Ball power presets">
                    {Array.from({ length: 11 }, (_, i) => ({ v: i, label: String(i) })).map((m) => (
                      <span
                        key={m.v}
                        className={`rangeMark ${Number(ballPower) === m.v ? 'active' : ''}`}
                        onClick={() => onBallPowerChange(m.v)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') onBallPowerChange(m.v);
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Set ball power to ${m.label}`}
                        title={`Set ball power to ${m.label}`}
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="field wide">
                <label>Elevation %</label>

                <div className="distanceGrid">
                  <input
                    className="rangeInput"
                    type="range"
                    min={-40}
                    max={40}
                    step={5}
                    value={Math.max(-40, Math.min(40, elevation))}
                    onChange={(e) => setElevationSafe(e.target.value)}
                    aria-label="Elevation slider"
                  />

                  <input
                    className="pctInput"
                    type="text"
                    value={elevationStr}
                    onChange={(e) => {
                      const v = e.target.value;
                      setElevationStr(v);
                      // Allow any number (including decimals and values outside the slider range)
                      const n = Number.parseFloat(String(v).trim());
                      if (Number.isFinite(n)) setElevation(n);
                    }}
                    onBlur={() => {
                      // If user leaves it empty/invalid, snap back to last numeric value
                      const n = Number.parseFloat(String(elevationStr).trim());
                      if (!Number.isFinite(n)) setElevationStr(String(elevation));
                      else setElevationStr(String(n));
                    }}
                    aria-label="Elevation percent"
                  />

                  <div className="rangeMarks dense" role="group" aria-label="Elevation presets">
                    {Array.from({ length: 17 }, (_, i) => {
                      const v = -40 + i * 5;
                      return { v, label: String(v) };
                    }).map((m) => (
                      <span
                        key={m.v}
                        className={`rangeMark ${Number(elevation) === m.v ? 'active' : ''}`}
                        onClick={() => setElevationSafe(m.v)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') setElevationSafe(m.v);
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Set elevation to ${m.label}`}
                        title={`Set elevation to ${m.label}`}
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="field wide">
                <label>Club Distance %</label>
                <div className="distanceGrid">
                  <input
                    className="rangeInput"
                    type="range"
                    min={0}
                    max={100}
                    value={Math.max(0, Math.min(100, distancePct))}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setDistancePct(v);
                      setDistancePctStr(`${v}%`);
                    }}
                    aria-label="Club distance slider"
                  />

                  <input
                    className="pctInput"
                    type="text"
                    value={distancePctStr}
                    onChange={(e) => {
                      const v = e.target.value;
                      setDistancePctStr(v);
                      const cleaned = String(v).trim().replace("%", "");
                      const n = Number.parseFloat(cleaned);
                      if (Number.isFinite(n)) setDistancePct(n);
                    }}
                    onBlur={commitDistancePctStr}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') commitDistancePctStr();
                    }}
                    inputMode="numeric"
                    aria-label="Club distance percent"
                    title="Type a percent like 38%"
                  />

                  <div className="rangeMarks" role="group" aria-label="Club distance presets">
                    {[
                      { v: 0, label: 'Min' },
                                            { v: 50, label: 'Mid' },
                                            { v: 100, label: 'Max' }
                    ].map((m) => (
                      <span
                        key={m.v}
                        className={`rangeMark ${distancePct === m.v ? 'active' : ''}`}
                        onClick={() => { setDistancePct(m.v); setDistancePctStr(`${m.v}%`); }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') { setDistancePct(m.v); setDistancePctStr(`${m.v}%`); }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Set club distance to ${m.v}%`}
                      >
                        {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <button className="btn" onClick={() => setShowClubs((s) => !s)}>
                  {showClubs ? 'Hide clubs' : 'Show clubs'}
                </button>
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <ShortcutBar selected={selected} activeCategory={activeCategory} onSetActive={onSetActiveCategory} />
            </div>

            {showClubs && (
              <div style={{ marginTop: 12 }}>
                <ClubGrid selected={selected} onSelectClub={onSelectClub} onSelectLevel={onSelectLevel} />
              </div>
            )}
          </div>

          <div style={{ width: 380, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <RingsPanel activeLabel={activeLabel} rings={rings} />
            <ClubInfoPanel category={activeCategory} club={activeSel?.club} level={activeSel?.level} />
            <BagsPanel
              bagCount={5}
              activeBag={activeBag}
              bagExists={bagsExist}
              canSave={canSave}
              onSave={onSaveBag}
              onLoad={onLoadBag}
            />
          </div>
        </div>

        <div className="subtle" style={{ marginTop: 10 }}>
          Notes: Wind input supports quick typing like "53" to become "5.3".
        </div>
      </div>
      <Toast message={toast.message} onClose={toast.clear} />
    </>
  );
}

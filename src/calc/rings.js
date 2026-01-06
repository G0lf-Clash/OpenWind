import { windData } from '../data/clubsData.js';

export function round(n, d) {
  const f = Math.pow(10, d);
  return Math.round(n * f) / f;
}

function ballPowerAdj(ballPower) {
  let bp = Number(ballPower);
  if (!Number.isFinite(bp)) bp = 0;
  if (bp === 0) bp = 0.1;

  if (bp < 6) return 1 - (0.0119 * (6 - bp));
  if (bp === 6) return 1;
  return 1 + (0.0119 * (bp - 6));
}


export function calculateRings({ wind, elevation, ballPower, clubDistancePct, category, wind_per_ring }) {
  const adj = ballPowerAdj(ballPower);
  const arr = String(wind_per_ring).split('|').map(parseFloat);
  const multiplier = (1 + (Number(elevation) || 0) / 100) * adj;

  const w = Number(wind) || 0;
  const max_rings = round((w / arr[0]) * multiplier, 1);
  const mid_rings = round((w / arr[1]) * multiplier, 1);

  let min_rings;
  if (category === 'Wedges' || category === 'Rough_Irons' || category === 'Sand_Wedges') {
    min_rings = 0.0;
  } else {
    min_rings = round((w / arr[2]) * multiplier, 1);
  }

  const cd = Math.max(0, Math.min(100, Number(clubDistancePct) || 0));
  const true_club_rings = round(min_rings + ((max_rings - min_rings) * (cd / 100)), 1);

  return { true_club_rings, max_rings, mid_rings, min_rings };
}

export function getWindPerRing({ category, club, level }) {
  const catData = windData?.[category];
  const v = catData?.[club]?.[level];
  return v ?? null;
}

export function computeActiveRings({ category, club, level, wind, elevation, ballPower, clubDistancePct }) {
  const wind_per_ring = getWindPerRing({ category, club, level });
  if (!wind_per_ring) {
    return null;
  }
  return calculateRings({
    wind,
    elevation,
    ballPower,
    clubDistancePct,
    category,
    wind_per_ring
  });
}

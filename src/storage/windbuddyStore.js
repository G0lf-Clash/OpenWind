// LocalStorage-backed persistence for GCaddy

const NS = "gcaddy";

function key(k) {
  return `${NS}:${k}`;
}

function readJSON(k, fallback) {
  try {
    const raw = localStorage.getItem(key(k));
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeJSON(k, value) {
  localStorage.setItem(key(k), JSON.stringify(value));
}

export function loadBallPower() {
  const v = localStorage.getItem(key("ballPower"));
  const n = Number(v ?? 0);
  return Number.isFinite(n) ? n : 0;
}

export function saveBallPower(value) {
  const n = Math.max(0, Math.min(10, Number(value)));
  localStorage.setItem(key("ballPower"), String(n));
}

export function loadLastBagIndex() {
  const v = localStorage.getItem(key("lastBag"));
  const n = Number(v ?? 0);
  return Number.isFinite(n) ? n : 0;
}

export function saveLastBagIndex(bagIndex) {
  const n = Number(bagIndex) || 0;
  localStorage.setItem(key("lastBag"), String(n));
}

export function loadLastClub() {
  return readJSON("lastClub", null);
}

export function saveLastClub(category, club, level) {
  writeJSON("lastClub", {
    category: category ?? "",
    club: club ?? "",
    level: Number(level) || 1
  });
}

export function saveBag(bagIndex, bagDoc) {
  writeJSON(`bag:${bagIndex}`, bagDoc ?? {});
}

export function loadBag(bagIndex) {
  return readJSON(`bag:${bagIndex}`, null);
}

export function bagExists(bagIndex) {
  return localStorage.getItem(key(`bag:${bagIndex}`)) !== null;
}

// Tournament notes
export function loadTournamentData(tournId) {
  return readJSON(`tourn:${tournId}`, {});
}

export function saveTournamentField(tournId, field, value) {
  const data = loadTournamentData(tournId);
  data[field] = value;
  writeJSON(`tourn:${tournId}`, data);
}

export function clearTournamentNotes(tournId, tab) {
  const data = loadTournamentData(tournId);
  for (let i = 1; i <= 9; i++) {
    const holeNum = tab === "front" ? i : i + 9;
    data[`hole${holeNum}Notes`] = "";
  }
  writeJSON(`tourn:${tournId}`, data);
}

import { clubStats } from '../data/clubsData.js';

function getStats(category, clubUnderscore, level) {
  if (!category || !clubUnderscore || !level) return null;
  const clubName = clubUnderscore.replace(/_/g, ' ');
  return clubStats?.[category]?.[clubName]?.[level] ?? null;
}

export default function ClubInfoPanel({ category, club, level }) {
  const stats = getStats(category, club, level);
  const title = category && club && level ? `${club.replace(/_/g,' ')} (Lv. ${level})` : 'Club Info';

  return (
    <div className="card">
      <div style={{ fontSize: 14, fontWeight: 700 }}>{title}</div>
      {!stats && <div className="subtle" style={{ marginTop: 8 }}>Select a club + level to see stats.</div>}

      {stats && (
        <table className="table" style={{ marginTop: 10 }}>
          <tbody>
            <tr><td>Power</td><td style={{ textAlign: 'right', fontWeight: 700 }}>{stats.power}</td></tr>
            <tr><td>Accuracy</td><td style={{ textAlign: 'right', fontWeight: 700 }}>{stats.accuracy}</td></tr>
            <tr><td>Top Spin</td><td style={{ textAlign: 'right', fontWeight: 700 }}>{stats.top_spin}</td></tr>
            <tr><td>Back Spin</td><td style={{ textAlign: 'right', fontWeight: 700 }}>{stats.back_spin}</td></tr>
            <tr><td>Curl</td><td style={{ textAlign: 'right', fontWeight: 700 }}>{stats.curl}</td></tr>
            <tr><td>Ball Guide</td><td style={{ textAlign: 'right', fontWeight: 700 }}>{stats.ball_guide}</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

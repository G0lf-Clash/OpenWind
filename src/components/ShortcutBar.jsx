import { clubCats, clubShortNames } from '../data/clubsData.js';

const labelMap = {
  Drivers: 'Driver',
  Woods: 'Wood',
  Long_Irons: 'Long Iron',
  Short_Irons: 'Short Iron',
  Wedges: 'Wedge',
  Rough_Irons: 'Rough Iron',
  Sand_Wedges: 'Sand Wedge'
};

export default function ShortcutBar({ selected, activeCategory, onSetActive }) {
  const categories = Object.keys(clubCats);

  return (
    <div className="pillRow">
      {categories.map((cat) => {
        const s = selected?.[cat];
        const enabled = !!(s?.club && s?.level);
        const text = enabled
          ? `${s.club.replace(/_/g, ' ')} (L${s.level})`
          : (labelMap[cat] ?? cat.replace(/_/g,' '));

        return (
          <button
            key={cat}
            className={
              'pill' +
              (cat === activeCategory ? ' active' : '') +
              (enabled ? ' enabled' : '')
            }
            onClick={() => enabled && onSetActive(cat)}
            disabled={!enabled}
            title={enabled ? `Active: ${clubShortNames[s.club] ?? ''}` : 'Select a club + level'}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

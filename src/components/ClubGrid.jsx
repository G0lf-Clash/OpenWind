import { clubCats, epics, rares } from '../data/clubsData.js';

function maxLevelForClub(club) {
  if (!club) return 10;
  if (epics.has(club)) return 8;
  if (rares.has(club)) return 9;
  return 10;
}

function CategoryCard({ category, selected, onSelectClub, onSelectLevel }) {
  const clubs = clubCats[category];
  const s = selected?.[category] || {};
  const maxLevel = maxLevelForClub(s.club);

  return (
    <div className="card">
      <div className="categoryTitle">{category.replace(/_/g,' ')}</div>
      <div className="clubList">
        {clubs.map((club) => (
          <button
            key={club}
            className={'chip' + (s.club === club ? ' selected' : '')}
            onClick={() => onSelectClub(category, club)}
          >
            {club.replace(/_/g,' ')}
          </button>
        ))}
      </div>

      <div className="levelRow">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((lvl) => (
          <button
            key={lvl}
            className={'levelBtn' + (s.level === lvl ? ' selected' : '')}
            onClick={() => onSelectLevel(category, lvl)}
            disabled={!s.club || lvl > maxLevel}
            title={!s.club ? 'Select a club first' : (lvl > maxLevel ? 'This rarity caps lower' : '')}
          >
            {lvl}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ClubGrid({ selected, onSelectClub, onSelectLevel }) {
  const categories = Object.keys(clubCats);
  return (
    <div className="categoryGrid">
      {categories.map((cat) => (
        <CategoryCard
          key={cat}
          category={cat}
          selected={selected}
          onSelectClub={onSelectClub}
          onSelectLevel={onSelectLevel}
        />
      ))}
    </div>
  );
}

import { useSelector } from 'react-redux';
import { selectAllMatches, selectFilters } from './matchesSlice';
import MatchDetails from './MatchDetails';

const MatchesList = () => {
  const matches = useSelector(selectAllMatches);
  const filters = useSelector(selectFilters);

  const filteredMatches = matches.filter(match => {
    const teamMatch = filters.teamName === '' || 
      match.team1.toLowerCase().includes(filters.teamName.toLowerCase()) || 
      match.team2.toLowerCase().includes(filters.teamName.toLowerCase());
    
    const dateMatch = filters.date === '' || 
      match.date.includes(filters.date);
    
    const outcomeMatch = filters.outcome === '' || 
      (filters.outcome === 'draw' && match.team1goals === match.team2goals) ||
      (filters.outcome === 'win' && match.team1goals !== match.team2goals);
    
    return teamMatch && dateMatch && outcomeMatch;
  });

  return (
    <div className="matches-list">
      {filteredMatches.length === 0 ? (
        <p>No matches found</p>
      ) : (
        <ul>
          {filteredMatches.map(match => (
            <MatchDetails key={match.id} match={match} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatchesList;
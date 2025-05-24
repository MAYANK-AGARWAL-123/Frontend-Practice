import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './matchesSlice';
import { selectFavorites } from './matchesSlice';

const MatchDetails = ({ match }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(fav => fav.id === match.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(match.id));
    } else {
      dispatch(addToFavorites(match));
    }
  };

  return (
    <li className="match-item">
      <div className="match-header">
        <h3>{match.team1} vs {match.team2}</h3>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <p>Date: {match.date}</p>
      <p>Venue: {match.venue}</p>
      <p>Score: {match.team1goals} - {match.team2goals}</p>
      <div className="match-stats">
        <h4>Statistics:</h4>
        <p>Possession: {match.team1possession}% - {match.team2possession}%</p>
        <p>Yellow Cards: {match.team1yellowcards} - {match.team2yellowcards}</p>
        <p>Red Cards: {match.team1redcards} - {match.team2redcards}</p>
      </div>
    </li>
  );
};

export default MatchDetails;
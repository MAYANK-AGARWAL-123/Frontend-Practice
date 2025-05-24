import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTeamFilter } from '../features/matches/matchesSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setTeamFilter(searchTerm));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by team name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
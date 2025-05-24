import { useDispatch } from 'react-redux';
import { setDateFilter, setOutcomeFilter } from '../features/matches/matchesSlice';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <div>
        <label>Filter by Date:</label>
        <input 
          type="date" 
          onChange={(e) => dispatch(setDateFilter(e.target.value))}
        />
      </div>
      <div>
        <label>Filter by Outcome:</label>
        <select onChange={(e) => dispatch(setOutcomeFilter(e.target.value))}>
          <option value="">All</option>
          <option value="win">Win/Loss</option>
          <option value="draw">Draw</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchMatches,
  selectLoadingStatus,
  selectErrorStatus 
} from './features/matches/matchesSlice';
import MatchesList from './features/matches/MatchesList';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const isError = useSelector(selectErrorStatus);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error loading matches</div>;

  return (
    <div className="App">
      <h1>Football Match Tracker</h1>
      <SearchBar />
      <Filters />
      <MatchesList />
    </div>
  );
}

export default App;
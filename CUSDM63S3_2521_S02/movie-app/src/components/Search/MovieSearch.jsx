import { useState } from 'react';
import { useSearchMoviesQuery } from '../../app/api';
import { 
  Input, 
  Box, 
  Grid, 
  Skeleton, 
  Alert, 
  Text,
  VStack,
  HStack,
  Select,
  Button
} from '@chakra-ui/react';
import { AlertIcon } from '@chakra-ui/alert';
import MovieCard from '../../components/MovieCard/MovieCard';
import useDebounce from '../../hooks/useDebounce';
import { FaSearch, FaTimes } from 'react-icons/fa';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const debouncedQuery = useDebounce(query, 500);
  
  const { 
    data: movies, 
    isLoading, 
    isError, 
    refetch 
  } = useSearchMoviesQuery(
    { 
      query: debouncedQuery,
      year: yearFilter,
      genre: genreFilter
    }, 
    {
      skip: debouncedQuery.length < 3
    }
  );

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);
  
  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    // Add more genres as needed
  ];

  const handleClearFilters = () => {
    setYearFilter('');
    setGenreFilter('');
  };

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <VStack spacing={4} align="stretch">
        <Box position="relative">
          <Input
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="lg"
            pr="4.5rem"
          />
          {query && (
            <Button
              position="absolute"
              right="0"
              top="0"
              variant="ghost"
              onClick={() => setQuery('')}
            >
              <FaTimes />
            </Button>
          )}
        </Box>

        <HStack spacing={4} wrap="wrap">
          <Select
            placeholder="Filter by year"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            width="200px"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Filter by genre"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            width="200px"
          >
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </Select>

          {(yearFilter || genreFilter) && (
            <Button 
              variant="outline" 
              onClick={handleClearFilters}
              leftIcon={<FaTimes />}
            >
              Clear filters
            </Button>
          )}
        </HStack>

        {isLoading && (
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} height="300px" borderRadius="md" />
            ))}
          </Grid>
        )}

        {isError && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            Failed to fetch movies
            <Button ml="auto" variant="ghost" onClick={refetch}>
              Retry
            </Button>
          </Alert>
        )}

        {movies?.length === 0 && (
          <VStack spacing={4} py={10}>
            <Text fontSize="xl">No movies found</Text>
            <Button 
              leftIcon={<FaSearch />}
              onClick={() => {
                setQuery('');
                handleClearFilters();
              }}
            >
              Clear search
            </Button>
          </VStack>
        )}

        {movies && movies.length > 0 && (
          <>
            <Text fontSize="lg" fontWeight="semibold">
              {movies.length} results found
            </Text>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </Grid>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default MovieSearch;
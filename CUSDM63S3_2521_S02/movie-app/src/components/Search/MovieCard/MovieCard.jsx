import { Box, Image, Badge, Text, Button, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../../features/watchlist/watchlistSlice';
import MovieDetailsModal from '../MovieDetails/MovieDetailsModal';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useSelector((state) => state.auth);
  const watchlist = useSelector((state) => state.watchlist);
  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  const handleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}
        onClick={onOpen}
        cursor="pointer"
      />
      <Box p={4}>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {movie.vote_average}
          </Badge>
        </Box>
        <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {movie.title}
        </Text>
        <Text color="gray.500">{movie.release_date}</Text>
        {user && (
          <Button 
            mt={2} 
            size="sm" 
            colorScheme={isInWatchlist ? 'red' : 'teal'}
            onClick={handleWatchlist}
          >
            {isInWatchlist ? 'Remove' : 'Watchlist'}
          </Button>
        )}
      </Box>
      
      <MovieDetailsModal 
        isOpen={isOpen} 
        onClose={onClose} 
        movieId={movie.id} 
      />
    </Box>
  );
};

export default MovieCard;
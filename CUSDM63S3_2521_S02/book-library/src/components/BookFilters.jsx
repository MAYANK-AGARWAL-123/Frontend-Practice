import { useDispatch, useSelector } from 'react-redux';
import { setGenreFilter, setReadStatusFilter, setSearchQuery } from '../features/filters/filtersSlice';
import { selectFilters } from '../features/filters/filtersSlice';
import { Box, Input, Select, Stack, Text } from '@chakra-ui/react';

const BookFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const genres = ['all', 'Classic', 'Fantasy', 'Science Fiction', 'Mystery', 'Romance'];

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Filter Books
      </Text>
      <Stack spacing={4}>
        <Input
          placeholder="Search by title or author"
          value={filters.searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />

        <Select
          value={filters.genre}
          onChange={(e) => dispatch(setGenreFilter(e.target.value))}
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre === 'all' ? 'All Genres' : genre}
            </option>
          ))}
        </Select>

        <Select
          value={filters.readStatus}
          onChange={(e) => dispatch(setReadStatusFilter(e.target.value))}
        >
          <option value="all">All Books</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </Select>
      </Stack>
    </Box>
  );
};

export default BookFilters;
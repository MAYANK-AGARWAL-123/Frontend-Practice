import { useSelector } from 'react-redux';
import { selectAllBooks } from './booksSlice';
import { selectFilters } from '../filters/filtersSlice';
import BookItem from '../../components/BookItem';
import { VStack, Text, Box } from '@chakra-ui/react';

const BooksList = () => {
  const books = useSelector(selectAllBooks);
  const filters = useSelector(selectFilters);

  const filteredBooks = books.filter(book => {
    const matchesGenre = filters.genre === 'all' || book.genre === filters.genre;
    const matchesReadStatus = filters.readStatus === 'all' || 
      (filters.readStatus === 'read' && book.isRead) || 
      (filters.readStatus === 'unread' && !book.isRead);
    const matchesSearch = book.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return matchesGenre && matchesReadStatus && matchesSearch;
  });

  return (
    <Box width="100%">
      {filteredBooks.length === 0 ? (
        <Text textAlign="center" color="gray.500" py={4}>
          No books found. Add some books!
        </Text>
      ) : (
        <VStack spacing={3} align="stretch">
          {filteredBooks.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default BooksList;
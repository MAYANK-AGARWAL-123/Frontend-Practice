import { Box, Heading, Flex } from '@chakra-ui/react';
import AddBook from './components/AddBook';
import BooksList from './features/books/BooksList';
import BookFilters from './components/BookFilters';

function App() {
  return (
    <Box maxWidth="1200px" margin="auto" p={4}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Book Library
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
        <Box flex={{ md: 1 }}>
          <AddBook />
          <BookFilters mt={4} />
        </Box>
        <Box flex={{ md: 2 }}>
          <BooksList />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
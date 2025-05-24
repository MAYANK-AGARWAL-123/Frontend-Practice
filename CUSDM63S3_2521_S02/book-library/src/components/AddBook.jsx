import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/booksSlice';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';

const AddBook = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addBook(data));
    toast({
      title: 'Book added',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    reset();
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input {...register('title')} placeholder="Book title" required />
          </FormControl>

          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input {...register('author')} placeholder="Author name" required />
          </FormControl>

          <FormControl>
            <FormLabel>Genre</FormLabel>
            <Input {...register('genre')} placeholder="Book genre" required />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Add Book
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddBook;
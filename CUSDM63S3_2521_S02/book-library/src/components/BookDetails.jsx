import { useDispatch } from 'react-redux';
import { editBook } from '../features/books/booksSlice';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const BookDetails = ({ book, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: book.title,
      author: book.author,
      genre: book.genre
    }
  });

  const onSubmit = (data) => {
    dispatch(editBook({ id: book.id, ...data }));
    toast({
      title: 'Book updated',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Edit Book Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input {...register('title')} placeholder="Book title" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Author</FormLabel>
            <Input {...register('author')} placeholder="Author name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Genre</FormLabel>
            <Input {...register('genre')} placeholder="Book genre" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookDetails;
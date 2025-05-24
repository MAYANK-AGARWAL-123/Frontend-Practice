import { useDispatch } from 'react-redux';
import { toggleReadStatus, deleteBook } from '../features/books/booksSlice';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, IconButton, Badge, useDisclosure } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import BookDetails from './BookDetails';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card variant="outline">
        <CardBody>
          <Stack spacing={3}>
            <Heading size="md">{book.title}</Heading>
            <Text>Author: {book.author}</Text>
            <Text>Genre: {book.genre}</Text>
            <Badge 
              colorScheme={book.isRead ? 'green' : 'yellow'} 
              alignSelf="flex-start"
            >
              {book.isRead ? 'Read' : 'Unread'}
            </Badge>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing={2}>
            <Button
              leftIcon={<EditIcon />}
              onClick={onOpen}
              colorScheme="blue"
              variant="outline"
            >
              Details
            </Button>
            <Button
              onClick={() => dispatch(toggleReadStatus(book.id))}
              colorScheme={book.isRead ? 'yellow' : 'green'}
              variant="outline"
            >
              Mark as {book.isRead ? 'Unread' : 'Read'}
            </Button>
            <IconButton
              icon={<DeleteIcon />}
              onClick={() => dispatch(deleteBook(book.id))}
              colorScheme="red"
              aria-label="Delete book"
            />
          </ButtonGroup>
        </CardFooter>
      </Card>
      
      <BookDetails book={book} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default BookItem;
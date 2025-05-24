import { Checkbox, Flex, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <Flex
      align="center"
      p={3}
      bg="gray.50"
      borderRadius="md"
      mb={2}
      _hover={{ bg: 'gray.100' }}
    >
      <Checkbox
        isChecked={todo.status}
        onChange={() => onToggle(todo.id)}
        mr={3}
        colorScheme="green"
      />
      <Text
        flex={1}
        textDecoration={todo.status ? 'line-through' : 'none'}
        color={todo.status ? 'gray.500' : 'inherit'}
      >
        {todo.title}
      </Text>
      <IconButton
        icon={<DeleteIcon />}
        onClick={() => onDelete(todo.id)}
        colorScheme="red"
        aria-label="Delete todo"
      />
    </Flex>
  );
};

export default TodoItem;
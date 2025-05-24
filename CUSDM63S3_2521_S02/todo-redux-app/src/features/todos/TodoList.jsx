import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, toggleTodo, deleteTodo } from './todosSlice';
import TodoItem from '../../components/TodoItem';
import { VStack, Text, Box } from '@chakra-ui/react';

const TodoList = () => {
  // Get todos from Redux store
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  // Handle toggle completion status
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  // Handle delete todo
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box width="100%">
      {todos.length === 0 ? (
        <Text textAlign="center" color="gray.500" py={4}>
          No todos yet. Add one above!
        </Text>
      ) : (
        <VStack spacing={3} align="stretch" mt={4}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default TodoList;
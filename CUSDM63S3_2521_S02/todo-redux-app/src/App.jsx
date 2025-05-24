import { Box, Heading } from '@chakra-ui/react';
import AddTodo from './components/AddTodo';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <Box maxWidth="800px" margin="auto" p={4}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Todo List with Redux
      </Heading>
      <AddTodo />
      <TodoList />
    </Box>
  );
}

export default App;
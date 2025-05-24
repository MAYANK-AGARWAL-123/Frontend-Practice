import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { FormControl, FormLabel, Input, Button, Stack, Box, Heading } from '@chakra-ui/react';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real app, you would call your auth API here
    const userData = {
      user: {
        email: formData.email,
        name: isLogin ? null : formData.name
      },
      token: 'fake-jwt-token'
    };
    dispatch(setCredentials(userData));
    navigate('/');
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading as="h2" mb={4}>
        {isLogin ? 'Login' : 'Sign Up'}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          {!isLogin && (
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </FormControl>
          )}
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AuthForm;
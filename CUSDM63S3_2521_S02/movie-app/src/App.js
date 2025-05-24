import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Watchlist from './pages/Watchlist';
import Bookings from './pages/Bookings';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/watchlist" element={
              <ProtectedRoute>
                <Watchlist />
              </ProtectedRoute>
            } />
            <Route path="/bookings" element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
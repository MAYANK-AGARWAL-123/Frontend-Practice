import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentToken } from '../../features/auth/authSlice';

const ProtectedRoute = ({ children }) => {
  const token = useSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
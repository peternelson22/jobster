import { Navigate } from 'react-router-dom';
import { useUserSelector } from '../features/user/userSlice';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserSelector();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};
export default ProtectedRoute;

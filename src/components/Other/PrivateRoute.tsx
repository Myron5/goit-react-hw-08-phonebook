import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

interface IProps {
  component: React.ReactNode;
  redirectTo?: string;
  // [x: string]: any;
}

export const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : Component}</>;
};

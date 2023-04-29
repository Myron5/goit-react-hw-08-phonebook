import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

interface IProps {
  component: React.ReactNode;
  redirectTo?: string;
  restricted?: boolean;
  // [x: string]: any;
}

export const PublicRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = '/',
  restricted,
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = restricted && isLoggedIn;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : Component}</>;
};

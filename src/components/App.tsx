import 'react-toastify/dist/ReactToastify.css';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, PublicRoute, PrivateRoute } from './Other';
import { refreshUser } from 'redux/auth/operations';
import { useAppDispatch } from 'hooks';

import NotFound from 'pages/NotFound';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));
// const NotFound = lazy(() => import('pages/NotFound'));

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<HomePage />} />} />

        <Route
          path="/register"
          element={<PublicRoute component={<RegisterPage />} restricted />}
        />

        <Route
          path="/login"
          element={<PublicRoute component={<LoginPage />} restricted />}
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo={'/login'} component={<ContactsPage />} />
          }
        />
      </Route>

      <Route path="*" element={<PublicRoute component={<NotFound />} />} />
    </Routes>
  );
};

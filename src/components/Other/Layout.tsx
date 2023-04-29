import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { FooterTxt, Spinner } from 'components/Other';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <FooterTxt>
        Try Phonebook today and see how much easier managing your contacts can
        be!
      </FooterTxt>
      <ToastContainer position="bottom-right" newestOnTop />
    </div>
  );
};

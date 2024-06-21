import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import useRouteTitle from '@/hooks/useRouteTitle';

import Footer from '../footer';
import Header from '../header';
import DocumentTitle from '../helmet/DocumentTitle';

const MainLayout = () => {
  const title = useRouteTitle();
  return (
    <HelmetProvider>
      <Header />
      <main>
        <DocumentTitle title={title} />
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default MainLayout;

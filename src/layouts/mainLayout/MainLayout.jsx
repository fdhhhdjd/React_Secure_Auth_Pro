import React from 'react';

import { Outlet } from 'react-router-dom';

import useRouteTitle from '@/hooks/useRouteTitle';

import Footer from '../footer';
import Header from '../header';
import DocumentTitle from '../helmet/DocumentTitle';

const MainLayout = () => {
  const title = useRouteTitle();
  return (
    <React.Fragment>
      <Header />
      <main>
        <DocumentTitle title={title} />
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

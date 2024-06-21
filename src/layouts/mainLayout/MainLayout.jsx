import React from 'react';

import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/routes/lazyLoader';

const MainLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import useRouteTitle from '@/hooks/useRouteTitle';
import DocumentTitle from '@/layouts/helmet/DocumentTitle';

const App = () => {
  const title = useRouteTitle();
  return (
    <HelmetProvider>
      <DocumentTitle title={title} />
      <Outlet />
    </HelmetProvider>
  );
};

export default App;

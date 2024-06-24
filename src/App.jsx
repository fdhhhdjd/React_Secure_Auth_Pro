import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import useRouteTitle from '@/hooks/useRouteTitle';
import DocumentTitle from '@/layouts/helmet/DocumentTitle';
import { store } from '@/states/store';

const App = () => {
  const title = useRouteTitle();
  return (
    <Provider store={store}>
      <HelmetProvider>
        <DocumentTitle title={title} />
        <Outlet />
      </HelmetProvider>
    </Provider>
  );
};

export default App;

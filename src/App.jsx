import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalProvider from '@/contexts/globalProviders';
import useRouteTitle from '@/hooks/useRouteTitle';
import DocumentTitle from '@/layouts/helmet/DocumentTitle';
import { store } from '@/states/store';

const App = () => {
  const title = useRouteTitle();
  return (
    <Provider store={store}>
      <GlobalProvider>
        <HelmetProvider>
          <DocumentTitle title={title} />
          <ToastContainer />
          <Outlet />
        </HelmetProvider>
      </GlobalProvider>
    </Provider>
  );
};

export default App;

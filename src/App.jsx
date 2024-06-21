import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <HelmetProvider>
      <h1>App</h1>
      <Outlet />
    </HelmetProvider>
  );
};

export default App;

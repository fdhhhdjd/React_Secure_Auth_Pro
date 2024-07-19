import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Loader from '@/pages/loader';
import { router } from '@/routes/router';
import '@/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} fallbackElement={<Loader />} />
);

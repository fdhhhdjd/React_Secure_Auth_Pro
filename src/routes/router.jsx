import { createBrowserRouter } from 'react-router-dom';

import NotFound from '@/pages/notfound';
import {
  About,
  AboutCreate,
  AboutEdit,
  AboutLayout,
  Error5XX,
  Home,
  MainLayout,
  Profile,
  Unauthorized,
  User,
  UserLayout
} from '@/routes/lazyLoader';

import App from '@/App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error5XX />,
        children: [
          //* Home Page
          {
            index: true,
            element: <Home />,
            errorElement: <Error5XX />
          },
          //* User Page
          {
            path: 'user',
            element: <UserLayout />,
            errorElement: <Error5XX />,
            children: [
              {
                index: true,
                element: <User />
              },
              {
                path: ':id',
                element: <Profile />
              }
            ]
          },
          // * About Page
          {
            path: 'about',
            element: <AboutLayout />,
            errorElement: <Error5XX />,
            children: [
              {
                index: true,
                element: <About />
              },
              {
                path: 'create',
                element: <AboutCreate />
              },
              {
                path: 'edit/:id',
                element: <AboutEdit />
              }
            ]
          },

          //* Unauthorized Page
          {
            path: 'unauthorized',
            element: <Unauthorized />,
            errorElement: <Error5XX />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <Error5XX />
  }
];

const router = createBrowserRouter(routes);

export { router, routes };

import { createBrowserRouter } from 'react-router-dom';

import {
  About,
  Error5XX,
  Home,
  MainLayout,
  NotFound,
  Profile,
  User,
  UserLayout
} from '@/routes/lazyLoader';

const routes = [
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
        element: <About />,
        errorElement: <Error5XX />
      },
      {
        path: '*',
        element: <NotFound />,
        errorElement: <Error5XX />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export { router, routes };

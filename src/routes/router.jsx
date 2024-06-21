import { createBrowserRouter } from 'react-router-dom';

import NotFound from '@/pages/notfound';
import {
  DashBoardLayout,
  Dashboard,
  Error5XX,
  LayoutAuth,
  LayoutMain,
  Login,
  Profile,
  Unauthorized,
  User,
  UserCreate,
  UserDetail,
  UserEdit,
  UserLayout,
  Vehicle,
  VehicleCreate,
  VehicleDetail,
  VehicleEdit,
  VehicleLayout
} from '@/routes/lazyLoader';

import App from '@/App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LayoutMain />,
        errorElement: <Error5XX />,
        children: [
          //* Profile Page
          {
            index: true,
            element: <Profile />,
            errorElement: <Error5XX />
          },

          //* Dashboard Page
          {
            path: 'dashboard',
            element: <DashBoardLayout />,
            errorElement: <Error5XX />,
            children: [
              {
                index: true,
                element: <Dashboard />
              }
            ]
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
                element: <UserDetail />
              },
              {
                path: 'create',
                element: <UserCreate />
              },
              {
                path: 'edit/:id',
                element: <UserEdit />
              }
            ]
          },
          // * Vehicle Page
          {
            path: 'vehicle',
            element: <VehicleLayout />,
            errorElement: <Error5XX />,
            children: [
              {
                index: true,
                element: <Vehicle />
              },
              {
                path: ':id',
                element: <VehicleDetail />
              },
              {
                path: 'create',
                element: <VehicleCreate />
              },
              {
                path: 'edit/:id',
                element: <VehicleEdit />
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
      },
      {
        path: 'auth',
        element: <LayoutAuth />,
        errorElement: <Error5XX />,
        children: [
          {
            path: 'login',
            element: <Login />,
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

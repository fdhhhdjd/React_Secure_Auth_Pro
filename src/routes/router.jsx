import { createBrowserRouter } from 'react-router-dom';

import Profile from '@/pages/profile';
import {
  About,
  ChangePass,
  Contact,
  Dashboard,
  Error5XX,
  Forget,
  LayoutAuth,
  LayoutMain,
  NotFound,
  OTPCode,
  ResetPass,
  Settings,
  SignIn,
  SignUp,
  Unauthorized,
  UserLayout,
  Verify
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
            element: <Dashboard />,
            errorElement: <Error5XX />
          },
          {
            path: '/about',
            element: <About />,
            errorElement: <Error5XX />
          },
          {
            path: '/contact',
            element: <Contact />,
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
                element: <Profile />
              },
              {
                path: 'change-password',
                element: <ChangePass />
              },
              {
                path: 'settings',
                element: <Settings />
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
            path: 'sign-in',
            element: <SignIn />
          },
          {
            path: 'sign-up',
            element: <SignUp />
          },
          {
            path: 'forgot-password',
            element: <Forget />
          },
          {
            path: 'otp',
            element: <OTPCode />
          },
          {
            path: 'reset/password/:expired/:userId/:token',
            element: <ResetPass />
          },
          {
            path: 'verify/account/:email/:expired/:userId/:token',
            element: <Verify />
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

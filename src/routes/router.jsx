import { createBrowserRouter } from 'react-router-dom';

import {
  About,
  ChangePass,
  Contact,
  DashBoardLayout,
  Dashboard,
  Error5XX,
  Forget,
  LayoutAuth,
  LayoutMain,
  NotFound,
  OTPCode,
  Profile,
  ResetPass,
  SignIn,
  SignUp,
  Unauthorized,
  User,
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
            element: <Profile />,
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
                path: 'change-password',
                element: <ChangePass />
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

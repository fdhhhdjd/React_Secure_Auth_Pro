import { createBrowserRouter } from 'react-router-dom';

import {
  About,
  AboutCreate,
  AboutEdit,
  AboutLayout,
  Error5XX,
  Home,
  MainLayout,
  NotFound,
  Profile,
  User,
  UserLayout
} from '@/routes/lazyLoader';

// const AboutPageWithAccess = WithAccessRolePermission(About, [PERMISSIONS.GET]);
// const CreateWithAccess = WithAccessRolePermission(Create, [PERMISSIONS.ADD]);
// const EditWithAccess = WithAccessRolePermission(Edit, [PERMISSIONS.EDIT]);

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

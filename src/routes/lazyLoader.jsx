import { lazy } from 'react';

import withSuspense from '@/hocs/withSuspense';
import {
  AboutCreateWithPermission,
  AboutEditWithPermission,
  AboutWithAccess,
  AboutWithPermission
} from '@/routes/guards';

//* LAYOUT
export const MainLayout = withSuspense(
  lazy(() => import('@/layouts/mainLayout/MainLayout'))
);
export const UserLayout = withSuspense(
  lazy(() => import('@/layouts/userLayout/UserLayout'))
);

export const AboutLayout = withSuspense(AboutWithAccess);

//* HOME
export const Home = withSuspense(lazy(() => import('@/pages/home')));

//* USER
export const User = withSuspense(lazy(() => import('@/pages/user')));
export const Profile = withSuspense(lazy(() => import('@/pages/user/profile')));

//* ABOUT
export const About = withSuspense(AboutWithPermission);
export const AboutCreate = withSuspense(AboutCreateWithPermission);
export const AboutEdit = withSuspense(AboutEditWithPermission);

//* NOT FOUND
export const NotFound = withSuspense(lazy(() => import('@/pages/notfound')));

//* ERROR
export const Error5XX = withSuspense(lazy(() => import('@/pages/error')));

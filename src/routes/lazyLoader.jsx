import { lazy } from 'react';

import withSuspense from '@/hocs/withSuspense';

// Lazy load the layouts and pages
export const MainLayout = withSuspense(
  lazy(() => import('@/layouts/mainLayout/MainLayout'))
);
export const UserLayout = withSuspense(
  lazy(() => import('@/layouts/userLayout/UserLayout'))
);
export const Home = withSuspense(lazy(() => import('@/pages/home')));
export const About = withSuspense(lazy(() => import('@/pages/about')));
export const User = withSuspense(lazy(() => import('@/pages/user')));
export const Profile = withSuspense(lazy(() => import('@/pages/user/profile')));
export const NotFound = withSuspense(lazy(() => import('@/pages/notfound')));
export const Error5XX = withSuspense(lazy(() => import('@/pages/error')));

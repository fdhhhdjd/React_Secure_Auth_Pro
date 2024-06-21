import { lazy } from 'react';

import withSuspense from '@/hocs/withSuspense';
import {
  AboutCreateWithPermission,
  AboutEditWithPermission,
  AboutWithAccess,
  AboutWithPermission,
  MainLayoutWithAccessToken,
  MainLayoutWithAuth
} from '@/routes/guards';

//* LAYOUT
export const LayoutMain = withSuspense(MainLayoutWithAccessToken);

export const LayoutAuth = withSuspense(MainLayoutWithAuth);

export const UserLayout = withSuspense(
  lazy(() => import('@/layouts/mainLayout/userLayout/UserLayout'))
);

export const AboutLayout = withSuspense(AboutWithAccess);

export const Header = withSuspense(lazy(() => import('@/layouts/header')));
export const Footer = withSuspense(lazy(() => import('@/layouts/footer')));

//* HOME
export const Home = withSuspense(lazy(() => import('@/pages/home')));

//* USER
export const User = withSuspense(lazy(() => import('@/pages/user')));
export const Profile = withSuspense(lazy(() => import('@/pages/user/profile')));

//* ABOUT
export const About = withSuspense(AboutWithPermission);
export const AboutCreate = withSuspense(AboutCreateWithPermission);
export const AboutEdit = withSuspense(AboutEditWithPermission);

//* AUTH
export const Login = withSuspense(lazy(() => import('@/pages/auth/login')));

//* UNAUTHORIZED
export const Unauthorized = withSuspense(
  lazy(() => import('@/pages/unauthorized'))
);

//* NOT FOUND
export const NotFound = withSuspense(lazy(() => import('@/pages/notfound')));

//* ERROR
export const Error5XX = withSuspense(lazy(() => import('@/pages/error')));

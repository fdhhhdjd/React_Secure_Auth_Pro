import { lazy } from 'react';

import withSuspense from '@/hocs/withSuspense';
import {
  ChangePassWithPermission,
  DashBoardWithAccess,
  DashBoardWithPermission,
  MainLayoutWithAccessToken,
  MainLayoutWithAuth,
  UserWithAccess,
  UserWithPermission
} from '@/routes/guards';

//* LAYOUT
export const LayoutMain = withSuspense(MainLayoutWithAccessToken);

export const LayoutAuth = withSuspense(MainLayoutWithAuth);

export const Header = withSuspense(lazy(() => import('@/layouts/header')));
export const Footer = withSuspense(lazy(() => import('@/layouts/footer')));

//* Dashboard
export const DashBoardLayout = withSuspense(DashBoardWithAccess);
export const Dashboard = withSuspense(DashBoardWithPermission);
export const About = withSuspense(lazy(() => import('@/pages/about')));
export const Contact = withSuspense(lazy(() => import('@/pages/contact')));

//* USER
export const UserLayout = withSuspense(UserWithAccess);
export const User = withSuspense(UserWithPermission);
export const ChangePass = withSuspense(ChangePassWithPermission);

//* PROFILE
export const Profile = withSuspense(lazy(() => import('@/pages/profile')));

//* AUTH
export const SignIn = withSuspense(lazy(() => import('@/pages/auth/sign-in')));
export const SignUp = withSuspense(lazy(() => import('@/pages/auth/sign-up')));
export const Forget = withSuspense(lazy(() => import('@/pages/auth/forget')));
export const OTPCode = withSuspense(lazy(() => import('@/pages/auth/otp')));
export const ResetPass = withSuspense(
  lazy(() => import('@/pages/auth/reset-password'))
);
export const Verify = withSuspense(lazy(() => import('@/pages/auth/verify')));

//* UNAUTHORIZED
export const Unauthorized = withSuspense(
  lazy(() => import('@/pages/unauthorized'))
);

//* NOT FOUND
export const NotFound = withSuspense(lazy(() => import('@/pages/notfound')));

//* ERROR
export const Error5XX = withSuspense(lazy(() => import('@/pages/error')));

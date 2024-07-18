import { lazy } from 'react';

import withSuspense from '@/hocs/withSuspense';
import {
  DashBoardWithAccess,
  DashBoardWithPermission,
  MainLayoutWithAccessToken,
  MainLayoutWithAuth,
  UserCreateWithPermission,
  UserDetailEditWithPermission,
  UserEditWithPermission,
  UserWithAccess,
  UserWithPermission,
  VehicleCreateWithPermission,
  VehicleDetailEditWithPermission,
  VehicleEditWithPermission,
  VehicleWithAccess,
  VehicleWithPermission
} from '@/routes/guards';

//* LAYOUT
export const LayoutMain = withSuspense(MainLayoutWithAccessToken);

export const LayoutAuth = withSuspense(MainLayoutWithAuth);

export const Header = withSuspense(lazy(() => import('@/layouts/header')));
export const Footer = withSuspense(lazy(() => import('@/layouts/footer')));

//* Dashboard
export const DashBoardLayout = withSuspense(DashBoardWithAccess);
export const Dashboard = withSuspense(DashBoardWithPermission);

//* USER
export const UserLayout = withSuspense(UserWithAccess);
export const User = withSuspense(UserWithPermission);
export const UserDetail = withSuspense(UserDetailEditWithPermission);
export const UserCreate = withSuspense(UserCreateWithPermission);
export const UserEdit = withSuspense(UserEditWithPermission);

//* PROFILE
export const Profile = withSuspense(lazy(() => import('@/pages/profile')));

//* VEHICLE
export const VehicleLayout = withSuspense(VehicleWithAccess);
export const Vehicle = withSuspense(VehicleWithPermission);
export const VehicleDetail = withSuspense(VehicleDetailEditWithPermission);
export const VehicleCreate = withSuspense(VehicleCreateWithPermission);
export const VehicleEdit = withSuspense(VehicleEditWithPermission);

//* AUTH
export const SignIn = withSuspense(lazy(() => import('@/pages/auth/sign-in')));
export const SignUp = withSuspense(lazy(() => import('@/pages/auth/sign-up')));
export const Forget = withSuspense(lazy(() => import('@/pages/auth/forget')));
export const OTPCode = withSuspense(lazy(() => import('@/pages/auth/otp')));

//* UNAUTHORIZED
export const Unauthorized = withSuspense(
  lazy(() => import('@/pages/unauthorized'))
);

//* NOT FOUND
export const NotFound = withSuspense(lazy(() => import('@/pages/notfound')));

//* ERROR
export const Error5XX = withSuspense(lazy(() => import('@/pages/error')));

import { lazy } from 'react';

import WithAccessNotToken from '@/guards/withAccesNotToken';
import WithAccessRolePermission from '@/guards/withAccessPermistion';
import WithAccessRoleRole from '@/guards/withAccessRole';
import WithAccessToken from '@/guards/withAccesToken';

import { PERMISSIONS, ROLES } from '@/constants';
//* APP MAIN
export const MainLayoutWithAccessToken = WithAccessToken(
  lazy(() => import('@/layouts/mainLayout/MainLayout'))
);

export const MainLayoutWithAuth = WithAccessNotToken(
  lazy(() => import('@/layouts/mainAuth/MainAuth'))
);
//* DASHBOARD
export const DashBoardWithAccess = WithAccessRoleRole(
  lazy(() => import('@/layouts/mainLayout/dashBoardLayout/DashBoardLayout')),
  [ROLES.ADMIN]
);

export const DashBoardWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/dashboard')),
  [PERMISSIONS.GET]
);

//* USER
export const UserWithAccess = WithAccessRoleRole(
  lazy(() => import('@/layouts/mainLayout/userLayout/UserLayout')),
  [ROLES.ADMIN, ROLES.STAFF]
);

export const UserWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/user')),
  [PERMISSIONS.GET]
);

export const ChangePassWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/user/change-password')),
  [PERMISSIONS.GET]
);

export const UserCreateWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/user/create')),
  [PERMISSIONS.ADD]
);

export const UserEditWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/user/edit')),
  [PERMISSIONS.EDIT]
);

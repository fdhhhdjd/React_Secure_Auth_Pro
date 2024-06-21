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

//* Vehicle
export const VehicleWithAccess = WithAccessRoleRole(
  lazy(() => import('@/layouts/mainLayout/VehicleLayout/VehicleLayout')),
  [ROLES.ADMIN, ROLES.STAFF]
);

export const VehicleWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/vehicle')),
  [PERMISSIONS.GET]
);

export const VehicleDetailEditWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/vehicle/detail')),
  [PERMISSIONS.GET]
);

export const VehicleCreateWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/vehicle/create/index')),
  [PERMISSIONS.ADD]
);

export const VehicleEditWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/vehicle/edit')),
  [PERMISSIONS.EDIT]
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

export const UserDetailEditWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/user/detail')),
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

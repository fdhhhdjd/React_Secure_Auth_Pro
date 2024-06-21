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

//* ABOUT
export const AboutWithAccess = WithAccessRoleRole(
  lazy(() => import('@/layouts/mainLayout/mainAbout/AboutLayout')),
  [ROLES.ADMIN, ROLES.STAFF]
);

export const AboutWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/about')),
  [PERMISSIONS.GET]
);

export const AboutCreateWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/about/add/index')),
  [PERMISSIONS.ADD]
);

export const AboutEditWithPermission = WithAccessRolePermission(
  lazy(() => import('@/pages/about/edit')),
  [PERMISSIONS.EDIT]
);

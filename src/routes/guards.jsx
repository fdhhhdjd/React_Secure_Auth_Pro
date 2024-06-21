import { lazy } from 'react';

import WithAccessRolePermission from '@/guards/withAccessPermistion';
import WithAccessRoleRole from '@/guards/withAccessRole';

import { PERMISSIONS, ROLES } from '@/constants';

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

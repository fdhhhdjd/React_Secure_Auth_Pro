import { Navigate } from 'react-router-dom';

import { PERMISSIONS, ROLES } from '@/constants';
import { checkPermissions } from '@/helpers';

const WithAccessRolePermission = (
  WrappedComponent,
  requiredPermissions = []
) => {
  return props => {
    const user = {
      role: ROLES.STAFF,
      permissions: [PERMISSIONS.GET, PERMISSIONS.ADD]
    };

    // Check if the user's permissions are allowed
    const permissionsAllowed = checkPermissions(
      user.permissions,
      requiredPermissions
    );

    if (!permissionsAllowed) {
      console.error('Permissions not allowed');
      return <Navigate to='/unauthorized' />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAccessRolePermission;

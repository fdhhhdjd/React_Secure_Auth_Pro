import { Navigate } from 'react-router-dom';

import { PERMISSIONS, ROLES } from '@/constants';
import { checkRole } from '@/helpers';

const WithAccessRoleRole = (WrappedComponent, requiredRoles = []) => {
  return props => {
    const userRole = {
      role: ROLES.STAFF,
      permissions: [PERMISSIONS.GET, PERMISSIONS.ADD]
    };

    const roleAllowed = checkRole(userRole.role, requiredRoles);

    if (!roleAllowed) {
      return <Navigate to='/unauthorized' />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithAccessRoleRole;

import { PERMISSIONS, ROLES } from '@/constants';
import { checkRole } from '@/helpers';

const WithAccessRoleRole = (WrappedComponent, requiredRoles = []) => {
  return props => {
    const userRole = {
      role: ROLES.ADMIN,
      permissions: [PERMISSIONS.GET, PERMISSIONS.ADD]
    };

    const roleAllowed = checkRole(userRole.role, requiredRoles);

    if (!roleAllowed) {
      return console.info('Role not allowed');
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithAccessRoleRole;

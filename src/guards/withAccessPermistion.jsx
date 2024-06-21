import { PERMISSIONS, ROLES } from '@/constants';
import { checkPermissions } from '@/helpers';

const WithAccessRolePermission = (
  WrappedComponent,
  requiredPermissions = []
) => {
  return props => {
    const user = {
      role: ROLES.STAFF,
      permissions: [PERMISSIONS.GET, PERMISSIONS.ADD, PERMISSIONS.EDIT] // Thay đổi để lấy quyền của người dùng thực tế
    };

    // Check if the user's permissions are allowed
    const permissionsAllowed = checkPermissions(
      user.permissions,
      requiredPermissions
    );

    if (!permissionsAllowed) {
      return console.error('Permissions not allowed');
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAccessRolePermission;

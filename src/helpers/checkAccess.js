/**
 * Checks if a user has the required role.
 *
 * @param {string} userRole - The role of the user.
 * @param {Array<string>} requiredRoles - The required roles.
 * @returns {boolean} - True if the user has the required role, false otherwise.
 */
export const checkRole = (userRole, requiredRoles) =>
  requiredRoles.includes(userRole);

/**
 * Checks if a user has the required permissions.
 *
 * @param {Array<string>} userPermissions - The permissions of the user.
 * @param {Array<string>} requiredPermissions - The required permissions.
 * @returns {boolean} - True if the user has at least one of the required permissions, false otherwise.
 */
export const checkPermissions = (userPermissions, requiredPermissions) => {
  return requiredPermissions.some(permission =>
    userPermissions.includes(permission)
  );
};

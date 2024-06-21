/**
 * Generates a random device ID of the specified length.
 *
 * @param {number} length - The length of the device ID to generate.
 * @returns {string} The randomly generated device ID.
 */
export const generateDeviceId = length => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

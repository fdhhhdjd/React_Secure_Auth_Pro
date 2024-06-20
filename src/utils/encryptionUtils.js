import CryptoJS from 'crypto-js';

import { ENV_KEYS } from '@/configs';

/**
 * Decrypts the stored encrypted value using the secret key.
 * @param {string} storedEncryptedValue - The encrypted value to be decrypted.
 * @returns {string} - The decrypted value.
 */
export const decryptAndRetrieveKey = (storedEncryptedValue) => {
  const decryptedValue = CryptoJS.AES.decrypt(
    storedEncryptedValue,
    ENV_KEYS.SECRET_KEY,
  ).toString(CryptoJS.enc.Utf8);
  return decryptedValue;
};

/**
 * Encrypts the given value using AES encryption and the SECRET_KEY.
 * @param {string} value - The value to be encrypted.
 * @returns {string} - The encrypted value.
 */
export const encryptAndStoreKey = (value) => {
  const encryptedValue = CryptoJS.AES.encrypt(
    value,
    ENV_KEYS.SECRET_KEY,
  ).toString();
  return encryptedValue;
};

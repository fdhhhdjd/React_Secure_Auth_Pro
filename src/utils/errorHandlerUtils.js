/* eslint-disable no-restricted-imports */
import { showToastError } from './toastUtils';

export const handleError = (error, customMessage = 'An error occurred') => ({
  errorMessage: customMessage,
  originalError: error?.response?.data
});

export const handleErrorCode = errorCode => {
  switch (errorCode) {
    case 5005:
      showToastError('You have been blocked!');
      break;
    case 12006:
      showToastError('You not open tow factor!');
      break;
    case 12008:
      break;
    case 12000:
      showToastError('Email invalid!');
      break;
    case 15001:
      showToastError('Email or password invalid!');
      break;
    case 16000:
      showToastError('OTP invalid!');
      break;
    default:
      showToastError('Server busy');
  }
};

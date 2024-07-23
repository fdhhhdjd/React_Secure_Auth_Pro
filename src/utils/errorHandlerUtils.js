/* eslint-disable no-restricted-imports */
import { showToastError } from './toastUtils';

export const handleError = (error, customMessage = 'An error occurred') => ({
  errorMessage: customMessage,
  originalError: error?.response?.data
});

export const handleErrorCode = errorCode => {
  switch (errorCode) {
    case 3000:
      showToastError('Email is invalid!');
      break;
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
    case 12002:
      showToastError('Email or password invalid!');
      break;
    case 15005:
      showToastError('This password has been changed!');
      break;
    case 16000:
      showToastError('OTP invalid!');
      break;
    default:
      showToastError('Server busy');
  }
};

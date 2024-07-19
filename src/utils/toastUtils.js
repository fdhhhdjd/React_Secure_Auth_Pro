import { toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

export const showToastSuccess = message => {
  toast.success(message, defaultOptions);
};

export const showToastError = message => {
  toast.error(message, defaultOptions);
};

export const showToastWarning = message => {
  toast.warn(message, defaultOptions);
};

export const showToastInfo = message => {
  toast.info(message, defaultOptions);
};

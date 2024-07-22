import { HttpStatusCode } from '@/constants';

export const Redirect = rs => {
  if (rs?.payload?.status === HttpStatusCode.OK) {
    return (window.location.href = '/');
  }

  return null;
};

import { typeGender } from '@/constants';

export const convertGender = type => {
  if (type === typeGender.female) {
    return 'Female';
  }
  return 'Male';
};

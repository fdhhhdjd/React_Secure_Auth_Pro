import { TITLE_CONSTANTS } from '@/constants/titleConstants';

const routeTitles = [
  //* DASHBOARD
  { pattern: /^\/dashboard$/, title: TITLE_CONSTANTS.DASHBOARD },

  //* PROFILE
  { pattern: /^\/$/, title: TITLE_CONSTANTS.PROFILE },

  //* Auth
  { pattern: /^\/auth$/, title: TITLE_CONSTANTS.AUTH },
  {
    pattern: /^\/auth\/(\d+)$/,
    title: id => `${TITLE_CONSTANTS.AUTH} | ${id}`
  },
  {
    pattern: /^\/auth\/sign-up$/,
    title: `${TITLE_CONSTANTS.AUTH} | Sign Up`
  },
  {
    pattern: /^\/auth\/sign-in$/,
    title: `${TITLE_CONSTANTS.AUTH} | Sign In`
  },
  {
    pattern: /^\/auth\/forgot-password$/,
    title: `${TITLE_CONSTANTS.AUTH} | Forgot Password`
  },
  {
    pattern: /^\/auth\/otp$/,
    title: `${TITLE_CONSTANTS.AUTH} | OTP Code`
  },
  {
    pattern: /^\/user\/create$/,
    title: `${TITLE_CONSTANTS.USER} | Create`
  },
  {
    pattern: /^\/user\/edit\/(\d+)$/,
    title: id => `${TITLE_CONSTANTS.USER} | Edit | ${id}`
  },
  { pattern: /.*/, title: TITLE_CONSTANTS.NOTFOUND }
];

export default routeTitles;

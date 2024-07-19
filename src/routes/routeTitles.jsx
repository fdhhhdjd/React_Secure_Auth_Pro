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
    pattern: /^\/auth\/reset-password$/,
    title: `${TITLE_CONSTANTS.AUTH} | Reset Password`
  },
  {
    pattern: /^\/auth\/otp$/,
    title: `${TITLE_CONSTANTS.AUTH} | OTP Code`
  },
  {
    pattern: /^\/user\/reset-password$/,
    title: `${TITLE_CONSTANTS.USER} | Reset Pass`
  },
  { pattern: /.*/, title: TITLE_CONSTANTS.NOTFOUND }
];

export default routeTitles;

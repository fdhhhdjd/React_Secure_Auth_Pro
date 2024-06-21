import { TITLE_CONSTANTS } from '@/constants/titleConstants';

const routeTitles = [
  { pattern: /^\/$/, title: TITLE_CONSTANTS.HOME },
  { pattern: /^\/user$/, title: TITLE_CONSTANTS.USER },
  {
    pattern: /^\/user\/(\d+)$/,
    title: id => `${TITLE_CONSTANTS.USER} | ${id}`
  },
  { pattern: /^\/about$/, title: TITLE_CONSTANTS.ABOUT },

  { pattern: /.*/, title: TITLE_CONSTANTS.NOTFOUND }
];

export default routeTitles;

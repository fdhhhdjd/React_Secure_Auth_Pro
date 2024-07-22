/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useDispatch } from 'react-redux';

import { getProfile } from '@/features/users/userThunk';

import { USER_KEYS } from '@/configs';
import { getItem } from '@/utils';

/**
 * GlobalProvider component provides a global context for its children.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children components.
 * @returns {JSX.Element} The rendered GlobalProvider component.
 */
export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const data = React.useMemo(() => ({}), []);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const userId = getItem(USER_KEYS.USER_ID);
    if (userId) {
      dispatch(
        getProfile({
          userId
        })
      );
    }
  }, []);

  GlobalContext.displayName = 'globalProviderContext';

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;

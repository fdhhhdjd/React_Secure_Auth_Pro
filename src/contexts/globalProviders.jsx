/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

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

  GlobalContext.displayName = 'globalProviderContext';

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;

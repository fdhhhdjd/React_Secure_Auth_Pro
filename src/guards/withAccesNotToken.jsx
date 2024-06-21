import { Navigate } from 'react-router-dom';

import { USER_KEYS } from '@/configs';
import { getItem } from '@/utils';

const WithAccessNotToken = WrappedComponent => {
  return props => {
    const encryptedToken = getItem(USER_KEYS.USER_TOKEN);

    if (encryptedToken) {
      return <Navigate to='/' />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAccessNotToken;

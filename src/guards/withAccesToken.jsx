import { Navigate } from 'react-router-dom';

import { RoutePaths, USER_KEYS } from '@/configs';
import { getItem } from '@/utils';

const WithAccessToken = WrappedComponent => {
  return props => {
    const encryptedToken = getItem(USER_KEYS.USER_TOKEN);

    if (!encryptedToken) {
      return <Navigate to={RoutePaths.AUTH.SIGN_IN} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAccessToken;

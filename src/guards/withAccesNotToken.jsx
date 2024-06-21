/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable react/function-component-definition */
import { Navigate, useLocation } from 'react-router-dom';

import { USER_KEYS } from '@/configs';
import { getItem } from '@/utils';

const WithAccessNotToken = WrappedComponent => {
  return function WithAccessNotTokenComponent(props) {
    const location = useLocation();
    const encryptedToken = getItem(USER_KEYS.USER_TOKEN);

    if (encryptedToken) {
      return <Navigate to='/' state={{ from: location }} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAccessNotToken;

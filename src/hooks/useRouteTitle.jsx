import React from 'react';

import { useLocation, useParams } from 'react-router-dom';

import routeTitles from '@/routes/routeTitles';

const useRouteTitle = () => {
  const location = useLocation();
  const params = useParams();

  React.useEffect(() => {
    const path = location.pathname;
    let title = 'Page';

    for (const route of routeTitles) {
      const match = path.match(route.pattern);
      if (match) {
        if (typeof route.title === 'function') {
          title = route.title(...match.slice(1));
        } else {
          title = route.title;
        }
        break;
      }
    }

    document.title = title;
  }, [location, params]);
};

export default useRouteTitle;

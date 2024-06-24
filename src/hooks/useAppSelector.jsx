import { useSelector } from 'react-redux';

const useAppSelector = selector => {
  return useSelector(selector);
};

export default useAppSelector;

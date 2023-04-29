import { useAppSelector } from './reduxHooks';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

import { userResponse } from 'redux/auth/types';

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);

  return { isLoggedIn, isRefreshing, user };
};

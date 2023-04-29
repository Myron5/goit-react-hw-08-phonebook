import { useAppSelector } from './reduxHooks';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useAppSelector(selectLoading);
  const isError = useAppSelector(selectError);
  const contacts = useAppSelector(selectContacts);

  return { isLoading, isError, contacts };
};

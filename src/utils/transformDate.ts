import { format } from 'date-fns';

export const transformDate = (txt: string): string => {
  const date = new Date(txt);
  const transformedDate = format(date, 'PPP');
  return transformedDate;
};

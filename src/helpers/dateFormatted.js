import { formatDistanceToNow, format } from 'date-fns';

export const formateDate = date => {
  return format(new Date(date), 'MM/dd/yyyy, h:mm a');
};

export default formateDate;

import { formatDistanceToNow, format } from 'date-fns';

const formateDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export default formateDateToNow;

import axios from 'axios';
export const getData = async (url) => {
  const res = await axios(url);
  const data = await res.data;
  return data;
};

export const truncateString = (str, len) => {
  if (len === null) len = 100;
  if (!str) str = '...';

  if (str.length > len) return str.substring(0, len) + '...';

  return str;
};

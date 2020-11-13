export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const truncateString = (str, len) => {
  if (len === null) len = 100;

  if (str.length > len) return str.substring(0, len) + '...';

  return str;
};

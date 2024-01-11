export const objToQs = (query?: Record<string, unknown>): string => {
  if (!query) {
    return '';
  }

  const q = query;

  const qs = Object.keys(q)
    .map((key: string) => {
      if (q[key] || q[key] === 0) {
        const value = encodeURIComponent(String(q[key]));
        return `${encodeURIComponent(key)}=${value}`;
      }
      return '';
    })
    .filter((val) => val)
    .join('&');
  return qs.length > 0 ? `?${qs}` : '';
};

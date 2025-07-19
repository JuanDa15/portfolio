export const getUrlWithBase = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const url = `${base}${path}`.replace(/\/{2,}/g, '/'); // Normalize double slashes
  console.log('Generated URL:', url);
  return url;
}
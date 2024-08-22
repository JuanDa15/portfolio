export const getSystemTheme = () => {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  return darkThemeMq.matches ? 'dark' : 'light';
};
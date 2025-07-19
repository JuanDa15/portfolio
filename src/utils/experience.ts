export const calculateExperience = (start = '2022-01-01') => {
  const initialDate = new Date(start);
  const today = new Date();

  const yearsDiff = (today.getFullYear() - initialDate.getFullYear()) * 12;
  const monthsDiff = (today.getMonth() - initialDate.getMonth());
  const diff = yearsDiff + monthsDiff;

  return (diff / 12).toFixed(0);
};
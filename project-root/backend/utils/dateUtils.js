export const formatDate = (date) => {
  return new Date(date).toISOString().split('T')[0];
};

export const getDateRange = (days = 30) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);
  return { startDate, endDate };
};

import axios from './apiClient';

// Fetch report by date range
export const fetchReport = async (startDate, endDate) => {
  const response = await axios.get('/reports', {
    params: { startDate, endDate },
  });
  return response.data;
};

// Generate a new report
export const generateReport = async (startDate, endDate) => {
  const response = await axios.post('/reports', { startDate, endDate });
  return response.data;
};

// Fetch report history
export const fetchReportHistory = async () => {
  const response = await axios.get('/reports/history');
  return response.data;
};

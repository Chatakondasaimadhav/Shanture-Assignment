import { useState, useEffect } from 'react';
import { fetchReport } from '../services/reportService';

const useReportData = (startDate, endDate) => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (startDate && endDate) {
      setLoading(true);
      fetchReport(startDate, endDate)
        .then((data) => setReport(data))
        .finally(() => setLoading(false));
    }
  }, [startDate, endDate]);

  return { report, loading };
};

export default useReportData;

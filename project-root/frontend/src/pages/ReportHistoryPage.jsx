import React, { useEffect, useState } from 'react';
import ReportTable from '../components/ReportTable';
import { fetchReportHistory } from '../services/reportService';

const ReportHistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchReportHistory().then(setHistory);
  }, []);

  return (
    <div>
      <h2>Report History</h2>
      <ReportTable data={history} />
    </div>
  );
};

export default ReportHistoryPage;

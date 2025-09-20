import React, { useState, useEffect } from 'react';
import DateRangePicker from '../components/DateRangePicker';
import AnalyticsCards from '../components/AnalyticsCards';
import RevenueChart from '../components/Charts/RevenueChart';
import RegionChart from '../components/Charts/RegionChart';
import CategoryChart from '../components/Charts/CategoryChart';
import { fetchReport } from '../services/reportService';

const DashboardPage = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    fetchReport().then(setReportData);
  }, []);

  return (
    <div>
      <h2>Sales Dashboard</h2>
      <DateRangePicker />
      {reportData && (
        <>
          <AnalyticsCards data={reportData} />
          <RevenueChart data={reportData.revenueTrend} />
          <RegionChart data={reportData.regionWiseStats} />
          <CategoryChart data={reportData.categoryWiseStats} />
        </>
      )}
    </div>
  );
};

export default DashboardPage;

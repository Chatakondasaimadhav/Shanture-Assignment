import React from 'react';
import ReactECharts from 'echarts-for-react';

const RevenueChart = ({ data }) => {
  // Example data format:
  // data = [{ date: '2025-09-01', revenue: 12000 }, { date: '2025-09-02', revenue: 15000 }, ...]

  const option = {
    title: {
      text: 'Revenue Over Time',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: ₹{c}',
    },
    xAxis: {
      type: 'category',
      data: data.map((item) => item.date),
      axisLabel: {
        rotate: 45,
      },
    },
    yAxis: {
      type: 'value',
      name: 'Revenue (₹)',
    },
    series: [
      {
        name: 'Revenue',
        type: 'line',
        data: data.map((item) => item.revenue),
        smooth: true,
        lineStyle: {
          color: '#007bff',
          width: 3,
        },
        itemStyle: {
          color: '#007bff',
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default RevenueChart;

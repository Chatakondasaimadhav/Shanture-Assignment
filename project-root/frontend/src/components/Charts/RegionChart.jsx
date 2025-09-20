import React from 'react';
import ReactECharts from 'echarts-for-react';

const RegionChart = ({ data }) => {
  // Example data format:
  // data = [{ region: 'North', revenue: 120000 }, { region: 'South', revenue: 95000 }, ...]

  const option = {
    title: {
      text: 'Sales by Region',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: ₹{c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Region Revenue',
        type: 'pie',
        radius: '60%',
        data: data.map((item) => ({
          name: item.region,
          value: item.revenue,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default RegionChart;

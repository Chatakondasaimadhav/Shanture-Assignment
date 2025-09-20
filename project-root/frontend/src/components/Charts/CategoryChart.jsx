import React from 'react';
import ReactECharts from 'echarts-for-react';

const CategoryChart = ({ data }) => {
  // Example data format:
  // data = [{ category: 'Electronics', revenue: 120000 }, { category: 'Clothing', revenue: 95000 }, ...]

  const option = {
    title: {
      text: 'Sales by Category',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}: ₹{c}',
    },
    xAxis: {
      type: 'category',
      data: data.map((item) => item.category),
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
        type: 'bar',
        data: data.map((item) => item.revenue),
        itemStyle: {
          color: '#28a745',
        },
        barMaxWidth: 50,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default CategoryChart;

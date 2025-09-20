export const buildRevenueAggregation = (startDate, endDate) => [
  {
    $match: {
      orderDate: { $gte: new Date(startDate), $lte: new Date(endDate) },
    },
  },
  {
    $group: {
      _id: null,
      totalOrders: { $sum: 1 },
      totalRevenue: { $sum: '$totalAmount' },
    },
  },
];

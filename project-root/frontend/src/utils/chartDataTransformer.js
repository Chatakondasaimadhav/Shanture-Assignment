export const transformRevenueTrend = (report) =>
  report.revenueTrend.map((entry) => ({
    date: formatDate(entry.date),
    revenue: entry.revenue,
  }));

export const transformRegionStats = (report) =>
  report.regionWiseStats.map((r) => ({
    region: r._id,
    revenue: r.totalRevenue,
  }));

export const transformCategoryStats = (report) =>
  report.categoryWiseStats.map((c) => ({
    category: c._id,
    revenue: c.totalRevenue,
  }));

import Report from '../models/Report.js';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import Customer from '../models/Customer.js';

export const generateReport = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.body;

    // Aggregation: Total Orders & Revenue
    const orders = await Order.aggregate([
      {
        $match: {
          orderDate: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          totalRevenue: { $sum: '$totalAmount' },
        },
      },
    ]);

    const totalOrders = orders[0]?.totalOrders || 0;
    const totalRevenue = orders[0]?.totalRevenue || 0;
    const avgOrderValue = totalOrders ? totalRevenue / totalOrders : 0;

    // Aggregation: Top Products
    const topProducts = await Order.aggregate([
      { $unwind: '$products' },
      {
        $group: {
          _id: '$products.product',
          totalSold: { $sum: '$products.quantity' },
        },
      },
      { $sort: { totalSold: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: '_id',
          as: 'productDetails',
        },
      },
      { $unwind: '$productDetails' },
    ]);

    // Aggregation: Top Customers
    const topCustomers = await Order.aggregate([
      {
        $group: {
          _id: '$customer',
          totalSpent: { $sum: '$totalAmount' },
        },
      },
      { $sort: { totalSpent: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'customers',
          localField: '_id',
          foreignField: '_id',
          as: 'customerDetails',
        },
      },
      { $unwind: '$customerDetails' },
    ]);

    // Aggregation: Region-wise Stats
    const regionWiseStats = await Order.aggregate([
      {
        $group: {
          _id: '$region',
          totalRevenue: { $sum: '$totalAmount' },
          totalOrders: { $sum: 1 },
        },
      },
    ]);

    // Aggregation: Category-wise Stats
    const categoryWiseStats = await Order.aggregate([
      { $unwind: '$products' },
      {
        $lookup: {
          from: 'products',
          localField: 'products.product',
          foreignField: '_id',
          as: 'productDetails',
        },
      },
      { $unwind: '$productDetails' },
      {
        $group: {
          _id: '$productDetails.category',
          totalRevenue: { $sum: '$totalAmount' },
          totalOrders: { $sum: 1 },
        },
      },
    ]);

    const report = new Report({
      reportDate: new Date(),
      startDate,
      endDate,
      totalOrders,
      totalRevenue,
      avgOrderValue,
      topProducts,
      topCustomers,
      regionWiseStats,
      categoryWiseStats,
    });

    await report.save();
    res.status(201).json(report);
  } catch (error) {
    next(error);
  }
};

export const getReport = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
    const report = await Report.findOne({ startDate, endDate });
    res.json(report);
  } catch (error) {
    next(error);
  }
};

export const getReportHistory = async (req, res, next) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    next(error);
  }
};

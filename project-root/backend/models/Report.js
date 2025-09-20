import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  reportDate: Date,
  startDate: Date,
  endDate: Date,
  totalOrders: Number,
  totalRevenue: Number,
  avgOrderValue: Number,
  topProducts: Array,
  topCustomers: Array,
  regionWiseStats: Array,
  categoryWiseStats: Array,
}, { timestamps: true });

export default mongoose.model('Report', reportSchema);

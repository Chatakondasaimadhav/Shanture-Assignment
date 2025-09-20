import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  region: String,
  customerType: { type: String, enum: ['Retail', 'Wholesale'] },
});

export default mongoose.model('Customer', customerSchema);

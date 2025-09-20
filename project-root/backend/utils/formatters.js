export const formatTopProducts = (products) =>
  products.map((p) => ({
    name: p.productDetails.name,
    category: p.productDetails.category,
    totalSold: p.totalSold,
  }));

export const formatTopCustomers = (customers) =>
  customers.map((c) => ({
    name: c.customerDetails.name,
    email: c.customerDetails.email,
    totalSpent: c.totalSpent,
  }));

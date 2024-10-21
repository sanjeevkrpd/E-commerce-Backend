const mongoose = require('mongoose');

const dailyProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product Name is Required"]
  },
  productPrice: {
    type: Number,
    required: [true, "Price is Required"]
  },
  productQuantity: {
    type: Number,
    required: [true, "Product Quantity is Required"]
  },
  productImage: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  expDate: {
    type: Date,
    required: [true, "Expiry date required."]
  },
  productDescription: {
    type: String 
  }
});
const DailyProduct = mongoose.model('DailyProduct',dailyProductSchema);

module.exports = DailyProduct;
var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  product_Type: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
});

/**
 * use this set item for convert _id to id
 */
schema.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
  }
});

module.exports = mongoose.model('Product', schema);
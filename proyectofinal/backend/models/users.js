var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: Boolean, required: false },
  password: { type: String, required: true },
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

module.exports = mongoose.model('users', schema);
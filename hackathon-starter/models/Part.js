
const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  _id: { type: String, unique: true },
  partName: String,
  quantity: Number,
  description: String,
  price: Number,
  location: String
});

const Part = mongoose.model('Part', partSchema);

module.exports = Part;

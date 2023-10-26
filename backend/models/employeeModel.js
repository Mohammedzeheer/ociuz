const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  designation: String,
  address: String
});

module.exports = mongoose.model('Employee', employeeSchema);

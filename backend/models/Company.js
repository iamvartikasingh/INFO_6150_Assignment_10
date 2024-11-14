// models/Company.js

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        trim: true,
      },
    },
  ],
  location: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
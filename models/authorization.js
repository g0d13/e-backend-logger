const mongoose = require('mongoose');

const AuthorizationsSchema = new mongoose.Schema({
  application_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  },
  token: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date, default: Date.now
  }
});

module.exports = mongoose.model('Authorization', AuthorizationsSchema);
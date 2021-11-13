const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
  application_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  },
  type: {
    type: String,
    enum: ['error', 'info', 'warning'],
  },
  priority: {
    type: String,
    enum: ['lowest', 'low', 'medium', 'high', 'highest']
  },
  path: {
    type: String,
  },
  message: {
    type: String,
  },
  request: {
    type: mongoose.Mixed
  },
  response: {
    type: mongoose.Mixed
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Log', LogSchema);
const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
  {
    application_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
    type: {
      type: String,
      enum: ["error", "info", "warning"],
    },
    priority: {
      type: String,
      enum: ["lowest", "low", "medium", "high", "highest"],
    },
    path: {
      type: String,
    },
    message: {
      type: String,
    },
    request: {
      type: mongoose.Mixed,
    },
    response: {
      type: mongoose.Mixed,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
module.exports = mongoose.model("Log", LogSchema);
